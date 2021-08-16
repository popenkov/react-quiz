import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz' 



export default class Quiz extends Component {
 /*    constructor (props) {

    } */
    state = {
        results: {}, // [id]: 'success' 'error'
        activeQuestion: 0,
        answerState: null, // [id]: 'success' 'error'
        isFinished: false,
        quiz: [
            {
                question: 'What color is the sky?',
                rightAnswerId: 2,
                id: 1,
                answers: [
                    {text: 'Black', id: 1},
                    {text: 'Blue', id: 2},
                    {text: 'Purple', id: 3},
                    {text: 'Green', id: 4}
                ]
            },
            {
                question: 'What year was Saint-Petersburg founded?',
                rightAnswerId: 3,
                id: 2,
                answers: [
                    {text: '1700', id: 1},
                    {text: '1702', id: 2},
                    {text: '1703', id: 3},
                    {text: '1803', id: 4}
                ]
            }
        ]

    }



    onAnswerClickHandler = (answerId) => {
        if (this.state.answerState) {
            //Метод Object.keys() возвращает массив из собственных 
            //перечисляемых свойств переданного объекта
            const key = Object.keys(this.state.answerState)[0];
            //проверка чтобы не завершать игру несколькими кликами по правильному ответу старого вопроса
            if (this.state.answerState[key] === 'success') {
                return;
            }
        }

        const question = this.state.quiz[this.state.activeQuestion]
        const results = this.state.results

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) { //если объект пустой
                results[question.id] = 'success';
            } 
            this.setState({
                answerState: {[answerId]: 'success'} ,
                results
            })
            

            //чтобы в течение секунды показать, что ответ правильный
            const timeout = window.setTimeout(() => {
                //проверка, закончились ли вопросы
                if (this.isQuizFinished()) {
                    
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }

                window.clearTimeout(timeout);
            }, 1000)

        } else {
            results[question.id] = 'error';
            this.setState({
                answerState: {[answerId]: 'error'},
                results: results //или просто results
            })

        } 
    }

    startNewGame = () => {
        this.setState({
            results: {}, 
            activeQuestion: 0,
            answerState: null, 
            isFinished: false,
        })
    }

    isQuizFinished () {
        return this.state.activeQuestion + 1 === this.state.quiz.length;
    } 

    componentDidMount() {
        console.log('Quiz id = ', this.props.match.params.id)
        console.log(this.props)
    }

    render () {
        return (
            <div className={classes.Quiz}>
                
                <div className={classes.QuizWrapper}>
                    <h1>Please, answer the questions</h1>

                    {
                        this.state.isFinished 
                        ? <FinishedQuiz
                            results = {this.state.results}
                            quiz = {this.state.quiz}
                            startNewGame = {this.startNewGame}

                            />
                        : <ActiveQuiz 
                            quizLength = {this.state.quiz.length}
                            answers={this.state.quiz[this.state.activeQuestion].answers}
                            question={this.state.quiz[this.state.activeQuestion].question}
                            onAnswerClick = { this.onAnswerClickHandler}
                            answerNumber = {this.state.activeQuestion + 1}
                            state = {this.state.answerState}
                            />
                    }

                </div>
            </div>
        )
    }
}
import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'



export default class Quiz extends Component {
 /*    constructor (props) {

    } */
    state = {
        activeQuestion: 0,
        answerState: null,
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
                question: 'What year was founded Saint-Petersburg?',
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
        console.log('Answer ID: ', answerId)

        const question = this.state.quiz[this.state.activeQuestion]

        if (question.rightAnswerId === answerId) {
            this.setState({
                answerState: {[answerId]: 'success'} 
            })

            //чтобы в течение секунды показать, что ответ правильный
            const timeout = window.setTimeout(() => {
                //проверка, закончились ли вопросы
                if (this.isQuizFinished()) {
                    console.log('finished')
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }

                window.clearTimeout(timeout);
            }, 1000)

        } else {
            this.setState({
                answerState: {[answerId]: 'error'} 
            })

        } 
    }

    isQuizFinished () {
        return this.state.activeQuestion + 1 === this.state.quiz.length;
    }

    render () {
        return (
            <div className={classes.Quiz}>
                
                <div className={classes.QuizWrapper}>
                    <h1>Please, answer the questions</h1>
                    <ActiveQuiz 
                    quizLength = {this.state.quiz.length}
                    answers={this.state.quiz[this.state.activeQuestion].answers}
                    question={this.state.quiz[this.state.activeQuestion].question}
                    onAnswerClick = { this.onAnswerClickHandler}
                    answerNumber = {this.state.activeQuestion + 1}
                    state = {this.state.answerState}
                    />
                </div>
            </div>
        )
    }
}
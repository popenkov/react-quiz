import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz' 
import axios from '../../axios/axios-quiz';
import Loader from '../../components/UI/Loader/Loader';
import { connect } from 'react-redux'
import { fetchQuizById } from '../../store/actions/quiz'


class Quiz extends Component {

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
        this.props.fetchQuizById(this.props.match.params.id)
    }

    render () {
    
        return (
            <div className={classes.Quiz}>
                
                <div className={classes.QuizWrapper}>
                    <h1>Please, answer the questions</h1>
                    {
                    this.props.loading || !this.props.quiz
                        ? <Loader/> 
                        : this.props.isFinished 
                            ? <FinishedQuiz
                                results = {this.props.results}
                                quiz = {this.props.quiz}
                                startNewGame = {this.startNewGame}

                                />
                            : <ActiveQuiz 
                                answers={this.props.quiz[this.props.activeQuestion].answers}
                                question={this.props.quiz[this.props.activeQuestion].question}
                                onAnswerClick = { this.onAnswerClickHandler}
                                answerNumber = {this.props.activeQuestion + 1}
                                state = {this.props.answerState}
                                />
                    }
                 

                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        results: state.quiz.result, // [id]: 'success' 'error'
        activeQuestion: state.quiz.activeQuestion,
        answerState: state.quiz.answerState, // [id]: 'success' 'error'
        isFinished: state.quiz.isFinished,
        quiz: state.quiz.quiz,
        loading: state.quiz.loading
    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetchQuizById: id => dispatch(fetchQuizById(id)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
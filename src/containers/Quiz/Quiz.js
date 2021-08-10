import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'



export default class Quiz extends Component {
 /*    constructor (props) {

    } */
    state = {
        activeQuestion: 0,
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
                rightAnswerId: 2,
                id: 3,
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

        this.setState({
            activeQuestion: this.state.activeQuestion + 1
        })
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
                    />
                </div>
            </div>
        )
    }
}
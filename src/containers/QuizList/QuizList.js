import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import classes from './QuizList.module.css'
import axios from 'axios'

export default class QuizList extends Component {
    renderQuizes() {
        return [1, 2, 3].map((quiz, index) => {
            return (
                <li key={index}>
                    <NavLink
                    to={'/quiz/' + quiz}
                    >
                       Quiz {quiz}
                    </NavLink>
                </li>
            )
        })
    }
/* 
    componentDidMount () {
        axios.get('https://react-quiz-8bce4-default-rtdb.europe-west1.firebasedatabase.app/Quiz.json')//надо обязательно заканчивать JSON
            .then(answer => console.log(answer))
    } */

    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>Quiz List</h1>
                    <ul>
                        { this.renderQuizes() }
                    </ul>
                </div>
            </div>
        )
    }
}
import React from "react";
import classes from './FinishedQuiz.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCheck  } from '@fortawesome/free-solid-svg-icons'
import Button from "../UI/Button/Button";
import {Link} from 'react-router-dom'


const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total ++;
        } 

        return total;
    }, 0)


    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {props.quiz.map((quizItem, index) => {
                    const cls = [
                        classes.FontAwesomeIcon,
                        props.results[quizItem.id] === 'error'
                        ? classes.error
                        : classes.success
                    ]

                    const icon = props.results[quizItem.id] === 'error' ? faTimes : faCheck;

                    return (
                        <li key={index}>
                            <strong>{index+1}.</strong> &nbsp;
                            {quizItem.question}
                            <FontAwesomeIcon className={cls.join(' ')} icon={icon}/>
                        </li>
                    )
                })}
            </ul>
            
            
            <p>{successCount} of {props.quiz.length} correct answers</p>
            <div>
                <Button onClick={props.startNewGame} type='primary'>
                    Play again
                </Button>
                <Link to='/'>
                    <Button onClick={props.startNewGame} type='success'>
                        Go to tests list
                    </Button>
                </Link>
            </div>
        </div>
    )
}
export default FinishedQuiz
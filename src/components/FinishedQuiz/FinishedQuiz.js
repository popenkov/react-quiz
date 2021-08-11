import React from "react";
import classes from './FinishedQuiz.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCheck  } from '@fortawesome/free-solid-svg-icons'


const FinishedQuiz = props => {

    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                <li>
                    <strong>1.</strong>
                    How are you
                    <FontAwesomeIcon className={classes.FontAwesomeIcon + ` ${classes.error}`} icon={faTimes} />
                </li>
                <li>
                    <strong>2.</strong>
                    How are you
                    <FontAwesomeIcon className={classes.FontAwesomeIcon + ` ${classes.success}`} icon={faCheck} />
                </li>
            </ul>
            
            
            <p>4 of 5 correct answers</p>
            <button>Play again</button>
        </div>
    )
}
export default FinishedQuiz
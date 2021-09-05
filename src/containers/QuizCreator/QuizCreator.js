import React, {Component} from 'react'
import Button from '../../components/UI/Button/Button';
import classes from './QuizCreator.module.css'

export default class QuizCreator extends Component {
    submitHandler = evt => {
        evt.preventDefault();
    }

    addQuestionHandler = () => {

    }

    createQuizHandler = () => {

    }

    render() {
        return (
            <div className={classes.QuizCreator}>
                
                <div>
                    <h1>Create your quiz</h1>  

                    <form onSubmit={this.submitHandler}>
                        <input/>
                        <hr/>
                        <input/>
                        <input/>
                        <input/>
                        <input/>
                        

                        <select></select>
                        <Button
                            type='primary'
                            onClick={this.addQuestionHandler}
                            >
                            Add question
                        </Button>
                        <Button
                            type='success'
                            onClick={this.createQuizHandler}
                            >
                            Create quiz
                        </Button>
            
                    </form>
                </div>
            </div>
        )
    }
}
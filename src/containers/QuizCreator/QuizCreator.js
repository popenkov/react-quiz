import React, {Component} from 'react'
import Button from '../../components/UI/Button/Button';
import classes from './QuizCreator.module.css'
import {createControl} from '../../form/formFramework'
import Input from '../../components/UI/Input/Input';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

function createOptionControl(num) {
    return createControl({
        label: `Variant ${num}`,
        errorMessage:'Value couldn`t be empty',
        id: num
    }, {required: true})
}

function createFormControls() {
    return {
        question: createControl({
        label: 'Введите вопрос',
        errorMessage: 'Вопрос не может быть пустым'
      }, {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4),
    }
}

export default class QuizCreator extends Component {
    state = {
        quiz: [], //сюда будем добавлять объект вопроса.
        formControls: createFormControls()
        }
    
    submitHandler = evt => {
        evt.preventDefault();
    }

    addQuestionHandler = () => {
        //после добавиления вопроса надо обнулить форму, чтобы новый вопрос задавать с новыми данными.
    }

    createQuizHandler = () => {

    }
    changeHandler = (value, controlName) => {

    }
    renderControls() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control=this.state.formControls[controlName];
            return (
                <Auxiliary key={controlName + index}>
                    <Input
                        value={control.value}
                        required={control.required}
                        touched={control.touched}
                        valid={control.valid}
                        label={control.label}
                        shouldValidate= {!!control.validation}
                        errorMessage={control.errorMessage}
                        onChange={(event)=>{this.changeHandler(event.target.value, controlName)}}
                    />
                    {index === 0 ? <hr/> : null} 
                </Auxiliary>
            )
        })
    }
    render() {
        return (
            <div className={classes.QuizCreator}>
                
                <div>
                    <h1>Create your quiz</h1>  

                    <form onSubmit={this.submitHandler}>
                        {this.renderControls()}
                        

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
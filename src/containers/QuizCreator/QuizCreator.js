import React, {Component} from 'react'
import Button from '../../components/UI/Button/Button';
import classes from './QuizCreator.module.css'
import {createControl} from '../../form/formFramework'
import Input from '../../components/UI/Input/Input';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Select from '../../components/UI/Select/Select';

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
        rightAnswerId: 1,
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

    selectChangeHandler = evt => {
        this.setState({
            rightAnswerId: +evt.target.value
        })
    }
    render() {
        const select = <Select
        label="Choose right answer"
        value={this.state.rightAnswerId}
        onChange={this.selectChangeHandler}
        options ={[
            {text: 1, value: 1},
            {text: 2, value: 2},
            {text: 3, value: 3},
            {text: 4, value: 4},
        ]}
    />
        return (
            <div className={classes.QuizCreator}>
                
                <div>
                    <h1>Create your quiz</h1>  

                    <form onSubmit={this.submitHandler}>
                        {this.renderControls()}
                        
                        {select}

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
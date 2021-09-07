import React, {Component} from 'react'
import Button from '../../components/UI/Button/Button';
import classes from './QuizCreator.module.css'
import {createControl, validate, validateForm} from '../../form/formFramework'
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
        label: 'PLease enter your question',
        errorMessage: 'Question couldn`t be empty'
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
        isFormValid: false,
        rightAnswerId: 1,
        formControls: createFormControls()
        }
    
    submitHandler = evt => {
        evt.preventDefault(); 
    }

    addQuestionHandler = evt => {
        //после добавиления вопроса надо обнулить форму, чтобы новый вопрос задавать с новыми данными.
        evt.preventDefault();
        //нам надо сформировать объект из всех вопросов и сложить его в quiz
        const quiz = this.state.quiz.concat();//конкат без параметров возвращает копию массива
        const index = quiz.length +1;
        /* так как подобная запись слишком объемна, обращаемся к синтаксису деструктуризации
          answers: [
                {text: this.state.formControls.option1.value, id: this.state.formControls.option1.id},
            ]
             */
        const {question, option1, option2, option3, option4} = this.state.formControls;

        const questionItem = {
            question: question.value,
            id: index,
            rightAnswerId: this.state.rightAnswerId,
            answers: [
                {text: option1.value, id: option1.id},
                {text: option2.value, id: option2.id},
                {text: option3.value, id: option3.id},
                {text: option4.value, id: option4.id},
            ]
        }

        //теперь когда у нас есть массив ответов, нам надо просто добавить все в массив пуш
        quiz.push(questionItem);
        this.setState({
            quiz,
            isFormValid: false,
            rightAnswerId: 1,
            formControls: createFormControls()
        })
        
    }

    createQuizHandler = evt => {
        evt.preventDefault();
        console.log(this.state.quiz)

    }
    changeHandler = (value, controlName) => {
        const formControls = {...this.state.formControls}
        const control = {...formControls[controlName]}

        control.touched = true;
        control.value = value;
        control.valid = validate(control.value, control.validation)

        formControls[controlName] = control;
        this.setState({
            formControls,
            isFormValid: validateForm(formControls)
        })

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
                            disabled={!this.state.isFormValid}
                            >
                            Add question
                        </Button>
                        <Button
                            type='success'
                            onClick={this.createQuizHandler}
                            disabled={!this.state.quiz.length === 0}
                            >
                            Create quiz
                        </Button>
            
                    </form>
                </div>
            </div>
        )
    }
}
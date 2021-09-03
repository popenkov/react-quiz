import React, {Component} from 'react'
import classes from './Auth.module.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default class Auth extends Component {
    state = {
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Please enter valid email',
                valid: false, //базовое состояние контрола, но тогда ошибка будет всегда
                touched: false, // для этого стэйт, чтобы выводить ошибку, только если инпут в фокусе и введены неверные данные.
                validation: { //правила для валидации контрола
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                errorMessage: 'Please enter valid password',
                valid: false,
                touched: false,
                validation: { 
                    required: true,
                    minLength: 6
                }
            }
        }
    }

    loginHandler = () => {
        
    }

    registerHandler = () => {

    }

    submitHandler = evt => {
        evt.preventDefault();
    }

    validateControl = (value, validation) => {
        if(!validation) { // если параметров для валидации нет, то она пройдена
            return true;
        }

        let isValid = true; //по умолчанию все ок
        if (validation.required) {
            isValid = value.trim() !== '' && isValid; 
            //&& isValid - вернет фолс, если первая проверка фолс, а текущая тру.
        }

        if (validation.email) {
            //в гугле найти email js regex. перенес функцию наверх (или библиотека is js)
            isValid = validateEmail(value) && isValid;
        }

        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid; 
        }
        return isValid;
 
    }

    onChangeHandler = (event, controlName) => {
        //нельзя мутировать исходный стэйт. создаем копию formControls
        const formControls = {...this.state.formControls} // спрэд оператор делает независимый объект с копией. так стэйт точно не будет мутировать
        const control = {...formControls[controlName]} //копия текущего инпута (контрола)
        //теперь изменяем значения копии, чтобы потом через сетСтэйт изменить настоящий контрол
        control.value = event.target.value;
        control.touched = true;
        //функция валидации
        control.valid = this.validateControl(control.value, control.validation);

        formControls[controlName] = control;
        this.setState({
            formControls
        })
    }

    renderInputs = () => {
        const inputs = Object.keys(this.state.formControls).map((controlName, index) => {
            const control=this.state.formControls[controlName];
            return (
                <Input
                    key={controlName+index}
                    type={control.type}
                    value={control.value}
                    required={control.required}
                    touched={control.touched}
                    valid={control.valid}
                    label={control.label}
                    shouldValidate= {!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={(event)=>{this.onChangeHandler(event, controlName)}}
                />
            )
        })
        return inputs;
    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Authorisation</h1> 
                    
                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                        {this.renderInputs()}

                        <Button type='success' onClick={this.loginHandler}>Log in</Button>
                        <Button type='primary' onClick={this.registerHandler}>Register</Button>
                        
                    </form>
                </div> 
            </div>
        )
    }
}
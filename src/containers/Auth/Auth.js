import React, {Component} from 'react'
import classes from './Auth.module.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'

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
                    minLenth: 6
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
 
    }

    onChangeHandler = (event, controlName) => {
        console.log(`${controlName}: `, event.target.value)
        //нельзя мутировать исходный стэйт. создаем копию
        const formControls = {...this.state.formControls} // спрэд оператор делает независимый объект с копией. так стэйт точно не будет мутировать
        const control = {...formControls[controlName]}
        control.value = event.target.value;
        control.touched = true;
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
                    label={control.label}
                    shouldValidate= {!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={(event)=>{this.onChangeHandler(event, controlName)}}
                />
            )
        })
        console.log(inputs)
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
import React, {Component} from 'react'
import classes from './Auth.module.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'

export default class Auth extends Component {
    loginHandler = () => {
        
    }

    registerHandler = () => {

    }

    submitHandler = evt => {
        evt.preventDefault();
    }

    
    
    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Authorisation</h1> 
                    
                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                        <Input  label='Email' 

                        />
                        <Input  
                            label='Password' 
                            errorMessage = 'test'
                        />
                        

                        <Button type='success' onClick={this.loginHandler}>Log in</Button>
                        <Button type='primary' onClick={this.registerHandler}>Register</Button>
                        
                    </form>
                </div> 
            </div>
        )
    }
}
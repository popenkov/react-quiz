import React, {Component} from 'react'
import classes from './Drawer.module.css'
import BackDrop from '../../UI/BackDrop/BackDrop'
import { NavLink } from 'react-router-dom'


const links = [{to: '/', label: 'Quiz List', exact: true}, 
    {to: '/auth', label: 'Authorisation', exact: false}, 
    {to: '/quiz-creator', label: 'Create Quiz', exact: false}]



class Drawer extends Component {
    state = {
        isOpen: false
    }


    renderLinks () {

        return links.map((link, index) => {
                return (
                    <li key= {index}>
                        <NavLink 
                        to={link.to} 
                        exact={link.exact} 
                        activeClassName={classes.active}
                        onClick={this.props.onClose}>
                            {link.label}
                        </NavLink>
                    </li>
                )
            })        
    } 

    render() {
        const cls = [
            classes.Drawer,
        ]

        if (!this.props.isOpen) {
            cls.push(classes.close)
        }

        

        return (
            <>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen ? <BackDrop onClick={this.props.onClose}/> : null}
            </>            
        )
    }
}  

export default Drawer
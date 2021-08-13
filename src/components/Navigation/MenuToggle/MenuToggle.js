import React from 'react'
import classes from './MenuToggle.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

const MenuToggle = props => {
    const cls = [
        classes.MenuToggle
    ]

    let icon;
    if (props.isOpen) {
        icon = faTimes;
        cls.push(classes.open)
    } else {
        icon = faBars;
    }
    return (
        <FontAwesomeIcon 
            className={cls.join(' ')} 
            icon={icon}
            onClick={props.onToggle}
        />
    )
}

export default MenuToggle
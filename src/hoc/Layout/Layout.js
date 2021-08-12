import React, { Component } from "react"
import styles from './Layout.module.css'
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle"



export default class Layout extends Component {
    render () {
        return (
            //это корневой див всего приложения
            <div className={styles.Layout}>
                <MenuToggle />
                <main > 
                    {this.props.children}
                </main>
            </div>
        )
    }
}
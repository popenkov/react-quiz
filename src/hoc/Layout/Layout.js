import React, { Component } from "react"
import styles from './Layout.module.css'
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle"
import Drawer from "../../components/Navigation/Drawer/Drawer"




export default class Layout extends Component {
    state={
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    menuCloseHandler = () => {
        this.setState({
            menu: false
        })
    }



    render () {
        return (
            //это корневой див всего приложения
            <div className={styles.Layout}>

                <Drawer
                    isOpen = {this.state.menu}
                    onClose = {this.menuCloseHandler}
                />

                <MenuToggle 
                    onToggle ={this.toggleMenuHandler}
                    isOpen = {this.state.menu}
                />

  

                <main> 
                    {this.props.children}
                </main>
            </div>
        )
    }
}
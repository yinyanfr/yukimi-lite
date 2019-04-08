import React, { Component } from 'react';
import CC from "./CC"
import Me from "./Me"

import ico from "../high.png"


class Header extends Component {

    state = {
        burger: false,
        cc: false,
        me: false
    }

    onBurgerToggle = e => {
        e.preventDefault();
        this.setState(prev => (
            {
                burger: !prev.burger
            }
        ))
    }

    onCC = e => {
        e.preventDefault()
        this.setState(() => ({
            cc: true
        }))
    }

    onCCClose = e => {
        e.preventDefault()
        this.setState(() => ({
            cc: false
        }))
    }

    onMe = e => {
        e.preventDefault()
        this.setState(() => ({
            me: true
        })) 
    }

    onMeClose = e => {
        e.preventDefault()
        this.setState(() => ({
            me: false
        })) 
    }

    render(){
        return (
            <div>
            <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="#">
                        <img src={ico} alt="Listen, together" width="28" height="28" />
                    </a>
                    <span className="navbar-item">Piano</span>
                    <button
                        className={this.state.burger ? "button navbar-burger is-active" : "button navbar-burger"} 
                        onClick={this.onBurgerToggle}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div 
                    className={this.state.burger ? "navbar-menu is-active" : "navbar-menu"}
                >
                    <div className="navbar-end main-burger">
                        <a className="navbar-item" href="#" onClick={this.onMe}>About me</a>
                        <a className="navbar-item" href="#" onClick={this.onCC}>License</a>
                    </div>
                </div>
            </nav>

            <div className={this.state.cc ? "modal is-active" : "modal"}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">License</p>
                        <button className="delete" aria-label="close" onClick={this.onCCClose}></button>
                    </header>
                    <section className="modal-card-body">
                        <CC />
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success" onClick={this.onCCClose}>OK</button>
                    </footer>
                </div>
            </div>

            <div className={this.state.me ? "modal is-active" : "modal"}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">About Me</p>
                        <button className="delete" aria-label="close" onClick={this.onMeClose}></button>
                    </header>
                    <section className="modal-card-body">
                        <Me />
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success" onClick={this.onMeClose}>OK</button>
                    </footer>
                </div>
            </div>
            </div>
        )
    }
}

export default Header

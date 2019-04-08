import "babel-polyfill"

import React, {Component} from 'react';
import {render} from 'react-dom';
import Yukimi from "./Yukimi"

import "bulma/bulma.sass"
import "./yukimi.scss"

import yukimi from "./yukimi.png"

const app = document.getElementById("app")

const api = s => `http://piano.yinyan.fr/${s}`

class Main extends Component{

    state = {
        data: []
    }

    componentDidMount(){
        fetch(api("data"))
            .then(response => {
                if(response.status >= 400) return Promise.reject(response.text())
                return response.json()
            })
            .then(data => {
                this.setState(() => ({
                    data
                }))
            })
            .catch(err => {
                console.error(err)
            })
    }

    onYukimi = () => {
        window.scrollTo(0, 0)
    }

    render(){
        return (
            <div>
                <img src={yukimi} className="yukimi" onClick={this.onYukimi}/>
                <Yukimi data={this.state.data} />
            </div>
        )
    }
}

render(<Main />, app)

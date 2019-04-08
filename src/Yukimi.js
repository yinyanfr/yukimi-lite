import React, { Component } from 'react';
import Header from "./components/Header"
import Songlist from "./components/Songlist"

class Yukimi extends Component{

    render(){
        return (
            <div>
                <Header />
                <Songlist>{this.props.data}</Songlist>
            </div>
        )
    }
}

export default Yukimi

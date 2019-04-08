import React, { Component } from 'react';
import OneSong from "./OneSong"

class Songlist extends Component{

    state = {
        keyword: ""
    }

    input = e => {
        const {value} = e.target
        this.setState(() => ({
            keyword: value
        }))
    }

    render(){

        return (
            <div>
                <div className="field margin-top-ten">
                    <p className="control has-icons-left">
                        <input className="input is-rounded" type="text" placeholder="Search"
                        onChange={this.input}
                        value={this.state.value}
                        />
                        <span className="icon is-small is-left">
                        <i className="fa fa-search"></i>
                        </span>
                    </p>
                </div>
                {this.props.children.map((e, i) => (
                    <OneSong key={i}>{e}</OneSong>
                ))}
            </div>
        )
    }
}

export default Songlist

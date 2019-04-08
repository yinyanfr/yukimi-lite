import React, { Component } from 'react';
import ReactPlayer from "react-player"
import $ from "jquery"


class OneSong extends Component{

    state = {
        download: false
    }


    render(){
        // pid, title, artist, source, link, img
        const {artist, name, tag, video, link} = this.props.children
        return (
            <div className="card-margin">
                <div className="card">
                    <div className="card-image">
                        <figure className="video is-16by9 player-holder">
                            <ReactPlayer 
                            url={video} 
                            height={(() => {
                                if($(window).width() >= 768){
                                    return 432
                                }else return $(window).width()*(9/16)
                            })()}
                            width={(() => {
                                if($(window).width() >= 768){
                                    return 768
                                }else return $(window).width()
                            })()} />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{name.join(" ")}</p>
                                <p className="subtitle is-6">{artist.join(" ")}</p>
                            </div>
                        </div>
                    
                        <div className="content break-letter">
                            {tag.map((e, i) => (
                                <span><span key={i} className="tag is-is-primary">{e}</span>&nbsp;&nbsp;</span>
                            ))}
                        </div>
                    </div>

                    <footer className="card-footer">
                        <a href={`/file/${link}`} className="card-footer-item">
                            <i className="fa fa-download" aria-hidden="true"></i>
                            &nbsp;&nbsp;
                            Download
                        </a>
                    </footer>
                </div>
            </div>
        )
    }
}

export default OneSong

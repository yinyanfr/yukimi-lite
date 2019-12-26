import React, {useContext} from 'react'
import YukimiContext from "./YukimiContext"
import Markdown from "react-markdown"

import "@fortawesome/fontawesome-free/css/all.css"
import "bulma/bulma.sass"
import "./Yukimi.scss"
import YukimiSetting from './YukimiSetting'

const Yukimi = () => {

    const {
        chs, cht, lang, setLang
    } = useContext(YukimiContext)


    return (
        <div>
            <YukimiSetting active={false} />
            <div className="yukimi-content">
                <Markdown source={lang === "chs" ? chs : cht} />
            </div>
        </div>
    )
}

export default Yukimi
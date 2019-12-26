import React, { useContext, useEffect } from 'react'
import YukimiContext from "./YukimiContext"
import Markdown from "react-markdown"

import "@fortawesome/fontawesome-free/css/all.css"
import "bulma/bulma.sass"
import "./Yukimi.scss"
import YukimiSetting from './YukimiSetting'

const Yukimi = () => {

    const {
        chs, cht, lang,
        font, fontSize,
        theme
    } = useContext(YukimiContext)



    return (
        <div>
            <YukimiSetting active={false} />
            <article
                className="yukimi-content"
                style={(() => {
                    const contentStyle = {}
                    contentStyle.fontSize = fontSize
                    if (font !== "default") {
                        contentStyle.fontFamily = (() => {
                            switch (font) {
                                case "simsun":
                                    return "SimSun"
                                case "simhei":
                                    return "SimHei"
                                case "jhenghei":
                                    return "Microsoft JhengHei"
                                case "kaiti":
                                    return "KaiTi"
                                default:
                                    return "SimHei"
                            }
                        })()
                    }
                    contentStyle.color = (theme === "normal" ? "black" : "white")
                    return contentStyle
                })()}
            >

                <Markdown
                    source={lang === "chs" ? chs : cht}
                />

            </article>
        </div>
    )
}

export default Yukimi
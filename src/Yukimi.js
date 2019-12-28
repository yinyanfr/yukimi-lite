import React, { useContext, useState } from 'react'
import YukimiContext from "./YukimiContext"
import Markdown from "react-markdown"

import "@fortawesome/fontawesome-free/css/all.css"
import "bulma/bulma.sass"
import "./Yukimi.scss"
import YukimiSetting from './YukimiSetting'

const Yukimi = () => {

    const {
        chs, cht, lang,
        newchs, newcht,
        font, fontSize,
        theme,
        setPanel
    } = useContext(YukimiContext)

    const [tab, setTab] = useState("today")



    return (
        <div>
            <YukimiSetting active={false} />

            <div
                onClick={(e) => {
                    setPanel(null)
                }}
            >

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

                    <div className="tabs">
                        <ul>
                            <li
                                className={
                                    tab === "today"
                                        ? "is-active"
                                        : ""
                                }
                                onClick={() => { setTab("today") }}
                            ><a>今日更新</a></li>
                            <li
                                className={
                                    tab === "all"
                                        ? "is-active"
                                        : ""
                                }
                                onClick={() => { setTab("all") }}
                            ><a>整合版</a></li>
                        </ul>
                    </div>

                    <Markdown
                        source={
                            tab === "today"
                                ? lang === "chs" ? newchs : newcht
                                : lang === "chs" ? chs : cht
                        }
                    />

                </article>
            </div>
        </div>
    )
}

export default Yukimi
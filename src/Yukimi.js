import React, { useContext, useState } from 'react'
import YukimiContext from "./YukimiContext"
import Markdown from "react-markdown"

import { Route, Switch, useHistory } from 'react-router-dom'

import "@fortawesome/fontawesome-free/css/all.css"
import "bulma/bulma.sass"
import "./Yukimi.scss"
import YukimiSetting from './YukimiSetting'

const Yukimi = () => {

    const history = useHistory()

    const {
        chs, cht, lang,
        newchs, newcht,
        alicechs, alicecht,
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
                                onClick={() => {
                                    setTab("today")
                                    history.push("/")
                                }}
                            ><a>今日更新</a></li>
                            <li
                                className={
                                    tab === "all"
                                        ? "is-active"
                                        : ""
                                }
                                onClick={() => {
                                    setTab("all")
                                    history.push("/all")
                                }}
                            ><a>整合版</a></li>
                            <li
                                className={
                                    tab === "alice"
                                        ? "is-active"
                                        : ""
                                }
                                onClick={() => {
                                    setTab("alice")
                                    history.push("/alice")
                                }}
                            ><a>
                                {lang === "chs" ? "再见，爱丽丝" : "再見，愛麗絲"}
                            </a></li>
                        </ul>
                    </div>

                    <Switch>
                        <Route path="/" exact>
                            <Markdown
                                source={lang === "chs" ? newchs : newcht}
                            />
                        </Route>

                        <Route path="/new">
                            <Markdown
                                source={lang === "chs" ? newchs : newcht}
                            />
                        </Route>

                        <Route path="/all">
                            <Markdown
                                source={lang === "chs" ? chs : cht}
                            />
                        </Route>

                        <Route path="/alice">
                            <Markdown
                                source={lang === "chs" ? alicechs : alicecht}
                            />
                        </Route>

                        <Route>
                            <Markdown
                                source={lang === "chs" ? newchs : newcht}
                            />
                        </Route>
                    </Switch>

                </article>
            </div>
        </div>
    )
}

export default Yukimi
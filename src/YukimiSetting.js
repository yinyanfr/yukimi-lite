import React, { useContext, useState, useCallback } from 'react'
import YukimiContext from './YukimiContext'

const YukimiSetting = () => {

    const {
        lang, setLang
    } = useContext(YukimiContext)

    const [panel, setPanel] = useState(null)

    const changePanel = which => e => {
        if (panel === which) {
            setPanel(null)
        }
        else {
            setPanel(which)
        }
    }

    const changeLang = which => e => {
        setLang(which)
        localStorage.setItem("lang", which)
    }

    return (
        <div className="yukimi-setting-wrapper">
            <div className="yukimi-setting">
                <span onClick={changePanel("lang")}>
                    <i className="fas fa-language"></i>
                </span>
                <span>
                    <i className="fas fa-font" onClick={changePanel("font")}></i>
                </span>
                <span>
                    <i className="fas fa-palette" onClick={changePanel("palette")}></i>
                </span>
            </div>

            {
                panel
                    ? (
                        <div className="yukimi-panel">
                            <div className="field">
                                {
                                    panel === "lang"
                                        ? (
                                            <>
                                                <label className="label">
                                                    {lang === "chs" ? "语言" : "語言"}
                                                </label>
                                                <div className="control">
                                                    <div className="yukimi-buttons">
                                                        <button className={
                                                            lang === "chs"
                                                                ? "button is-link"
                                                                : "button is-link is-light"
                                                        }
                                                            onClick={changeLang("chs")}
                                                        >
                                                            简体中文
                                                        </button>

                                                        <button className={
                                                            lang === "cht"
                                                                ? "button is-link"
                                                                : "button is-link is-light"
                                                        }
                                                            onClick={changeLang("cht") }
                                                        >
                                                            繁體中文
                                                        </button>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                        : ""
                                }
                            </div>
                            <div style={{height: 10}}></div>
                        </div>
                    )
                    : ""
            }
        </div>
    )
}

export default YukimiSetting

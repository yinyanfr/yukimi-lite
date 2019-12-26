import React, { useContext, useState, useCallback } from 'react'
import YukimiContext from './YukimiContext'

const YukimiSetting = () => {

    const {
        lang, setLang,
        font, setFont,
        fontSize, setFontSize,
        theme, setTheme
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

    const changeFont = which => e => {
        setFont(which)
        localStorage.setItem("font", which)
    }

    const changeFontSize = which => e => {
        setFontSize(which)
        localStorage.setItem("fontSize", which)
    }

    const changeTheme = which => e => {
        setTheme(which)
        localStorage.setItem("theme", which)
    }

    return (
        <div
            className="yukimi-setting-wrapper"
            style={{
                backgroundColor: (theme === "normal" ? "white" : "black"),
                color: (theme === "normal" ? "black" : "white")
            }}
        >
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
                                                            onClick={changeLang("cht")}
                                                        >
                                                            繁體中文
                                                        </button>
                                                    </div>
                                                </div>
                                                <p className="help">简繁转换由谷歌翻译提供</p>
                                            </>
                                        )
                                        : ""
                                }

                                {
                                    panel === "font"
                                        ? (
                                            <>

                                                <label className="label">
                                                    {lang === "chs" ? "字号" : "字號"}
                                                </label>
                                                <div className="control">
                                                    <div className="yukimi-buttons">
                                                        {
                                                            ["100%", "125%", "150%", "175%", "200%"]
                                                                .map((e, i) => (
                                                                    <span
                                                                        key={i}
                                                                        className={
                                                                            fontSize === e
                                                                                ? "button is-link"
                                                                                : "button is-link is-light"
                                                                        }
                                                                        onClick={changeFontSize(e)}
                                                                    >
                                                                        <i
                                                                            className="fas fa-font"
                                                                            style={{ fontSize: e }}
                                                                        ></i>
                                                                    </span>
                                                                ))
                                                        }
                                                    </div>
                                                </div>

                                                <label className="label">
                                                    {lang === "chs" ? "字体" : "字體"}
                                                </label>
                                                <div className="control">
                                                    <div className="yukimi-buttons">
                                                        {
                                                            ["default", "jhenghei", "simsun", "simhei", "kaiti"]
                                                                .map((e, i) => (
                                                                    <button
                                                                        key={i}
                                                                        className={
                                                                            font === e
                                                                                ? "button is-link"
                                                                                : "button is-link is-light"
                                                                        }
                                                                        onClick={changeFont(e)}
                                                                    >
                                                                        {
                                                                            (() => {
                                                                                switch (e) {
                                                                                    case "default":
                                                                                        return "默认"
                                                                                    case "simsun":
                                                                                        return "宋体"
                                                                                    case "simhei":
                                                                                        return "黑体"
                                                                                    case "jhenghei":
                                                                                        return "正黑"
                                                                                    case "kaiti":
                                                                                        return "楷体"
                                                                                    default:
                                                                                        return "默认"
                                                                                }
                                                                            })()
                                                                        }
                                                                    </button>
                                                                ))
                                                        }
                                                    </div>
                                                </div>
                                                <p className="help">根据设备字体优先级，字体切换可能不会生效</p>
                                            </>
                                        )
                                        : ""
                                }

                                {
                                    panel === "palette"
                                        ? (
                                            <>
                                                <label className="label">
                                                    {lang === "chs" ? "颜色主题" : "顏色主題"}
                                                </label>

                                                <div className="yukimi-theme-showcase">
                                                    <div
                                                        className="yukimi-theme yukimi-theme-normal"
                                                        onClick={changeTheme("normal")}
                                                    >普通模式</div>
                                                    <div
                                                        className="yukimi-theme yukimi-theme-night"
                                                        onClick={changeTheme("night")}
                                                    >夜间模式</div>
                                                </div>
                                            </>
                                        )
                                        : ""
                                }
                            </div>
                            <div style={{ height: 10 }}></div>
                        </div>
                    )
                    : ""
            }
        </div>
    )
}

export default YukimiSetting

import React, { useContext } from 'react'
import YukimiContext from './YukimiContext'

const Footer = () => {

    const { theme } = useContext(YukimiContext)

    return (
        <footer className="footer" style={{
            backgroundColor: (theme === "normal" ? "white" : "black"),
            color: (theme === "normal" ? "black" : "white")
        }}>
            <div className="content has-text-centered">
                <p>
                    Powered by <a href="https://github.com/yinyanfr/yukimi">Yukimi</a>.
                </p>
                <p>
                    Created by <a href="https://www.facebook.com/%E8%90%8C%E5%A8%98%E7%99%BE%E7%A7%91-221502514610838">喵新姬</a>
                </p>
                <p>
                    Licensed under <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                </p>
            </div>
        </footer>
    )
}

export default Footer

import React, {useState, useEffect} from 'react';
import Yukimi from './Yukimi';
import YukimiContext from './YukimiContext';
import Footer from './Footer';

const App = () => {

  const [chs, setChs] = useState("")
  const [cht, setCht] = useState("")
  const [newchs, setNewChs] = useState("")
  const [newcht, setNewCht] = useState("")
  const [lang, setLang] = useState(localStorage.getItem("lang") || "cht")
  const [font, setFont] = useState(localStorage.getItem("font") || "default")
  const [fontSize, setFontSize] = useState(localStorage.getItem("fontSize") || "100%")
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "normal")

  const [panel, setPanel] = useState(null)

  useEffect(() => {
    fetch("/content")
      .then(res => res.json())
      .then(({chs, cht, newchs, newcht}) => {
        setChs(chs)
        setCht(cht)
        setNewChs(newchs)
        setNewCht(newcht)
      })
      .catch(err => {
        console.error(err)
      })

  }, [])

  useEffect(() => {
    document.body.style.backgroundColor = (theme === "normal" ? "white" : "black")
  }, [theme])

  return (
    <div>
      <YukimiContext.Provider value={{
        chs, cht,
        newchs, newcht,
        setChs,
        setCht,
        lang, setLang,
        font, setFont,
        fontSize, setFontSize,
        theme, setTheme,
        panel, setPanel
      }}>
        <Yukimi />
        <Footer />
      </YukimiContext.Provider>
    </div>
  )
}

export default App

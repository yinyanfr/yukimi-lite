import React, {useState, useEffect} from 'react';
import Yukimi from './Yukimi';
import YukimiContext from './YukimiContext';

const App = () => {

  const [chs, setChs] = useState("")
  const [cht, setCht] = useState("")
  const [lang, setLang] = useState(localStorage.getItem("lang") || "chs")
  const [font, setFont] = useState(localStorage.getItem("font") || "default")
  const [fontSize, setFontSize] = useState(localStorage.getItem("fontSize") || "100%")

  useEffect(() => {
    fetch("/content")
      .then(res => res.json())
      .then(({chs, cht}) => {
        setChs(chs)
        setCht(cht)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <div>
      <YukimiContext.Provider value={{
        chs, cht,
        setChs,
        setCht,
        lang, setLang,
        font, setFont,
        fontSize, setFontSize
      }}>
        <Yukimi />
      </YukimiContext.Provider>
    </div>
  )
}

export default App

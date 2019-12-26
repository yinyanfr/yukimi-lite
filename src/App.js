import React, {useState, useEffect} from 'react';
import Yukimi from './Yukimi';
import YukimiContext from './YukimiContext';

const App = () => {

  const [chs, setChs] = useState("")
  const [cht, setCht] = useState("")
  const [lang, setLang] = useState(localStorage.getItem("lang") || "chs")

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
        lang, setLang
      }}>
        <Yukimi />
      </YukimiContext.Provider>
    </div>
  )
}

export default App

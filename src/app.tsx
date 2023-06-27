import './app.css'
import TranslationProvider from './provider'
import useTranslation from './hook'
import { useState } from 'preact/hooks'


const itaTranslation = {
  text: {
    ciao: "ciaocomestai"
  }
}

const engTranslation = {
  text: {
    ciao: "hello"
  }
}



export function App() {

  const [langs, _setLangs] = useState(["ita", "eng"])

  const [selected, setSelected] = useState(langs[0])

  return (
    <TranslationProvider 
      languages={langs}
      translations={[
        itaTranslation.text,
        engTranslation.text
      ]}
      selectedLanguage={selected}
      >

      <div>
        {langs.map(lang => <button key={lang} onClick={() => setSelected(lang)}>{lang}</button>)}
      </div>
      
      <Data />
    </TranslationProvider>
  )
}


function Data(){

  const t= useTranslation()
  
  return (
    <div>
      {t("ciao")}
    </div>
  )
}

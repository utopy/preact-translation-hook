import {} from 'preact'
import { useState } from 'preact/hooks'
import './app.css'
import TranslationProvider from './provider'
import useTranslation from './hook'

export function App() {

  const [count, setCount] = useState(0)

  return (
    <TranslationProvider>
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

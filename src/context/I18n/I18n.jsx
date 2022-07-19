import React, { useContext } from 'react'
import { ContextI18n} from './Header/Header' 
import './I18n.scss'

const I18n = () => {
  const {locale, selectLanguage} = useContext(ContextI18n);

  

  return (
    
      
    <div className="i18n">
      <div>
    <p className="p-i18n">Idioma: {locale}</p> 
    </div>
    <div>
        <button className="button-i18n" onClick={() =>selectLanguage('es-ES')}>ES</button>
        <button className="button-i18n" onClick={()=>selectLanguage('en')}>EN</button>
    </div>
    </div>
    
  )
}

export default I18n
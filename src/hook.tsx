import { useContext } from 'preact/hooks'
import { TranslationContext } from './provider'

export default function useTranslation(){

	const context = useContext(TranslationContext)

	return (key:string , fallback?:string ) => {

		// const translation = context.get(key)
		const translation = context.getTranslation(context.selectedLanguage, key)
		// const translation = null

		return translation || fallback || key

	}
	
}
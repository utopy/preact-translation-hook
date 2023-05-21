import { useContext } from 'preact/hooks'
import { TranslationContext } from './provider'

export default function useTranslation(){

	const context = useContext(TranslationContext)

	return (key:string , fallback?:string ) => {

		const translation = context.get(key)

		return translation || fallback || key

	}
	
}
//@ts-ignore
import {h, ComponentChildren, createContext} from 'preact'
import TranslationController from './controllers'
import type {TranslationType} from './controllers'

type TranslationProviderProps = {
	children: ComponentChildren,
	translations: TranslationType[],
	languages: string[],
	selectedLanguage: string
}

export const TranslationContext =  createContext<TranslationController>( new TranslationController() as any)

export default function TranslationProvider(props:TranslationProviderProps) {

	console.log(TranslationContext)

	const context = new TranslationController()
	
	context.setLanguages(props.languages)
	context.setTranslations(props.translations)
	
	context.setSelectedLanguage(props.selectedLanguage ?? props.languages[0])

	
	return <TranslationContext.Provider value={context}>
		{props.children}
	</TranslationContext.Provider>
}

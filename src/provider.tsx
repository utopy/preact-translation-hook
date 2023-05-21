import {h, ComponentProps, ComponentChildren, createContext} from 'preact'

type TranslationProviderProps = {
	children: ComponentChildren
}

export const TranslationContext =  createContext(new Map())

export default function TranslationProvider(props:TranslationProviderProps) {

	const translations = new Map()
	translations.set("ciao", "working")

	
	return <TranslationContext.Provider value={translations}>
		{props.children}
	</TranslationContext.Provider>
}

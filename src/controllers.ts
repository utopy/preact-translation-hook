import { isObject } from "./helpers"

export type TranslationControllerLanguagesKeys = typeof TranslationController.prototype.languages

export type TranslationType = {
  [key: string]: string | object
}

export type TranslationsContainer = {
  [key: string]: Map<string, string>
}

type TranslationControllerErrors = "languagesTranslationsDifference"

export default class TranslationController {

  name = "translationController"

  private _languages: string[] = []

  private _selectedLanguage: string = ""

  get languages() {
    return this._languages
  }

  // private _translations: Map<TranslationControllerLanguagesKeys, TranslationType>[] = []
  private _translations: TranslationsContainer = {} as any

  get translations() {
    return this._translations
  }

  get selectedLanguage() {
    return this._selectedLanguage
  }

  /*
  
    Se l'oggetto è nested (es: 
    {
      pippo: "franco", 
      amici: 
        {luca: "rossi"}
      }
    }

    ritorna un oggetto di tipo:
    {
      "pippo":"franco",
      "amici.luca": "rossi"
    }
  
  */

  flattenTranslationObject(translation: TranslationType, prefix = "") {

    const keys = Object.keys(translation)

    let result: { [key: string]: any } = {}

    for (const key of keys) {

      const newKey = prefix ? `${prefix}.${key}` : key

      const el = translation[key] as any

      if (!isObject(el)) result[newKey] = el
      else {
        const flattened = this.flattenTranslationObject(el, newKey)

        result = { ...result, ...flattened }
      }


    }


    return result
  }

  getTranslation(language: string, translationKey: string) {
    return this._translations[language].get(translationKey) ?? null
  }

  setLanguages(languages: string[]) {
    this._languages = languages
  }

  setSelectedLanguage(language: string) {
    this._selectedLanguage = language
  }

  setTranslations(translations: TranslationType[]) {
    if (this._languages.length != translations.length) this.handleErrors("languagesTranslationsDifference")
    for (let i = 0; i < this._languages.length; i++) {

      const map = new Map()

      const language = this._languages[i]
      const translation = this.flattenTranslationObject(translations[i])

      console.log("TRANSLATION = ", translation)

      this._translations[language] = map

      const translationKeys = Object.keys(translation)

      for (const key of translationKeys) {

        const data = translation[key]

        map.set(key, data)

      }

    }
  }

  private handleErrors(errorType: TranslationControllerErrors) {
    if (errorType === "languagesTranslationsDifference") {
      console.error("The number of languages and translations doesn't match! \nCant' proceed with traduction")
    }

    return
  }

}

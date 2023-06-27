export type TranslationControllerLanguagesKeys = typeof TranslationController.prototype.languages

export type TranslationType = {
  [key: string]: string | TranslationController
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

  private translationTypeToMap(translation: TranslationType) {

  }

  getTranslation(language: string, translationKey: string) {
    return this._translations[language].get(translationKey)
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
      const translation = translations[i]

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

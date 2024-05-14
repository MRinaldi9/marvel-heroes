import type { InjectionKey } from 'vue'

export const marvelAPIKey = Symbol('Marvel API Key') as InjectionKey<string>

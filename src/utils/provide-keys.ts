import type {InjectionKey, Ref} from 'vue'

const dispExpKey = Symbol() as InjectionKey<Ref<string>>
const dispResKey = Symbol() as InjectionKey<Ref<string>>
const isMobileKey = Symbol() as InjectionKey<Ref<boolean>>
const mobHeightKey = Symbol() as InjectionKey<Ref<string>>

export {dispExpKey, dispResKey, isMobileKey, mobHeightKey}
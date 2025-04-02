// src/composables/useLanguageSwitch.ts
import { useI18n } from 'vue-i18n'

export default function useLanguageSwitch() {
  const { locale } = useI18n()

  // Hàm chuyển ngôn ngữ
  const switchLanguage = () => {
    locale.value = locale.value === 'en' ? 'vi' : 'en'
  }

  return { switchLanguage }
}

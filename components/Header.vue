<template>
  <header class="header">
    <!-- 手机版汉堡包按钮 -->
    <button 
      class="hamburger-btn" 
      @click="toggleNavMenu"
      v-if="isMobile"
    >
      <span class="hamburger-icon"></span>
    </button>

    <div class="logo">
      <NuxtLink to="/">
        <img src="/logo.png" alt="Logo" class="logo-image" />
      </NuxtLink>
    </div>

    <!-- 电脑版导航菜单 -->
    <nav class="nav-menu" v-if="!isMobile">
      <ul class="nav-list">
        <li class="nav-item">
          <NuxtLink to="/" class="nav-link">{{ t('nav.home') }}</NuxtLink>
        </li>
        <li class="nav-separator">|</li>
        <li class="nav-item">
          <NuxtLink to="/about" class="nav-link">{{ t('nav.about') }}</NuxtLink>
        </li>
        <li class="nav-separator">|</li>
        <li class="nav-item">
          <NuxtLink to="/contact" class="nav-link">{{ t('nav.contact') }}</NuxtLink>
        </li>
      </ul>
    </nav>

    <!-- 手机版导航菜单 -->
    <nav class="nav-menu mobile-nav-menu" :class="{ 'mobile-menu-open': isNavMenuOpen }" v-if="isMobile">
      <ul class="nav-list">
        <li class="nav-item">
          <NuxtLink to="/" class="nav-link">{{ t('nav.home') }}</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/about" class="nav-link">{{ t('nav.about') }}</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/contact" class="nav-link">{{ t('nav.contact') }}</NuxtLink>
        </li>
      </ul>
    </nav>

    <div class="right-section">
      <div class="language-selector">
        <button class="language-btn" @click="toggleLanguageMenu">
          <img :src="getCurrentLanguageEmoji()" alt="flag" style="width: 20px; height: 20px; vertical-align: middle;"> {{ getCurrentLanguageName() }}
        </button>
        <div class="language-menu" v-if="isLanguageMenuOpen">
          <button
            v-for="lang in languages"
            :key="lang.code"
            class="language-option"
            @click="selectLanguage(lang.code)"
          >
            <img :src="lang.emoji" alt="flag" style="width: 20px; height: 20px; vertical-align: middle;"> {{ lang.name }}
          </button>
        </div>
      </div>

      <div class="social-links">
        <a href="https://im.qq.com" target="_blank" class="social-link" title="QQ">
          <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4ac.svg" alt="QQ" style="width: 24px; height: 24px;">
        </a>
        <a href="https://github.com/lindongNote" target="_blank" class="social-link" title="GitHub">
          <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" style="width: 24px; height: 24px;">
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const languages = [
  { code: 'zh-CN', name: '简体中文(中国大陆)', emoji: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1e8-1f1f3.svg' },
  { code: 'zh-HK', name: '繁體廣東話(中國香港)', emoji: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1ed-1f1f0.svg' },
  { code: 'zh-MO', name: '繁體廣東話(中國澳門)', emoji: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1f2-1f1f4.svg' },
  { code: 'zh-TW', name: '繁體中文(中國台灣)', emoji: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1e8-1f1f3.svg' },
]

const isLanguageMenuOpen = ref(false)
const isNavMenuOpen = ref(false)
const isMobile = ref(false)

// 获取浏览器首选语言
const getBrowserLanguage = () => {
  if (process.client) {
    try {
      // 首先检查本地存储的语言偏好
      const storedLang = localStorage.getItem('preferredLanguage')
      if (storedLang && languages.some(lang => lang.code === storedLang)) {
        return storedLang
      }

      // 获取浏览器语言设置
      const browserLang = navigator.language
      const matchedLang = languages.find(lang => 
        browserLang.toLowerCase().startsWith(lang.code.toLowerCase())
      )

      // 如果找到匹配的语言,将其保存到本地存储
      if (matchedLang) {
        localStorage.setItem('preferredLanguage', matchedLang.code)
        return matchedLang.code
      }
    } catch (error) {
      console.error('Error getting browser language:', error)
    }
  }
  return 'zh-CN' // 默认语言
}

const getCurrentLanguageEmoji = () => {
  return languages.find(lang => lang.code === locale.value)?.emoji
}

const getCurrentLanguageName = () => {
  return languages.find(lang => lang.code === locale.value)?.name
}

const toggleLanguageMenu = () => {
  isLanguageMenuOpen.value = !isLanguageMenuOpen.value
}

const toggleNavMenu = () => {
  isNavMenuOpen.value = !isNavMenuOpen.value
}

const selectLanguage = (code: string) => {
  locale.value = code
  isLanguageMenuOpen.value = false
  if (process.client) {
    localStorage.setItem('preferredLanguage', code)
  }
}

const handleResize = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  // 初始化语言设置
  locale.value = getBrowserLanguage()

  // 初始化检测移动设备
  handleResize()
  window.addEventListener('resize', handleResize)

  // 点击其他地方关闭语言菜单
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement
    if (!target.closest('.language-selector')) {
      isLanguageMenuOpen.value = false
    }
  })
})
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  position: relative;
  z-index: 1000;
}

.logo-image {
  height: 60px;
}

.nav-menu {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(245, 245, 245, 0.7);
  padding: 0.6rem 1.8rem;
  border-radius: 25px;
  backdrop-filter: blur(12px);
  border: 2px solid rgba(0, 0, 0, 0.8);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12)
}

.nav-list {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin: 0 0.5rem;
}

.nav-separator {
  color: #ccc;
  margin: 0 0.5rem;
}

.nav-link {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 15px;
}

.nav-link:hover {
  color: #FFA0B4;
  background-color: rgba(0, 123, 255, 0.1);
}

.right-section {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.language-selector {
  position: relative;
}

.language-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #FFB6C1;
  border-radius: 20px;
  background: #FFB6C1;
  color: white;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.language-btn:hover {
  background: #FFA0B4;
  border-color: #FFA0B4;
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(255, 182, 193, 0.3);
}

.language-menu {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.language-option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  background: none;
  cursor: pointer;
  white-space: nowrap;
}

.language-option:hover {
  background-color: #f5f5f5;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #f5f5f5;
  color: #333;
  text-decoration: none;
  transition: background-color 0.2s;
}

.social-link:hover {
  background-color: #e0e0e0;
}

.social-icon {
  font-size: 1.2rem;
}

.hamburger-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.hamburger-icon {
  display: inline-block;
  width: 24px;
  height: 2px;
  background-color: #333;
  position: relative;
}

.hamburger-icon::before,
.hamburger-icon::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #333;
}

.hamburger-icon::before {
  transform: translateY(-6px);
}

.hamburger-icon::after {
  transform: translateY(6px);
}

.mobile-nav-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.95);
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: none;
}

.mobile-menu-open {
  display: block;
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    padding: 1rem;
    height: auto;
  }

  .logo {
    text-align: center;
    margin-bottom: 1rem;
  }

  .nav-menu {
    position: static;
    transform: none;
    background-color: rgba(245, 245, 245, 0.7);
    padding: 0.6rem 0;
    border-radius: 15px;
    margin: 1rem 0;
  }

  .nav-list {
    flex-direction: column;
    text-align: center;
  }

  .nav-item {
    margin: 0.5rem 0;
  }

  .nav-separator {
    display: none;
  }

  .right-section {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .language-selector {
    width: 100%;
  }

  .language-btn {
    width: 100%;
    justify-content: center;
  }

  .social-links {
    justify-content: center;
  }

  .hamburger-btn {
    display: block;
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 1000;
  }
}
</style>
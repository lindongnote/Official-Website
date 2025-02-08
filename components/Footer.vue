<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <div class="logo-container">
          <img src="/logo.png" alt="霖冬笔记" class="footer-logo" />
          <img src="/wtlogo.png" alt="Logo" class="footer-logo" />
        </div>
        <p class="copyright">© {{ currentYear }} {{ t('footer.copyright') }}</p>
      </div>

      <div class="footer-section">
        <h3 class="footer-title">{{ t('footer.navigation.title') }}</h3>
        <nav class="footer-nav">
          <NuxtLink to="/" class="footer-link">{{ t('nav.home') }}</NuxtLink>
          <NuxtLink to="/about" class="footer-link">{{ t('nav.about') }}</NuxtLink>
          <NuxtLink to="/contact" class="footer-link">{{ t('nav.contact') }}</NuxtLink>
        </nav>
      </div>

      <div class="footer-section">
        <h3 class="footer-title">{{ t('footer.social.title') }}</h3>
        <div class="footer-social">
          <a href="https://im.qq.com" target="_blank" class="social-link" title="QQ">
            <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4ac.svg" alt="QQ" class="social-icon">
          </a>
          <a href="https://github.com/lindongNote" target="_blank" class="social-link" title="GitHub">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" class="social-icon">
          </a>
          <a href="mailto:official@ldnote.top" target="_blank" class="social-link" title="Email">
            <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/2709.svg" alt="Email" class="social-icon">
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 -4px 16px rgba(255, 182, 193, 0.15);
  padding: 3rem 2rem;
  margin-top: 4rem;
  border-top: 1px solid rgba(255, 182, 193, 0.2);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  border-radius: 1rem;
  transition: background-color 0.3s ease;
}

.footer-section:hover {
  background-color: rgba(255, 182, 193, 0.1);
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.footer-logo {
  height: 100px;
  transition: transform 0.3s ease;
}

.footer-logo:hover {
  transform: scale(1.05);
}

.copyright {
  color: #666;
  font-size: 0.9rem;
}

.footer-title {
  color: #333;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-link {
  color: #666;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.95rem;
}

.footer-link:hover {
  color: #ff69b4;
}

.footer-social {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #f5f5f5;
  transition: all 0.3s ease;
}

.social-link:hover {
  transform: translateY(-2px);
  background-color: #ffe6ea;
}

.social-icon {
  width: 24px;
  height: 24px;
}

@media (max-width: 768px) {
  .footer {
    padding: 2rem 1rem;
    margin-top: 2rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .footer-section {
    padding: 1rem 0;
  }

  .logo-container {
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .footer-logo {
    height: 80px;
  }

  .footer-title {
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
  }

  .footer-link {
    font-size: 0.9rem;
    padding: 0.5rem 0;
  }

  .social-link {
    width: 32px;
    height: 32px;
  }

  .social-icon {
    width: 20px;
    height: 20px;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 1.5rem 1rem;
  }

  .footer-logo {
    height: 60px;
  }

  .logo-container {
    flex-direction: column;
    gap: 0.75rem;
  }

  .copyright {
    font-size: 0.8rem;
  }

  .footer-nav {
    gap: 0.25rem;
  }
}
</style>
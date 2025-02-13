<template>
  <div class="home-container">
    <section class="hero">
      <h1 class="hero-title">{{ t('home.hero.title') }}</h1>
      <p class="hero-subtitle">{{ t('home.hero.subtitle') }}</p>
    </section>

    <section class="features">
      <div class="feature-grid">
        <div v-for="(feature, index) in features" :key="index" class="feature-card">
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3 class="feature-title">{{ t(`home.features.${feature.key}.title`) }}</h3>
          <p class="feature-description">{{ t(`home.features.${feature.key}.description`) }}</p>
        </div>
      </div>
    </section>

    <section class="cta">
      <h2 class="cta-title">{{ t('home.cta.title') }}</h2>
      <p class="cta-description">{{ t('home.cta.description') }}</p>
      <button class="cta-button" @click="navigateToContact">{{ t('home.cta.button') }}</button>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useHead } from '@unhead/vue'
import { useI18n } from 'vue-i18n' // 确保导入正确的模块路径

const { t , locale} = useI18n()

watchEffect(() => {
  useHead({
    title: t('home.page.title'),
    link: [
      { 
        rel: 'stylesheet', 
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css' 
      }
    ]
  })
})

const features = [
  { key: 'feature1', icon: '🚀' },
  { key: 'feature2', icon: '🎯' },
  { key: 'feature3', icon: '💡' },
  { key: 'feature4', icon: '🛠️' },
]

const router = useRouter()

const navigateToContact = () => {
  router.push('/contact')
}
</script>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(135deg, #ffb6c1 0%, #ffc0cb 100%);
  border-radius: 1rem;
  color: white;
  margin-bottom: 4rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  animation: fadeInUp 0.8s ease-out;
}

.hero-subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  animation: fadeInUp 0.8s ease-out 0.2s;
}

.features {
  margin-bottom: 4rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  animation: fadeInUp 0.8s ease-out;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #ff69b4;
}

.feature-description {
  color: #666;
  line-height: 1.6;
}

.cta {
  text-align: center;
  padding: 4rem 2rem;
  background: #f8fafc;
  border-radius: 1rem;
  animation: fadeInUp 0.8s ease-out;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #1e293b;
}

.cta-description {
  font-size: 1.25rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto 2rem;
}

.cta-button {
  background: #FFB6C1;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background: #FFA0B4;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 182, 193, 0.3);
}

.cta-button:active {
  transform: translateY(0);
  background: #FF8DA1;
  box-shadow: 0 2px 6px rgba(255, 182, 193, 0.2);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.25rem;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }

  .cta-title {
    font-size: 2rem;
  }

  .cta-description {
    font-size: 1.125rem;
  }
}
</style>
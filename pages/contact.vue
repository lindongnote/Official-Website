<template>
  <div class="contact-container">
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">{{ t('contact.hero.title') }}</h1>
        <p class="hero-subtitle">{{ t('contact.hero.subtitle') }}</p>
      </div>
    </section>

    <section class="contact-section">
      <div class="section-content">
        <div class="contact-grid">
          <div class="contact-form-container">
            <h2 class="section-title">{{ t('contact.form.title') }}</h2>
            <form class="contact-form" @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name">{{ t('contact.form.name') }}</label>
                <input
                  type="text"
                  id="name"
                  v-model="formData.name"
                  :placeholder="t('contact.form.namePlaceholder')"
                  required
                />
              </div>
              <div class="form-group">
                <label for="email">{{ t('contact.form.email') }}</label>
                <input
                  type="email"
                  id="email"
                  v-model="formData.email"
                  :placeholder="t('contact.form.emailPlaceholder')"
                  required
                />
              </div>
              <div class="form-group">
                <label for="subject">{{ t('contact.form.subject') }}</label>
                <input
                  type="text"
                  id="subject"
                  v-model="formData.subject"
                  :placeholder="t('contact.form.subjectPlaceholder')"
                  required
                />
              </div>
              <div class="form-group">
                <label for="message">{{ t('contact.form.message') }}</label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  :placeholder="t('contact.form.messagePlaceholder')"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" class="submit-button" :disabled="isSubmitting">
                {{ isSubmitting ? t('contact.form.submitting') : t('contact.form.submit') }}
              </button>
            </form>
          </div>

          <div class="contact-info">
            <h2 class="section-title">{{ t('contact.info.title') }}</h2>
            <div class="info-grid">
              <div class="info-item">
                <div class="info-icon">
                  <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4e7.svg" alt="Email" />
                </div>
                <h3>{{ t('contact.info.email') }}</h3>
                <p>official@ldnote.top</p>
              </div>
              <div class="info-item">
                <div class="info-icon">
                  <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4ac.svg" alt="QQ" />
                </div>
                <h3>{{ t('contact.info.qq') }}</h3>
                <p>暂无</p>
              </div>
              <div class="info-item">
                <div class="info-icon">
                  <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4cd.svg" alt="Location" />
                </div>
                <h3>{{ t('contact.info.address') }}</h3>
                <p>{{ t('contact.info.addressDetail') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

watchEffect(() => {
  useHead({
    title: t('contact.page.title'),
    link: [
      { 
        rel: 'stylesheet', 
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css' 
      }
    ]
  })
})

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  try {
    // 这里添加表单提交逻辑
    await new Promise(resolve => setTimeout(resolve, 1000))
    alert(t('contact.form.success'))
    formData.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  } catch (error) {
    alert(t('contact.form.error'))
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-container {
  padding-top: 2rem;
}

.hero-section {
  background: rgba(255, 182, 193, 0.1);
  padding: 4rem 2rem;
  text-align: center;
  border-radius: 1rem;
  margin: 0 2rem;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
}

.section-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 3rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.contact-form-container {
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid rgba(255, 182, 193, 0.2);
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
}

input,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid rgba(255, 182, 193, 0.3);
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.9);
  transition: border-color 0.3s ease;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #ff69b4;
}

.submit-button {
  width: 100%;
  padding: 1rem;
  background: #FFA0B4;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover:not(:disabled) {
  background: #FFA0B4;
}

.submit-button:disabled {
  background: #ffb6c1;
  cursor: not-allowed;
}

.contact-info {
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid rgba(255, 182, 193, 0.2);
}

.info-grid {
  display: grid;
  gap: 2rem;
}

.info-item {
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 0.5rem;
  transition: transform 0.3s ease;
}

.info-item:hover {
  transform: translateY(-5px);
}

.info-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 1rem;
}

.info-icon img {
  width: 100%;
  height: 100%;
}

.info-item h3 {
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.info-item p {
  color: #666;
}

@media (max-width: 768px) {
  .hero-section {
    margin: 0 1rem;
    padding: 3rem 1rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .section-content {
    padding: 3rem 1rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .section-title {
    font-size: 1.75rem;
  }
}
</style>
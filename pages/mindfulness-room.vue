<template>
  <div class="mindfulness-container">
    <!-- 顶部大图 -->
    <div class="hero-image">
      <img src="/mindfulness-banner.jpg" alt="心灵小屋" />
      <div class="hero-overlay">
        <div class="hero-content">
          <h1 class="hero-title">{{ t('mindfulnessRoom.hero.title') }}</h1>
          <p class="hero-subtitle">{{ t('mindfulnessRoom.hero.subtitle') }}</p>
        </div>
      </div>
    </div>

    <section class="content-section">
      <div class="section-grid">
        <div class="section-card meditation" data-aos="fade-up">
          <div class="card-icon">🧘‍♀️</div>
          <h2>{{ t('mindfulnessRoom.sections.meditation.title') }}</h2>
          <p>{{ t('mindfulnessRoom.sections.meditation.description') }}</p>
        </div>

        <div class="section-card articles" data-aos="fade-up" data-aos-delay="100">
          <div class="card-icon">📖</div>
          <h2>{{ t('mindfulnessRoom.sections.articles.title') }}</h2>
          <p>{{ t('mindfulnessRoom.sections.articles.description') }}</p>
        </div>

        <div class="section-card community" data-aos="fade-up" data-aos-delay="200">
          <div class="card-icon">👥</div>
          <h2>{{ t('mindfulnessRoom.sections.community.title') }}</h2>
          <p>{{ t('mindfulnessRoom.sections.community.description') }}</p>
        </div>
      </div>
    </section>

    <!-- 义工团队介绍 -->
    <section class="volunteers-section">
      <div class="section-content">
        <h2 class="section-title" data-aos="fade-up">{{ t('mindfulnessRoom.volunteers.title') }}</h2>
        <p class="section-description" data-aos="fade-up">{{ t('mindfulnessRoom.volunteers.description') }}</p>
        
        <div class="volunteers-grid">
          <div 
            v-for="(member, key) in volunteers" 
            :key="key" 
            class="volunteer-card"
            data-aos="fade-up"
            :data-aos-delay="key * 100"
          >
            <div class="volunteer-avatar">
              <img :src="`/volunteers/${key}.jpg`" :alt="t(`mindfulnessRoom.volunteers.members.${key}.name`)" />
            </div>
            <div class="volunteer-info">
              <h3 class="volunteer-name">{{ t(`mindfulnessRoom.volunteers.members.${key}.name`) }}</h3>
              <p class="volunteer-role">{{ t(`mindfulnessRoom.volunteers.members.${key}.role`) }}</p>
              <p class="volunteer-description">{{ t(`mindfulnessRoom.volunteers.members.${key}.description`) }}</p>
              <div class="volunteer-social">
                <a href="#" class="social-link"><i class="fab fa-qq"></i></a>
                <a href="#" class="social-link"><i class="fab fa-weixin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ... 现有代码 ... -->

    <!-- 添加联系邮箱部分 -->
    <section class="contact-section" data-aos="fade-up">
      <div class="contact-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fill-opacity="1" d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,128C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
      
      <div class="contact-content">
        <div class="contact-card" data-aos="fade-up">
          <div class="contact-icon">
            <i class="fas fa-envelope"></i>
          </div>
          <h2>{{ t('mindfulnessRoom.contact.title') }}</h2>
          <p>{{ t('mindfulnessRoom.contact.description') }}</p>
          <div class="email-box">
            <span>{{ t("psycho@ldnote.top") }}</span>
            <button @click="copyEmail" class="copy-button">
              <i class="fas fa-copy"></i>
            </button>
          </div>
          <div class="success-message" :class="{ show: showSuccess }">
            {{ t('mindfulnessRoom.contact.copySuccess') }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useHead } from '@unhead/vue'
import { useI18n } from 'vue-i18n'
import AOS from 'aos'
import 'aos/dist/aos.css'

const { t } = useI18n()

watchEffect(() => {
  useHead({
    title: t('mindfulnessRoom.page.title'),
    link: [
      { 
        rel: 'stylesheet', 
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css' 
      }
    ]
  })
})

const volunteers = ['member1', 'member2', 'member3']

onMounted(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: true
  })
})
import { ref } from 'vue'

const showSuccess = ref(false)

const copyEmail = () => {
  navigator.clipboard.writeText(t('psycho@ldnote.top'))
  showSuccess.value = true
  setTimeout(() => {
    showSuccess.value = false
  }, 2000)
}
</script>

<style scoped>
.mindfulness-container {
  padding-top: 0;
}

.hero-image {
  width: 100%;
  height: 600px;
  position: relative;
  overflow: hidden;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
  transform: scale(1.1);
  transition: transform 10s ease;
}

.hero-image:hover img {
  transform: scale(1);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5));
}

.hero-content {
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 0 2rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.hero-subtitle {
  font-size: 1.5rem;
  line-height: 1.6;
  opacity: 0.9;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
}

.content-section {
  max-width: 1200px;
  margin: -100px auto 4rem;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

.section-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.section-card {
  background: white;
  padding: 3rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  text-align: center;
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.section-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.15);
}

.volunteers-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 6rem 2rem;
  margin-top: 4rem;
}

.section-title {
  font-size: 2.5rem;
  color: #343a40;
  margin-bottom: 1rem;
  text-align: center;
}

.section-description {
  text-align: center;
  color: #6c757d;
  max-width: 600px;
  margin: 0 auto 4rem;
  font-size: 1.1rem;
  line-height: 1.6;
}

.volunteers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
}

.volunteer-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.volunteer-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.15);
}

.volunteer-avatar {
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.volunteer-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.volunteer-card:hover .volunteer-avatar img {
  transform: scale(1.1);
}

.volunteer-info {
  padding: 2rem;
}

.volunteer-name {
  font-size: 1.5rem;
  color: #343a40;
  margin-bottom: 0.5rem;
}

.volunteer-role {
  color: #6c757d;
  font-weight: 500;
  margin-bottom: 1rem;
}

.volunteer-description {
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.volunteer-social {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6c757d;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #e9ecef;
  color: #343a40;
  transform: translateY(-3px);
}

.contact-section {
  position: relative;
  background: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
  padding: 8rem 2rem 6rem;
  margin-top: 4rem;
  color: white;
  overflow: hidden;
}

.contact-wave {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 0;
}

.contact-content {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.contact-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: transform 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-5px);
}

.contact-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 2rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}

.contact-card h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: white;
}

.contact-card p {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
}

.email-box {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 400px;
}

.email-box span {
  font-size: 1.1rem;
  color: white;
}

.copy-button {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.copy-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.success-message {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%) translateY(100px);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  opacity: 0;
  transition: all 0.3s ease;
}

.success-message.show {
  transform: translateX(-50%) translateY(0);
  opacity: 1;
}

@media (max-width: 768px) {
  .contact-section {
    padding: 6rem 1.5rem 4rem;
  }

  .contact-card {
    padding: 2rem;
  }

  .email-box {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  .copy-button {
    width: 100%;
    border-radius: 25px;
  }
}
</style>
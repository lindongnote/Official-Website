<template>
  <div class="about-container">
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">{{ t('about.hero.title') }}</h1>
        <p class="hero-subtitle">{{ t('about.hero.subtitle') }}</p>
      </div>
    </section>

    <section class="mission-section">
      <div class="section-content">
        <h2 class="section-title">{{ t('about.mission.title') }}</h2>
        <p class="section-text">{{ t('about.mission.description') }}</p>
      </div>
    </section>

    <section class="values-section">
      <div class="section-content">
        <h2 class="section-title">{{ t('about.values.title') }}</h2>
        <div class="values-grid">
          <div v-for="(value, index) in values" :key="index" class="value-card">
            <img :src="value.icon" :alt="t(`about.values.${value.key}.title`)" class="value-icon">
            <h3 class="value-title">{{ t(`about.values.${value.key}.title`) }}</h3>
            <p class="value-description">{{ t(`about.values.${value.key}.description`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="team-section">
      <div class="section-content">
        <h2 class="section-title">{{ t('about.team.title') }}</h2>
        <div class="team-grid">
          <div v-for="(member, index) in team" :key="index" class="member-card">
            <div class="member-avatar">
              <img :src="member.avatar" :alt="member.name">
            </div>
            <h3 class="member-name">{{ member.name }}</h3>
            <p class="member-role">{{ member.role }}</p>
            <p class="member-bio">{{ member.bio }}</p>
            <div class="member-social">
              <a v-if="member.github" :href="member.github" target="_blank" class="social-link">
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub">
              </a>
              <a v-if="member.qq" :href="member.qq" target="_blank" class="social-link">
                <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4ac.svg" alt="QQ">
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const values = [
  {
    key: 'innovation',
    icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4a1.svg'
  },
  {
    key: 'collaboration',
    icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f91d.svg'
  },
  {
    key: 'excellence',
    icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/2b50.svg'
  },
  {
    key: 'growth',
    icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f331.svg'
  }
]

const team = [
  {
    name: '冬瓜(Cherry)',
    role: t('about.team.roles.founder'),
    bio: t('about.team.bios.founder'),
    avatar: './avatars/donggua.jpg',
    github: 'https://github.com/dongguacute',
    qq: 'https://im.qq.com'
  },
  {
    name: 'Debug967',
    role: t('about.team.roles.cofounder'),
    bio: t('about.team.bios.cofounder'),
    avatar: '/avatars/ldx.jpg',
    github: 'https://github.com/lidongxun967',
    qq: 'https://im.qq.com'
  },
  {
    name: 'Orange',
    role: t('about.team.roles.developer'),
    bio: t('about.team.bios.developer'),
    avatar: '/avatars/orange.jpg',
    github: 'https://github.com/orangeZSCB',
    qq: 'https://im.qq.com'
  }

]
</script>

<style scoped>
.about-container {
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

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.value-card {
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  transition: transform 0.3s ease;
  border: 1px solid rgba(255, 182, 193, 0.2);
}

.value-card:hover {
  transform: translateY(-5px);
}

.value-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 1rem;
}

.value-title {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.value-description {
  color: #666;
  line-height: 1.6;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.member-card {
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  transition: transform 0.3s ease;
  border: 1px solid rgba(255, 182, 193, 0.2);
}

.member-card:hover {
  transform: translateY(-5px);
}

.member-avatar {
  width: 120px;
  height: 120px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid rgba(255, 182, 193, 0.3);
}

.member-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.member-name {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.member-role {
  color: #FFA0B4;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.member-bio {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.member-social {
  display: flex;
  justify-content: center;
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
  transition: all 0.3s ease;
}

.social-link:hover {
  transform: translateY(-2px);
  background-color: #ffe6ea;
}

.social-link img {
  width: 24px;
  height: 24px;
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

  .section-title {
    font-size: 1.75rem;
  }
}
</style>
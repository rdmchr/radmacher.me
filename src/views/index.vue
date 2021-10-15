<template>
  <div>
    <Title>Keep it simple</Title>
    <div class="flex flex-col w-screen items-center">
      <div class="content-container">
        <h1 class="subtitle">Hey!</h1>
        <p class="text">
          I'm Marc Radmacher. A German student dreaming of a career in IT. I first picked up programming at the age of 14
          and I have been teaching myself ever since.
        </p>
        <p class="text">
          Feel free to take a look at my open source projects on <a href="https://github.com/rdmchr">GitHub</a>. Like <a href="https://github.com/Hori-List/Hori">this</a> shopping list app, which I'm working on
          right now.
        </p>
        <p class="text">I'm always looking for opportunies, so feel free to reach out to me via E-Mail at
          <a href="mailto:hello@radmacher.me">hello@radmacher.me</a>.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Title from '../components/Title.vue';
</script>

<style scoped>
.content-container {
  @apply px-8 max-w-xl mb-8;
}

.subtitle {
  @apply text-4xl mb-6 font-title font-semibold;
}

.text {
  @apply text-2xl mb-4;
}

a {
  text-decoration: none;
  color:#e48909;
  z-index: 3;
  position: relative;
  padding-bottom: 2px;
}

a:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  height: 1.25em;
  z-index: -1;
  background: #f69d1f;
  width: 0;
  display: block;
  transition: width .5s ease-in-out;
}

a:hover {
  color: black;
}

a:hover:after {
   width: 100%;
 }
</style>
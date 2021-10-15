<template>
  <div class="w-screen h-screen relative">
    <h1 class="title">
      <slot/>
    </h1>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.title {
  @apply font-title text-12xl font-bold absolute inset-x-1/2 inset-y-1/2 w-min;
  height: min-content;
  animation: forwards ease-out tilt;
  animation-duration: .75s;
  transform-origin: top left;
  transform: rotate(0) translate(-50%, -50%);
}

@media only screen and (min-width: 1200px) {
  .title {
    @apply w-max;
  }
}

@media only screen and (max-width: 700px) {
  .title {
    @apply text-10xl;
  }
}

@media only screen and (max-width: 600px) {
  .title {
    @apply text-9xl;
  }
}

@media only screen and (max-width: 500px) {
  .title {
    @apply text-8xl;
  }
}

@media only screen and (max-height: 400px) {
  .title {
    @apply text-8xl;
  }
}

@keyframes tilt {
  from {
    transform: rotate(0deg) translate(-50%, -50%);
  }

  to {
    transform: rotate(-15deg) translate(-50%, -50%);
  }
}
</style>
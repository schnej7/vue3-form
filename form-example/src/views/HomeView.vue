<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import FormData from '../constants/FormData'

  const firstStep = FormData.steps[0];
</script>

<template>
  <main>
    <div class="flex-column align-center justify-center text-center">
      <h1>Vue3 Composition API Form Example</h1>
      <div class="mb-6">
        Code for this example is available on<a href="https://github.com/schnej7/vue3-form">GitHub</a>
      </div>

      <h3>
        <RouterLink :to="`/${firstStep.name}`">Start Here</RouterLink>
      </h3>
    </div>
  </main>
</template>

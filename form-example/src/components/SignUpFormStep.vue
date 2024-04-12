<script setup lang="ts">
  import FormData from '../constants/FormData.ts'
  import formStore from '../store/FormStore.ts'
  import { ref, watch } from 'vue'

  defineProps<{
  }>()

  const name = ref(formStore.getters.name)
  watch(name, () => {
    formStore.commit('setName', name);
  });

  const email = ref(formStore.getters.email)
  watch(email, () => {
    formStore.commit('setEmail', email);
  });

</script>

<template>
  <div class="sign-up-form-step">
    <div class="flex-column align-center pt-6">
      <h2>Account Information</h2>
      <input
        v-model="name"
        class="mb-4"
        placeholder="Name"
      />
      <input
        v-model="email"
        class="mb-4"
        placeholder="Email Address"
      />
    </div>
  </div>
</template>

<style scoped>
</style>

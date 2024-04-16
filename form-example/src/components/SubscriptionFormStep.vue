<script setup lang="ts">
  import formStore from '../store/FormStore'
  import { ref, watch } from 'vue'

  defineProps<{
  }>()

  const donation = ref(formStore.getters.donation)
  watch(donation, () => {
    formStore.commit('setDonation', donation);
  });

  const frequency = ref(formStore.getters.frequency)
  watch(frequency, () => {
    formStore.commit('setFrequency', frequency);
  });

</script>

<template>
  <div class="sign-up-form-step">
    <div class="flex-column align-center justify-center text-center pt-6">
      <h2>Subscription Information</h2>
      <input
        v-model="donation"
        class="mb-4"
        placeholder="Donation (USD)"
        type="number"
        step="0.5"
      />
      <input
        v-model="frequency"
        class="mb-4"
        placeholder="Updates per-day"
        type="number"
        step="1"
      />
    </div>
  </div>
</template>

<style scoped>
</style>

<script setup lang="ts">
  import formStore from '../store/FormStore'
  import { computed, ref, watch } from 'vue'

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

  const frequencyOptions = computed(() => [ '-', ...Array.from({ length: 9}, (v,k) => k+1) ]);
</script>

<template>
  <div class="sign-up-form-step">
    <div class="flex-column align-center justify-center text-center pt-6">
      <h2>Donations and Jokes</h2>
      <div class="p-relative d-flex align-center mb-4">
        <label>$</label>
        <input
          v-model="donation"
          placeholder="Donation (USD)"
          type="number"
          step="0.5"
        />
      </div>
      <div class="p-relative d-flex align-center mb-4">
        <label>Number of Jokes per day:</label>
        <select
          v-model="frequency"
          type="number"
          step="1"
        >
          <option
            v-for="option in frequencyOptions"
            :value="option"
          >
            {{ option }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped>
  label {
    margin-right: 6px;
  }
  select {
    min-width: 60px;
    text-align: center;
  }
</style>

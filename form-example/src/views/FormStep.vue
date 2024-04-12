<script setup lang="ts">
  import { computed } from 'vue'
  import { RouterLink, RouterView } from 'vue-router'
  import FormData from '../constants/FormData.ts'
  import formStore from '../store/FormStore.ts'

  const props = defineProps<{
    title: string
    stepIdx: number,
    form: any,
    validator: (data) => string[],
  }>()

  const stepValidationErrors = computed(() => props.validator(formStore.getters.formSubmitData));
  const validationErrors = computed(() => FormData.steps.some((step) => step.validator(formStore.getters.formSubmitData).length > 0));

  function submit() {
    alert(JSON.stringify(formStore.getters.formSubmitData));
  }
</script>

<template>
  <main>
    <h1 class="title">{{ title }}</h1>
    <div class="form-step-links">
      <RouterLink
        v-for="(step, idx) in FormData.steps"
        :class="['step-link', { error: step.validator(formStore.getters.formSubmitData).length > 0 }]"
        :key="`step-${idx}`"
        :to="`/${step.name}`"
      >
        {{step.title}}
      </RouterLink>
    </div>

    <component :is="form" />

    <div
      v-if="stepValidationErrors.length"
      class="flex-column errors mt-2"
    >
      <div
        v-for="(error, idx) in stepValidationErrors"
        :key="`error-${idx}`"
      >
        {{ error }}
      </div>
    </div>

    <button
      class="mt-6"
      :disabled="validationErrors"
      @click="submit"
    >
      Submit
    </button>
  </main>
</template>

<style scoped>
  .form-step-links {
    display: flex;
    flex-direction: row;

    .step-link {
      color: #090;

      &.error {
        color: #d00;
      }
    }
  }

  .errors {
    background-color: #fdd;
    border-radius: 3px;
    padding: 6px 12px;
    border: 1px solid #d00;
  }
</style>

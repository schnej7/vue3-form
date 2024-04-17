<script setup lang="ts" name="FormStep">
  import { computed } from 'vue'
  import { RouterLink } from 'vue-router'
  import FormData from '../constants/FormData'
  import formStore from '../store/FormStore'
  import type { FormSubmitData } from '../types/FormSubmitData.d'

  const props = defineProps<{
    title: string
    stepIdx: number,
    form: any,
    validator: (data: FormSubmitData) => string[],
  }>()

  const stepValidationErrors = computed(() => props.validator(formStore.getters.formSubmitData));
  const anyValidationErrors = computed(() => FormData.steps.some((step) => step.validator(formStore.getters.formSubmitData).length > 0));
  const previousStep = computed(() => {
    return props.stepIdx - 1 >= 0 ? FormData.steps[props.stepIdx - 1] : null;
  });
  const nextStep = computed(() => {
    return props.stepIdx + 1 < FormData.steps.length ? FormData.steps[props.stepIdx + 1] : null;
  });

  function submit() {
    // TODO - Make an API call here
    alert(JSON.stringify(formStore.getters.formSubmitData));
  }
</script>

<template>
  <main>
    <div class="form-step-links text-center align-center">
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

    <div class="d-flex align-center mt-6 text-center">
      <RouterLink
        :class="['step-link', { disabled: !previousStep }]"
        :to="`/${previousStep ? previousStep.name : ''}`"
      >
        Previous Step
      </RouterLink>
      <button
        :disabled="anyValidationErrors"
        @click="submit"
      >
        Submit
      </button>
      <RouterLink
        :class="['step-link', { disabled: !nextStep || stepValidationErrors.length }]"
        :to="`/${nextStep ? nextStep.name : ''}`"
      >
        Next Step
      </RouterLink>
    </div>
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

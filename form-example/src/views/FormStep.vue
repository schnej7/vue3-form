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
        :class="['arrow left', { disabled: !previousStep }]"
        :to="`/${previousStep ? previousStep.name : ''}`"
      />
      <button
        :disabled="anyValidationErrors"
        @click="submit"
      >
        Submit
      </button>
      <RouterLink
        :class="['arrow right', { disabled: !nextStep || stepValidationErrors.length }]"
        :to="`/${nextStep ? nextStep.name : ''}`"
      />
    </div>
  </main>
</template>

<style scoped>
  .form-step-links {
    display: flex;
    flex-direction: row;
    font-size: 1rem;

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

  .arrow {
    width: 8px;
    height: 30px;
    background-color: #085d8f;
    position: relative;
    cursor: pointer;
    margin: 0 20px;
    transition: all 100ms linear;

    &.disabled {
      background-color: #666;

      &:before {
        border-bottom: 30px solid #666;
      }
    }

    &:before {
      content: '';
      display: block;
      position: absolute;
      top: -29px;
      left: -50%;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-bottom: 30px solid #085d8f;
    }

    &.right {
      transform: rotate(90deg);
    }

    &.left {
      transform: rotate(-90deg);
    }
  }
</style>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import formStore from '../store/FormStore'

  const INTERESTS = [
    {
      name: 'Sports',
      id: 'sports',
      children: [
        {
          name: 'Baseball',
          id: 'baseball',
        },
        {
          name: 'Basketball',
          id: 'basketball',
        },
        {
          name: 'Football',
          id: 'football',
        },
      ],
    },
    {
      name: 'Animals',
      id: 'animals',
      children: [
        {
          name: 'Cats',
          id: 'cats',
        },
        {
          name: 'Dogs',
          id: 'dogs',
        },
        {
          name: 'Fish',
          id: 'fish',
        },
      ],
    },
    {
      name: 'Books',
      id: 'books',
      children: [
        {
          name: 'Fiction',
          id: 'fiction',
        },
        {
          name: 'Non-fiction',
          id: 'non-fiction',
        },
      ],
    },
  ];

  const selectedInterests = computed(() => formStore.getters.interests);
  const firstCategoryWithSelection = INTERESTS.findIndex((category) => category.children.some((interest) => selectedInterests.value.has(interest.id)));
  const selectedCategoryIdx = ref(firstCategoryWithSelection >= 0 ? firstCategoryWithSelection : 0);
  const categoryInterests = computed(() => INTERESTS[selectedCategoryIdx.value].children);

  function toggleInterest(id: string) {
    formStore.commit('toggleInterest', id);
  }

  defineProps<{
  }>()

</script>

<template>
  <div class="sign-up-form-step">
    <div class="flex-column align-center pt-6">
      <h2>Categories</h2>
      <div class="d-flex flex-wrap justify-center mb-6">
        <div
          v-for="(category, idx) in INTERESTS"
          :key="`category-${idx}`"
          :class="['interest ml-4 mr-4 mb-4 mt-4', { selected: idx === selectedCategoryIdx, hasSelections: INTERESTS[idx].children.some((i) => selectedInterests.has(i.id)) }]"
          @click="selectedCategoryIdx = idx"
        >
          {{ category.name }}
        </div>
      </div>
      <h2>Interests</h2>
      <div class="d-flex flex-wrap justify-center mb-6">
        <div
          v-for="(interest, idx) in categoryInterests"
          :key="`interest-${idx}`"
          :class="['interest ml-4 mr-4 mb-4 mt-4', { selected: selectedInterests.has(interest.id) }]"
          @click="toggleInterest(interest.id)"
        >
          {{ interest.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.interest {
  height: 110px;
  width: 110px;
  line-height: 110px;
  text-align: center;
  user-select: none;
  cursor: pointer;
  border-radius: 3px;
  background-color: #ddd;
  transition: all 100ms linear;

  &.hasSelections {
    color: #226622;
    text-decoration: underline;
  }

  &.selected {
    background-color: #226622;
    color: #fff;
  }

  @media (min-width: 1024px) {
    height: 160px;
    width: 160px;
    line-height: 160px;
  }
}
</style>

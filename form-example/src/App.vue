<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="title">Vue3 Form Example</div>
    <div class="flex-spacer" />
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
  header {
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    align-items: center;
    padding: 0 8px;
    background-color: #fff;
    border-bottom: 1px solid #ddd;

    .title {
    }
  }

  main {
    margin-top: 40px;
    padding-top: 1rem;
  }
</style>

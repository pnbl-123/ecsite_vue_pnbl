<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main class="flex-1">
    <RouterView />
  </main>
  <footer><h1>THis is footer</h1></footer>
</template>

<style lang="scss">
@import "@/assets/main.css";
@import "@/assets/scss/landing-page.scss";
</style>

<script setup lang="ts">
import { MENU_LIST } from "@/constants/drawer";
</script>

<template>
  <nav
    class="navbar justify-between w-full flex py-[24px] px-[80px] items-center navbar-expand navbar-dark bg-white text-md shadow-md"
  >
    <img src="@/assets/logo_rikkei.svg" alt="logo_rikkei" />

    <div class="d-flex justify-end">
      <RouterLink
        class="gray-link"
        v-for="(item, idx) in MENU_LIST"
        :to="item.path"
        :key="item.id"
        ><span
          v-if="item.name !== 'login'"
          :class="idx !== MENU_LIST.length - 1 ? 'mr-8' : 'mr-0'"
          >{{ item.name }}</span
        ></RouterLink
      >
    </div>
  </nav>
</template>

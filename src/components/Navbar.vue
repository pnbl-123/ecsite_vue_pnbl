<script setup lang="ts">
import { MENU_LIST } from "@/constants/drawer";
</script>

<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-white shadow-sm d-flex justify-content-between"
  >
    <img src="@/assets/logo_rikkei.svg" alt="logo_rikkei" />

    <div class="d-flex justify-end flex-row align-items-center">
      <div v-for="item in MENU_LIST" :key="item.id">
        <RouterLink
          class="gray-link me-5"
          :to="item.path"
          v-if="item.name !== 'login'"
          >{{ $t(`${item.name}`) }}</RouterLink
        >
      </div>
      <select class="primary-dropdown" v-model="$i18n.locale">
        <option value="ja">{{ $t("ja-JP") }}</option>
        <option value="vi">{{ $t("vi-VN") }}</option>
        <option value="en">{{ $t("en-US") }}</option>
      </select>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  padding: 24px 80px;
}

.primary-dropdown {
  width: 148px;
}

.router-link-active {
  color: $primary-color;
}
</style>

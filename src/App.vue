<template>
  <NavBar />
  <router-view>
    <template #default="{ Component, route }">
      <keep-alive>
        <component
          :is="Component"
          v-if="route.meta.keepAlive"
          :key="route.path"
        />
      </keep-alive>
      <component
        :is="Component"
        v-if="!route.meta.keepAlive"
        :key="route.path"
      />
    </template>
  </router-view>
</template>

<script setup lang="ts">
import NavBar from "@/components/NavBar.vue"
</script>
<style>
@import "@/style/global.css";
</style>

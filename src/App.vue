<template>
  <div class="app">
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
  </div>
</template>

<script setup lang="ts"></script>
<style>
@import "@/style/global.css";
</style>

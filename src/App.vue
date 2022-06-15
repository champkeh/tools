<template>
  <main>
    <div>{{ name }}</div>
    <button @click="toggleName">switch</button>
  </main>
</template>

<script setup>
import {ref, computed} from 'vue'

const on = ref(true)
const name = computed(() => on.value ? 'Deno' : 'Vue3')

function toggleName() {
  on.value = !on.value
}
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
div {
  margin: 20px;
}
button {
  width: 80%;
  height: 40px;
}
</style>

<script setup lang="ts">
  import { useCustomFetch } from './composables/use-custom-fetch'

  const { data } = useCustomFetch<any>('characters')
</script>

<template>
  <div class="bg-slate-800 text-white">{{ data }}</div>
</template>

<style scoped></style>

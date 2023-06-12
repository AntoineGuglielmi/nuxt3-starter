<script lang="ts" setup>
  defineProps<{
		id: number;
    title: string;
		body: string;
  }>();
</script>

<template>
  <div class="flex flex-col gap-1r ">
    <h3 class="font-thin text-orange-400">{{ title }}</h3>
    <p>{{ body }}</p>
  </div>
</template>

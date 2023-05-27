<script lang="ts" setup>
  const props = withDefaults(defineProps<{
		type?: string
	}>(), {
		type: 'default'
	});

	const buttonClass = computed(() => {
		return {
			'bg-blue-300': props.type === 'default'
		};
	});
</script>

<template>
  <button
		:class="buttonClass"
		class="py-[0.75rem] px-[1.5rem] rounded-[0.25rem] text-gray-50"
	>
		<slot />
	</button>
</template>

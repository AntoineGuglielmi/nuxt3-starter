<script lang="ts">

	export default {
		props: {
			id: Number,
			title: String,
			body: String
		},
	}

</script>

<template>
  <div
		class="bg-slate-100 p-1r h-1/1 rounded-1r"
	>
		<DomH3 class="font-bold text-orange-400 border-y border-y-orange-400 mt-0">{{ id }}: {{ title }}</DomH3>
		<p>{{ body }}</p>
  </div>
</template>

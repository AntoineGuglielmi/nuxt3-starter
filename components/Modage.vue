<script lang="ts" setup>

  withDefaults(defineProps<{
		label: string;
		href: string;
		more?: Array<{
			label: string;
			href: string;
		}>;
	}>(),{
		more: () => []
	});

</script>

<template>
  <div class="bg-slate-50 p-1r">
		<NuxtLink :to="href" target="_blank">{{ label }}</NuxtLink>
		<ul
			v-if="more.length"
			class="mt-1r flex flex-col items-start"
		>
			<li
				v-for="(_more, index) in more"
				:key="index"
				class="bg-slate-100 p-1r"
			>
				<NuxtLink :to="_more.href" target="_blank">{{ _more.label }}</NuxtLink>
			</li>
		</ul>
	</div>
</template>

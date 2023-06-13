<script lang="ts" setup>
const {
	$StringHelper,
	$NumberHelper
} = useNuxtApp();

const {
	ucFirst
} = $StringHelper();

const installedModules: Array<{
	label: string;
	href: string;
	more?: Array<{
		label: string;
		href: string;
	}>;
}> = [
	{
		label: 'nuxt-indexes-ts',
		href: 'https://www.npmjs.com/package/nuxt-indexes-ts'
	},
	{
		label: 'Nuxt Tailwind',
		href: 'https://tailwindcss.nuxtjs.org/',
		more: [
			{
				label: 'colorgen.dev',
				href: 'https://colorgen.dev/'
			}
		]
	},
	{
		label: 'Nuxt Icon',
		href: 'https://nuxt.com/modules/icon',
		more: [
			{
				label: 'Icons',
				href: 'https://icones.js.org/'
			}
		]
	},
]
</script>

<template>
	<LayoutContainer>

		<DomH1>Nuxt 3 starter</DomH1>

		<LayoutSection>

			<template #title><DomH2>Installed packages/modules:</DomH2></template>

			<div class="flex flex-col gap-1r w-1/1">
				<Modage
					v-for="(modage, index) in installedModules"
					:key="index"
					v-bind="modage"
				/>
			</div>

		</LayoutSection>
	</LayoutContainer>
</template>

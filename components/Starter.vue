<script lang="ts" setup>
const {
	$StringHelper,
	$NumberHelper
} = useNuxtApp();

const {
	ucFirst
} = $StringHelper();

const topics = [
	{
		id: 1,
		title: "The Quick Brown Fox",
		body: "The quick brown fox jumps over the lazy dog."
	},
	{
		id: 2,
		title: "Lorem Ipsum",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
	},
	{
		id: 3,
		title: "JavaScript Basics",
		body: "JavaScript is a programming language that allows you to add interactivity to websites."
	},
	{
		id: 4,
		title: "The Great Gatsby",
		body: "The Great Gatsby is a novel written by F. Scott Fitzgerald."
	},
	{
		id: 5,
		title: "Web Development",
		body: "Web development involves building and maintaining websites and web applications."
	},
	{
		id: 6,
		title: "The Beatles",
		body: "The Beatles were an English rock band formed in Liverpool in 1960."
	},
	{
		id: 7,
		title: "Artificial Intelligence",
		body: "Artificial intelligence is the simulation of human intelligence by machines."
	},
	{
		id: 8,
		title: "Space Exploration",
		body: "Space exploration is the discovery and exploration of celestial structures in outer space."
	},
	{
		id: 9,
		title: "The Mona Lisa",
		body: "The Mona Lisa is a famous portrait painting by Leonardo da Vinci."
	},
	{
		id: 10,
		title: "Climate Change",
		body: "Climate change refers to long-term shifts in temperature and weather patterns."
	},
	{
		id: 11,
		title: "The Theory of Relativity",
		body: "The theory of relativity was developed by Albert Einstein in the early 20th century."
	},
	{
		id: 12,
		title: "The Odyssey",
		body: "The Odyssey is one of two major ancient Greek epic poems attributed to Homer."
	},
	{
		id: 13,
		title: "Renaissance Art",
		body: "Renaissance art is characterized by a renewed interest in human-centered themes and realistic representation."
	}
];

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

			<Topic
				v-for="(topic, index) in topics"
				:key="index"
				v-bind="{ ...topic }"
			>{{ topic }}</Topic>

		</LayoutSection>
	</LayoutContainer>
</template>

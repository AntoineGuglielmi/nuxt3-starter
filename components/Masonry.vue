<script lang="ts" setup>
import { topics } from '~/data';
</script>

<template>

	<DomH1>Masonry</DomH1>

	<LayoutMasonry
		:items="topics"
	>
		<template #item="{ item }">
			<Topic v-bind="item" />
		</template>
	</LayoutMasonry>

</template>

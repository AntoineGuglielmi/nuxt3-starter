<script lang="ts" setup>

import { topics } from '~/data';

const grid = ref(null);
const bricks = ref([]);

onMounted(() => {
	window.onload = resizeAllGridItems();
	window.addEventListener("resize", resizeAllGridItems);
});

const resizeAllGridItems = () => {
	if (!bricks.value.length) return;
	// for(const brick of bricks.value){
	// 	resizeGridItem(brick);
	// }
	bricks.value.map(brick => {
		resizeGridItem(brick);
	})
}

const resizeGridItem = (item: any) => {
	if (!grid.value) return;
	const rowHeight = parseInt(window.getComputedStyle(grid.value).getPropertyValue('grid-auto-rows'));
	const rowGap = parseInt(window.getComputedStyle(grid.value).getPropertyValue('grid-row-gap'));
	const rowSpan = Math.ceil((item.$el.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
	console.log({
		item,
		rowHeight,
		rowGap,
		rowSpan
	});
	item.$el.style.gridRowEnd = "span "+rowSpan;
}

</script>

<template>
	<LayoutContainer>

		<DomH1>Masonry</DomH1>

		<div
			ref="grid"
			id="masonry"
			class="masonry grid gap-1r"
		>

			<Topic
				v-for="(topic, index) in topics"
				:key="index"
				ref="bricks"
				v-bind="{ ...topic }"
			/>

		</div>

	</LayoutContainer>
</template>

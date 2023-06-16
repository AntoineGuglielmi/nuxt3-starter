<script lang="ts" setup>

defineProps<{
	items: Array<unknown>;
}>();

const grid = ref(null);
const itemsArray = ref([]);

onMounted(() => {
	window.onload = resizeAllGridItems();
	window.addEventListener("resize", resizeAllGridItems);
});

const resizeAllGridItems = () => {
	if (!itemsArray.value.length) return;
	itemsArray.value.map(item => {
		resizeGridItem(item);
	})
}

const resizeGridItem = (item: any) => {
	if (!grid.value) return;
	const rowHeight = parseInt(window.getComputedStyle(grid.value).getPropertyValue('grid-auto-rows'));
	const rowGap = parseInt(window.getComputedStyle(grid.value).getPropertyValue('grid-row-gap'));
	const rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
	item.style.gridRowEnd = "span "+rowSpan;
}

</script>

<template>

		<div
			ref="grid"
			id="masonry"
			class="masonry grid gap-1r"
		>

			<div
				v-for="(item, index) in items"
				:key="index"
				ref="itemsArray"
			>
				<slot name="item" v-bind="{ item }" />
			</div>

		</div>

</template>

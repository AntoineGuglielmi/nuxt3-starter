<script lang="ts" setup>

const props = withDefaults(defineProps<{
	items: Array<unknown>;
	gapX?: string|number;
}>(), {
	gapX: 16
});

const grid = ref(null);
const itemsArray = ref([]);
const firsts = ref(0);
const rowSpanStart = ref(0);
const cols = ref(0);

onMounted(() => {
	window.onload = resizeAllGridItems();
	window.addEventListener("resize", resizeAllGridItems);
});

const resizeAllGridItems = () => {
	cols.value = window.getComputedStyle(grid.value).getPropertyValue('grid-template-columns').split(' ').length;
	if (!itemsArray.value.length) return;
	itemsArray.value.map(item => {
		resizeGridItem(item);
	})
}

const resizeGridItem = (item: any) => {
	if (!grid.value) return;
	const rowHeight = parseInt(window.getComputedStyle(grid.value).getPropertyValue('grid-auto-rows'));
	const rowGap = parseInt(window.getComputedStyle(grid.value).getPropertyValue('grid-column-gap')) || 0;
	const itemHeight = item.querySelector('.content').getBoundingClientRect().height;
	const rowSpan = Math.ceil(itemHeight / rowHeight) + rowGap;
	if (firsts.value <= cols.value) {
		item.style.gridRowStart = "0";
		if (firsts.value === cols.value) {
 			rowSpanStart.value = rowSpan;
		}
	} else {
		item.style.gridRowStart = rowSpanStart;
		rowSpanStart.value = Math.min(rowSpanStart.value,rowSpan);
	}
	item.style.gridRowEnd = "span "+rowSpan;
	firsts.value++;
}

</script>

<template>

		<div
			ref="grid"
			id="masonry"
			class="masonry grid"
		>

			<div
				v-for="(item, index) in items"
				:key="index"
				ref="itemsArray"
			>
				<div class="content">
					<slot
						name="item"
						v-bind="{ item }"
					/>
				</div>
			</div>

		</div>

</template>

<script lang="ts" setup>
const {
	$StringHelper,
	$NumberHelper
} = useNuxtApp();

const {
	ucFirst
} = $StringHelper();
</script>

<template>
	<LayoutContainer>

		<DomH1>Nuxt 3 starter</DomH1>

		<LayoutSection>

			<template #title><DomH2>Section h2 title</DomH2></template>

			<Icon name="ph:hand-waving-light"/>

			<p>Section body</p>
			<p><span class="text-orange-400">{{ ucFirst('string') }}</span> modified by <code>StringHelper().ucFirst()</code> method.</p>
			<p>Formatted numbers, using <code>NumberHelper().toPrice()</code> and <code>NumberHelper().toPercent()</code> methods:</p>
			<ul>
				<li>{{ $NumberHelper().toPrice(13.37) }}</li>
				<li>{{ $NumberHelper().toPrice(42) }}</li>
				<li>{{ $NumberHelper().toPercent(0.133) }}</li>
			</ul>

		</LayoutSection>
	</LayoutContainer>
</template>

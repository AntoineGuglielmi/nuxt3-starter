<script lang="ts" setup>
import { StringHelper, NumberHelper } from '~/utils';

const {
	ucFirst
} = StringHelper();
</script>

<template>
  <LayoutContainer>

		<DomH1>Nuxt 3 starter</DomH1>

		<LayoutSection>

			<p>Section body</p>
			<p><span class="text-orange-400">{{ ucFirst('string') }}</span> modified by StringHelper().</p>
			<p>Formatted numbers: {{ NumberHelper().toPrice(13.37) }}, {{ NumberHelper().toPrice(42) }}, {{ NumberHelper().toPercent(0.133) }}</p>

		</LayoutSection>
  </LayoutContainer>
</template>

<script lang="ts" setup>
import { StringHelper } from '~/utils';

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

		</LayoutSection>
  </LayoutContainer>
</template>

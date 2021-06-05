<template>
<!-- eslint-disable max-len --> <!-- eslint-disable no-tabs -->
	<ul class="catalog__list">
		<ProductItem v-for="product in products" :key="product.id" :product="product"></ProductItem>
	</ul>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  components: { ProductItem },
  props: ['products'],
};
</script>

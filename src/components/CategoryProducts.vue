<template>
    <base-card class="category-products">
        <div class="container">
            <!--header-->
            <CategoryHeader
            :tabs="tabs"
            :title="title"
            />
            <!--lis of products-->
            <div class="products">
                
                <SingleProduct 
                v-for="product in products"
                :img="product.img"
                :name="product.name"
                :price="product.price"
                :rating="product.rating"
                />
            </div>
            <!--button-->
            <button class="btn">SEE ALL</button>
        </div>
    </base-card>
</template>

<script>
import CategoryHeader from './CategoryHeader.vue';
import SingleProduct from './SingleProduct.vue';

export default {
    props: {
        products: Object,
        tabs: Array,
        title: String
    },
    components: { CategoryHeader, SingleProduct },
    methods: {
        fetchImage(src){
            return new URL(src, import.meta.url).href;
        }
    }
}
</script>

<style scoped>


.category-products .btn {
  height: 48px;
  background: #f8f8f8;
  border: 2px solid #f8f8f8;
  max-width: calc(1440px - 190px);
  width: 100%;
  margin-top: 18px;
}

.products {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  gap: 20px;
  align-items: center;
}

@media (max-width: 1125px) {
    .products{
        grid-template-columns: 1fr 1fr 1fr;
    }
}
@media (max-width: 969px) {
  .products {
    grid-template-columns: 1fr 1fr;
  }
}



</style>
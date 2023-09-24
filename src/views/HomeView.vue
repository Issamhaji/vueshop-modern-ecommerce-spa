<template>
  <div>
    <the-banner />
    <category-products 
    :products="listWomeProducts"
    :tabs="listTabs"
    :title="womenTitle"
    ></category-products>

    <!-- <category-products 
    :products="listMenProducts"
    :tabs="listTabs"
    :title="menTitle"
    ></category-products> -->

    <collection-page />
    <sub-page />
    
  </div>
</template>

<script>
import TheBanner from '../components/TheBanner.vue';
import CategoryProducts from '../components/CategoryProducts.vue';
import CollectionPage from '../components/CollectionPage.vue';
import SubPage from '../components/SubscribePage.vue';

export default {
    data(){
        return{
            womenTitle: 'Women',
            menTitle: 'Men'
        };
    },
    components: {
        TheBanner,
        CategoryProducts,
        CollectionPage,
        SubPage
    },
    computed: {
        listWomeProducts() {
            return this.$store.getters['women/getProducts'];
        },
        listTabs(){
            return this.$store.getters['getTabs'];
        }
    },
    created(){
        this.loadProducts();
    },
    methods: {
        async loadProducts(){
            try{
                await this.$store.dispatch('women/listProducts');
            }catch (error){
                this.error = error.message || 'Something went wrong!';
            }
        }
    }
   
}
</script>


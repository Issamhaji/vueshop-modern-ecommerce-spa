<template>
         <div class="product-container">
            <div class="single-product">
                <div class="img-container">
                    <img :src="img" alt="" /> 
                </div>
            </div>
            <div class="product-content">
                <h6 class="name">
                    {{ name }}
                </h6>
                <div class="rating">
                    <span class="price">
                        {{ price }}
                    </span>
                    <span class="icon">
                        <img :src="rating" alt="" />
                    </span>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    props: ['img','name','price','rating']
}
</script>

<style scoped>

.img-container > img {
    width: 100%;
}


</style>
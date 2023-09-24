<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style scoped>

.card{
    margin-bottom: 100px;
    max-width: calc(1440px - 170px);
    width: 100%;
    padding: 0 20px 100px 20px;
    margin: auto;
}

</style>
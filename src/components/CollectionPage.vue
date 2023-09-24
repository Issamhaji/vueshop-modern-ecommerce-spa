<template>
    <base-card>
        <div class="container">
            <div class="box1">
                <div class="img-content">
                    <img src="../assets/images/collection2.jpg">
                    <div class="content">
                        <span class="title">New Season</span>
                        <h3>LOOKBOOK COLLECTION</h3>
                    </div>
                </div>
            </div>
            <!--box2-->
            <div class="box2">
                <div class="img-content">
                    <img src="../assets/images/collection1.jpg">
                    <div class="content">
                        <span class="title">Sale</span>
                        <h3>GET UP TO <span class="promo">50% OFF</span></h3>
                    </div>
                </div>
            </div>
        </div>
    </base-card>
</template>

<style scoped>


.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
}
.img-content  {
    position: relative;
    width: 100%;
    height: 100%;
}
.img-content img {
    width: 100%;
    object-fit: cover;

}
.content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffffff;
    padding: 16px 32px;
    text-align: center;
    border-radius: 4px;
}
.title {
    text-align: center;
    font-weight: 600;
    font-size: 12px;
    line-height: 13px;
    margin-bottom: 6px;
    opacity: 0.6;
    text-transform: uppercase;
}

h3{
    font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  text-transform: uppercase;
}
.promo{
    color: #E91E63;
}
@media (max-width: 969px) {
  .container {
    grid-template-columns: 1fr;
  }
}

</style>
<template>
    <div class="subscribe">
        <div class="container">
            <h6>special offer</h6>
            <h3>
                Subscribe <br />
                And <span> Get 10% Off </span>
            </h3>
            <input type="text" placeholder="Enter your Email" /><br>
            <button class="btn">Subscribe</button>
            <div class="img-container left">
                <img src="../assets/images/imgleft.png" alt="" />
            </div>
            <div class="img-container right">
                <img src="../assets/images/imgright.png" alt="" />
            </div>
        </div>
    </div>
</template>

<style scoped>

.subscribe{
    width: 100%;
    background-color: #F3F2F2;
    padding: 80px 0;
    margin-bottom: 100px;
}
.container{
    max-width: 532px;
    width: 100%;
    margin: auto;
    background-color: white;
    position: relative;
    text-align: center;
    padding: 80px 0;
}

.container h6{
    font-weight: 600;
  font-size: 12px;
  line-height: 13px;
  opacity: 0.4;
}
.container h3{
    font-weight: 700;
  font-size: 26px;
  max-width: 300px;
  text-align: center;
  margin: auto;
  margin-bottom: 32px;
}
.container h3 span{
    color: #e91e63;
}
.container input {
  height: 50px;
  max-width: 340px;
  margin: auto;
  background: #f8f8f8;
  text-align: center;
  border: none;
  outline: none;
  width: 100%;
  margin-bottom: 20px;
}
.container .btn {
  max-width: 340px;
  width: 100%;
  height: 64px;
  background: #121212;
  border: 2px solid #121212;
  margin: auto;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  text-transform: uppercase;
  color: #ffffff;
  opacity: 0.9;
}
.container .img-container.left{
    position: absolute;
    top: 50%;
    left: -10%;
    transform: translate(-50%, -50%);
}
.container .img-container.right{
    position: absolute;
    top: 50%;
    left: 107%;
    transform: translate(-50%, -50%);
}
@media (max-width: 969px) {
  .container .img-container {
    display: none;
  }
}

</style>
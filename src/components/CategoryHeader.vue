<template>
    <div class="category-header">
        <h3>{{ title }}</h3>
        <div class="tabs">
            <div
            v-for="(tab, i) in tabs"
            :key="i"
            class="tab"
            @click="active = i"
            :class="{active: active === i  }"
            >{{ tab }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            active: 0,
        };
    },
    props: {
      title: String,
      tabs: Array
    },

}
</script>

<style scoped>

.category-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
.category-header h3 {
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 25px;
}
.tabs {
    display: flex;
    align-items: center;
}
.tabs .tab {
    font-weight: 600;
  font-size: 12px;
  line-height: 13px;
  opacity: 0.6;
  transition: 0.3s;
  margin-right: 32px;
  cursor: pointer;
}
.tabs .tab.active,
.tabs .tab:hover {
  opacity: 1;
}

@media (max-width: 969px) {
  .tabs {
    display: none;
  }
  h3{
    margin: auto;
    }
}
</style>
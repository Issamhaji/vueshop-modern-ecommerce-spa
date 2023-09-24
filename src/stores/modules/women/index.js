export default {
    namespaced: true,
    state(){
        return {
            womenProducts: [],
        };
    },
    mutations: {
      listProducts(state, payload){
        state.womenProducts = payload;
      }
    },
    actions: {
      async listProducts(context, payload){
        const response = await fetch(
          'https://e-shop-881db-default-rtdb.firebaseio.com/women/womenProducts.json'
        );
        const responseData = await response.json();
        if(!response.ok){
          const error = new Error(responseData.message || 'Failed to fetch!');
          throw error;
        }
        const products = [];
        for(const key in responseData){
          const product = {
            id: key,
            img: responseData[key].img,
            name: responseData[key].name,
            price: responseData[key].price,
            rating: responseData[key].rating,
            sale: responseData[key].sale
          }
          products.push(product);
        }
       
        context.commit('listProducts', products);
      }
    },
    getters: {
        getProducts(state){
            return state.womenProducts;
        }
    }

}
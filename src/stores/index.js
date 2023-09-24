import {createStore} from 'vuex'

import MenModule from '../stores/modules/men/index.js'
import WomenModule from '../stores/modules/women/index.js'
import authModule from '../stores/modules/Auth/index.js'

const store = createStore({
    modules: {
        men: MenModule,
        women: WomenModule,
        auth: authModule,
    },
    state(){
        return{
            categoryTitle: [
                "NEW ARRIVALS",
                "SPECIALS",
                "BESTSELLERS",
                "MOST VIEWED",
                "FEATURED PRODUCTS",
            ]
        };
    },
    getters: {
        getTabs(state){
            return state.categoryTitle;
        }
    }
});

export default store;
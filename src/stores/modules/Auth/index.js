let timer;

export default {
    namespaced: true,
    state(){
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        return {
          userId: userId ? userId : null,
          token: token ? token : null,
          didAutoLogout: false,
        };
    },
    mutations: {
        setUser(state, payload){
            state.userId = payload.userId;
            state.token = payload.token
        },
        setAutoLogout(state) {
            state.didAutoLogout = true;
        }
    },
    actions: {
        login(context, payload){
            return context.dispatch('Auth',{
                ...payload,
                mode: 'login'
            });
        },
        signup(context, payload){
            return context.dispatch('Auth',{
                ...payload,
                mode: 'signup'
            });
        },
        async Auth(context, payload){
            const mode = payload.mode;
            let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBdcK2fVhCmRlUpu-K64-iNu2JtgMLMB64';
            if(mode === 'signup'){
                url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBdcK2fVhCmRlUpu-K64-iNu2JtgMLMB64';
            }
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true
                })
            });
            const responseData = await response.json();
            if (!response.ok) {
                const error = new Error(
                  'Failed to authenticate. Check your login data.'
                );
                throw error;
            }

            // stocke data in localstorage
            const expiresIn = +responseData.expiresIn * 1000;
            // const expiresIn = 5000;
            const expirationDate = new Date().getTime() + expiresIn;

            localStorage.setItem('token', responseData.idToken);
            localStorage.setItem('userId', responseData.localId);
            localStorage.setItem('tokenExpiration', expirationDate);

            timer = setTimeout(function() {
                context.dispatch('autoLogout');
              }, expiresIn);
            

            context.commit('setUser', {
                token: responseData.idToken,
                userId: responseData.localId
            });
        },

        logout(context) {
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            localStorage.removeItem('tokenExpiration');
        
            clearTimeout(timer);
        
            context.commit('setUser', {
              token: null,
              userId: null
            });
          },
          autoLogout(context) {
            context.dispatch('logout');
            context.commit('setAutoLogout');
          }
    },
    getters: {
        isAuth(state){
            return Boolean(state.token);
        }
    }

}
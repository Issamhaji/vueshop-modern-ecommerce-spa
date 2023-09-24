<template>
    <base-card>
        <div class="lg-container">
            <form @submit.prevent="submitForm" class="form-container">
                <h3 v-if="titleMode === 'login'">If you have an account with us, please log in.</h3>
                <h3 v-else="titleMode">please create an account.</h3>
                <div class="email">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" v-model.trim="email" />
                </div>
                <div class="password">
                    <label>Password</label>
                    <input type="password" placeholder="Your password" v-model.trim="password" />
                </div>
                <p v-if="!formIsValid">Please enter a valid email and password (must be at least 6 characters long).</p>
                <button type="submit" class="btn">{{SubmitButtonMode}}</button>
            </form>
            <div class="content">
                <div class="ls-border">
                    <div class="b-left"></div>
                    <span>or</span>
                    <div class="b-right"></div>
                </div>
                <div class="icons">
                    <span>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.9001 8.65004C25.5302 7.92384 26.0106 7.08033 26.3138 6.16794C26.617 5.25555 26.7369 4.29225 26.6668 3.33337C24.7324 3.48952 22.9368 4.3993 21.6668 5.86671C21.0586 6.57 20.5977 7.38817 20.3114 8.27278C20.0252 9.15739 19.9193 10.0904 20.0001 11.0167C20.9437 11.0246 21.8764 10.8152 22.7261 10.4048C23.5758 9.99441 24.3196 9.394 24.9001 8.65004ZM29.1001 21.05C29.1113 19.7729 29.4477 18.5197 30.0775 17.4087C30.7074 16.2977 31.61 15.3655 32.7001 14.7C32.0121 13.7088 31.1027 12.8914 30.0438 12.3128C28.985 11.7342 27.8059 11.4103 26.6001 11.3667C24.0001 11.1 21.6001 12.8834 20.2168 12.8834C18.8334 12.8834 16.8834 11.4 14.7168 11.4334C13.3003 11.48 11.9201 11.893 10.7108 12.632C9.50155 13.371 8.50444 14.4108 7.81676 15.65C4.88343 20.75 7.06676 28.3334 10.0001 32.45C11.3334 34.4667 13.0001 36.75 15.2001 36.6667C17.4001 36.5834 18.1168 35.3 20.6668 35.3C23.2168 35.3 24.0001 36.6667 26.1668 36.6167C28.3334 36.5667 29.8668 34.55 31.2668 32.5334C32.2585 31.0693 33.0332 29.4694 33.5668 27.7834C32.2459 27.2201 31.119 26.2822 30.3252 25.0856C29.5314 23.8889 29.1055 22.486 29.1001 21.05Z" fill="#111111"/>
                        </svg>
                    </span>
                    <span>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35.75 17.5L35.5859 16.8047H20.4688V23.2031H29.5C28.5625 27.6563 24.2109 30 20.6562 30C18.0703 30 15.3438 28.9141 13.5391 27.1641C11.6875 25.3672 10.5078 22.7188 10.5078 19.9922C10.5078 17.2969 11.7188 14.6016 13.4844 12.8281C15.2422 11.0625 17.9062 10.0625 20.5547 10.0625C23.5859 10.0625 25.7578 11.6719 26.5703 12.4063L31.1172 7.88281C29.7812 6.71094 26.1172 3.75781 20.4062 3.75781C16 3.75781 11.7734 5.44531 8.6875 8.52344C5.64062 11.5547 4.0625 15.9375 4.0625 20C4.0625 24.0625 5.55469 28.2344 8.50781 31.2891C11.6641 34.5469 16.1328 36.25 20.7344 36.25C24.9219 36.25 28.8906 34.6094 31.7188 31.6328C34.5 28.7031 35.9375 24.6484 35.9375 20.3984C35.9375 18.6094 35.7578 17.5469 35.75 17.5Z" fill="#121212"/>
                        </svg>
                    </span>
                    <span>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M37.3332 20.1053C37.3332 10.4718 29.5751 2.6665 19.9998 2.6665C10.4246 2.6665 2.6665 10.4718 2.6665 20.1053C2.6665 28.8092 9.00505 36.0238 17.2915 37.3332V25.1464H12.8883V20.1053H17.2915V16.2631C17.2915 11.8929 19.8775 9.47889 23.8383 9.47889C25.7352 9.47889 27.7188 9.81923 27.7188 9.81923V14.1086H25.5325C23.3798 14.1086 22.7082 15.4531 22.7082 16.832V20.1053H27.5154L26.7466 25.1464H22.7082V37.3332C30.9946 36.0238 37.3332 28.8092 37.3332 20.1053Z" fill="#121212"/>
                        </svg>
                    </span>
                </div>
            </div>
            <!--login bottom-->
            <div class="signup">
                <h3>New Customer?</h3>
                <button class="btn-signup" @click="switchAuthMode">{{ switchMode }}</button>
            </div>
        </div>
    </base-card>
</template>

<script>
export default {
    data(){
        return{
            email: '',
            password: '',
            mode: 'login',
            formIsValid: true,
        };
    },
    computed: {
        SubmitButtonMode(){
            if(this.mode === 'login'){
                return 'Login';
            }else{
                return 'Create an Account';
            }
        },
        switchMode(){
            if(this.mode === 'login'){
                return 'Create an Account';
            }else{
                return 'Login';
            }
        },
        titleMode(){
            return this.mode;
        }

    },
    methods: {
        async submitForm(){
            this.formIsValid = true;
            if (
              this.email === '' ||
              !this.email.includes('@') ||
              this.password.length < 6
            ){
                this.formIsValid = false;
                return;
            }
            const Actionpayload = {
                email: this.email,
                password: this.password
            }
            try {
                if(this.mode === 'login'){
                    await this.$store.dispatch('auth/login', Actionpayload)
                }else{
                    await this.$store.dispatch('auth/signup', Actionpayload);
                }
                const redirectUrl = '/';
                this.$router.replace(redirectUrl);
            }catch(err){
                this.error = err.message || 'Failed to authenticate, try later.';
            }
        },
        switchAuthMode() {
            if (this.mode === 'login') {
              this.mode = 'signup';
            } else {
              this.mode = 'login';
            }
        }
    }
}

</script>


<style scoped>

.lg-container{
    max-width: calc(1440px - 600px);
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
}
.form-container{
    width: 100%;
    padding: 100px 40px 40px 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.form-container h3 {
    text-align: center;
    margin-bottom: 40px;

}
.form-container > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.form-container > div > input {
    height: 48px;
    background: #f8f8f8;
    border: 2px solid #f8f8f8;
    border-radius: 4px;
    max-width: calc(1440px - 190px);
    width: 100%;
    margin: 16px 0;
    text-align: start;
    padding: 20px;
    outline: none;
    
}
.form-container .btn{
    height: 48px;
    background: black;
    color: #f8f8f8;
    max-width: calc(1440px - 190px);
    width: 100%;
    margin: 16px 0;
    padding: 14px 0;
    text-align: center;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
}

.ls-border{
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 20px;
}
.ls-border > div{
    max-width: 100px;
    border: 2px solid #E6E6E6;
    width: 100%;
    height: 0;
}
.icons{
    display: flex;
    gap: 10px;
}
.signup{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    max-width: calc(1440px - 190px);
    width: 100%;
    margin: auto;
}

.btn-signup{
    height: 48px;
    background: #f8f8f8;
    max-width: calc(1440px - 190px);
    width: 100%;
    margin: 16px 0;
    padding: 14px 0;
    text-align: center;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
}
</style>
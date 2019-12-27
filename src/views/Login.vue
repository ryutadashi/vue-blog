<template>
    <div id="login">
        <b-container fluid>
            <b-row align-h="center" align-content="center" class="vh-100">
                <div id="login-container">
                    <h3 class="text-center">Welcome to Blog App</h3>
                    <b-card>
                        <b-alert v-model="showDangerAlert" variant="danger" dismissible @dismissed="showDangerAlert = false">
                            Invalid email address and password.
                        </b-alert>
                        <b-form @submit.prevent="login()">
                            <b-form-group id="email-address-input-group" label="Email Address:" label-for="email-address-input">
                                <b-form-input id="email-address-input" v-model="user.emailaddress" type="email" required></b-form-input>
                            </b-form-group>
                            <b-form-group id="password-input-group" label="Password:" label-for="password-input">
                                <b-form-input id="password-input" v-model="user.password" type="password" required></b-form-input>
                            </b-form-group>
                            <div class="text-center">
                                <b-button variant="primary" type="submit">Login</b-button>
                            </div>
                        </b-form>
                    </b-card>
                </div>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            credencial: {
                emailaddress: 'example@email.com',
                password: "password"
            },
            user: {
                emailaddress: "",
                password: ""
            },
            showDangerAlert: false
        }
    },
    methods: {
        login() {
            if(this.credencial.emailaddress != this.user.emailaddress || this.credencial.password != this.user.password){
                this.showDangerAlert = true
            } else {
                this.$router.replace({ name: 'blogs' });
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    #login-container {
        width: 25rem;
    }
</style>
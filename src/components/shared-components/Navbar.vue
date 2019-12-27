<template>
    <div id="navbar">
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-container>
                <b-navbar-brand href="#">Blog App</b-navbar-brand>
                <b-navbar-nav>
                    <b-nav-item :to="{ name: 'blogs' }" replace>Blogs</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="" @click="logout()">Logout</b-nav-item>
                </b-navbar-nav>
            </b-container>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    methods: {
        logout() {
            this.$router.replace({ name: 'login' });
        }
    }
}
</script>

<style lang="scss">
    #navbar {
        margin-bottom: 1.5rem;
    }
</style>
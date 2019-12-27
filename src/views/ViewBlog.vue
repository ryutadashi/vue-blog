<template>
    <div id="view-blog">
        <navbar></navbar>
        <b-container>
            <b-row align-h="center">
                <b-col xl="5" lg="6" md="8" sm="10" cols="12">
                    <h2 class="text-center">{{ post.title }}</h2>
                    <p>{{ post.body }}</p>
                    <div class="text-center">
                        <b-button variant="danger" size="sm">Delete</b-button>
                        <b-button variant="link" size="sm" @click="goBack()">Back</b-button>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import Navbar from '../components/shared-components/Navbar'

export default {
    name: "ViewBlog",
    data() {
        return {
            post: {}
        }
    },
    components: {
        'navbar': Navbar
    },
    created: function() {
        this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.$route.params.id).then((res) => {
            this.post = res.body;
        }, (err) => {
            window.console.log(err);
        })
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
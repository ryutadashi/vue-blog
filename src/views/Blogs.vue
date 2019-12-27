<template>
    <div id="blogs">
        <navbar></navbar>
        <b-container>
            <div class="d-flex justify-content-between mb-4">
                <h3>Blogs</h3>
                <b-button variant="outline-primary" :to="{ name: 'add-blog'}">Add blog</b-button>
            </div>
            <blogs-list-card :posts-data="posts"></blogs-list-card>
        </b-container>
    </div>
</template>

<script>
import Navbar from '../components/shared-components/Navbar'
import BlogsListCard from '../components/blogs/BlogsListCard'

export default {
    name: "Blogs",
    components: {
        'navbar': Navbar,
        'blogs-list-card': BlogsListCard
    },
    data() {
        return {
            posts: []
        }
    },
    created: function() {
        this.$http.get('https://jsonplaceholder.typicode.com/' + 'posts').then((res) => {
            this.posts = res.body;
        }, (err) => {
            window.console.log(err);
        })
    }
}
</script>

<style lang="scss">

</style>
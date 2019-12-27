<template>
    <div id="blogs-list-card">
        <b-row>
            <template v-for="post in postsData">
                <b-col :key="post.id" xl="4" lg="4" md="6" sm="12" cols="12" class="mb-4 cursor-pointer" @click="viewBlog(post.id)">
                    <b-card :title="post.id + '. ' + post.title">
                        <b-card-text>{{ post.body }}</b-card-text>
                    </b-card>
                </b-col>
            </template>
        </b-row>
    </div>
</template>

<script>
export default {
    name: "BlogsListCard",
    props: ['postsData'],
    methods: {
        viewBlog(id) {
            this.$router.push({ name: 'view-blog', params: { id } });
        }
    }
}
</script>

<style lang="scss">

</style>
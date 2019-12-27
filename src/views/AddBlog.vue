<template>
    <div id="add-blog">
        <navbar></navbar>
        <b-container>
            <b-alert v-model="showSuccessAlert" variant="success" dismissible @dismissed="showSuccessAlert = false">
                Posts successfully added.
            </b-alert>
            <h4 class="text-center">Add Blog</h4>
            <b-row align-h="center" align-content="center">
                <b-col xl="6" lg="6" md="6" sm="10" cols="12">
                    <b-form @submit.prevent="addPost()">
                        <b-form-group id="title-input-group" label="Title:" label-for="title-input">
                            <b-form-input id="title-input" type="text" v-model="post.title" required></b-form-input>
                        </b-form-group>
                        <b-form-group id="description-input-group" label="Description:" label-for="description-input">
                            <b-form-textarea id="description-input" v-model="post.body" placeholder="Write something..." rows="5"></b-form-textarea>
                        </b-form-group>
                        <b-button variant="primary" block type="submit">Add Blog</b-button>
                        <div class="text-center">
                            <b-button variant="link" @click="goBack()">Back</b-button>
                        </div>
                    </b-form>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import Navbar from '../components/shared-components/Navbar'

export default {
    name: "AddBlog",
    components: {
        'navbar': Navbar
    },
     data() {
        return {
            post: {
                title: "",
                body: ""
            },
            showSuccessAlert: false
        }
    },
    methods: {
        addPost() {
            this.$http.post('https://jsonplaceholder.typicode.com/posts', this.post).then((res) => {
                if(res.ok){
                    this.showSuccessAlert = true;
                    this.post.title = "";
                    this.post.body = "";
                }
            }, (err) => {
                window.console.log(err);
            })
        },
        goBack() {
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
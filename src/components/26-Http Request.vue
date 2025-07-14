<template>

    <h2>HTTP REQUEST</h2>

    <!-- GET REQUEST -->
    <button @click="getPosts">LOAD POSTS</button>
    <h4 v-if="postsErr">{{ postsErr }}</h4>
    <template v-for="(post, index) in posts" :key="post.id">
        <h4>{{ index + 1 }} - {{ post.title }}</h4>
        <hr>
    </template>

    <!-- POST REQUEST -->
    <form @submit.prevent="createPost">
        <div>
            <label for="userId">Post User Id</label>
            <input type="text" id="userId" v-model="formData.usesrId">
        </div>
        <div>
            <label for="title">Post User Title</label>
            <input type="text" id="title" v-model="formData.title">
        </div>
        <div>
            <label for="body">Post User Body</label>
            <input type="text" id="body" v-model="formData.body">
        </div>
        <button>CREATE POST</button>
    </form>

</template>

<script>
import axios from 'axios'
export default {
    name: 'HTTP REQUEST',
    data() {
        return {

            posts: [],  // Reactive property to save response coming from api to be rendered on ui 
            postsErr: '',  // Reactive property to display error on ui if occurs any while getting data from an api

            formData: {
                usesrId: '',
                title: '',
                body: ''
            }
        }
    },
    methods: {
        // When user click on LOAD POSTS button this method will execute which will get data from an api
        getPosts() {
            axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
                console.log(res)
                // On succesfull get we will update the posts reactive property which will trigger re-render on <template>
                this.posts = res.data
            })
                .catch((err) => {
                    console.log(err)
                    this.postsErr = 'Error Retrieving Data'
                })
        },
        // When user click on CREATE POST button this method will execute which will send data to backend database
        createPost() {
            axios.post('https://jsonplaceholder.typicode.com/posts', this.formData).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        }
    }
}
</script>

<!-- 

To stimulate http get request we will use JSON PLACEHOLDER API, Since we need to render data in ui on click of button so we will create a method for it. 

To stimulate http post request we will again use JSON PLACEHOLDER API, This time we will make post request and pass user input to backend api using 'v-model' directive. 

-->
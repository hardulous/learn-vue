<template>
    
    <h2>TEMPLATE REFS</h2>

    <!-- Here inputRef is the reference to this input DOM element -->
    <input type="text" ref="inputRef">

    <!-- Here ref to the Custom component -->
    <PostList ref="postListRef"/>

</template>

<script>
import PostList from './26-Http Request.vue'
    export default {
        name: 'TEMPLATE REFS',
        mounted(){
            console.log(this.$refs)
            this.$refs.inputRef.focus()  // Accessing input element using ref and calling the native focus() method of it
        },
        components:{
            PostList
        }
    }
</script>

<!-- 

Template refs give us direct access to DOM elements or child components rendered in the template. They're useful when you need to interact with something Vue's reactivity doesn't handle, like native DOM APIs, focus, canvas, or 3rd-party libraries

Any DOM element we want to access inside a ref can be done using 'ref' attribute passed to the DOM element, Then we pass a ref label name to it ex, ref='refName'. Now we have a reference to the dom element with name refName which we can access in our logic using special variable called '$refs' which is component instance property. 

Ref can be place on custom component as well, But this time we will get the component instance, not a DOM element. Means we will have access to child component data, computed properties, methods etc. 

-->
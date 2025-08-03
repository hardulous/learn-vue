<template>
  
  <h2>LOGIN</h2>

</template>

<script>
// import { onBeforeRouteLeave } from 'vue-router';

export default {
    name: 'LOGIN',
    setup(){

        // Meta field can be access inside In-Component guard as well
        // onBeforeRouteLeave((to)=>{
        //     console.log("In-Component onBeforeRoute Called")
        //     console.log("Meta", to.meta)
        // })
    }
}
</script>

<!-- 

'meta' field of route object is commonly used for :: 

1. Defining access control (e.g. requiresAuth)
2. Custom route titles
3. Role-based permissions
4. Caching behavior

The drawback of 'meta' field is, We cannot pass meta directly via <RouterLink> or by Router.push() to change or attach metadata on navigation dynamically. Use query or params in <RouterLink> and Router.push() for this. 

-->
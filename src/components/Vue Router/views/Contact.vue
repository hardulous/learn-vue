<template>
  
  <h2>CONTACT PAGE</h2>

</template>

<script>
// import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router';

export default {
    name: 'CONTACT PAGE',
    setup(){

      // When the route changes because of params changed but the component is reused
      // onBeforeRouteUpdate((to, from)=>{
      //   console.log("About Component onBeforeRouteUpdate")
      //   console.log("From", from)
      //   console.log("To", to)
      // })

      // When we are navigating away from this route '/contact'
      // onBeforeRouteLeave((to, from)=>{
      //   console.log("About Component onBeforeRouteLeave")
      //   console.log("From", from)
      //   console.log("To", to)
      // })

    }
}
</script>

<!-- 

We can directly define route navigation guards inside route components with the help of route lifecycle method :: 

 (a). beforeRouteUpdate() / onBeforeRouteUpdate() => Called when the route that renders this component has changed ex, given a route with params `/users/:id`, when we navigate between `/users/1` and `/users/2` it will execute again. 

 Because the component is mounted while this happens, This navigation guard has access to `this` component instance 
 
 (b). beforeRouteLeave() / onBeforeRouteLeave() => Called when the route that renders this component is about to be navigated away from. It also has access to 'this' component instance. 

-->
<template>
  
  <h2>VUE ROUTER</h2>

  <!-- Navigation route links -->
  <!-- <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
    <RouterLink to="/posts">Posts</RouterLink>
  </nav> -->

  <!-- Named route links -->
  <nav>
    <RouterLink :to="{name:'home'}">Home</RouterLink>
    <RouterLink :to="{name:'about'}">About</RouterLink>
    <RouterLink :to="{name:'contact'}">Contact</RouterLink>
    <RouterLink :to="{name:'posts'}">Posts</RouterLink>
  </nav>

  <!-- Placeholder for route component -->
  <RouterView/>

  <!-- RouterView with different name -->
  <RouterView name="sideBar"/>
  <RouterView name="postBar"/>

</template>

<script>
export default {
    name: 'VUE ROUTER'
}
</script>

<style>

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

nav{
    font-size: 24px;
    border-bottom: 1px solid coral;
}

nav a{
    display: inline-block;
    padding: 5px 10px;
    text-decoration: none;
    margin: 10px;
    border-radius: 10px;
    border-bottom: 1px solid coral;
}

nav a.router-link-exact-active{
    background: coral;
    color: #fff
}

</style>

<!-- 

In this component we define the actual layout of our application along with route navigation design. 

'<RouterView/>' is a built-in component provided by Vue Router which acts like a placeholder or slot where vue-router dynamically renders the component based on current URL matches with route path. EX ::

When the route is ::

/ → <RouterView /> will render the Home component

/about → <RouterView /> will render the About component

In <template> we can also use it like kebab-case '<router-view />'. It is also know as route outlet can be put anywhere to adapt it to our layout. 

'RouterLink' is a Vue Router built-in component used to create navigation links in your application — just like <a> tags, but with client-side routing and no page reload. It is similar to REACT '<Link/>' component. 

We can also write it in kebab case '<router-link>'. Behind the scene it is '<a>' anchor tag 

'router-link-active' is a default class applied to the <RouterLink/> when the current route starts with the 'to' value based on fuzzy match. EX ::

<RouterLink to="/about">About</RouterLink>

Current route: /about/team → ✅ router-link-active is applied. But not router-link-exact-active

'router-link-exact-active' is a default class applied to the <RouterLink/> only when the route exactly matches the 'to' value based on exact match not fuzzy. EX ::

<RouterLink to="/about">About</RouterLink>

Current route: /about → ✅ router-link-exact-active is applied.

Current route: /about/team → ❌ not applied.

@@@@

NOTE :: We can change these class names globally using config object passed in 'createRouter(option)' with property 'linkActiveClass' and 'linkExactActiveClass' with name of class to use as replacement. 

@@@@

Here in named route :: <RouterLink :to="{name:'home'}">Home</RouterLink>, It means the router will match the name of the route rather than its path and shos component equivalent to that route's name. 

Sometime we need to pass props to route component lets say when we want to use route parameter etc inside component directly instead of relying on useRoute() hook or this.$route object for it. 

-->
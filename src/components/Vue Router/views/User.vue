<template>
  
  <h2>USER - {{ id }}</h2>

  <!-- Navigate to nested route -->
  <RouterLink :to="`/user/${id}/profile`">Profile</RouterLink>
  <!-- <RouterLink :to="{name:'userProfile'}">Named Profile</RouterLink> -->
  <RouterLink :to="`/user/${id}/contact`">Contact</RouterLink>

  <!-- This will render nested route component either Profile or Contact -->
  <RouterView/>

</template>

<script>
export default {
    name: 'USER',
    props: ['id']
}
</script>

<!-- 

Execute when user navigate to '/user/1..' route. 

Here Each level of the route hierarchy gets its own <router-view> component, that is the User.vue component is shown by <RouterView/> of top-level route and the child Profile.vue component is shown by nested <RouterView/> component present inside User.vue. 

NOTE ::  when using dynamic segments like /user/:id, Vue Router does not automatically infer :id when using relative links like 'profile' which result in route become '/user/profile' instead of '/user/id/profile'. For this use full-path manually '/user/${$route.params.id}/profile'.

Also for nested route always use either full-path ('/user/id/profile') or relative path ('profile') but not absolute path ('/profile') because absolute path construct route from root which result in showing Root route component instead of nested one.

We can also navigate in nested route using nested named route
-->
<template>
  
  <h2>POSTS PAGE</h2>

  <div>
    <!-- Dynamic route navigation -->
    <h4>
      <RouterLink to="posts/1">Post-1</RouterLink>
    </h4>
    <h4>
      <RouterLink to="posts/2">Post-2</RouterLink>
    </h4>
    <h4>
      <RouterLink to="posts/abc">Post-abc</RouterLink>
    </h4>
    <h4>
      <!-- Dynamic Named Route -->
      <RouterLink :to="{name:'postDetail', params: { id: 'abc123' }}">Post-abc23</RouterLink>
    </h4>
  </div>

</template>

<script>
export default {
    name: 'POSTS PAGE'
}
</script>

<!-- 

In named route we can also use dynamic route by passing 'params' object in it. 

-->
<template>
  
  <h2>LIFECYCLE HOOKS</h2>
</template>

<script>
export default {
    name: 'LIFECYCLE HOOKS'
}
</script>

<!-- 

A vue component can go through 4 phases :: 

1. CREATION => This is the 1st phase execute when component is about to be created or before anything is rendered or mounted to the DOM, In this phase we have 2 methods ::

 (a). beforeCreate => 

 (b). created =>

2. MOUNTING
3. UPDATING
4. UNMOUNTING

Lifecycle hooks are methods that allow us to hook into or tap into these different phases of a component and execute some code. 

There are total 13 lifecycle hooks in vue but we will use only few of them. 

-->
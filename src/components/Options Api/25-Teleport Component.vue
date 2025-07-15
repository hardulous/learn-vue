<template>

  <!-- TELEPORT -->
  <teleport to="#teleport-app">
    <h2>TELEPORT COMPONENT 1</h2>
  </teleport>

  <!-- USING MULITPLE TELEPORT  -->
  <teleport to="#teleport-app">
    <h2>TELEPORT COMPONENT 2</h2>
  </teleport>

</template>

<script>
export default {
  name: 'TELEPORT COMPONENT'
}
</script>

<!-- 

<teleport> is a built-in component that allows you to render a part of your component’s template in a different place in the DOM—outside of the parent component's DOM hierarchy. But component logical/component hierarchy remains same. SYNTAX ::

<teleport to='css selector of element to mount upon'>...COMPONENT TO RENDER IN DIFFERENT PLACE IN DOM<teleport/>

If using multiple teleport vue will render all teleported content into the same target container

Just like react's portal the vue's teleport is use for solving parent-child css conflict. 



-->
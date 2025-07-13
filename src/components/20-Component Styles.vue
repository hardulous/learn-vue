<template>

    <h2>COMPONENT STYLES</h2>

    <h4 :class="$style.title">CHILD STYLE COMPONENT</h4>

    <!-- Since this slot content is present on parent so parent styles are applied on it -->
    <slot></slot>
</template>

<script>
export default {
    name: 'COMPONENT STYLES'
}
</script>

<!-- GLOBAL STYLE -->
<style>

/* Here even if in child component still it is global style sheet will be applied on whole application */
h4 {
    font-style: italic;
}
</style>

<!-- LOCAL STYLE -->
<!-- Scoped attribute ensures this css will effect only its own html elements -->
<style scoped>

/* Here this style will be applied to this component only */

h4, h2{
    border: 1px solid red;
}

</style>

<!-- CSS MODULE -->
<style module>

/* Unlike scoped, module prevent accidental style leakage across components root node */
.title{
    font-size: 5rem !important;
    font-weight: bolder !important;
}

</style>

<!-- 

By default a component styles are applied globally in the component tree. And with global style regular css rules are maintained that is if same global style present in multiple place either in parent or child both then parent one are applied because parent style are evaluated after child style.

In order to ensure component styles are applied only to them own template we need to add 'scoped' attribute on <style> tag.

@@@@@ 

NOTE :: Vue component can have multiple <style> blocks, and Vue will merge them during compilation.

With scoped attribute there is a exeception, A child component root node will be affected by both the parent scoped css and the child scoped css, This is by design so that the parent can style the child root element for layout purposes. 

To avoid this minor detail we can use CSS MODULES which allow us to scope styles by generating unique class names automatically — even more strictly than scoped. To acesss the css module style object in vue we use special varible called '$style'. 

@@@@@@

When using slots, the parent component styles are applied and not the child component styles even though the content is embeded inside the child component. 

-->
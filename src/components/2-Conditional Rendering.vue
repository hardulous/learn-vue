<template>

    <h1>CONDITIONAL RENDERING</h1>

    <!-- v-if, v-else-if, v-else -->
    <h2 v-if="num === 0">The number is zero</h2>
    <h2 v-else-if="num < 0">The number is -ve</h2>
    <h2 v-else-if="num > 0">The number is +ve</h2>
    <h2 v-else>Not a number</h2>

    <!-- Conditionally render more than 1 element -->
    <template v-if="display">
        <h2>Aman Bisht</h2>
        <h2>Software Engineer</h2>
        <h2>24 Years Old</h2>
    </template>

    <!-- v-show -->
    <h2 v-show="showElement">Using v-show</h2>
    <h2 v-if="showElement">Using v-if</h2>

</template>

<script>
export default {
    name: "CONDITIONAL RENDERING",
    data() {
        return {
            num: -1,
            display: true,
            showElement: true
        }
    }
}
</script>

<!-- 

For conditional rendering in vue we will take ex to render if number is zero, positve or negative. 

 1. v-if => Similar to if block but it accepts a js expression that evaluates to either true or false and will render the element only if it is true.

 2. v-else => Similar to else block it must be placed after either a v-if or v-else-if directive (else error) and it will execute at last when none of previous directive condition returns true

 3. v-else-if => Similar to else if block it must be placed after a v-if directive (else error) and used to tackle more no of conditions 

 4. v-show => Similar to v-if directive it also show element if js expression returns true and hide if returns false but it toggles visibility using display: none

The difference between v-if or v-show directive is all these v-if, v-else-if, v-else directives mounts or unmoumts the element from the dom based on condition which can be expensive for heavy components but in case of v-show element will always remain or mounted in the dom only its css property "display:none" is toggled to show or hide them which is not expensive.

So use v-if for heavy elements whose conditional rendering rarely changes (ex route components) and v-show for elements with frequent toggling (ex tabs)

To conditionally render more than one elements using the same condition we have 3 approach ::

 1. Using v-if directive on each element but it is not recommended because of code duplication

 2. Using <div> as a wrapper and then apply v-if directive on it but it will add an extra element on DOM which can cause a css related problem.

 3. Using <template> wrapper (Recommended approach) which will add a invisible tag on DOM allows grouping multiple elements under one condition. Similar to "react fragment or <>" in react


-->
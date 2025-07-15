<template>

    <h2>PROVIDE / INJECT</h2>
    <h3>Injected value - {{ name }}</h3>
    <ChildA/>
</template>

<script>
import ChildA from './12-ChildA.vue'
export default {
    name: 'Provide And Inject',
    data() {
        return {
            name: "Clark Kent"
        }
    },
    components: {
        ChildA
    },
    // provide:{
    //     username: 'Aman Bisht'
    // }
    provide(){
        return {
            username: this.name
        }
    }
}
</script>

<!-- 

Provide and inject are a dependency injection mechanism that allows you to pass data from an ancestor component to any deeply nested child component, without prop drilling (i.e., without manually passing props through every intermediate component).

There are 2 steps required for it :: 

 1. Provide => Used by a parent (or ancestor) to make values available to descendants or child, It can be done by property called 'provide' of options API which can be either object (static value) or function (dynamic reactive value and to use 'this' keyword) type to provide value down the component tree.

 2. Inject => Used by a child (or descendant) to receive those values

THERE ARE SOME CASE IN IT ::

 1. If multiple ancestor components use provide for the same key, then the nearest one in the component tree takes precedence in the inject.

 2. If multiple components in the hierarchy use provide() but provide different properties (keys) — not overlapping — then Vue will merge all the provided values and make them available to the child component. 

-->
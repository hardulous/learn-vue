<template>

    <h2>LIFECYCLE HOOKS</h2>
    <Child />

</template>

<script>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated } from 'vue';
import Child from './13-Lifecycle Child.vue'
export default {
    name: 'LIFECYCLE HOOKS',
    setup() {
        onBeforeMount(() => {
            console.log('PARENT onBeforeMount')
        })
        onMounted(() => {
            console.log('PARENT onMounted')
        })
        onBeforeUpdate(() => {
            console.log('PARENT onBeforeUpdate')
        })
        onUpdated(() => {
            console.log('PARENT onUpdated')
        })
        onBeforeUnmount(() => {
            console.log('PARENT onBeforeUnmount')
        })
        onUnmounted(() => {
            console.log('PARENT onUnmounted')
        })
    },
    components: {
        Child
    }
}
</script>


<!-- 

In Vue 3's Composition API, lifecycle hooks are accessed via imported functions 'onBeforeMount' , 'onMounted', 'onUpdated' etc. Name is different from one in OPTIONS API with 'on' prefix. 

There's no beforeCreate or created in Composition API — setup() replaces them. 

-->
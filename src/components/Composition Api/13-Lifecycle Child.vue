<template>

    <h2>LIFECYCLE CHILD </h2>

</template>

<script>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated } from 'vue'

export default {
    name: 'LIFECYCLE CHILD',
    setup() {
        onBeforeMount(() => {
            console.log('CHILD onBeforeMount')
        })
        onMounted(() => {
            console.log('CHILD onMounted')
        })
        onBeforeUpdate(() => {
            console.log('CHILD onBeforeUpdate')
        })
        onUpdated(() => {
            console.log('CHILD onUpdated')
        })
        onBeforeUnmount(() => {
            console.log('CHILD onBeforeUnmount')
        })
        onUnmounted(() => {
            console.log('CHILD onUnmounted')
        })
    }
}
</script>

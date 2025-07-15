<template>

    <h2>CHILD COMPONENT</h2>

</template>

<script>
export default {
    name: 'CHILD COMPONENT',
    beforeCreate() {
        console.log('Child beforeCreate()')
    },
    created() {
        console.log('Child created()')
    },
    beforeMount() {
        console.log('Child beforeMount()')
    },
    mounted() {
        console.log('Child mounted()')
    },
    beforeUpdate() {
        console.log('Child beforeUpdate()')
    },
    updated() {
        console.log('Child updated()')
    },
    beforeUnmount() {
        console.log('Child beforeUnmount()')
    },
    unmounted() {
        console.log('Child unmounted()')
    }
}
</script>

<!-- 

In order for parent component to get mounted inside the dom its child component need to be mounted 1st since its a part of parent JSX and need to be rendered 1st before parent mounted lifecycle is completed. After parent beforeMount() the execution will pass to Child component and then 1st its lifecycle hooks get executed. 

Here when parent toggle the state the child component will be unmounted from dom and udergoes unmounting phase. 

-->
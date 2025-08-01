<template>

    <div>
        <h1>LEARN PINIA</h1>
        <TaskForm />
        <TaskManager />
    </div>

</template>

<script>
import TaskManager from './components/Pinia/TaskManager.vue';
import TaskForm from './components/Pinia/TaskForm.vue';
export default {
    name: 'LEARN PINIA',
    components: {
        TaskManager,
        TaskForm
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>

<!-- 



-->
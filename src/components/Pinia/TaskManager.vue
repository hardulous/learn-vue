<template>

    <h2>TASK MANAGER</h2>

    <!-- Mapping over global state tasks -->
    <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskItem :task="task"/>
    </div>

</template>

<script>
import { useTaskStore } from './Stores/TaskStore';
import TaskItem from './TaskItem.vue';
export default {
    name: 'TASK MANAGER',
    components:{
        TaskItem
    },
    setup() {

        // In order to initiate the store for use just call its useStore() hook 
        const taskStore = useTaskStore()

        console.log(taskStore)

        // Once store is initiated we can directly access properties like state, getters and actions from it. 

        return { taskStore }
    }
}
</script>

<!-- 



-->
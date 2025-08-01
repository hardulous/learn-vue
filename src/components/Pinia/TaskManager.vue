<template>

    <h2>TASK MANAGER</h2>

    <!-- Loading state -->
    <h1 v-if="taskStore.isLoading">LOADING PLS WAIT</h1>

    <!-- Toggle tasks -->
    <div>
        <button @click="filterAll = true">All Tasks</button>
        <button @click="filterAll = false">Fav Tasks</button>
    </div>

    <!-- Mapping over global state tasks -->
    <div v-if="filterAll">
        <h4>ALL TASKS - {{ taskStore.taskCount }}</h4>
        <div v-for="task in tasks" :key="task.id">
            <TaskItem :task="task" />
        </div>
    </div>

    <hr>

    <div v-if="!filterAll">
        <h4>FAV TASKS - {{ taskStore.favCount }}</h4>
        <!-- Mapping over global state with computed property -->
        <div v-for="task in fav" :key="task.id">
            <TaskItem :task="task" />
        </div>
    </div>

    <!-- Reset global state -->
    <button @click="taskStore.$reset">Reset</button>

</template>

<script>
import { ref } from 'vue';
import { useTaskStore } from './Stores/TaskStore';
import TaskItem from './TaskItem.vue';
import { storeToRefs } from 'pinia';
export default {
    name: 'TASK MANAGER',
    components: {
        TaskItem
    },
    setup() {

        // In order to get something from the store just call its useStore() hook 
        const taskStore = useTaskStore()

        const filterAll = ref(true)

        console.log(taskStore)

        // Fetch tasks
        taskStore.getTasks()

        // Destructure the state
        
        // const { tasks, fav } = useTaskStore() // Not reactive

        const { tasks, fav } = storeToRefs(taskStore) // Now reactive

        // Once store is initiated we can directly access properties like state, getters and actions from it. 

        return { taskStore, filterAll, tasks, fav }
    }
}
</script>

<!-- 

'storeToRefs(store)' allows us to destructure the state of the store safely without them losing their reactivity by creating individual 'refs' for every value inside that state. 

For 'actions' we should not use 'storeToRefs(store)', Because storeToRefs() is only for state and getters (reactive properties). If you wrap actions with storeToRefs(), you’ll get undefined or an unusable ref. 


-->
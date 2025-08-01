<template>
    <div>
        <h3 style=" display: flex; gap: 10px; justify-content: center; align-items: center;">
            <span>{{ task.title }}</span>
            <button :style="{ color: task.isFav ? 'yellow' : 'initial' }" @click="toggleTask(task.id)">FAV</button>
            <button @click="deleteTask(task.id)">DELETE</button>
        </h3>
    </div>
</template>

<script>
import { useTaskStore } from './Stores/TaskStore';

export default {
    name: 'TAKS ITEM',
    props: ['task'],
    setup() {

        const taskStore = useTaskStore()

        const deleteTask = (id) => {
            taskStore.deleteTask(id)
        }

        const toggleTask = (id) => {
            taskStore.toggleFav(id)
        }

        return {
            taskStore,
            deleteTask,
            toggleTask
        }
    }
}
</script>

<!-- 



-->
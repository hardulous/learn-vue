<template>

    <form @submit.prevent="handleSubmit">
        <input type="text" placeholder="NEW TASK.." v-model="newTask" />
        <button>Add</button>
    </form>
</template>

<script>
import { ref } from 'vue';
import { useTaskStore } from './Stores/TaskStore';

export default {
    name: 'TASK FORM',
    setup() {

        const taskStore = useTaskStore()
        const newTask = ref('')

        const handleSubmit = () => {
            if (newTask.value.length) {
                taskStore.addTask({
                    title: newTask.value,
                    isFav: false,
                    id: String(Math.floor(Math.random() * 10000))
                })
            }
            newTask.value = ''
        }

        return {
            taskStore,
            newTask, handleSubmit
        }

    }
}
</script>

<!-- 



-->
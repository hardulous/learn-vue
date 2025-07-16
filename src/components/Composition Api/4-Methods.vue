<template>

    <h2>COMPOSITION API METHODS</h2>
    <h3>{{ name }}</h3>
    <button @click="setName">OPTIONS API Change Name</button>

    <h3>{{ c_name }}</h3>
    <button @click="handleChange">COMPOSITION API Change Name</button>

    <h3>{{ firstName }} {{ lastName }}</h3>
    <button @click="handleChangeName">COMPOSITION API Change FullName</button>

</template>

<script>
import { reactive, ref, toRefs } from 'vue';

export default {
    name: 'METHODS',
    setup() {

        let c_name = ref('Acey')
        const state = reactive({
            firstName: 'Spider',
            lastName: 'Man'
        })

        const handleChange = () => c_name.value = 'Aman'
        const handleChangeName = () => {
            state.firstName = 'Bat'
            state.lastName = 'Man'
        }

        return {
            c_name,
            handleChange,
            ...toRefs(state),
            handleChangeName
        }
    },
    data() {
        return {
            name: 'Aman'
        }
    },
    methods: {
        setName() {
            this.name = 'Acey'
        }
    }
}
</script>

<!-- 

In Vue 3 Composition API, "methods" are simply functions defined inside the setup() function (or <script setup> block). They're not part of a special methods option like in the Options API. 

All we have to do just return as a part of object from 'setup()' function. 


-->
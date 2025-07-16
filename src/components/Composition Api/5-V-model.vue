<template>

    <h2>V-MODEL COMPOSITION API</h2>

    <input type="text" placeholder="First Name" v-model="fName">
    <input type="text" placeholder="Last Name" v-model="lName">

    <input type="text" placeholder="Hero Name" v-model="heroName">
    <input type="text" placeholder="First Name" v-model="firstName">
    <input type="text" placeholder="Last Name" v-model="lastName">

</template>

<script>
import { reactive, ref, toRefs } from 'vue';

export default {
    name: 'V-MODEL',
    data() {
        return {
            fName: '',
            lName: ''
        }
    },
    setup() {
        const heroName = ref('')
        const nameState = reactive({
            firstName: '',
            lastName: ''
        })

        return {
            heroName,
            ...toRefs(nameState)
        }
    }
}
</script>

<!-- 

V-model in COMPOSITION API is same as for OPTIONS API. All we need to do is start using reactive value from 'ref()' or 'reactive()' instead of 'data()' and pass them in 'v-model' directive for 2 way data binding and we are done.   

-->
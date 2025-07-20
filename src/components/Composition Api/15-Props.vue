<template>
  
  <h2>PROPS</h2>
  <input type="text" placeholder="FIRSTNAME" v-model="firstName">
  <input type="text" placeholder="LASTNAME" v-model="lastName">
  <PropsChild :firstName="firstName" :lastName="lastName" @callHeroes="callHeroes"/>

</template>

<script>
import { ref } from 'vue';
import PropsChild from './16-Props Child.vue'
export default {
    name: 'PROPS',
    components:{
        PropsChild
    },
    setup(){

        const firstName = ref('')
        const lastName = ref('')

        // Custom event handler
        function callHeroes(hero){
            alert('Calling from child', hero)
        }

        return {
            firstName,
            lastName,
            callHeroes
        }
    }
}
</script>

<!-- 

In Vue 3 Composition API, you access props as a parameter in the setup() function (or they are automatically available when using <script setup>). You can treat them reactively, but they are also readonly — meaning you can't modify them directly inside the child component



-->
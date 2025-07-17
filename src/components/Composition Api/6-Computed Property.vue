<template>

  <h2>COMPOSITION API COMPUTED PROPERTIES</h2>

  <input type="text" placeholder="First Name" v-model="fName">
  <input type="text" placeholder="Last Name" v-model="lName">
  <h2>OPTIONS API COMPUTED PROPERTY FULLNAME : {{ fullName }}</h2>

  <input type="text" placeholder="First Name" v-model="r_firstName">
  <input type="text" placeholder="Last Name" v-model="r_lastName">
  <h2>COMPOSITION API COMPUTED PROPERTY FULLNAME-1 : {{ r_fullName }}</h2>

  <input type="text" placeholder="First Name" v-model="rec_firstName">
  <input type="text" placeholder="Last Name" v-model="rec_lastName">
  <h2>COMPOSITION API COMPUTED PROPERTY FULLNAME-2 : {{ rec_fullName }}</h2>

</template>

<script>
import { computed, reactive, ref, toRefs } from 'vue';

export default {
  name: 'COMPUTED PROPERTY',
  data() {
    return {
      fName: '',
      lName: ''
    }
  },
  computed: {
    fullName() {
      return `${this.fName} ${this.lName}`
    }
  },
  setup() {
    const r_firstName = ref('')
    const r_lastName = ref('')

    const r_fullName = computed(() => `${r_firstName.value} ${r_lastName.value}`)

    const nameState = reactive({
      rec_firstName: '',
      rec_lastName: ''
    })

    const rec_fullName = computed(() => `${nameState.rec_firstName} ${nameState.rec_lastName}`)

    return {
      r_firstName,
      r_lastName,
      r_fullName,
      ...toRefs(nameState),
      rec_fullName
    }
  }
}
</script>

<!-- 

In the Composition API of Vue 3, we can create computed properties using the 'computed()' function from Vue. It behaves similarly to computed in the Options API. It has 2 version :: 

 (a). computed() take callback function as a argument which return a value which will be reactive in nature and is cached until dependency change. 

 (b). computed() take object as an argument in which we can have 'get()' and 'set()' function similar to one in case of computed in OPTIONS API.  

-->
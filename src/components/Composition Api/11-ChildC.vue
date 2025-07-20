<template>

  <h2>CHILD C - {{ firstName }} {{ lastName }}</h2>
  <input type="text" placeholder="FIRSTNAME" @input="(e) => handleChange(e.target.value, lastName)">

</template>

<script>
import { inject, toRefs } from 'vue';

export default {
  name: 'Child C',
  setup() {

    const handleChange = inject('handleChange')
    const nameState = inject('nameState')

    return {
      ...toRefs(nameState),
      handleChange
    }
  }
}
</script>

<!-- 

Instead of directly updating value in child using handler function from parent coming by 'provide'

-->
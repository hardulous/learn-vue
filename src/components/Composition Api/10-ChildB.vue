<template>

  <h2>CHILD B -{{ userName }}</h2>
  <!-- Here reactive value from parent can be changed in child -->
  <input type="text" v-model="count">
  <ChildC />

</template>

<script>
import { inject } from 'vue';
import ChildC from './11-ChildC.vue'
export default {
  name: 'Child B',
  components: {
    ChildC
  },
  setup() {
    // The userName key will come from nearest 'provide()' component
    const userName = inject('username', 'Batman')
    const count = inject('count', 0)

    return {
      userName,
      count
    }
  }
}
</script>

<!-- 

In composition API in order to inject multiple value just call 'inject' function multiple time for each key to inject. 

If injected value is ref and reactive in nature then child can change them easily and it will be reflected in parent as well as component re-renders because of state change. But recommended way is to update value from parent and not from child using 'handler function' provided from parent. 

Just like in OPTIONS API the injecting component will look for nearest 'provide()' function to inject a particular key 

-->
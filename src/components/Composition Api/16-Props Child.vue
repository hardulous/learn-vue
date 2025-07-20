<template>
  
  <h2>PROPS CHILD - {{ firstName + ' ' + lastName }}</h2>
  <h2>COMPUTED PROPS CHILD - {{ fullName }}</h2>
  <!-- Emiting custom event -->
  <button @click="sendEvent">EMIT EVENT</button>

</template>

<script>
import { computed } from 'vue';

export default {
    name: 'PROPS CHILD',
    props:['firstName', 'lastName'],
    // Setup function has 2nd parameter contains emit() function for use and other methods attrs, slots etc for use. 
    setup(props, {emit}){

        // Props used to created value
        const fullName = computed(()=>{
           return `${props.firstName} ${props.lastName}` 
        })

        function sendEvent(){
            // Emit custom event from child
            emit('callHeroes', fullName)
        }

        return {
            fullName,
            sendEvent
        }
    },
    emits:['callHeroes']  // To remove warning have to declare the custom event this component emits 
}
</script>

<!-- 

Props are available as a parameter inside 'setup(props)' function. 

In the Composition API, to emit a custom event (and pass data) from a child to a parent, you use the 'emit' function available as a parameter in setup(). 

emit('custom event name', payload value from child)

-->
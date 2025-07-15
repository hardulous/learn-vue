<template>

    <div>
        <h2>POPUP MODAL</h2>
        <!-- Here below we are emiting a custom event close on click of this button -->
        <!-- <button @click="$emit('close', {name:'Aman',age:24})">Close Popup</button> -->
        <input type="text" v-model="name">
        <button @click="()=>{
            $emit('close', name)
            cbFunc()  // Executing parent callback function 
        }">Close Popup</button>
    </div>
</template>

<script>
export default {
    name: 'POPUP MODAL',
    emits: {
        close: function (data) {
            // Here data is value passed as 2nd argument when emiting this event

            // Validation rule to return either true (passed) or false (failed will display warning on console)
            return Boolean(data)
        }
    },
    data() {
        return {
            name: ''
        }
    },
    props:{
        cbFunc:{
            type: Function
        }
    }
}
</script>

<!-- 

Based on reactive data property from parent this component will appear but to change that property from here in vue we will emit a custom event ::

 To mention events this component can emit so parent can listen for it we pass another option in component defination called 'emits' which is array of event-name string.

 To emit event we use special variable called '$emit('event-name')'. 
 
We might also need to send some data along with event for this pass 2nd argument in $emit('event-name', data) called data of any type we can send to listener parent component. 

Here just like we validate props about what type of props a component can accept we can also validate the type of event a component is emitting before listen to them.

To mention type of event we are emitting along with payload type we pass 'emits' as object rather than array

-->
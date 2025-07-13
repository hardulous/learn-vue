<template>


    <h2>CUSTOM COMPONENT EVENTS</h2>

    <button @click="showPopup = true">Open Popup</button>
    <!-- Here below listening to custom event @close which will be emited from child component -->
    <Popup v-show="showPopup" @close="closePopup" :cbFunc="callbackFunc" />


</template>

<script>
import Popup from './16-PopUp.vue'
export default {
    name: 'CUSTOM COMPONENT EVENT',
    data() {
        return {
            showPopup: false   // Toggle state from parent to open dialog and emit event from child to close the dialog
        }
    },
    components: {
        Popup
    },
    methods: {
        closePopup(data) {
            console.log('Received From Child', data)
            this.showPopup = false
        },
        callbackFunc(){
            console.log('Called From Child For Communication')
        }
    }
}
</script>

<!-- 

Custom component events are events that a child component emits and a parent component listens to, allowing you to communicate from child to parent just like React's custom callback props.

Lets say we will implement a pop-up modal in which at top level we will have a button to open a pop-up with open data property and will show child pop-up modal with button to close modal which in turn change the open data property of parent component. So need to communicate from child to parent.

When a child emit a event this parent component can listen to them using custom event binding " @event-name='js to execute' ". And when event emitted we can execute a callback function. 


@@@@ 

 NOTE :: Just like in react we can also pass function as a prop from parent to child component for indirect communication but vue encourages using 'emit()' for communication. 

@@@@



-->
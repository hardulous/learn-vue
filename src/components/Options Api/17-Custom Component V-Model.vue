<template>

    <h2>CUSTOM COMPONENT WITH V-MODEL</h2>
    <!-- Configuring v-model directive props passed to this custom component -->
    <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">

    <!-- MULTIPLE V-MODEL BIND -->
    <input type="text" :value="channel" @input="$emit('update:channel', $event.target.value)">
    <input type="number" :value="age" @input="$emit('update:age', Number($event.target.value) )">
</template>

<script>
export default {
    name: 'CUSTOM COMPONENT WITH V-MODEL',
    props: {
        modelValue: String,
        channel:String,
        age:Number
    }
}
</script>

<!-- 

If v-model directive is used with this component then to make 2 way data binding work Vue internally binds a 'modelValue' prop and listens to an 'update:modelValue' event from the component.

Now we need to accept those 2 props in this component and configure them to make v-model work 

@@@@ 

 NOTE:: To debug components state and everything related to them in vue in advance way rather than console we have 'vue.js devtools' chrome extension we can install. By this in inspector we will have 'Vue' tab for debugging. Similar to 'React developer tools'. 

@@@@

-->
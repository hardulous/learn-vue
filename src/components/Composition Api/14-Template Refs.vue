<template>

    <h2>TEMPLATE REFS</h2>
    <!-- Using ref attribute on element to store it on inputRef ref -->
    <input type="text" ref="inputRef">

</template>

<script>
import { onMounted, ref } from 'vue';

export default {
    name: 'TEMPLATE REFS',
    setup() {

        // ref reactive value can be used to store DOM element and CUSTOM component reference as well apart from storing primitive and non-primitive state value 
        const inputRef = ref(null)

        // On mounted we will focus element using ref
        onMounted(() => inputRef.value.focus())

        return {
            inputRef
        }
    }
}
</script>

<!-- 

In Vue 3 Composition API, template refs are used to reference DOM elements or components directly from the template using 'ref' function. 

-->
<template>

    <h2>COMPOSITION API WATCHER</h2>

    <input type="text" placeholder="Name" v-model="name">
    <input type="text" placeholder="REF Name" v-model="r_name">

    <input type="text" placeholder="FIRSTName" v-model="firstName">
    <input type="text" placeholder="LASTName" v-model="lastName">

    <input type="text" placeholder="FIRSTName" v-model="rec_firstName">
    <input type="text" placeholder="LASTName" v-model="rec_lastName">
    <input type="text" placeholder="HEROName" v-model="fav.heroName">

</template>

<script>
import { reactive, ref, toRefs, watch } from 'vue';

export default {
    name: 'WATCHER',
    data() {
        return {
            name: ''
        }
    },
    watch: {
        name(newValue, oldValue) {
            console.log(oldValue, newValue)
        }
    },
    setup() {
        const r_name = ref('')

        // Watching for single value r_name
        watch(r_name, (newVal, oldVal) => {
            console.log('r-name', oldVal, newVal)
        })

        const firstName = ref('spider')
        const lastName = ref('man')

        // Watching for multiple value and will execute immediately with their initial value as well. 
        watch([firstName, lastName], (newValues, oldValues) => {
            console.log('array watcher firstName', oldValues[0], newValues[0])
            console.log('array watcher lastName', oldValues[1], newValues[1])
        }, {
            immediate: true
        })

        const nameState = reactive({
            rec_firstName: '',
            rec_lastName: '',
            fav: {
                heroName: ''
            }
        })

        // Watching for reference change rather than property
        // watch(nameState, (newVal, oldVal)=>{
        //     console.log('reference value watcher', oldVal, newVal)
        // })

        // Watching for only 1 property of reactive object using getter 
        watch(() => {
            return nameState.rec_firstName
        }, (newVal, oldVal) => {
            console.log('watcher for only firstName in object', oldVal, newVal)
        })

        // Watching for reactive object deep nested property change as well but now old val is same as new val
        // watch(()=>nameState.fav, (newVal, oldVal) => {
        //     console.log('watcher for whole reactive object', oldVal, newVal)
        // }, {
        //     deep: true
        // })

        // Now watching for exact property rather than reference change
        // watch(()=>nameState.fav.heroName, (newVal, oldVal) => {
        //     console.log('watcher for whole reactive object', oldVal, newVal)
        // },{
        //     deep:true
        // })

        // Or pass copy of whole object
        watch(()=>{
            return JSON.parse(JSON.stringify(nameState)) 
        }, (newVal, oldVal) => {
            console.log('watcher for whole reactive object', oldVal.fav, newVal.fav)
        },{
            deep:true
        })

        return {
            r_name,
            firstName,
            lastName,
            ...toRefs(nameState)
        }
    }
}
</script>

<!-- 

In Vue 3 Composition API, the watch function is used to react to changes in reactive data, similar to watchers in the Options API, SYNTAX :: 

watch('value watching for', (newVal, oldVal)=>...logic). A same watcher can be execute for multiple data source by passing 1st argument as array of value watching for rather than a single value, [val-1, val-2, .. etc] but now the values we get in callback function will be array (newValues, oldValues)=>... logic. In array as value the order of them is same as source defined in 1st argument. 

Apart from multiple source in watch() in a single file we can have multiple watch() call as well. 

To execute watcher immediately when component 1st mounted in dom instead of when value changes just pass 'immediate' property true in 3rd option argument of watch() function. 

When pass reactive object as a data source in watcher the old and new value will be same as Vue only tracks if the object reference changes, not internal properties. TO FIX THIS :: 

Watch a specific property in a reactive object by passing a getter fuction as 1st argument. 

Watch whole reactive object and any changes in its property by passing 'deep' as true in 3rd options argument but for deep nested property change old and new value is same because Vue's reactivity system does not clone objects — it just passes references. So when the watcher triggers, the mutation has already happened, and both newVal and oldVal point to the same mutated object. 

To solve above issue and to get an accurate oldVal, either deep-clone the state inside watcher or watch it directly by returning that property from getter

-->

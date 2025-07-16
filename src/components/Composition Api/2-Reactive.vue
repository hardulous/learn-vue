<template>

    <h2>COMPOSITION API REACTIVE</h2>
    <h3>REF NAME - {{ firstName }} {{ lastName }} a.ka. {{ heroName }}</h3>
    <h3>REACTIVE NAME - {{ reactiveState.rFirstName }} {{ reactiveState.rLastName }} a.ka. {{ reactiveState.rLastName }}
    </h3>

</template>

<script>
import { reactive, ref } from 'vue';

export default {
    name: 'REACTIVE',
    setup() {
        const firstName = ref('Aman')
        const lastName = ref('Bisht')
        const heroName = ref('Nightwing')

        // Reactive object
        const reactiveState = reactive({
            rFirstName: 'Acey',     // All properties are reactive value 
            rLastName: 'Charusia',
            rHeroName: 'Spiderman'
        })

        // Can access reactive state without .value 
        console.log(reactiveState, reactiveState.rFirstName, reactiveState.rLastName, reactiveState.rHeroName)

        return {
            firstName,
            lastName,
            heroName,
            reactiveState
        }
    }
}
</script>

<!-- 

Here right now for a feature in which we have to display 3 related state together we have to create 3 'ref()' .value to access them which is repetative in nature. To group related state together and also avoid use of .value to access them 'reactive()' comes to the picture. 

'reactive()' creates a deeply reactive object — all nested properties become reactive. The 
'data()' function of OPTIONS API internally use this 'reactive()' function. 

Here both 'ref()' and 'reactive()' creates a reactive value so when to use which ::

 (a). Use 'ref()' when dealing with primitive type values like string, boolean, number and 'reactive()' when dealing with objects and array. 
 
 (b). 'reactive()' is used to grouped related state together in an object and all properties at any level of nesting is reactive in nature. Altough 'ref()' also can be used to create object or array state which are also reactive at any level of nesting but have to access them using '.value' property. 



-->
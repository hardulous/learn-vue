<template>

    <h2>REACTIVITY AND TOREFS</h2>

    <h2>NOT REACTIVE NAME : {{ name }}</h2>
    <h2>REACTIVE NAME : {{ nameRef }}</h2>

    <h2>REACTIVE NAME 2 : {{ nameState.firstName }} {{ nameState.lastName }}</h2>
    <h2>LOST REACTIVE NAME : {{ firstName }} {{ lastName }}</h2>
    <h2>PRESERVE REACTIVE NAME : {{ firstNameRef }} {{ lastNameRef }}</h2>

</template>

<script>
import { reactive, ref, toRefs } from 'vue'

export default {
    name: 'REACTIVITY AND TOREFS',
    setup() {

        let name = 'Aman'
        let nameRef = ref('Acey')

        // Here changing the non-reactive value does not trigger re-rendering and vue does not know them 
        setTimeout(() => {
            name = 'Acey'
            nameRef.value = 'Aman'  // Changing the reactive value now vue knows that it changes because of reactive reference on them and will trigger re-rendering  
            console.log(name, nameRef)
        }, 2000)

        const nameState = reactive({
            firstName: 'Maran',
            lastName: 'Singh'
        })

        // This 2 are seprate variable not reactive references so they will not be updated again if nameState changes 
        const { firstName, lastName } = nameState

        // Since we have destructure the reactive state we have lost the reactivity
        setTimeout(() => {
            nameState.firstName = 'Chaman'
            nameState.lastName = 'Singh'
            console.log(nameState)
        }, 2000)

        // With toRefs() now individual properties of nameState become refs so reactivity is maintained  
        const { firstName: firstNameRef, lastName: lastNameRef } = toRefs(nameState)

        return {
            name, // Passing non-reactive value to <template>
            nameRef,
            nameState,
            firstName,
            lastName,
            firstNameRef,
            lastNameRef
        }
    }
}
</script>

<!-- 

In Vue, reactivity is the system that automatically keeps your UI in sync with your data. It is the ability of vue to react when a value change. When a reactive value changes, Vue detects the change and automatically updates the DOM — you don’t need to manually re-render anything. 

But if we have a value which is non reactive then vue will not re-render anything even if it changes.

@@@@@

 NOTE :: Vue uses js 'proxies' to track changes to reactive values which is a javascript concept which is a built-in JavaScript object that wraps another object and allows you to intercept and customize how operations are performed on that object — like getting, setting, deleting properties, etc

@@@@

When using 'reactive()' function in order to access the property we have to use object '.' operator which sometime inconvinent in template, Unlike the OPTIONS API 'data()' reactive values does not require same efforts. To achieve similar feature we can destructure the reactive state but by this they will lose their REACTIVITY means vue not does not know if they changes. 

The reactivity breaks because Vue’s reactivity system relies on Proxy wrappers that track access to properties of the whole object, not individual values

To fix this vue provide us 'toRefs()' function, toRefs() is a helper function from Vue's Composition API that converts a reactive object’s properties into individual refs. This lets you preserve reactivity when destructuring or passing state into other places (like a component as a prop or function). 

If you only need one property as a reactive ref and want to destructure it as well use 'toRef(obj, key)' and for multiple properties object use 'toRefs(obj)'. 

WHEN TO USE toRefs() ::

 (a). We want to destructure a reactive object
 (b). We are returning parts of a reactive object to <template>
 (c). We want to pass reactive state to child components
-->
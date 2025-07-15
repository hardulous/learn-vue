<template>

    <h2>MODIFIERS</h2>
    {{ JSON.stringify(modifierValues, null, 2) }}
    <form @submit.prevent="submitForm">
        <label for="name">NAME</label>
        <input type="text" id="name" v-model.trim="modifierValues.name">
        <br />
        <label for="age">AGE</label>
        <input type="number" id="age" v-model.number="modifierValues.age">
        <br />
        <label for="name">LAZY NAME</label>

        <!-- Here also submit form we user press and release enter key on this input -->
        <input @keyup.enter="submitForm" type="text" id="name" v-model.trim.lazy="modifierValues.name">

        <br />
        <button type="submit">Submit</button>
    </form>

    <!-- v-once -->
    <h2>Without v-once:{{ name }}</h2>
    <h2 v-once>With v-once:{{ name }}</h2>
    <button @click="name = 'Mayank Tanwar'">Change Name</button>

    <!-- v-pre -->
    <h2 v-pre>{{ name }}</h2>

</template>

<script>
export default {
    name: "MODIFIERS",
    data() {
        return {
            modifierValues: {
                name: "",
                age: null
            },
            name: 'Aman Bisht'
        }
    },
    methods: {
        submitForm() {
            console.log("Modifier Values", this.modifierValues)
        }
    }
}
</script>

<!-- 

Modifiers are basically suffix that we can add to either v-on or v-model directive to extend their functionality inline without having to write more code for the same. 

 1. TRIM MODIFIER => Add a functionality of white spaces will be trimed from user input automatically. ex, v-model.trim 

 2. NUMBER MODIFIER => Add a functionality of user input to be automatically typecast as a number, As by-default all user input are in string format. ex, v-model.number

 3. LAZY MODIFIER => By-default v-model directive use @input event in which value is updated for every character typed in by user which is suitable if we want to display a value live getting filled out by user, But sometime we want to bind or update value when @change event occured that is when user blur away from input field. So to change v-model directive sync from @input to @change. ex, v-model.lazy

 Improves performance as it does not bind value on every keystroke of the input. Good for form-validation when we want to user to finish filling form field before form validation kicks-in. 

 4. PREVENT MODIFIER => Adds a functionality of event.preventDefault() to prevent default browser behavior. ex, app refresh when user submit a form. 

 5. KEY MODIFIER => Add a functionality in which we execute a event or method only when a certain key is pressed. ex, enter, tab, esc, left mouse, right mouse etc. 

We can use multiple modifier at a same time as they can be chained as well.  

@@@@

 NOTE :: WE HAVE SOME DIRECTIVES WHICH DOES NOT GET USED MUCH BUT GOOD FOR PERFORMANCE OPTIMIZATION AND DEBUGGING ::

 1. v-once => It renders the component/element and its children only once and for subsequent re-renders the element is treated as static content and vue will skip the future updates for this section of DOM even if reactive data changes

 Can be used for optimization on large section of template which we know will never change, Vue will skip the virtual DOM modification for v-once marked element hence better performance.

 2. v-pre => It tells Vue to skip compilation for this component/ element and its children. It will render the raw template syntax (e.g., {{ someVar }}) as-is. 

 Can be used for document website where we want to show vue code as it is and improve performance on static content if we have large chunk of DOM with no dynamic binding vue can skips compiling this block, which saves time during rendering

@@@@

-->
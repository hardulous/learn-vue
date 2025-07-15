<template>
    <h2>Hello {{ name }} a.k.a {{ heroName }}</h2>
    <h2>Hello {{ name?.toUpperCase() }} a.k.a {{ heroName }}</h2>
    <h2>Published - {{ isPublished ? 'Yes' : 'No' }}</h2>
</template>

<script>
// Here below means we are default exporting a vue component whose name is 'Greet' 
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Greet',
    // props:['name', 'heroName']  // This component can accept the name prop from parent component 
    props:{
     // Now mention the type of props
     name: String,
     heroName:{
        type: String,
        required: true,
        default: 'Shaktiman' // If prop not passed this value will be used
     },
     isPublished:Boolean
    } 
}
</script>

<style></style>

<!-- 

Here is the dummy component. In order to make this component rendered in the ui we need to connect it to root component (<App/>) either directly or indirectly.

Before register we need to export a component for use by exporting the component defination object as a part of options api from <script> block. 

To register a component for use which means making it available for use inside another component’s template we have 2 ways ::

 (a). Local Registration => Register/Import inside another component where it's used. Ex, by-default the import on <script> block and passing it as property of 'component' object in options api make the component available for us in <template>.

 The component can be used only where it is registerd 

 (b). Global Registration => Register the component once, and it’s available in all components of the application. EX, in main.js file ::

  const app = createApp(App)
  app.component('HelloWorld', HelloWorld) // 🔹 Global  registration
  app.mount('#app')
  
  Now <HelloWorld /> can be used anywhere in your app without importing or registering locally

Now this component accepts props from parent component for use. But before using props in a component we need to register them first::

We 1st need to specify a 'props' property in default exported component defination object, This props is an array of all the values or custom attributes passed from parent component. If not defined and try to access props result in error or bug

Then 2nd start using props in <template> or <script> just like we use any reactive data property '[props-name]' or 'this.[prop-name]' respectively.

@@@@

 NOTE:: Here in many codebases developer likes to use kebab-case in html or camelCase in js for props naming convention, So prop passed in <template> as 'hero-name' can be used as 'heroName' in js without any error.

 But it can be done in vue only in react everything is jsx means everything is js so have to use camelCase for props always. 

@@@@

Here sometime to avoid runtime error it is good to mention what type a particular prop is ex, If any other dev comes to this component he only sees that this component accept 2 props 'name' and 'heroName' but does not know its type. So for this we can also pass props as an object where key is prop name and value is prop type. 

Since vue now knows the type of props at compile time so we will get autosuggestion on props as well. And will get warning if didn't pass the prop validation.  

Just like in react we can also pass default value of props if not passed and other property like required, validation function etc.

-->
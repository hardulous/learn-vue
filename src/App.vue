<template>

  <!-- <div>{{ greet }} {{ name }}</div> -->
  <div>{{ greet + " " + name }}</div>

  <!-- Here below the inner text of div is empty because the v-text directive replaces the inner text of div with propertery coming from data() function -->
  <div v-text="channel"></div>  

  <!-- Below throw compile time error as v-text will override the element children -->
  <!-- <div v-text="channel">hello</div>   -->

  <!-- Below will render as plain text even if contain valid html -->
  <div>{{ code }}</div>
  <!-- Below will render as actual html -->
  <div v-html="code"></div>

</template>

<script>

export default {
  name:"App",
  data(){
    return {
      greet: "Hello",
      name: "Aman",
      channel: 'Codevolution',
      code: '<b>CodeEvolution Coding Classes</b>'
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<!-- 

In vue js a file with extension ".vue" is a Single File Component (SFC) that encapsulates the template, logic, and styles for a Vue component in one file. Or we can say it is a file where we can specify html, css and js corresponding to a portion of the ui. 

BINDING DATA FROM SCRIPT BLOCK TO TEMPLATE BLOCK :: 

 (a). BINDING TEXT => For binding data returned by data() function we use MUSTACHE SYMBOL / TEXT INTERPOLATION which is double curly braces {{ name of property }} in template block. At runtime the {{ name of propertry }} will be replaced by property returned by data() function

 We can have multiple these TEXT INTERPOLATIONS in our template. 

 (b). Directive => A special html attribute with "v-prefix", They apply reactive behavior to DOM elements. To set inner text content to html element we use "v-text" directive.  

 Its drawback is it replaces the entire text content of html element with data() property value, So if we want combination of static + dynamic text it is not possible with it for this use TEXT INTERPOLATION METHOD.  

 If we want to bind raw HTML (i.e., render HTML code stored as a string) we use "v-html" directive which binds HTML content to an element, telling Vue to render the HTML inside the element as actual HTML, not as plain text.  

@@@@@ 

NOTE :: v-html is powerful but dangerous if you're binding untrusted content (e.g., from user input or third-party APIs). It can expose your app to Cross-Site Scripting (XSS) attacks.

If needed, use a library like DOMPurify to sanitize html content first before using it. 

@@@@@
-->
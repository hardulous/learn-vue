<template>

  <h1>BINDING DATA</h1>
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

  <!-- Binding data to html attirbute -->
  <h2 v-bind:id="headingId1">Heading 1</h2>
  <!-- Below is short hand symbol for v-bind -->
  <h2 :id="headingId2">Heading 2</h2>
  <!-- Binding boolean attribute -->
  <button :disabled="isDisabled">Bind</button>

  <!-- Binding class attribute -->
  <h2 :class="status">Status</h2>
  <!-- Static and dynamic classes -->
  <h2 class="danger" :class="status">Warning</h2>
  <!-- Conditional binding -->
  <h2 :class="isPromoted && 'promoted'">Promoted movie</h2>
  <h2 :class="isSoldOut ? 'old' : 'new'">Soldout? movie</h2>
  <!-- Multiple classes binding -->
  <h2 :class="['new', 'promoted']">Newly promoted movie</h2>
  <h2 :class="['new', isPromoted && 'promoted']">Array conditional movie</h2>
  <h2 :class="{ promoted: isPromoted, new: !isSoldOut, old: isSoldOut }">Object conditional movie</h2>

  <!-- Binding style -->
  <h2 :style="{ color: highlightColor, textDecoration: 'underline', fontSize: headerSize + 'px' }">Inline style</h2>
  <h2 :style="headerStyleObject">Style object</h2>
  <h2 :style="[baseStyleObject, successStyleObject]">Array style object</h2>

</template>

<script>

// The below export default object is called component options object or more specifically the options API component defination. 
export default {
  name: "BINDING DATA",

  // The below data() is used to define the reactive state (data properties) of the Vue component, It returns an object that contains the component’s reactive data properties, 
  data() {
    return {
      greet: "Hello",
      name: "Aman",
      channel: 'Codevolution',
      code: '<b>CodeEvolution Coding Classes</b>',
      headingId1: 'heading1',
      headingId2: 'heading2',
      isDisabled: true,
      status: 'underline',
      isPromoted: true,
      isSoldOut: true,
      highlightColor: 'orange',
      headerSize: 50,
      // For cleaner template vue allow us to directly bind style object
      headerStyleObject: {
        color: 'orange', fontSize: '50px', padding: '20px'
      },
      baseStyleObject: {
        fontSize: '50px',
        padding: '10px'
      },
      successStyleObject: {
        color: 'green',
        backgroundColor: 'lightgreen',
        border: '1px solid green',
        padding: '5px'  // This will overide the previous style object padding property
      }
    }
  }
}

</script>

<style>

/* Classes for binding */
.underline {
  text-decoration: underline;
}

.danger {
  color: red
}

.promoted {
  font-style: italic;
}

.new {
  color: green
}

.old {
  color: yellow
}
</style>

<!-- 

In vue js a file with extension ".vue" is a Single File Component (SFC) that encapsulates the template, logic, and styles for a Vue component in one file. Or we can say it is a file where we can specify html, css and js corresponding to a portion of the ui. 

BINDING DATA FROM SCRIPT BLOCK TO TEMPLATE BLOCK :: 

 (a). BINDING TEXT => For binding data returned by data() function we use MUSTACHE SYMBOL / TEXT INTERPOLATION which is double curly braces {{ name of property }} in template block. At runtime the {{ name of propertry }} will be replaced by property returned by data() function

 We can have multiple these TEXT INTERPOLATIONS in our template. 

 (b). DIRECTIVE => A special html attribute with "v-prefix", They apply reactive behavior to DOM elements. To set inner text content to html element we use "v-text" directive.  

 Its drawback is it replaces the entire text content of html element with data() property value, So if we want combination of static + dynamic text it is not possible with it for this use TEXT INTERPOLATION METHOD.  

 If we want to bind raw HTML (i.e., render HTML code stored as a string) we use "v-html" directive which binds HTML content to an element, telling Vue to render the HTML inside the element as actual HTML, not as plain text.  

@@@@@ 

NOTE :: v-html is powerful but dangerous if you're binding untrusted content (e.g., from user input or third-party APIs). It can expose your app to Cross-Site Scripting (XSS) attacks.

If needed, use a library like DOMPurify to sanitize html content first before using it. 

@@@@@

 (c). ATTRIBUTE BINDING => Used for binding data to html attribute such as id, class, style, disabled etc, We use them because we cannot use mustache symbole for passing TEXT INTERPOLATION as a value to html attribute. For this we use another directive called "v-bind". 

 This "v-bind" does not override children at all

 (d). CLASSES BINDING => Also uses "v-bind" attribute binding lets you dynamically apply one or more CSS classes to an element based on your component’s data or logic.
 
 With class binding we can have both static ( css classes ) and dynamic ( class from data() ) classes on the same html element

 we can pass js expression inside directive so we can apply conditional binding. 

 If want to add multiple classes / bind multiple values dynamically we can use "array" or "object" syntax. And we can use js expression inside them as well for conditional binding.

 (e). BINDING STYLES => Although it is ideal to use classes instead of inline style we do end-up using it under some circumstances, For this we either using static or dynamic ( using either object syntax -> bind an object where keys are CSS properties  or array syntax -> to combine multiple style objects to an element ) value or mix of both. 

 But note in case of array syntax the last style object will overide the previous style object if contain similar css proeprtry in both

 You can write CSS properties in vue both:
  camelCase (JavaScript-style): fontSize
  or kebab-case in quotes: 'font-size'   

  EX : :style="{ fontSize: '20px', 'margin-top': '10px' }"
  But in react only camel case for inline css is allowed

-->
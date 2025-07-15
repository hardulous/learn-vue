<template>
  
  <h2>SLOTS</h2>
  <div class="card">
    <!-- Passing default slot value -->
    <!-- <slot>Default This Is Me</slot> -->

    <div>
        <slot name="header"></slot>
    </div>
    <!-- No need to give default slot a name -->
    <div >
        <slot>Default This Is Me</slot>
    </div>
    <div>
        <slot name="footer"></slot>
    </div>

  </div>
</template>

<script>
export default {
    name: 'SLOTS'
}
</script>

<style>
.card{
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    padding: 16px;
    margin-bottom: 20px;
    width: 200px;
}
.card:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
</style>


<!-- 

By props child always in control of the HTML content and parent can only pass in different value but by slots it allows parent component to control the content inside the child component. It allows to pass html as a prop. 

Here we are building a card component whose content is dynamic and coming from parent component.. 

We use <slot> tag as a placeholder of whatever html or value coming from parent component as a prop by opening and closing tag and then substitute with it. And if no value is passed from parent then for default value we can pass in between opening and closing <slot>..default value</slot>

Now for multiple slot our card will have header, footer and main content coming from parent. 

To mention multiple slot in a component so parent will know which value goes to which slot we will give each slot a unique name prop.

-->
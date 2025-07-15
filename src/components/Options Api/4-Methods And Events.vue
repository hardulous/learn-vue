<template>

    <h2>METHODS</h2>

    <!-- METHOD IN TEMPLATE -->
    <h2>{{ 2 + 3 + 5 }}</h2>
    <h2>Add Method - {{ add(2, 3, 5) }}</h2>
    <h2>Add Method - {{ add(10, 15, 20) }}</h2>

    <!-- METHOD WITH THIS KEYWORD -->
    <h2>Multiple Method - {{ multiple(10) }}</h2>
    <!-- <h2>Multiple Method Arrow - {{ multipleArrow(10) }}</h2> -->

    <!-- EVENT HANDLING -->
    <h2>{{ name }}</h2>
    <div>
        <button v-on:click="name = 'Mayank'">Change Name</button>
    </div>

    <h2>{{ count }}</h2>
    <div>
        <!-- <button @click="count=count+1">Increment</button>
        <button @click="--count">Decrement</button> -->
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
        <button @click="increment(5)">Increment By 5</button>
        <button @click="decrement(5)">Decrement By 5</button>
        <button @click="() => increment(10)">Increment By 10</button>
        <button @click="() => decrement(10)">Decrement By 10</button>
    </div>

    <!-- EVENT OBJECT -->
    <h2>{{ name }}</h2>
    <div>
        <button @click="event">Change Name</button>
        <button @click="event($event, 'Rishab')">Change Name-Rishab</button>
        <button @click="(e) => event(e, 'Banty')">Change Name-Banty</button>
    </div>
    <h2>{{ name }}</h2>
    <div>
        <button @click="event($event), increment($event)">Change Name And Increment</button>
    </div>

</template>

<script>
export default {
    name: "METHODS",
    data() {
        return {
            baseMultiplier: 5,
            name: "Aman",
            count: 0
        }
    },
    methods: {
        add(a, b, c) {
            return a + b + c
        },
        multiple(num) {
            // console.log(this)  // Refer to component defination object
            return this.baseMultiplier * num
        },
        // Arrow function as method 
        multipleArrow: (num) => {
            // console.log(this)  // Either undefined or window object
            return this.baseMultiplier * num
        },
        increment(num) {
            if (typeof num == 'number') this.count += num
            else this.count += 1
        },
        decrement(num) {
            if (typeof num == 'number') this.count -= num
            else this.count -= 1
        },
        event(event, name) {
            if (name) this.name = name
            else this.name = 'Tarun'
            console.log(event)
        }

    }
}
</script>

<!-- 

methods option is used to define functions that you can call from within your component ex, In templates, user event handling, or other parts of the component logic. 

We can call these methods directly inside the template using MUSTACHE SYMBOL or 

 @@@@

  NOTE :: Never use arrow functions as methods because vue binds data object and other properties of component defination to 'this' keyword within methods, If we use arrow function because of its js behaviour that binding will be lost. 

 @@@@

Sometime we want to execute some code when user perform an event like, click on mouse, press a key from keyboard etc. To handle this in vue js we use v-on directive or its shorthand @ SYNTAX ::

 v-on:event-name = "code to execute when event fired" ex :: 
 
 v-on:click=" name = 'mayank' " , It means when user click on button the name data property will change to value mayank. Any place in the DOM where {{ name }} is used will automatically update

 @@@@

  NOTE:: Whenever a reactive value or data property changes, Vue automatically re-renders only the parts of the DOM that depend on it instead of re-renders whole component. 

  Vue uses virtual DOM + a reactivity system to minimize DOM updates ::
  
  Vue tracks dependencies, it knows which DOM node uses which data, When we update a reactive property vue marks it as “dirty”, Schedules a re-render and Patches only the affected DOM nodes.

  So in this way only reactive parts of the template which are using reactive value are re-rendered. 

 @@@@

 Here inline event handler or small js expressions directly in the event handler is good for small logic but most of the time the logic of event handler is complex so for this we create and call method inside v-on directive. 

 Sometime we want to access event object of the fired event as an argument to our event handler function, For this we can either pass a special variable called "$event" or accept a parameter to get event object in immediate event handler function and then pass on to it. 

 Sometime we want to call multiple event handler methods for an event in this case we can event handler seprated by comma ','. EX ::

 v-on:click= "handler1(), handler2(), ..etc", Execute handler1 then handler2 and so on when user click on this button. The difference is now if need event object we have to manually pass as an argument to handler functions and also need to call them instead of just passing their reference.

-->
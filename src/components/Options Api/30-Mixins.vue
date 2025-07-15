<template>

    <h2>MIXINS</h2>

    <!-- WITHOUT MIXIN COUNTER FEATURE -->
    <!-- <button @click="incrementCount">Clicked {{ count }}</button> -->
    <!-- WITHOUT MIXIN HOVER FEATURE -->
    <!-- <h2 @mouseover="incrementHover">Clicked {{ hover }}</h2> -->

    <!-- WITH MIXIN COUNTER FEATURE -->
    <button @click="incrementCount">Clicked {{ count }}</button>

</template>

<script>
import CounterMixin from './31-Counter Mixin'
export default {
    name: 'MIXINS',
    // data() {
    //     return {
    //         count: 100,
    //         hover:0
    //     }
    // },
    // methods: {
    //     incrementCount() {
    //         this.count += 1
    //     },
    //     incrementHover() {
    //         this.hover += 1
    //     },
    // }
    mixins: [CounterMixin]
}
</script>

<!-- 

Mixins are a way to reuse logic across multiple components by extracting common behavior into a shared object which then can be used in other components defination. 

Lets say we implement a counter button feature in which we have a counter data property then a function to update that property. Now lets say we want to build another similar feature where instead of onClick we want to update counter onHover of a heading. And again another feature to keep track of no of input press in a input element. 

So instead of duplicate the logic again and again we will extract out the logic in seprate file called MIXIN and reuse them in components. 

To use a created mixin we pass them in 'mixins' property of component defination object. 

@@@@ 

 NOTE :: If we have same options in the mixin as well as in the component defination by-default the component gets the higher priority and overrides the mixin.  

@@@@

-->
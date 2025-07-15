<template>

    
    <!-- Here all non prop attribute will be passed to this root div element by-default -->
    <!-- <div>
        <h2>NON-PROP ATTRIBUTE</h2>

        <h2>Name - {{ name }}</h2>
        <h2>Age - {{ age }}</h2>
    </div> -->
    <div>
        <!-- Now non prop attribute will be passed to below h2 element -->
        <h2 v-bind="$attrs">NON-PROP ATTRIBUTE</h2>

        <h2 :style="$attrs.style">Name - {{ name }}</h2>
        <h2 :data-test="$attrs['data-test']">Age - {{ age }}</h2>
    </div>

</template>

<script>
export default {
    name: 'Non Prop-Attribute',
    data() {
        console.log(this.$attrs)
        return {

        }
    },
    props: {
        name: String,
        age: Number
    },
    inheritAttrs: false // Now non prop atrributes by-default will not be applied to root element 
}
</script>

<!-- 

Here we can also pass 'NON PROP ATTRIBUTE' to a component which are HTML attributes or custom attributes that are not explicitly defined / declared as props in a component but are still passed from the parent to the child. ex, id, class, style etc. In this case by-default ::

  If you pass an attribute to a child component, but the child doesn’t declare it as a prop, Vue will automatically add it to the root element of the child component’s template. And if there are mutliple sibling root element instead of single one then that prop will not be added in anyone. 

It is used to avoid declaring custom atribute like class, id, style as a prop in a component and pass them html element of component directly. 

If we want to manually access non-prop attributes and apply to any other element of our choice also we use '$attrs' object. And pass them to element of our choice using 'v-bind' directive. To disable automatic applying of attribute to rool element we pass property 'inheritAttrs: false' in component 
defination object.

To access specific non prop attribute from $attrs use it like object t.e, $attrs.id or $attrs['prop-name']

@@@@ NOTE :: THIS CONCEPT OF NON-PROP ATRIBUTE DOES NOT EXIST IN REACT BUT SIMILAR THING CAN BE ACHEIVED IN REACT USING SPREAD OPERATOR {...props} @@@@

-->

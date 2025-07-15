<template>

    <h1>LIST RENDERING</h1>

    <!-- ARRAY OF STRING -->
    <h2 v-for="name in names" :key="name">{{ name }}</h2>
    <h2 v-for="(name, index) in names" :key="index">{{ index }}-{{ name }}</h2>
    <hr>
    <!-- ARRAY OF OBJECTS -->
    <h2 v-for="(name, index) in fullNames" :key="index">{{ name.first + name.last }}</h2>
    <hr>
    <!-- NESTED ARRAY -->
    <div v-for="actor in actors" :key="actor.name">
        <h2>Name: {{ actor.name }}</h2>
        <h3>
            <template v-for="movie in actor.movies" :key="movie">{{ movie }} &nbsp;</template>
        </h3>
    </div>
    <hr>
    <!-- OBJECT ITERATION -->
    <h2 v-for="value in myInfo" :key="value">{{ value }}</h2>
    <template v-for="(value, key, index) in myInfo" :key="index">
        {{ key == 'age' ? 'Level' : key }} - {{ key == 'age' ? value > 18 ? 'Senior' : "Junior" : value }} &nbsp;
    </template>
    <hr>

    <!-- CONDITIONAL LIST RENDERING -->

    <!-- <h2 v-for="name in names" :key="name" v-if="name === 'Aman'">{{ name }}</h2> -->

    <template v-for="name in names" :key="name">
        <h2 v-if="name === 'Aman'">{{ name }}</h2>
    </template> 

</template>

<script>
export default {
    name: "LIST RENDERING",
    data() {
        return {
            names: ['Aman', 'Mayank', 'Tarun'],
            fullNames: [
                { first: "Peter", last: "Parker" },
                { first: "Bruce", last: "Wayne" },
                { first: "Princess", last: "Diana" },
            ],
            actors: [
                {
                    name: 'Christian Bale',
                    movies: ['Batman', 'The Prestige']
                },
                {
                    name: 'Di Caprio',
                    movies: ['Titanic', 'Inception']
                }
            ],
            myInfo: {
                name: "Aman Bisht",
                age: 15,
                profession: "Software Enginner"
            }
        }
    }
}
</script>

<!--

v-for directive allows us to loop over arrays or objects and render a block of HTML for each item SYNTAX ::

 v-for = " item in arr ", Where arr is an array in which we are iterating over and item is current value in that array being iterated. It is similar to for-in loop syntax but work kind of like for-of loop.
 
 With v-for directive it is necessary to use v-bind:key attirbute directive else get error, And value must be unique for every iteration. "Reason is similar to key prop in list rendering in react"

 Sometime we want to get index of element being iterated for this we use syntax : v-for = "(item, index) in arr", Where now we have access to index as well for use.

 Sometime we want to render or iterate over object with key-value pair instead of array for this we use same syntax :: 

 v-for = "val in object", Where val is the value of key on object.
 v-for = "(val, key) in object", Where val and key is value and property on object.  
 
 @@@@ 

 NOTE ::  

  <div v-for="item in items" :key="item.id">
    {{ item.name }}
  </div>

  It means in vue js loop through the items array. For each item, render a new <div> with the content item.name, and give each <div> a unique :key using item.id. 
 
 @@@@

 The reason :key attribute is must use with v-for directive is because similar to in react vue js also use VIRTUAL DOM to track changes in the UI. The vue js virtual dom uses :key attribute to identify nodes unqiuely when list changes. 

 The :key attribute helps vue identify which item in a list has changed, added or removed and plays a crucial role in handling ui update efficently.

 The :key attribute should always have a unique value in each iteration. 

Sometime we want to do conditional list rendering, In this case we cannot use v-for and v-if at the same time in an element because vue evaluates v-if expression before v-for as a result item from list used in conditional expression in v-if does not exist for use hence error.

To fix this we can either use "COMPUTED PROPERTY" or a wrapper template tag for condition checking.

-->
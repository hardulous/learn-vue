<template>

    <h2>COMPUTED PROPERTIES</h2>

    <h2>Fullname - {{ firstName }} {{ lastName }}</h2>
    <h2>Computed Fullname - {{ fullName }}</h2>
    <h2>Total - {{items.reduce((total, curr) => total + curr.price, 0)}}</h2>
    <h2>Computed Total - {{ total }}</h2>
    <h2>Method Total - {{ getTotal() }}</h2>

    <!-- Here as reactive data property items changes which is dependency of computer property total, So total will be calculated again -->
    <button @click="items.push({ id: 4, title: 'KEYBOARd', price: 20 })">Add Item</button>

    <!-- To trigger re-rendering -->
    <input type="text" v-model.trim="country" placeholder="Enter Country Name">

    <!-- Expensive products > 100rs -->
    <template v-for="item in items" :key="item.id">
        <h2 v-if="item.price > 100">{{ item.title }} {{ item.price }}</h2>
    </template>
    <hr>
    <h2 v-for="item in expensiveItems" :key="item.id">{{ item.title }} {{ item.price }}</h2>

    <!-- COMPUTED SETTER -->
    <h2>Getter Fullname - {{ fullName }}</h2>
    <button @click="fullName = 'Mayank Tanwar'">Setter Fullname</button>

</template>

<script>
export default {
    name: "COMPUTED PROPERTIES",
    data() {
        // Reactive data properties
        return {
            firstName: 'Aman',
            lastName: 'Bisht',
            items: [
                {
                    id: 1,
                    title: 'TV',
                    price: 100
                },
                {
                    id: 2,
                    title: 'PHONE',
                    price: 200
                },
                {
                    id: 3,
                    title: 'LAPTOP',
                    price: 300
                },
            ],
            country: ''
        }
    },
    methods: {
        // A method to return a total value from existing data properties 
        getTotal(){
            console.log("Method runned")
            return this.items.reduce((total, curr) => total + curr.price, 0)
        }
    },
    computed: {
        // A property derived from existing data properties to show fullname of the user, Vue tracks which reactive properties a computed depends on (firstName and lastName). It caches the result and only recalculates if one of its dependencies changes
        // fullName() {
        //     console.log("Computed property-1 runned")
        //     return `${this.firstName} ${this.lastName}`
        // },
        fullName:{
            // It will be called when we access fullName in template
            get(){
                return `${this.firstName} ${this.lastName}`
            },
            // It will be called when we assign by fullName = newValue
            set(value){
                const names = value.split(' ')

                // Here making suring data properties and computed properties are in sync with each other 
                this.firstName= names[0]
                this.lastName= names[1]
            }
        },

        // A property derived from existing data properties to show total cost of user's purchase 
        total() {
            console.log("Computed property-2 runned")
            return this.items.reduce((total, curr) => total + curr.price, 0)
        },
        // A derived list of expensive products whose price is > 100 rs
        expensiveItems(){
            return this.items.filter(item=> item.price>100)
        }
    }
}
</script>

<!-- 

Computed properties are used to derive new data from existing data on reactive state. The derived data then can be bounded to the <template> just like calling methods that returns value. They are highly performant just like "useMemo() in react" as they cached returned value which only update when their dependencies change. 

To define them add a property called 'computed' object in component defination options, It is a object of memoized value functions which we can access in template as a property (Like getter and setter).

The reason to use computed properties is if derived value need to be used in multiple place it is good not to use same js expression to get that derived value in every place rather use computed property to 1st create derived value then use in many places, They are cached until the reactive data properties used inside them changes, Better for expensive calculations. They also make template clear which is recommended. 

Here we can returns same derived value from methods as well which will re-run on very re-rendering of template so why use computed properties ::

 Computed properties are cached which means if something independent of computed properties dependencies changes on the page and ui re-rendered then the cached value will be returned and computed property will not be recalculated which improves app performance. On the other hand method always runs on re-rendering of app which is independent of any reactive data property

Computed properties can be used with v-for as well, Sometime in v-for we have to show item in ui from filterd, sorted and modified list which instead of doing in template to keep it clean we can use computed properties to derive such list and use in template.  

So far our computed properties have been read only and derived from existing data properties however we might come across a scenario where we not only need to access them using GETTER but also need to set computed properties value using a SETTER. EX ::

We make an api call and store its result in computed properties but also need to allow user to update that value so it can be posted back to the server. To create getter and setter make computed property object instead of function with 2 methods "get()" and "set()".
   
@@@@

NOTE :: Here we can use computed properties in v-model as well which will use getter and setter behind the scene but if we use v-model="fullName" on a computed property without a setter, we will get error ::

 Computed property "fullName" was assigned to but it has no setter.

@@@@

-->
<template>
    
    <h2>WATCHER</h2>

    <h2>Volume Tracker (0-20)</h2>
    <h3>Current Volume - {{ volume }}</h3>
    <div>
        <button @click="volume+=2">Increase</button>
        <button @click="volume-=2">Decrease</button>
    </div>

</template>

<script>
export default {
    name: "WATCHER",
    data(){
     return {
        volume: 0
     }
    },
    watch:{
     // Here as we want to look for changes in volume data property so name of watch function must be volume as well.
     volume(newVal,oldVal){
        if(newVal >= 16 && newVal > oldVal){
            alert('High volumne alert')
        }
     }
    }
}
</script>

<!-- 

A watcher (watch) is used to observe changes to a reactive data/computed property and execute custom logic when the value changes.

Lets say we need to implement a volume tracker in which, If volume level increase to 16 we will display a warning message to the user.

To implement watcher in component defination object we can add another property called 'watch' which is an object of function where each function name corresponds to data or computed properties that we want to watch for change in value. SYNTAX ::

watch: {
  searchTerm(newValue, oldValue) {
    ...side-effect logic
  }
}

Where "newValue" is The updated value and "oldValue" The previous value.

Here we can also use computer property and watcher in place of each other as both look for change in data property but watcher provide more generic way to react to data changes however it is not recommended to mimic a computed property as a watcher. 

So use computed properties we need to create new data from existing data source and when need to reduce amount of variable or logic getting repeated in multiple place ( ~= useMemo() ). On the other hand use watcher when need to perform side-effect or execute a code when a particular data property changes, Api call ( ~= useEffect() ).

-->
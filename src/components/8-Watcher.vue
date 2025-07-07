<template>

  <h2>WATCHER</h2>

  <h2>Volume Tracker (0-20)</h2>
  <h3>Current Volume - {{ volume }}</h3>
  <div>
    <button @click="volume += 2">Increase</button>
    <button @click="volume -= 2">Decrease</button>
  </div>
  <input type="text" v-model="movie">
  <input type="text" v-model="movieInfo.title">
  <input type="text" v-model="movieInfo.actor">
  <div>
    <button @click="movieList.push('Spiderman')">Add movie mutating</button>
    <button @click="movieList = movieList.concat('Spiderman')">Add movie immutating</button>
  </div>
</template>

<script>
export default {
  name: "WATCHER",
  data() {
    return {
      volume: 0,
      movie: 'Batman',
      movieInfo: {
        title: '',
        actor: ''
      },
      movieList: ['Batman', 'Superman']
    }
  },
  watch: {
    // Here as we want to look for changes in volume data property so name of watch function must be volume as well.
    volume(newVal, oldVal) {
      if (newVal >= 16 && newVal > oldVal) {
        alert('High volumne alert')
      }
    },
    //  Watcher as componentDidMount
    movie: {
      handler(newVal) {
        // Calling api based on movie value
        console.log(`Movie name is ${newVal}`)
      },
      immediate: true  // Will run above handler() function after component mounted on dom for 1st time as componentDidMount
    },
    // Watcher for object data property
    movieInfo: {
      handler(newVal) {
        console.log(`Property of object changes ${newVal.title} ${newVal.actor}`)
      },
      deep: true // Will trigger watcher even if property of object changes rather than reference
    },
    // Watcher for array data property
    movieList: {
      handler(newVal) {
        console.log(`Item in array added ${newVal}`)
      },
      deep: true // Will trigger watcher even if item in array changes rather than reference. 
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

Right now our watcher is not running as componentDidMount or only when data property changes so for this we can pass 'immediate' property in watcher.  

The 'immediate' runs the watcher immediately when the component is mounted — without waiting for the watched value to change.

In react in order to trigger useEffect() hook with dependency as reference data-type either array or object we need to pass new reference on it rather than internal value change only. In vue also by-default watcher will trigger again if reference of object or array data property changes not for internal value change, If want to trigger watcher for either item in array or property of object changes rather than whole reference the pass 'deep' property in watcher.

The 'deep' allows the watcher to react to changes inside nested properties of an object or array — not just top-level reference changes. So if mutating object or array directly pass 'deep: true'. 

-->
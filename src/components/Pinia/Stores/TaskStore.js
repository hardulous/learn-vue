import { defineStore } from "pinia";

// Created a store which returned a custom hook or composable that can be used in our vue component.
export const useTaskStore = defineStore("taskStore", {

  // All data inside the state becomes reactive
  state: () => ({
    tasks: [
      {
        id: 1,
        title: "Buy Some Milk",
        isFav: false,
      },
      {
        id: 2,
        title: "Play Piano",
        isFav: true,
      },
    ],
  }),
  
});

/*

A store in Pinia is like a container for managing state, getters, and actions which is similar to component's data, computed and methods but on global level.

To create a store we use 'defineStore()' function from pinia which takes 1st argument as 'unique store id ( used internally for devtools )' and 2nd is options object to define the store. It is recommended to store the return value with name prefix 'use' similar to custom hook because the returned value itself is 'useStore' function which acts like a custom hook

The 2nd options object accept 3 argument state ( A function that returns a reactive data just like the one in vue component locally ), getters () and actions () 

In vue it is recommended to create a seperate store for each feature in our vue app that is for authentication we can have user store and for product list we can have product store and so on. This makes pinia modular in nature.   

*/

import { defineStore } from "pinia";

// Created a store which returned a custom hook or composable that can be used in our vue component.
export const useTaskStore = defineStore("taskStore", {
  // All data inside the state becomes reactive, Here below we have state with initial value
  state: () => ({
    tasks: [],
    isLoading: false,
  }),

  // Computed properties for the store
  getters: {
    // Computed property to return on taks where isFav is 'true'
    fav(state) {
      console.log(state, this); // Both will refer to store state but in arrow function cannot use 'this'

      return this.tasks.filter((item) => item.isFav);
    },

    // Getter to return count of fav or all tasks
    favCount() {
      // Here one getter can be used on another getter just like computed properties
      return this.fav.length;
    },

    taskCount(state) {
      return state.tasks.length;
    },
  },

  // Actions for the store to manupulate the state
  actions: {
    // Async action to get tasklist
    async getTasks() {
      this.isLoading = true;
      const res = await fetch("http://localhost:3000/tasks");
      const data = await res.json();
      this.isLoading = false;
      this.tasks = data;
    },

    // Action to add new task on the list
    // addTask(task) {
    //   this.tasks.push(task);
    // },

    // Async action to add new task on the list
    async addTask(task) {
      const res = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        body: JSON.stringify(task),
        headers: { "Content-Type": "application/json" },
      });
      if (res.error) {
        console.log(res.error);
      }
      this.tasks.push(task);
    },

    // // Action to delete a task
    // deleteTask(id) {
    //   this.tasks = this.tasks.filter((item) => id !== item.id);
    // },

    // Async action to delete a task
    async deleteTask(id) {
      const res = await fetch("http://localhost:3000/tasks/" + id, {
        method: "DELETE",
      });
      if (res.error) {
        console.log(res.error);
      }
      this.tasks = this.tasks.filter((item) => id !== item.id);
    },

    // Action to toggle fav
    // toggleFav(id) {
    //   const task = this.tasks.find((item) => item.id === id);
    //   task.isFav = !task.isFav;
    // },

    // Async action to toggle fav
    async toggleFav(id) {
      const task = this.tasks.find((item) => item.id === id);
      const res = await fetch("http://localhost:3000/tasks/" + id, {
        method: "PATCH",
        body: JSON.stringify({isFav: !task.isFav})
      });
      if (res.error) {
        console.log(res.error);
      }
      task.isFav = !task.isFav;
    },
  },
});

/*

A store in Pinia is like a container for managing state, getters, and actions which is similar to component's data, computed and methods but on global level.

To create a store we use 'defineStore()' function from pinia which takes 1st argument as 'unique store id ( used internally for devtools )' and 2nd is options object to define the store. It is recommended to store the return value with name prefix 'use' similar to custom hook because the returned value itself is 'useStore' function which acts like a custom hook

The 2nd options object accept 3 argument state ( A function that returns a reactive data just like the one in vue component locally ), getters ( Computed properties for the state present inside the store ) and actions ( Methods for the state to manipulate them ). 

Getters allow us to create computed properties for the store's state which will be also available for us. Although we can directly access store's state using its useStore() hook but getters allow us to return the state after doing some manupulations on it. A getter in pinia is an object of computed properties function where each function receive the state as the first parameter  

Actions are like methods — you use them to modify state or perform logic (e.g., API calls). A actions is an object of functions to modify the state  

By json-server a backend locally is running at 'localhost:3000/tasks' which we can use to stimulate async actions. 

@@@@@ NOTE :: In vue it is recommended to create a seperate store for each feature in our vue app that is for authentication we can have user store and for product list we can have product store and so on. This makes pinia modular in nature. @@@@@

*/

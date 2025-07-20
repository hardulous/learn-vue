import { ref } from "vue";

export default function useCounter(initialCount=0) {
  const count = ref(initialCount);

  function incrementCount() {
    count.value += 1;
  }

  // Returning common logic
  return {
    count,
    incrementCount,
  };
}

/*

Creating composable is similar to creating a custom hook, Name should start with 'use' prefix and it must be a .js file 

*/

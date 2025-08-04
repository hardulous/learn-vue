<template>

    <div>
        <h2>Scroll 2</h2>
        <h3>Scroll-2 Section 1</h3>
        <p v-for="v in 25" :key="v">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia consectetur quasi est
            saepe nulla iste quis, quibusdam recusandae quidem sed sunt, fuga architecto corrupti? Eaque nisi labore
            sunt sint veniam?</p>
        <h3>Scroll-2 Section 2</h3>
        <p v-for="v in 25" :key="v">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia consectetur quasi est
            saepe nulla iste quis, quibusdam recusandae quidem sed sunt, fuga architecto corrupti? Eaque nisi labore
            sunt sint veniam?</p>
        <h3 id="abt3">Scroll-2 Section 3</h3>
        <p v-for="v in 25" :key="v">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia consectetur quasi est
            saepe nulla iste quis, quibusdam recusandae quidem sed sunt, fuga architecto corrupti? Eaque nisi labore
            sunt sint veniam?</p>
    </div>

</template>

<script>
export default {
    name: 'Scroll-2'
}
</script>

<!-- 

A seprate chunk will be created this route component by webpack code-spitting. The chunk of this code is downloaded only when user navigate to it.



-->
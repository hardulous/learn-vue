<template>

    <div>
        <h2>Scroll 1</h2>
        <p v-for="v in 25" :key="v">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia consectetur quasi est saepe
            nulla iste quis, quibusdam recusandae quidem sed sunt, fuga architecto corrupti? Eaque nisi labore sunt sint
            veniam?</p>
        <RouterLink :to="{path:'/scroll2'}">Go To Scroll-2</RouterLink>
        <p v-for="v in 25" :key="v">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia consectetur quasi est saepe
            nulla iste quis, quibusdam recusandae quidem sed sunt, fuga architecto corrupti? Eaque nisi labore sunt sint
            veniam?</p>
    </div>

</template>

<script>
export default {
    name: 'Scroll-1'
}
</script>

<!-- 

Here when user click on /scroll2 routerLink the position of scroll remain same as of last route scroll position.  


-->
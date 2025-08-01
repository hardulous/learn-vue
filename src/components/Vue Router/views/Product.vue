<template>

    <h2>OPTION PARAMETER ROUTE - {{ productId }} {{ prod }}</h2>

    <!-- RouterLink with multiple dynamic segment -->
    <RouterLink :to="{ name: 'product', params: { prod: [12, 44, 66] } }">Mobile</RouterLink>

</template>

<script>
export default {
    name: 'PRODUCT',
    props: ['productId', 'prod'],
    setup(props) {
        console.log(props)
    }
}
</script>

<!-- 

Option params route this route execute for both /products and /products/123 and as a Repeatable paramas will execute for 'n' no of dynamic path segments in it and now props 'productsId' will become array of dynamic segments. 

the 'params.prod' will give you an array of params instead of a string and will also require you to pass an array when using named routes. 

-->
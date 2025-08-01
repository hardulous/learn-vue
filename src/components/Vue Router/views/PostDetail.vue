<template>

    <div>
        <h2>POST DETAIL</h2>

        <h3>{{ id }}</h3>

        <!-- Go back in history -->
        <button @click="goBack">Go Back</button>
    </div>

</template>

<script>
import { useRouter, useRoute } from 'vue-router';

export default {
    name: 'POST DETAIL',
    setup() {

        // Accessing router instance
        const router = useRouter()

        // Accessing current route location object
        const route = useRoute()

        console.log('Router', router)
        console.log('Route', route)
        console.log('location value', route.params, route.fullPath)

        const goBack = () => router.back()

        return {
            id: route.params.id,
            goBack
        }
    }
}
</script>

<!-- 

Here this component will be shown when user hit '/posts/1', /posts/abc etc. Or any value after /posts can come and store in param 'id' which we can access here. 

-->
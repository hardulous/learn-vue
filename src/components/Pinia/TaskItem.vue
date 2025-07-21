<template>
    <div>
        <h3 style=" display: flex; gap: 10px; justify-content: center; align-items: center;">
            <span>{{ task.title }}</span>
            <button>FAV</button>
            <button>DELETE</button>
        </h3>
    </div>
</template>

<script>
    export default {
        name: 'TAKS ITEM',
        props:['task']
    }
</script>

<!-- 



-->
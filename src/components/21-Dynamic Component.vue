<template>

    <h2>DYNAMIC COMPONENT</h2>

    <button @click="activeTab = 'TabA'">Tab A</button>
    <button @click="activeTab = 'TabB'">Tab B</button>
    <button @click="activeTab = 'TabC'"> Tab C</button>

    <!-- WITHOUT DYNAMIC COMPONENT -->
    <!-- <TabA v-if="activeTab == 'TabA'" />
    <TabB v-if="activeTab == 'TabB'" />
    <TabC v-if="activeTab == 'TabC'" /> -->

    <!-- WITH DYNAMIC COMPONENT -->
    <!-- <component :is="activeTab"/> -->

    <!-- PERSIST COMPONENT STATE -->
    <keep-alive>
        <component :is="activeTab" />
    </keep-alive>
</template>

<script>
import TabA from './22-TabA.vue'
import TabB from './23-TabB.vue'
import TabC from './24-TabC.vue'
export default {
    name: 'DYNAMIC COMPONENT',
    components: {
        TabA,
        TabB,
        TabC
    },
    data() {
        return {
            activeTab: 'TabA'  // Reactive data from tab visibility
        }
    }
}
</script>


<!-- 

A DYNAMIC COMPONENT is a way to switch between multiple components at runtime using the <component> tag with the :is attribute. 

Without dynamic component we would be accomplish this using 'v-if' directive. It is also not bad but if we are building lets say multi-step form where each part of it present under a tab then we will easily have 8-10 tabs and their component to be present inside <template> and then repeative use of 'v-if' directive. 

A <component> tag is a built-in Vue element that acts as a placeholder for rendering any registered component dynamically at runtime. It doesn't render anything itself, but instead delegates rendering to whatever component is passed to it.

The ':is' is a special attribute that tells Vue which component to render inside <component>. It can be ::

 (a). A string that matches the name of a registered component
 (b). The imported component object itself
 (c). A dynamic expression that return either name of registered component or component object itself

Here this dynamic <component> by-default mount and unmount the component on each new render as a result the components local state is not persist and sometime we want the local state of component to persist, ex in mulit-step form where user can go to and from while filling the details. 

For this if we want Vue to cache the state of the components (instead of destroying and recreating), wrap it with <keep-alive> tag. Wihtout keep-alive we will be doing it using 'v-show' directive. 

-->
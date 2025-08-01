import { createRouter, createWebHistory } from "vue-router";

// Step-1. Define route component by importing them
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Posts from "../views/Posts.vue";
import PostDetail from "../views/PostDetail.vue";
import NotFound from "../views/404.vue";
import SideBar from "../views/SideBar.vue";
import PostBar from "../views/PostBar.vue";

// Step-2. Define routes and map them to a path
const routes = [
  // This '/' route can display both <Home/> and <SideBar/> component 
  {
    path: "/",
    name: "home",
    components: {
        default: Home,    
        sideBar: SideBar   // Router-view with name as sideBar
    },  
    // Here passing props to individual named view
    props : {   
      default: { theme: 'light'},
      sideBar: { lang: 'en' }
    }
  },
  // Here above means when user navigate to home page '/' we will show them Home component
  {
    path: "/about",
    name: "about",
    component: About, // Router-view without a name will be given default as its name 
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/posts",
    name: "posts",
    component: Posts,
  },
  // Dynamic route
  {
    path: "/posts/:id", // Dynamic segment is 'id'
    name: "postDetail",
    components: {
      default: PostDetail,
      postBar: PostBar
    } ,
    props: true   // Now the dynamic 'id' will be passed as props to the both component 
  },
  // 404 page for no match route
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: NotFound,
  }, 

  // Redirect route when user hit '/home' he will be redirected to '/' route
//   {
//     path: '/home',   // Actual path hit by user
//     redirect: '/'    // Redirected path 
//   },

  // An alias of '/' as '/ghar' and '/home' means when user visits /ghar or /home the URL remains the same but it will be matched as if the user is visiting the '/' route
//   {
//     path: '/',
//     name: 'home',
//     component: Home,
//     alias: ['/ghar', '/home']
//   }   
   
];

// Step-3. Creates a Router instance that can be used by our vue app.
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Step-4. Export the router instance for use
export default router;

/*

createWebHistory(string) also takes an argument which is the BASE URL of our application that tells vue-router what is the root path of our app ex :: 

createWebHistory('/my-app/') means:

Your app is served from a sub-directory like https://example.com/my-app/.

All internal routing will be prefixed with /my-app/

By-default the root path is '/' 

/:pathMatch(.*)* is a catch-all dynamic route used to match any path that doesn't match a defined route — often for displaying a "Page Not Found" (404) page

By-default in all of our route we have 'name' property assigned to each so all are Named Route. 

*/

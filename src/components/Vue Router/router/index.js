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
import Product from "../views/Product.vue";
import User from "../views/User.vue";
import Profile from "../views/Profile.vue";
import Login from "../views/Login.vue";
import { defineAsyncComponent } from "vue";
import Loading from "@/components/Vue Router/Component/Loading.vue";
// import Scroll1 from "../views/Scroll-1.vue";
// import Scroll2 from "../views/Scroll-2.vue";

// Lazy Load component with Suspense state
const Scroll1 = defineAsyncComponent({
  loader: () => import('../views/Scroll-1.vue'),
  loadingComponent: Loading,
  // delay: 10, // milliseconds before showing the loading UI
  // timeout: 30000 // optional: how long before throwing error
});

// Step-2. Define routes and map them to a path
const routes = [
  // This '/' route can display both <Home/> and <SideBar/> component
  {
    path: "/",
    name: "home",
    components: {
      default: Home,
      sideBar: SideBar, // Router-view with name as sideBar
    },
    // Here passing props to individual named view
    props: {
      default: { theme: "light" },
      sideBar: { lang: "en" },
    },
    // Adding custom meta property to this route object
    // meta:{
    //   isAuthenticated: true
    // }
  },
  // Here above means when user navigate to home page '/' we will show them Home component
  {
    path: "/about",
    name: "about",
    component: About, // Router-view without a name will be given default as its name
    sensitive: true, // Now path need to be case sensitive
    strict: true, // Now path does not match any following slash /about/
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
    // Per-Route Guard, It will be called only when navigating to this '/contact' route.
    // beforeEnter: (to, from, next)=>{
    //   console.log("Per-Route Guard Called")
    //   console.log("From", from)
    //   console.log("To", to)

    //   // Reject navigation
    //   // return false

    //   return next("/posts")
    // }
  },
  {
    path: "/posts",
    name: "posts",
    component: Posts,
  },
  // Dynamic route
  {
    path: "/posts/:id(\\d+)", // Dynamic segment is 'id'. Now :id need to be number only to execute
    name: "postDetail",
    components: {
      default: PostDetail,
      postBar: PostBar,
    },
    props: true, // Now the dynamic 'id' will be passed as props to the both component
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

  // Option Params
  //  {
  //   path: '/products/:productId(\\d+)?', // Now 'productId' is optional and will always be number
  //   name: 'products',
  //   component: Product,
  //   props: true
  //  },

  // Repeatable Params
  //  {
  //   path: '/products/:prod+',   // This will match any no of path after /products/ like /products/one, /products/one/two etc.
  //   name: 'product',
  //   component: Product,
  //   props: true
  //  },

  {
    path: "/products/:prod*", // This will match any no of path after /products/ like /products/one and that route /products/ itself.
    name: "product",
    component: Product,
    props: true,
  },

  //  Nested Routes
  {
    path: "/user/:id",
    component: User,
    props: true,
    children: [
      {
        path: "", // Default <RouterView/> component to show in nested route
        name: "userHome", // We can also navigate using named route
        component: Home,
      },
      {
        // Profile component will be rendered inside User component <router-view>
        // when /user/:id/profile is matched
        path: "profile",
        // name: 'userProfile',
        component: Profile,
      },
      {
        // Contact component will be rendered inside User component <router-view>
        // when /user/:id/contact is matched
        path: "contact",
        component: Contact,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    // Adding custom meta property to this route object
    meta: {
      isAuthenticated: false,
    },
    // Meta field can be access inside per-route also
    // beforeEnter: (to)=>{
    //   console.log("Per-Route beforeEnter Called")
    //   console.log("Meta", to.meta)
    // }
  },

  // Ui for scrolling behaviour
  {
    path: "/scroll1",
    component: Scroll1,    // Lazy loaded component with loading state
  },
  {
    path: "/scroll2",
    // component: Scroll2,
  },
  // Lazo load the component without loading state
  {
    path: "/scroll2",
    component: ()=> import("../views/Scroll-2.vue")   
  }
];

// Step-3. Creates a Router instance that can be used by our vue app.
const router = createRouter({
  history: createWebHistory(),
  routes,

  // Customize The Scroll Behaviour
  scrollBehavior(to, from, savedPosition) {
    // to and from are route location object
    // savedPosition is last route scroll position, Only available when using browser's forward/back buttons it is an object with {left, top} position matrix.

    console.log("From", from);
    console.log("To", to);
    console.log("SavedPosition", savedPosition);

    // Scroll to top on every route change
    // return { top: 0 }

    // We pass a CSS selector or a DOM element in 'el' property to scroll to DOM element.
    // return { el: "#abt3" }
    // return { el: document.getElementById("abt3"), top: 10 }  // Scroll 10px below the element

    // Scroll To Last Saved Position On Route
    // if(savedPosition) return savedPosition

    // Scroll To Anchor Element (#abt3)
    // return { el: to.hash }

    // To Scroll Smoothly
    // return { top:0, behavior: 'smooth' }

    // Sometimes we need to wait a bit before scrolling in the page. For example, when dealing with transitions, we want to wait for the transition to finish before scrolling. To do this you can return a Promise. 
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 });   // Scroll To Top After Delays Of 1 sec
      }, 1000);
    });
  },
});

// Accessing meta field in navigation guard
// router.beforeEach((to, from)=>{
//   console.log('Global beforeEach Guard Called')
//   console.log("From", from)
//   console.log("To", to)
//   console.log("Meta", to.meta)
// })

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

Here '/posts/:id' this path will execute for any value of :id like /posts/123 or /posts/abc which we dont want and we know id will always need to be number so have to use CUSTOM REGEX PATH. 

\\d+ (double backslash in JS to escape) = one or more digits can be there and must be number.

We can also have something like this '/posts/:id(\\d+)/category/:catName([a-z]+$)' the 'id' needs to be number only and 'catName' needs to be string only. 

You can also mark a parameter as optional by using the ? modifier like '/products/:productId?' it means it will match '/products' and '/products/12'. To further restrict productId to be number '/products/:productId(\\d+)?'

Sometime on same path we need to render different component for this again we use regex like '/products/:prod(\\d+)' or '/products/:prod'. The former will execute for 'prod' type number and other than that value the latter one will exeute. 

Vue Router evaluates routes in the order they are defined, but more specific routes (like those with regex constraints) take precedence over generic ones if both match. 

Sometime we need to match route with 'n' no of params in it for this we use 'REPEATABLE PARAMS' by '*' (0 or more) and '+' (1 or more)

By default, all routes are case-insensitive and match routes with or without a trailing slash ex, /about will match /About, /abouT/ and /about. This behavior can be configured with the strict and sensitive

Here at this moment when user visit '/user/id' then inside User.vue nothing will be shown in its <RouterView/> component to show a nested route by-default just pass empty path in.  

Per-Route Guard allow us to defined route guard in a specific route rather than globally with them help of 'beforeEnter' option which work similar to 'beforeEach' of global guard. 

'beforeEnter' guards only trigger when entering the route, they don't trigger when the params, query or hash change e.g. going from /users/2 to /users/3 or going from /users/2#info to /users/2#projects. They are only triggered when navigating from a different route

Here in route object of '/' and '/login' the object of 'meta' field can be access in navigation guards or in their route component useRoute() hook instance. 

Vue Router supports dynamic imports out of the box, The 'component' property of route object accept a function that returns a Promise of a component and Vue Router will only fetch it when entering the page for the first time, then use the cached version. 

To lazy load route with loading satee we will use 'defineAsyncComponent', Which is a Vue 3 utility used to lazy-load components — i.e., load a component only when needed, instead of bundling it in the initial app load. Similar to vue-router dynamic import but defineAsyncComponent gives you more control, like showing loading/error states, timeouts, and retry behavior

*/

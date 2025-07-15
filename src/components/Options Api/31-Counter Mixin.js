// Here exporting a resuable functionality (Mixin) which can be used in other components defination. 
export default {
    data(){
        return {
            count: 0
        }
    },
    methods:{
        incrementCount(){
            this.count+=1
        }
    }
}


/**

A mixin is a JavaScript object that contains options like data, methods, created(), etc. just like a component. When included in a component, its options are merged with the component’s own options. 

A mixin file must be a .js not .vue file. 

 */
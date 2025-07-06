<template>

    <h1>FORM HANDLING</h1>
    <div>
        <pre>
        {{ JSON.stringify(formValues, null, 2) }}
     </pre>
    </div>
    <form @submit="submitForm">
        <!-- CONTROLLED COMPONENT -->
        <label for="name">Name</label>
        <input type="text" id="name" v-model="formValues.name">
        <br>
        <label for="profile">Profile Summary</label>
        <textarea id="profile" v-model="formValues.profileSummary" />
        <br>
        <label for="country">Country</label>
        <select id="country" v-model="formValues.country">
            <option value="">Select a country</option>
            <option value="india">India</option>
            <option value="usa">Usa</option>
            <option value="pak">Pakistan</option>
        </select>
        <br>
        <label for="job-location">Job Location</label>
        <select id="job-location" multiple v-model="formValues.jobLocation">
            <option value="india">India</option>
            <option value="usa">Usa</option>
            <option value="pak">Pakistan</option>
        </select>

        <hr>
        <!-- MANUALLY CONTROLLING COMPONENT REACTIVE DATA -->

        <label for="job">Job</label>
        <input type="text" id="job" :value="formValues.job" @change="(e) => formValues.job = e.target.value">
        <input type="text" id="job" :value="formValues.job" @input="(e) => formValues.job = e.target.value">
        <br>

        <hr>

        <input type="checkbox" id="remoteWork" v-model="formValues.remoteWork" true-value="yes" false-value="no">
        <label for="remoteWork">Open to work remotely?</label>
        <br>
        <label>Skill set</label>
        <input type="checkbox" id="html" value="html" v-model="formValues.skillSet">
        <label for="html">HTML</label>
        <input type="checkbox" id="css" value="css" v-model="formValues.skillSet">
        <label for="css">CSS</label>
        <input type="checkbox" id="javascript" value="javascript" v-model="formValues.skillSet">
        <label for="javascript">JAVASCRIPT</label>
        <br>
        <label>Years of experience</label>
        <input type="radio" id="0-2" value="0-2" v-model="formValues.yearsOfExperience">
        <label for="0-2">0-2</label>
        <input type="radio" id="3-5" value="3-5" v-model="formValues.yearsOfExperience">
        <label for="3-5">3-5</label>
        <input type="radio" id="6-10" value="6-10" v-model="formValues.yearsOfExperience">
        <label for="6-10">6-10</label>
        <hr/>

        <button>Submit</button>

    </form>

</template>

<script>
export default {
    name: "FORM HANDLING",
    data() {
        return {
            // Form initial reactive data
            formValues: {
                name: '',
                profileSummary: '',
                country: '',
                jobLocation: [],
                job: "",
                // remoteWork:false,
                remoteWork: "no",
                skillSet: [],
                yearsOfExperience: ''
            }
        }
    },
    methods:{
        submitForm(event){
            event.preventDefault()
            console.log('Form Values', this.formValues)
            // In real-world we will be sending this value to some api-endpoint as request body
        }
    }
}
</script>

<!-- 

For CONTROLLED COMPONENT and FORM HANDLING vue js provide us with v-model directive which provides us 2 way binding that is data binding from <template> to <script> and from <script> to <template>. It make sure <template> and data in <script> are in sync. 

Here v-model directive provide us 2 way data binding means under the hood it manage both "value" and "onInput" property required for CONTROLLED COMPONENT just like in react.

Instead of v-model directive for more control over CONTROLLED COMPONENT just like in react manually controlling when to update reactive data we use "v-bind: value" and "v-on: input" attribute.

@@@@ 

 NOTE :: The onChange in Vue is different from onChange in React. In react onChange execute on every keystroke/value change and in vue onChange execute on blur (when input loses focus and value changed)

 So " @input in Vue ≈ onChange in React " 

@@@@

Sometime when managing CONTROLLED CHECKBOX COMPONENT instead of value true or false we need something else in place of it that lets say if value is true consider it as "yes" and if false consider it as "no". For this we use 2 props "true-value" and "false-value". This exists only in vue not in react and native HTML.

Here when submit button is clicked the form emits a "submit event" which we can listen to using "v-on: submit" binding. 

-->
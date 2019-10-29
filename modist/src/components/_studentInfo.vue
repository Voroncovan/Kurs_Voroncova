<template>
 
    <div v-bind:class="this.$store.getters.getCurrentstyle">
	{{student.name}}
    {{getCount}}
    <img v-bind:src="student.photo" id="show-modal" @click="showModal = true">
    <label>File
            <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" />
    </label>
        <button v-on:click="submitFile()">Submit</button>
    <modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">Student</h3>
        <div slot="body"> <img v-bind:src="student.photo"></div>
    </modal>
	</div>

</template>
<script>
    import Vue from 'vue'
	import axios from 'axios'
	import VueAxios from 'vue-axios'
    import modal from './modal.vue'
    
	Vue.use(VueAxios, axios)

    export default {
        components: {
            modal
        },
        props: {
            id: '',
        },
        data: function() {
            return {
                student: {},
                showModal: false
            };
        },
        computed: {
         getCount () {
            return this.$store.getters['getCount'] 
        } 
        },
        mounted: function(){
        Vue.axios.get("http://46.101.212.195:3000/students/"+this.id).then((response) => {
            console.log(response.data)
            this.student = response.data;
          })
        },
        methods:  {
               submitFile() {
                let formData = new FormData();
                formData.append('file', this.file);
                formData.append('student_id', this.student._id);
                console.log('>> formData >> ', formData);

                // You should have a server side REST API 
                axios.post('http://localhost:3000/uploadphoto',
                    formData, {
                        headers: {
                        'Content-Type': 'multipart/form-data'
                        }
                    }
                    ).then(function () {
                    console.log('SUCCESS!!');
                    })
                    .catch(function () {
                    console.log('FAILURE!!');
                    });
                },
                handleFileUpload() {
                this.file = this.$refs.file.files[0];
                console.log('>>>> 1st element in files array >>>> ', this.file);
                }
        }
    }
</script>

 
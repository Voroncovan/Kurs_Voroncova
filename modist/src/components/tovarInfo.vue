<template>
 <div>
    <!-- <div v-bind:class="this.$store.getters.getCurrentstyle"> -->

   
    
    <!-- <label>File
            <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" />
    </label> -->
       
    <!-- <modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">{{tovar.Name}}</h3>
        <div slot="body"> <img v-bind:src="tovar.photo"></div>
    </modal> -->

<pre></pre>  
   <img  v-bind:src="tovar.photo" id="show-modal"  style="float:left;margin: 7px 15px 260px 15px;" align="left" width="350" height="400">
<div  color="black" >
<h4>{{tovar.Name}}</h4>


<hr  style=" border: none; border-top: 1px dotted black;">
 <h5>
     <p >{{tovar.opis1}}</p>
<hr  style=" border: none; border-top: 1px dotted black;">
     <p>{{tovar.opis}}</p>

<p >{{tovar.opis2}}</p>

<p >{{tovar.opis3}}</p>

<p >{{tovar.opis4}}</p>

<p >{{tovar.opis5}}</p> </h5>

<h4>Цена:{{tovar.Price}}грн</h4> 
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>

 </div>
</div>
 <!-- </div> -->
</template>
<script>
    import tovars from '../assets/js/tovars.js'
    import Vue from 'vue'
	import axios from 'axios'
	import VueAxios from 'vue-axios'
    import modal from './_modal.vue'
    
	Vue.use(VueAxios, axios)

    export default {
        components: {
            modal
        },
        // props: {
        //     id: '',
        // },
        data: function() {
            return {
                tovar : {},
                showModal: false
            };
        },
        computed: {
        //  getCount () {
        //     return this.$store.getters['getCount'] 
        // } 
        },
        mounted: function(){
                //alert(clothes);
                for(let i = 0; i < clothes.length; i++){                    
                    if(clothes[i].id == this.$route.params.id) this.tovar = clothes[i];
                }
                // tovars.forEach(item => {
                //     alert(item.id);
                //     alert(this.$route.params.id);
                //    if(item.id == this.$route.params.id) this.tovar = item;
                // })
                // let foundStudent = this. tovar.find((element) => {
                //     return element.id == id;
                // });
                // this.id = foundStudent.id;
                // this.name = foundStudent.name

          },
        
        methods:  {
               submitFile() {
                let formData = new FormData();
                formData.append('file', this.file);
                formData.append(' tovar', this. tovar.id);
                console.log('>> formData >> ', formData);

                // You should have a server side REST API 
                axios.post('http://localhost:9000/uploadphoto',
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

 
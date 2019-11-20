<template>	


<section class="ftco-section bg-light">
    <div class="dropdown open">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Категория
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#" @click="filter('Краски художественные')">Краски художественные</a>
    <a class="dropdown-item" href="#" @click="filter('Кисти') ">Кисти</a>
    <a class="dropdown-item" href="#" @click="filter('Краски художественные') ">Something else here</a>
  </div>
</div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm col-md-6 col-lg-3" v-for="item in filtertovars" v-bind:key="item.id">
                
                <div class="product">
         <a href="#" class="img-prod"><router-link :to="'/tovarInfo/'+item.id"><img class="img-fluid" width="1000px" alt="Colorlib Template" :src="item.photo"></router-link>
                   
     </a>
<pre></pre>
<!-- <div class="col -md-4" v-for="item in filtertovars" v-bind:key="item.id">  -->
                    <div class="text py-3 px-3" >
                        <h3>{{item.Name}}</h3>
                        <div class="d-flex">
                            <div class="pricing">
                                <p class="price">{{item.Price}} грн</p>
                                <p class="categori"><span class="mr-2 price-dc">{{item.Category}}</span>
                                </p>
                          
                        </div>

                            <!-- <div class="rating">
                                <p class="text-right">
                                    <span class="ion-ios-star-outline"></span>
                                    <span class="ion-ios-star-outline"></span>
                                    <span class="ion-ios-star-outline"></span>
                                    <span class="ion-ios-star-outline"></span>
                                    <span class="ion-ios-star-outline"></span>
                                </p>-->
                            <!-- </div>  -->
                        <!-- </div>   -->
                        </div>
                        <hr>
                        <!-- <p class="bottom-area d-flex">
                            <a href="#" class="add-to-cart"><span>Add to cart <i class="ion-ios-add ml-1"></i></span></a>
                            <a href="#" class="ml-auto"><span><i class="ion-ios-heart-empty"></i></span></a>
                        </p> -->
                    </div>
                </div>
            </div>
            <!-- <div class="col-sm col-md-6 col-lg-3">
                <div class="product">
                    <a href="#" class="img-prod"><img class="img-fluid" src="assets/images/product-2.jpg" alt="Colorlib Template">
                        <span class="status">New Arrival</span>
                    </a>
                    <div class="text py-3 px-3">
                        <h3><a href="#">Young Woman Wearing Dress</a></h3>
                        <div class="d-flex">
                            <div class="pricing">
                                <p class="price"><span>$127.00</span></p>
                            </div>
                            <div class="rating">
                                <p class="text-right">
                                    <span class="ion-ios-star-outline"></span>
                                    <span class="ion-ios-star-outline"></span>
                                    <span class="ion-ios-star-outline"></span>
                                    <span class="ion-ios-star-outline"></span>
                                    <span class="ion-ios-star-outline"></span>
                                </p>
                            </div>
                        </div>
                        <hr>
                        <p class="bottom-area d-flex">
                            <a href="#" class="add-to-cart"><span>Add to cart <i class="ion-ios-add ml-1"></i></span></a>
                            <a href="#" class="ml-auto"><span><i class="ion-ios-heart-empty"></i></span></a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-sm col-md-6 col-lg-3 ">
                <div class="product">
                    <a href="#" class="img-prod"><img class="img-fluid" src="assets/images/product-3.jpg" alt="Colorlib Template"></a>
                    <div class="text py-3 px-3">
                        <h3><a href="#">Young Woman Wearing Dress</a></h3>
                        <div class="d-flex">
                            <div class="pricing">
                                <p class="price"><span>$120.00</span></p>
                            </div>
                            <div class="rating">
                                <p class="text-right">
                                    <span class="ion-ios-star-outline"></span>
                                    <span class="ion-ios-star-outline"></span>
                                    <span class="ion-ios-star-outline"></span>
                                    <span class="ion-ios-star-outline"></span>
                                    <span class="ion-ios-star-outline"></span>
                                </p>
                            </div>
                        </div>
                        <hr>
                        <p class="bottom-area d-flex">
                            <a href="#" class="add-to-cart"><span>Add to cart <i class="ion-ios-add ml-1"></i></span></a>
                            <a href="#" class="ml-auto"><span><i class="ion-ios-heart-empty"></i></span></a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-sm col-md-6 col-lg-3 ">
                <div class="product">
                    <a href="#" class="img-prod"><img class="img-fluid" src="assets/images/product-4.jpg" alt="Colorlib Template"></a>
                    <div class="text py-3 px-3">
                        <h3><a href="#">Young Woman Wearing Dress</a></h3>
                        <div class="d-flex">
                            <div class="pricing">
                                <p class="price"><span>$120.00</span></p>
                            </div>
                            <div class="rating">
                                <p class="text-right">
                                    <span class="ion-ios-star-outline"></span>
                                    <span class="ion-ios-star-outline"></span>
                                    <span class="ion-ios-star-outline"></span>
                                    <span class="ion-ios-star-outline"></span>
                                    <span class="ion-ios-star-outline"></span>
                                </p>
                            </div>
                        </div>
                        <hr>
                        <p class="bottom-area d-flex">
                            <a href="#" class="add-to-cart"><span>Add to cart <i class="ion-ios-add ml-1"></i></span></a>
                            <a href="#" class="ml-auto"><span><i class="ion-ios-heart-empty"></i></span></a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-sm col-md-6 col-lg-3 ">
                <div class="product">
                    <a href="#" class="img-prod"><img class="img-fluid" src="assets/images/product-5.jpg" alt="Colorlib Template"></a>
                    <div class="text py-3 px-3">
                        <h3><a href="#">Young Woman Wearing Dress</a></h3>
                        <div class="d-flex">
                            <div class="pricing">
                                <p class="price"><span>$120.00</span></p>
                            </div>
                            <div class="rating">
                                <p class="text-right">
                                    <span class="ion-ios-star-outline"></span>
                                    <span class="ion-ios-star-outline"></span>
                                    <span class="ion-ios-star-outline"></span>
                                    <span class="ion-ios-star-outline"></span>
                                    <span class="ion-ios-star-outline"></span>
                                </p>
                            </div>
                        </div>
                        <hr>
                        <p class="bottom-area d-flex">
                            <a href="#" class="add-to-cart"><span>Add to cart <i class="ion-ios-add ml-1"></i></span></a>
                            <a href="#" class="ml-auto"><span><i class="ion-ios-heart-empty"></i></span></a>
                        </p>
                    </div>
                </div>
            </div>
          
            <div class="col-sm col-md-6 col-lg-3 ">
                <div class="product">
                    <a href="#" class="img-prod"><img class="img-fluid" src="assets/images/product-7.jpg" alt="Colorlib Template"></a>
                    <div class="text py-3 px-3">
                        <h3><a href="#">Young Woman Wearing Dress</a></h3>
                        <div class="d-flex">
                            <div class="pricing">
                                <p class="price"><span>$120.00</span></p>
                            </div>
                            <div class="rating">
                                <p class="text-right">
                                    <span class="ion-ios-star-outline"></span>
                                    <span class="ion-ios-star-outline"></span>
                                    <span class="ion-ios-star-outline"></span>
                                    <span class="ion-ios-star-outline"></span>
                                    <span class="ion-ios-star-outline"></span>
                                </p>
                            </div>
                        </div>
                        <hr>
                        <p class="bottom-area d-flex">
                            <a href="#" class="add-to-cart"><span>Add to cart <i class="ion-ios-add ml-1"></i></span></a>
                            <a href="#" class="ml-auto"><span><i class="ion-ios-heart-empty"></i></span></a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-sm col-md-6 col-lg-3 ">
                <div class="product">
                    <a href="#" class="img-prod"><img class="img-fluid" src="assets/images/product-8.jpg" alt="Colorlib Template">
                        <span class="status">Best Sellers</span>
                    </a>
                    <div class="text py-3 px-3">
                        <h3><a href="#">Young Woman Wearing Dress</a></h3>
                        <div class="d-flex">
                            <div class="pricing">
                                <p class="price"><span>$120.00</span></p>
                            </div>
                            <div class="rating">
                                <p class="text-right">
                                    <span class="ion-ios-star-outline"></span>
                                    <span class="ion-ios-star-outline"></span>
                                    <span class="ion-ios-star-outline"></span>
                                    <span class="ion-ios-star-outline"></span>
                                    <span class="ion-ios-star-outline"></span>
                                </p>
                            </div>
                        </div> -->
                        <!-- <hr>
                        <p class="bottom-area d-flex">
                            <a href="#" class="add-to-cart"><span>Add to cart <i class="ion-ios-add ml-1"></i></span></a>
                            <a href="#" class="ml-auto"><span><i class="ion-ios-heart-empty"></i></span></a>
                        </p>
                    </div>
                </div>
            </div>-->
        </div> 
        <div class="row mt-5">
    <div class="col text-center">
        <div class="block-27">
        <!-- <ul>
            <li><a href="#">&lt;</a></li>
            <li class="active"><span>1</span></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li><a href="#">&gt;</a></li>
        </ul> -->
        </div>
    </div>
    </div>
    </div>

</section>


</template>

<script>
    import Vue from 'vue'
	import axios from 'axios'
    import VueAxios from 'vue-axios'

    export default {
        data: function() {
            return {
				id: 0,
				name: '',
				Category: '',
                tovars: clothes,
                filtertovars:[]
            };
        },
        mounted: async function(){
           // let response = await Vue.axios.get("http://localhost:3000/tasks");
           //  console.log(this.tovars)
             this.tovars = clothes;
             this.filtertovars = this.tovars
            // this.$store.commit('setCount', this.students.length);
        },
        computed: {

            // getCurrentUser () {
            //     return this.$store.getters.getUser
            // } 
        },
      
        methods: {
            filter: function(cat){
                console.log(this.tovars)
                this.filtertovars = this.tovars.filter((element) => { 
                    return element.Category == cat;
                   });
                console.log(this.tovars)
                
            }
            // leave: function (el, done) {
            //     Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 1500 })
            //     Velocity(el, { rotateZ: '100deg' }, { loop: 12 })
            //     Velocity(el, {
            //        rotateZ: '45deg',
            //        translateY: '30px',
            //        translateX: '30px',
            //        opacity: 0
            //     }, { complete: done })
            // },
            // useStyle: function() {
            //     this.$store.commit('setCurrentstyle', this.stl);
            // },
            // clickme: function(id) {
            //     this.students = this.students.filter((element) => {
            //         return element.id !== id;
            //     });
            // },
            // fillForm: function(id) {

            //     let foundStudent = this.students.find((element) => {
            //         return element._id == id;
            //     });
            //     this.id = foundStudent._id;
            //     this.name = foundStudent.name;
            // },
            // rplForm: function(id) {

            //     this.edit = id;
            // },
            // insert: function() {
               
            //     Vue.axios.post("http://46.101.212.195:3000/students", {
            //         name: this.name,
            //         group: this.group,
            //         isDonePr: false
            //     })
            //     .then((response) => {
            //          this.students.push({"name": this.name, "group": this.group, "_id": response.data._id});
            //         console.log(response.data)
            //     })     
            // },
            // update2: function(id) {
            //     // let foundStudent = this.students.find((element) => {
            //     //     return element._id == id;
            //     // });

            //     // Vue.axios.put("http://46.101.212.195:3000/students/"+id, {
            //     //     name: foundStudent.name,
            //     //     group: foundStudent.group,
            //     //     isDonePr: false
            //     // })
            //     // .then((response) => {
            //     //     console.log(response.data)
            //     // })    
            //     this.edit = 0; 
            // },
            // update1: function() {
            //     let foundStudent = this.students.find((element) => {
            //         return element._id == this.id;
            //     });
            //     foundStudent.name = this.name;
            //     // Vue.set(foundStudent, 'name', this.name);
                
            //     Vue.axios.put("http://46.101.212.195:3000/students/"+this.id, {
            //         name: this.name,
            //         group: this.group,
            //         isDonePr: false
            //     })
            //     .then((response) => {
            //         console.log(response.data)
            //     })    
            // },
            // deleteStudent: function(id) {
            //     Vue.axios.delete("http://46.101.212.195:3000/students/"+id)
            //     .then((response) => {
            //         this.students = this.students.filter((element) => {
            //             return element._id !== id;
            //         });
            //     this.delId = id;
            //     console.log(response.data)
            //     })     
            // }
            },
    }
</script>
<style scoped>
    .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
    }
</style>

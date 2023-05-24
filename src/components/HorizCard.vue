<template>
                <div class="c-card d-flex align-items-center">
                    <img v-bind:src="img" alt="cc" class="mb-4">
                    <p class="c-grey text-center mb-0"><b>{{ title }}</b></p>
                    <p class="c-grey text-center mt-0">{{desc}}</p>
                    <a :href="link" @click="greet(title)" v-if="buttonBool" class="bg-white text-gray-800 font-semibold py-2 px-4 border border-black rounded ">
                        {{buttonText}}
                    </a>
                </div>
</template>

<script>
    export default {
        name: 'HorizCard',
        components: {      
        },
        props: ['title', 'desc', 'img', 'buttonBool', 'buttonText', 'link'],
        created(){
        },
        methods: {
        greet(event) {
            alert(`${event} method!`)
        }
  }
    }
</script>



<style scoped>

a {
  color: black;
  text-decoration: none; /* no underline */
}

a:hover {
    cursor: pointer;
}
.c-card {
    width: 25%;
    padding: 1rem;
    flex-direction: column;
}

.c-card>img{

    width: 200px; 
    height: 200px; 
    object-fit: scale-down; 
}

@media screen and (max-width: 650px) {
    .c-card {
        width: 100%;
    }
}

@media (min-width: 651px) and (max-width: 991px) {
    .c-card {
        width: 50%;
    }
}


</style>
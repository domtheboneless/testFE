<template>
                <div class="c-card d-flex align-items-center">
                    <img v-bind:src="img" alt="cc" class="mb-4">
                    <p class="c-grey text-center mb-0"><b>{{ title }}</b></p>
                    <p class="c-grey text-center mt-0">{{desc}}</p>
                </div>
</template>

<script>
    export default {
        name: 'HorizCard',
        components: {      
        },
        props: ['title', 'desc', 'img'],
        created(){
            console.log("img bind",this.img)
        }
    }
</script>



<style scoped>

.c-card {
    width: 25%;
    padding: 1rem;
    flex-direction: column;
}

.c-card>img{

    width: 200px; 
    height: 200px; 
    object-fit: cover; 
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
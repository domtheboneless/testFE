
<template>
    <div class="price-container c-bg-whitepanel" :style="color">
        <h3 class="c-textblue text-center mb-0"><b>{{title}}</b></h3>
        <p class="c-textblue text-center">a partire da</p>
        <div class="pricebox">
            <div class="bigprice ">
                <h2 class="c-textblack fw-bolder mb-0">€{{ formattedEuroValue[0] }} </h2>
            </div>
            <div class="smallprice">
                <p class="mb-0 c-textblack fw-bolder">,{{ formattedEuroValue[1] }}</p>
                <p class="mb-0 c-textblue text-center">+IVA</p>
            </div>
        </div>

        <p class="c-textblue text-center">all’anno / per utente <span></span></p>

        <div class="lineborder mb-4"></div>
        <div class="arrow justify-content-center">
            <svg class="arrow-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
        </div>
            <ul class="px-0 mb-0">
                <li class="flex items-center mt-3" v-for="item in benefits">
                    <svg xmlns="http://www.w3.org/2000/svg" class="svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
                    <span class="">{{item}}</span>
                </li>
            </ul>

        <div class="mt-4 d-flex justify-content-center">
            <Button :title="buttonTitle" color="white"></Button>
        </div>

        <p class="text-center mt-4">Vuoi maggiori informazioni sul piano?</p>
        <a href=""><p class="text-center">Scopri di piu!</p></a>
    </div>
</template>

<script>
import Button from './Button.vue'


export default {
    name: 'Pricer',
    components: {
        Button,
        
    },
    props: ['title', 'euro', 'benefits', 'buttonTitle', 'color'],
    computed: {
        color() {
            const color = this.color
            return 'background-color: ' + color + "!important"
        },
        euroSplit() {
            const euros = this.euro.toString().split(',')
            return euros
        }
    },
    data() {
        return {
            colorOninit: '',
            formattedEuroValue: ''
        }
    },
    created() {
        this.colorOninit = this.color
        this.formattedEuroValue = this.euroSplit
    }
}

</script>

<style scoped>

.price-container{
    padding: 2.5rem 3rem;
    border-radius: 20px;
    position:relative;
    height: fit-content;
}
.price-container::before{
content:"";
  position:absolute;
  left:-10px;
  right:10px;
  top:-10px;
  bottom:10px;
  border:2px black solid;
  border-radius: 20px;
}

.pricebox{
    display: flex;
    justify-content: center;
}

.bigprice h2{
    font-size: 3.75rem;
}

.smallprice p:first-of-type{
    font-size: 2rem;
}

.smallprice p:nth-of-type(2){
    font-size: .75rem;
    margin-top: -5px;
}


.lineborder{
    height: 2px;
    background-color: #112340;
    border-radius: 20px;
}

ul {  list-style-type: none; }
li span { 
    margin-left: 10px;
    font-size: clamp(.7rem, 1vw, 1rem);
    font-weight: 400;
}
.svg{
    width: 20px;
}

.arrow{
    display: none;
}

    @media screen and (max-width: 970px) {  

        .arrow{
            display: flex ;
            justify-content: center;
        }
        .arrow-down{
            fill: rgba(161, 181, 232, 1);
            width: 10%;
        }

        ul{
            display: none;
        }
        .svg{
         width: 15px
        }
    }

</style>
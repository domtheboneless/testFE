<template>
    <div class="c-container">
      <div class="slider-wrapper">
        <div class="slider" ref="slider">

          <div
            v-for="(slide, index) in slides"
            :key="index"
            class="ccarousel h-50 align-self-center d-flex"
            :style="{ backgroundColor: slide.backgroundColor }"
          >
            <div class="m-4 carousel-text">
              <div class="head">
                <h1 class="fw-bold text-white car-head-text">{{ slide.title }}</h1>
                <p class="text-white car-text">{{ slide.description }}</p>
                <p class="text-white more"> <svg class="more-arrow fwhite" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512">
                                    <path
                                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                </svg> SCOPRI DI PIù</p>
              </div>
            </div>
            <div class="carousel-img">
              <img class="car-img img-fluid" :src="slide.image" :alt="slide.title">
            </div>
            <div class="w-100 moreExt">
                <p class="text-white more"> <svg class="more-arrow fwhite" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512">
                                    <path
                                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                </svg> SCOPRI DI PIù</p>    
            </div>
          </div>

        </div>


        <div class="slider-nav">
          <div
            v-for="(slide, index) in slides"
            :key="index"
            class="nav-dot"
            @click="goToSlide(index)"
          >•</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Carousel',
    data() {
      return {
        slides: [
          {
            title: 'Welfare Guru',
            description: "è un professionista capace di affiancare le aziende in tutte le fase propredeutiche all'attivazione di un piano welfare. Sia tu abbia già un sistema premiale basato su premi di risultato o incentivi diversia, sia che per te sia la prima esperienza il Welfare Guru saprà consigliarti la migliore soluzione in grado di ottimizzare la leva fiscale e incentivare i dipendenti soddisfacendo i loro bisogno personali e familiari.",
            backgroundColor: '#283B6C',
            image: '../img/Guru_car.png'
          },
          {
            title: 'Gestione del piano',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            backgroundColor: '#716ACA',
            image: '../img/Pianista_Img 1@2x.png'
          },
          {
            title: 'Servizi originali ed esclusivi',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            backgroundColor: '#426BD1',
            image: '../img/Servizi_Img 1@2x.png'
          }
          
        ]
      };
    },
    methods: {
      goToSlide(index) {
        this.scrollToSlide(index);
      },
      scrollToSlide(index) {
        const slider = this.$refs.slider;
        const slideWidth = slider.offsetWidth;
        console.log(slideWidth * index)
        slider.scrollTo(
        {
          left: slideWidth * index,
          behavior: 'smooth'
        });
      }
    }
  };
  </script>
<style scoped>

.nav-dot{
    font-size: 1.5rem;
    color: rgba(43, 80, 176, 1);
}

.nav-dot:hover{
    color: rgba(43, 80, 176, 1);
    cursor: pointer;
}


.slider-wrapper{
    position: relative;
    margin: 0 auto;
}

.slider{
    display: flex;
    overflow-x: hidden;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    padding-right: 5%;
    margin-right: 1%;
}

.slider .ccarousel {
    flex: 1 0 100%;
    scroll-snap-align: start;
    object-fit: cover;
}
.slider-nav{
    display: flex;
    position: absolute;
    bottom: -2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
}

.slider-nav a{
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: red;
}

.c-container {
    max-width: 1400px;
    margin: auto;
    padding-left: 2rem;
    padding-right: 2rem;
    height: 100%;
}

.carousel-item {}

.easywrap {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
}

.head>p {
    font-size: 1.5rem;
}

.ccarousel {
    width: 80%;
    background: #283B6C;
    border-radius: 36px;
    height: 77px;
    align-items: center;
    margin-right: 2%;
}

.carousel-text {
    width: 60%;
    padding-left: 20px;
    padding-top: 20px;

}

.moreExt {
    display: none;
}

.carousel-text>div>h1 {
    font-size: clamp(2.5rem, 3.5vw, 3.5rem)
}

.carousel-text>div>p {
    font-size: clamp(.5rem, 1vw, 1rem)
}

.more {
    text-transform: uppercase;
    display: flex;
    align-items: center;
}

.more-arrow {
    width: 3%;
    margin-right: 15px;
}


.fwhite {
    fill: white;
}

.carousel-img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
}

.car-img {
    width: 500px; 
    height: 500px; 
    object-fit: scale-down; 
}

@media screen and (max-width: 790px) {

    .car-head-text{
        min-height: 90px;
    }

    .ccarousel {
        flex-wrap: wrap;
        width: 100%;
    }

    .carousel-text,
    .carousel-img {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .moreExt {
        display: flex;
    }

    .car-img {
        width: 300px; 
        height: 300px; 
        object-fit: scale-down; 
    }

    .carousel-text>div>p {
        display: none;
    }

    .slider{
        max-width: 430px;
    }

    .more{
        justify-content: center;
    }
}


@media (min-width: 651px) and (max-width: 1480px) {
  
c.container{
  max-width: 100%;
}
}
</style>
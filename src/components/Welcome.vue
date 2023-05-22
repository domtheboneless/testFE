<template>
    <section class="hero-img mb-4">
        <div class="c-container">
            <div class="wrapper">
                <div class="left">
                    <div class="head">
                        <h1 class="fw-bold text-white">Il Welfare aziendale a portata di PMI</h1>
                        <p class="fw-light text-white">MySarma nasce con l’obiettivo di supportare le aziende a rispondere
                            concretamente ai bisogni di welfare dei propri dipendenti e collaboratori.</p>
                        <div class="messagebox">
                            <div class="msgbox-icon me-3"><img src="../assets/iconHandPiano.png" alt=""></div>
                            <div class="msgbox-text">
                                <p class="mb-0">Da oggi puoi attivare il tuo piano welfare direttamente online ed in pochi
                                    semplici passaggi grazie al <b class="hardBlue"><u>Piano GO!</u></b></p>
                            </div>
                            <div class="msgbox-x">X</div>

                        </div>
                    </div>
                </div>
                <div class="right">
                    <Pricer style="margin-top: 10px;" title="Piano GO!" euro="12,50" :benefits="welcomePrice"></Pricer>
                    <div class="mt-4">
                        <p class="text-center text-white">Cerchi un piano su misura per la tua azienda? <br>
                            <u>Scopri il Piano PRO</u>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="support-offer">
        <div class="c-container">
            <div class="easywrap justify-content-between align-items-center" style="height: auto;">
                <div class="w-100">
                    <h1 class="fw-bold text-center mt-4">Offriamo alle PMI supporto nei seguenti ambiti </h1>
                </div>
                <div class="container-card d-flex align-items-baseline">

                    <HorizCard title="Welfare Guru" desc="per un piano di welfare aziendale personalizzato" img="/img/Guru_Male.png"></HorizCard>
                    <HorizCard title="Gestione del piano" desc="welfare e dei fornitori di servizi a livello locale" img="/img/Piano_Fem.png"></HorizCard>
                    <HorizCard title="Servizi welfare" desc="in ambito flexible benefit & employee caring" img="/img/Servizi.png"></HorizCard>
                    <HorizCard title="Piattaforma Welfare " desc="accessibile da qualunque tipo di dispositivo" img="/img/Piattaforma_Male.png"></HorizCard>

                </div>
                <!-- CAROSELLO   -->
                <div class="c-container">
                        <div class="easywrap justify-content-center">
                            <div class="ccarousel h-50 align-self-center d-flex">
                                <div class="m-4 carousel-text">
                                    <div class="head">
                                        <h1 class="fw-bold text-white car-head-text">Welfare Guru
                                        </h1>
                                        <p class="text-white car-text">è un professionista capace di affiancare le aziende in tutte
                                            le fase propredeutiche all'attivazione di un piano welfare. Sia tu abbia già un
                                            sistema premiale basato su premi di risultato o incentivi diversia, sia che per
                                            te sia la prima esperienza il Welfare Guru saprà consigliarti la migliore
                                            soluzione in grado di ottimizzare la leva fiscale e incentivare i dipendenti
                                            soddisfacendo i loro bisogno personali e familiari.</p>
                                        <p class="text-white more"> <svg class="more-arrow"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                                <path
                                                    d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                            </svg> SCOPRI DI PIù</p>
                                    </div>
                                </div>
                                <div class="carousel-img">
                                    <img class="car-img" src="../assets/Guru_car.png" alt="">
                                </div>
                                <div class="w-100 moreExt">
                                    <p class="text-white more d-flex justify-content-center"> <svg class="more-arrow"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                                <path
                                                    d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                            </svg> SCOPRI DI PIù</p>
                                </div>
                            </div>
                        </div>

                </div>

            </div>

        </div>
    </section>


    <section class="app-section">
        <div class="c-container">
            <h1 class="fw-bold c-texthblue titleAppExternal text-72">App</h1>
            <div class="easywrap">
                <div class="w-50 d-flex align-items-center app-left">
                    <div class="head">
                        <h1 class="fw-bold c-texthblue titleApp text-72">App</h1>
                        <p class="fw-light c-textgrey">Con l’app MySarma gestirai il tuo credito welfare e potrai accedere
                            al catalogo dei Benefit e Servizi acquistabili.</p>
                        <p class="more"> <svg class="more-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                style="fill: #0B1038;">
                                <path
                                    d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                            </svg> coming soon</p>
                    </div>
                </div>
                <div class="w-50 d-flex justify-content-center align-items-center app-right">
                    <img class="app-img img-fluid" src="../assets/App_welfareMySarma.png" alt="">
                </div>
            </div>
        </div>
    </section>


    <section class="whats-welfare">
        <div class="c-container">
            <div class="easywrap justify-content-between align-items-center" style="height: auto;">
                <div class="w-100">
                    <h1 class="fw-bold text-center mt-4 text-72 c-textblack">Welfare aziendale?</h1>
                    <h3 class="text-center c-textgrey text-24">Te lo diciamo noi se non lo sai</h3>
                </div>
                <div class="container-card d-flex align-items-baseline">

                    <HorizCard title="Welfare Guru" desc="per un piano di welfare aziendale personalizzato" img="/img/Guru_Male.png"></HorizCard>
                    <HorizCard title="Gestione del piano" desc="welfare e dei fornitori di servizi a livello locale" img="/img/Piano_Fem.png"></HorizCard>
                    <HorizCard title="Servizi welfare" desc="in ambito flexible benefit & employee caring" img="/img/Servizi.png"></HorizCard>
                    <HorizCard title="Piattaforma Welfare " desc="accessibile da qualunque tipo di dispositivo" img="/img/Piattaforma_Male.png"></HorizCard>

                </div>
            </div>
        </div>


    </section>
</template>


<script>
import Pricer from './Pricer.vue'
import HorizCard from './HorizCard.vue';

export default {
    data() {
        return {
            welcomePrice: ["Utenti illimitati", "Piattaforma MySarma", "Gestione del contratto online", "MySarma Welfare Card (fino a 258€)", "Importi personalizzabili online", "Sconti e Coupon"]
        }
    }
    ,
    components: {
        Pricer,
        HorizCard

    }
}
</script>



<style scoped>
.hero-img {
    background-image: url("../assets/ian-dooley-hpTH5b6mo2s-unsplash\ 1\ 1.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: calc(100vh - calc(100vh - 100%));
    padding-top: 151px;
}

.c-container {
    max-width: 1400px;
    margin: auto;
    padding-left: 2rem;
    padding-right: 2rem;
    height: 100%;
}

.wrapper {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    align-items: center;
    gap: 10%;
}

.easywrap {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
}

.left {
    width: 55%;
    padding-left: 3rem;
}

.left h1 {
    font-size: clamp(3rem, 4.5vw, 4.5rem);
}

.head>p {
    font-size: 1.5rem;
}

.messagebox {
    display: flex;
    background-color: #E6ECF9;
    opacity: 0.9;
    border: 1px solid #A1B5E8;
    border-radius: 15px;
    padding: .7rem;
    padding-right: 2rem;
    position: relative;
    align-items: center;
}

.messagebox .msgbox-x {
    position: absolute;
    top: 7px;
    right: 10px;
}

.right {
    width: 35%;
}

.support-offer {
    background-color: white;
    margin-top: 50px !important;
    margin-bottom: 50px !important;
}
.container-card{
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    flex-wrap: wrap;
}

.ccarousel {
    width: 80%;
    background: #283B6C;
    border-radius: 36px;
    height: 77px;
    align-items: center;
}

.carousel-text {
    width: 60%;
    padding-left: 20px;
    padding-top: 20px;

}

.moreExt{
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
    fill: white;
    width: 3%;
    margin-right: 15px;
}

.carousel-img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
}

.car-img {
    max-width: 100%;
}


.app-section {
    height: calc(100vh - 72px);
}

.app-left{
    padding-left: 10rem;
}
.app-right{
    padding-right: 10rem;
}

.app-left>.head>p:first-of-type{
    margin-top: 50px;
    font-size: 1.5rem;
}

.app-left>.head>p:nth-of-type(2){
    font-size: 1rem;
}

.titleAppExternal {
    display: none;
}
.text-72{
    font-size: clamp(2.5rem, 4.5rem, 4.5rem) !important;
}

.text-24{
    font-size: clamp(1rem, 1.5rem, 1.5rem) !important;
}
@media screen and (max-width: 650px) {
    .support-offer {
        height: auto;
    }

    .hero-img {
        height: auto;
    }

    .left {
        width: 100%;
        padding-left: 0px;
    }

    .right {
        width: 100%;
    }

    .ccarousel{
        flex-wrap: wrap;
        width: 100%;
    }

    .carousel-text, .carousel-img{
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .moreExt{
        display: flex;
    }   

    .car-img {
    content: url("../assets/Guru_img_mobile.png");
    max-width: 100%;
    }

    .carousel-text>div>p {
    display: none;
    }

    .titleAppExternal {
        display: block;
    }

    .titleApp{
        display: none;
    }
    .app-left{
        width: 100% !important;
        order: 1;
        padding: 0;
    }

    .app-left>.head>p:first-of-type{
        margin-top: 0;
        margin-bottom: 10px;
        font-size: 1.5rem;
    }
    .app-right{
        width: 100% !important;
        padding: 0;
    }

    .whats-welfare{
        margin-top: 350px;
    }

}


@media (min-width: 651px) and (max-width: 991px) {
    .titleAppExternal {
        display: block;
    }

    .titleApp{
        display: none;
    }
    .app-left{
        width: 100% !important;
        order: 1;
        margin-top: -150px;
        padding: 0;
    }
    .app-right{
        width: 100% !important;
        padding: 0;
    }

    .support-offer {
        height: auto;
    }

    .moreExt{
        display: none;
    }   
    .carousel-text>div>p:first-of-type{
    display: none;
    }


}</style>
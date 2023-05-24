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
                    <Pricer style="margin-top: 10px;" title="Piano GO!" euro="12,50" :benefits="welcomePrice" buttonTitle="Attiva Piano GO!"></Pricer>
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
                    <Carousel></Carousel>
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
                    <HorizCard title="Cos’è il Welfare Aziendale?" desc="Tutti ne parlano ma pochi conoscono il suo potenziale" img="/img/ManoWelfare.png" buttonBool="true" buttonText="Scopri di più" link=""></HorizCard>
                    <HorizCard title="Come posso attrarre?" desc="Fidelizza e attrai nuovi talenti con un piano welfare mirato" img="/img/Attrarretalenti.png" buttonBool="true" buttonText="Scopri di più" link=""></HorizCard>
                    <HorizCard title="Normative e vantaggi fiscali" desc="Risparmiare è facile grazie al tuo nuovo piano welfare" img="/img/Risparmiowelfare.png" buttonBool="true" buttonText="Scopri di più" link=""></HorizCard>
                    <HorizCard title="Storie attrattive" desc="Ascolta le testimonianze di chi ha ha migliorato il proprio stile di vita" img="/img/SuccessoWelfare.png" buttonBool="true" buttonText="Scopri di più" link=""></HorizCard>
                </div>
            </div>
        </div>
    </section>

    <section class="banner">
        <div class="c-container">
            <div class="easywrap justify-content-center align-items-center">
                <div class="w-75">
                    <h4 class="text-white text-center">Sfrutta al meglio il tuo potenziale e fai crescere </h4>
                    <h1 class="text-white fw-bold text-center">il benessere dei tuoi collaboratori</h1>
                    <p class="text-white text-center text-18  mb-0" style="font-weight: 200;">Attiva subito un <b style="font-weight: 800;">Piano Go</b>  oppure richiedi un preventivo gratuito per attivare un <b style="font-weight: 800;">Piano Pro</b>.</p>
                    <p class="text-white text-center text-18  mt-0" style="font-weight: 200;">l nostro Welfare guru è pronto a consigliarti la migliore soluzione in base alle tue esigenze.</p>
                </div>

            </div>
        </div>
    </section>

    <section class="plans">
        <div class="c-container">
            <div class="easywrap justify-content-center align-items-center">
                <div class="w-75">
                    <h1 class="text-center c-textblack fw-bolder text-48">Attiva il tuo piano</h1>
                    <h1 class="text-center c-textblack fw-bolder text-48">Go oppure Pro</h1>
                    <p class="mb-0 text-center c-textgrey text-24">Scegli se attiavre subito il Piano Go oppure richiedere </p>
                    <p class="mb-0 text-center c-textgrey text-24">un preventivo per il Piano Pro al nostro consulente</p>

                    <div class="pricer">
                        <Pricer class="singlepricer" style="margin-top: 10px;" title="Piano GO!" euro="12,50" :benefits="welcomePrice" buttonTitle="Attiva Piano GO!"></Pricer>
                        <Pricer style="margin-top: 10px;" title="Piano PRO" euro="22,80" :benefits="proPlan" buttonTitle="Calcola preventivo" color="rgba(226, 225, 244, 1)"></Pricer>
                    </div>
                </div>

                
            </div>
        </div>
    </section>

    <section class="banner-group">
        <div class="c-container">
            <div class="easywrap d-flex justify-content-center align-items-center">
                <div class="groupcard d-flex">
                    <div class="leftgroupc d-flex justify-content-center align-items-center">
                        <img src="../assets/Omninext_Icon@2x.png" alt="omninex logo" class="img-fluid" width="50%">
                    </div>
                    <div class="rightgroupc">
                        <h1 class="c-textblue text-48 fw-bold">Facciamo parte</h1>
                        <h1 class="c-textblue text-48 fw-bold">di un grande gruppo!</h1>
                        <p class="text-18 c-textlgrey">Il Gruppo Omninext è costituito da aziende altamente specializzate interconnesse tra loro, che permettono di ricoprire diversi settori industriali per necessità di Business personalizzate.</p>
                        <p class="c-textblue more text-16"> <svg class="more-arrow fblue"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512">
                                                <path
                                                    d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                            </svg> SCOPRI DI PIù</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="qa">
        <div class="c-container">
            <div class="easywrap d-flex justify-content-center align-items-center">
                <h1 class="text-center c-textblue">Domande frequenti</h1>
                <div class="w-75">
                    <Accordion></Accordion>
                </div>
            </div>
        </div>
    </section>

    <section class="newsletter">
        <div class="c-container">
            <div class="easywrap d-flex justify-content-center align-items-center">
                <div class="newsleft">
                    <h2 class="text-white">Resta aggiornato</h2>
                    <p class="text-white">Iscriviti alla newsletter per ricevere aggiornamenti sulle nuove offerte e partener MySarma</p>
                </div>
                <div class="newsright">
                        <p class="text-white">Il tuo indirizzo mail</p>
                        <div class="d-flex">
                            <div class="w-50">
                                <form action="submit">
                                    <input type="text" name="email" id="" placeholder="@" class="emailinput">             
                                </form>
                            </div>
                            <div class="w-25">
                                <Button title="Invia" color="white"></Button>
                            </div>
                        </div>

                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="c-container">
            <div class="easywrap d-flex">
                <div class="footerleft d-flex mb-4">
                    <div class="w-25 flogo">
                        <img class="footerlogo img-fluid" src="../assets/Mysarma_Logo_W@2x.png" alt="logomysarma">
                        <img class="footerlogoit img-fluid" src="../assets/ita.png" alt="">
                        <p class="text-white text-14">Il welfare aziendale tutto italiano a portata di PMI.</p>
                    </div>

                    <div class="w-25 footerSection">
                        <p class="text-white text-16">Chi siamo</p>
                        <p class="c-textgrey mb-0 mt-0 text-14">Vision & Mission</p>
                        <p class="c-textgrey mb-0 mt-0 text-14">Il gruppo Omninext</p>
                        <p class="c-textgrey mb-0 mt-0 text-14">Contattaci</p>
                    </div>

                    <div class="w-25 footerSection">
                        <p class="text-white text-16">Soluzioni welfare</p>
                        <p class="c-textgrey mb-0 mt-0 text-14">Premio di risultato</p>
                        <p class="c-textgrey mb-0 mt-0 text-14">Il gruppo Omninext</p>
                        <p class="c-textgrey mb-0 mt-0 text-14">Performance Management</p>
                    </div>

                    <div class="w-25 footerSection">
                        <p class="text-white text-16">Seguici su</p>
                        <p class="c-textgrey mb-0 mt-0 text-14">Linkedin</p>
                    </div>

                    <div class="w-25 footerSection planMobile">
                        <div class="w-100">
                            <p class="mt-0 mb-0">Piano GO!</p>
                            <p class="mt-0 mb-0">Piano PRO</p>
                            <p class="c-textgrey mt-4">Diventa partner</p>
                        </div>
                    </div>
                </div>
                <div class="footerright mb-4">
                        <div class="w-100 plansfooter">
                            <p class="mt-0 mb-0">Piano GO!</p>
                            <p class="mt-0 mb-0">Piano PRO</p>
                        </div>
                        <div class="w-100 pt-4 partner">
                            <p class="c-textgrey ">Diventa partner</p>
                        </div>
                </div>
                <div class="copyright w-100 mt-4">
                    <div class="d-flex mt-4">
                        <div class="w-50">
                            <p class="c-textgrey text-14">Copyright © MySarma srl - Tutti i diritti riservati</p>
                        </div>
                        <div class="w-50 d-flex justify-content-end">
                            <p class="c-textgrey text-14">Privacy e Cookie Policy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>


<script>
import Pricer from './Pricer.vue'
import HorizCard from './HorizCard.vue';
import Accordion from './Accordion.vue'
import Button from './Button.vue'
import Carousel from './Carousel.vue'

export default {
    data() {
        return {
            welcomePrice: ["Utenti illimitati", "Piattaforma MySarma", "Gestione del contratto online", "MySarma Welfare Card (fino a 258€)", "Importi personalizzabili online", "Sconti e Coupon"],
            proPlan: ["Utenti illimitati", "Welfare Guru","Piattaforma MySarma", "Gestione del contratto online", "Credito Welfare (illimitato)", "Importi personalizzabili online", "Gestione Scadenziata degli importi", "Gestione Scadenziata degli importi", "Flexible Benefit", "Sconti e Coupon"]
        }
    }
    ,
    components: {
        Pricer,
        HorizCard,
        Accordion,
        Button,
        Carousel
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
    width: 3%;
    margin-right: 15px;
}

.fblue{
    fill: #2B50B0;
}

.fwhite{
    fill: white;
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
    font-size: clamp(2.5rem, 4.5vw, 4.5rem) !important;
}
.text-48{
    font-size: clamp(2rem, 3vw, 3rem) !important;
}
.text-24{
    font-size: clamp(1rem, 1.5vw, 1.5rem) !important;
}

.text-18{
    font-size: clamp(.5rem, 1.12vw, 1.12rem) !important;
}

.text-16{
    font-size: clamp(1rem, 1vw, 1rem) !important;
}

.text-14{
    font-size: clamp(.5rem, .8vw, .8rem) !important;
}
.banner{
    height: 48vh;
    background-image: url("../assets/PatternBenessere.png");
    background-size: cover;
    background-repeat: no-repeat;
}

.plans{
    height: fit-content;
    background-color: white;;
    padding-top: 3rem;
}

.pricer{
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.singlepricer{
    margin-bottom: 1rem;
}


.banner-group{
    height: 80vh;
    background-color: white;
}

.groupcard{
    flex-wrap: wrap;
    width: 80%;
    border: 1px solid #2B50B0;
    border-radius: 36px;
    padding: 2rem;
}

.leftgroupc{
    width: 40%;
}

.rightgroupc{
    width: 60%;
}

.qa{
    height: 100vh;
}

.qa>.c-container>.easywrap{
    height: 60% !important;

}

.newsletter{
    height: 48vh;
    background-image: url("../assets/Newsletter_Back@2x.png");
    background-size: cover;
    background-repeat: no-repeat;
}

.newsleft{
    width: 50%;
}

.newsleft>p{
    width: 55%;
}

.newsright{
    width: 50%;
}

.newsright>.d-flex{
    gap: 10%;
    align-items: center;
}

.emailinput{
    width: 350px;
    border-radius: 10px;
    background-color: #F8FAFC;
    padding: 12px;
}

.footer{
        background-color: rgba(18, 27, 48, 1);
        padding-top: 5rem;
 }

 .footerlogo{
    width: 50%;
 }

 .flogo{
    margin-right: 6rem;
 }
 .footerlogoit{
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 55%;
 }

.footerleft{
    width: 70%;
}

.footerright{
    width: 30%;
    border-left: 1px solid rgba(90, 90, 90, 1);
    padding-left: 3rem;
}

.plansfooter{
    display: flex;
    flex-direction: column;
}

.planMobile{
    display: none;
}

.plansfooter>p{
    color: rgba(169, 165, 223, 1);
}

.copyright{
    border-top: 1px solid rgba(90, 90, 90, 1);
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

    .banner{
        height: 70vh;
    }

    .banner>.c-container>.easywrap>div>h1{
        margin-top: 30px;
        margin-bottom: 30px;
    }

    .banner-group{
        height: 100vh;
    }

    .leftgroupc{
        width: 100%;
    }

    .rightgroupc{
        width: 100%;
    }
    .rightgroupc>p:first-of-type{
        display: none;
    }

    .rightgroupc>h1:first-of-type{
        margin-top: 3rem;
    }

    .rightgroupc>h1:nth-of-type(2){
        margin-bottom: 3rem;
    }

    .qa{
        height: auto;
    }
    .qa>.c-container>.easywrap{
    height: 100% !important;
    }

    .newsleft{
        width: 100%;
    }

    .newsleft>p{
        width: 100%;
    }

    .newsright, .newsright>.d-flex>.w-50, .newsright>.d-flex>.w-25 {
        width: 100% !important;
    }
    .newsright>.d-flex{
        flex-wrap: wrap;
    }
    .newsright>.d-flex>.w-25{
       display: flex;
       justify-content: end;
    }

    .emailinput{
        width: 100%;
        margin-bottom: 1rem;
    }

    .footerleft{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .footerright{
        width: 100%;
    }

    .flogo{
        width: 100% !important;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .footerSection{
        margin-top: 1rem;   
        width: 50% !important;
    }

    .planMobile{
        display: flex;
    }

    .planMobile>div>p{
    color: rgba(169, 165, 223, 1);
    }

    .plansfooter, .partner{
        display: none;
    }
}


@media (min-width: 651px) and (max-width: 991px) {

    .footerleft{
        width: 100%;
    }

    .footerright{
        width: 100%;
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

    .banner{
        height: 70vh;
    }
    .banner>.c-container>.easywrap>div>h1{
        margin-top: 30px;
        margin-bottom: 30px;
    }

    .banner-group{
        height: 100vh;
    }
    .leftgroupc{
        width: 100%;
    }

    .rightgroupc{
        width: 100%;
    }

    .rightgroupc>p:first-of-type{
        display: none;
    }

    .rightgroupc>h1:first-of-type{
        margin-top: 3rem;
    }

    .rightgroupc>h1:nth-of-type(2){
        margin-bottom: 3rem;
    }
}</style>
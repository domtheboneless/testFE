<template>
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">

        <b>Che differenza c’è tra il Piano Go e il Piano Pro?</b>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Il Piano Go è stato pensato che gestire il welfare aziendale derivante da CCNL o i fringe benefits. Per godere della fiscalità agevolata è necessario rispettare nell’erogazione di questi beni il limite massimo annuo di 258, 23 euro previsto dal Tuir per ciascun dipendente. Restando entro questa soglia, infatti, la somma non
concorre a formare reddito da lavoro dipendente. Il Piano PRO invece è non ha limiti di importo e consente di accedere a tutti i servizi welfare (flexible benefits).</p>
    </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">

        <b>        Che servizi comprende il Piano Go?</b>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       <p> Il Piano Go consente di accedere a tutti i buoni spesa, buoni carburante, buoni regalo ed alcuni voucher selezionati da MySarma come le esperienze o pacchetti vacanze.      </p> </div></div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        
        <b>Come avviene la gestione del Piano Go?</b>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       <p>La gestione del Piano Go è totalmente automatizzata: è possibile sottoscrivere il contratto direttamente online, effettuare il pagamento ed indicare beneficiari ed importi del bonus (fino a 258 euro). Questi riceveranno direttamente via email le credenziali per accedere alla piattaforma, mentre l’azienda riceverà in automatico la fattura elettronica utile per la deduzione integrale del costo.  </p>     </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        
        <b>Il Piano Pro comprende i servizi del Piano Go?</b>
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p> Sì, in automatico il Piano Pro comprende anche i fringe benefit previsti dal Piano Go a meno che l’azienda decida di escluderlo per alcuni o tutti i dipendenti perché già erogati sotto altre forme.  </p>     </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        
        <b>Che servizi comprende il Piano Pro?</b>
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p> Il Piano Pro prevede tutti i servizi dei flexible benefits organizzati nelle 3 macro categorie:
· Versamenti: Previdenza complementare e sanità integrativa
· Rimborsi: Spese scolastiche, spese per non autosufficienza, trasporto pubblico locale, Interessi passivi del mutuo
· Voucher: Viaggi, salute, benessere, cultura, sport, fringe benefits, ecc.     </p>  </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingSix">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
        
        <b>È possibile passare dal Piano Go al Piano Pro</b>
      </button>
    </h2>
    <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <p>  Trattandosi di due fattispecie diverse non è possibile passare in automatico dal Piano Go al Piano Pro ma occorre sottoscrivere un nuovo contratto     </p>  </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
    name: 'Accordion',
}
</script>


<style scoped>
.accordion{
    --bs-accordion-border-radius: none;
    --bs-accordion-border-color: none;
}

.accordion-button{
    background-color: transparent !important;
}


.accordion-button:focus{
    box-shadow: none !important;
}

.accordion-item{
    border-bottom: 1px solid rgba(235, 242, 248, 1) !important;
}

.accordion-body>p{
    font-size: clamp(1rem, 1.12vw, 1.12rem) !important;
    color: rgba(125, 135, 151, 1);
}

</style>
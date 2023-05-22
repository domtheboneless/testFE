
<template>
    <header>
        <nav class="navbar navbar-expand-lg h72">
            <div class="container-fluid c-container">
                <a class="navbar-brand" href="#"><img src="../assets/Logo.png" alt="Logo" class="" width="150"  style="max-width: inherit;"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a v-for="item in menuLabel" class="nav-link c-navitem " :href=item.href>{{ item.label }}</a>
                        <Button title="Accedi alla piattaforma" iconBool="true" color="#ABE8DC" class="menuBtn" style="margin-left: 5rem;"></Button>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    
</template>
<script>

import Button from './Button.vue'

export default {
    components: {
        Button
    },
    data(){
        return{
            menuLabel: [
                {label: "Welfare aziendale", href: ""},
                {label: "Chi siamo", href: ""},
                {label: "I nostri servizi", href: ""},
                {label: "Soluzione Welfare", href: ""},
                {label: "Blog", href: ""}]
        }
    }
}
</script>



<style scoped>

@media screen and (max-width: 991px) {
    .menuBtn {
        margin-bottom: 10px;
    }
    .navbar-collapse{
        background-color: white;
    }
}

header{
    background-color: white;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 1;
}
.c-container {

    max-width: 1400px;
    padding-left: 2rem;
    padding-right: 2rem;
    display: flex;
}

.navbar-collapse {

    flex-grow: inherit;


}

.c-navitem {
    color: #2B50B0;
    margin-left: 2rem !important;
}

a {
    font-size: 14px;
    font-weight: bold;
}

.h72 {
    height: 72px;
}
</style>
import Clients from '../components/Clients.js';

export default {
    components: {
        Clients
    },

template: `
<section class="pairs">
    <img src="/assets/svgs/man.webp" alt="Woman" height="200" width="200">
    <h1>Online forløb</h1>
    <div class="green">
        <h4>Online forløb; er for dig som ikke har mulighed for at mødes med mig fysisk eller ganske enkelt foretrækker
            at mødes online. Vi mødes derfor over Skype/ Messenger/ Zoom og du behøver ikke andet end din telefon,
            tablet eller pc. Dette forløb er det samme som det individuelle, blot i en online version.</h4>
        <hr id="white">
        <p>Du slipper derfor for diverse praktiske løsninger som at tage bukser på og sætte hår.</p>
    </div>
    <div class="white">
        <h2>Priser og forløb:</h2>
        <h3>Opstarts samtale (50 minutter) 400,-</h3>
        <p>Afklarende samtale, hvor vi lærer hinanden at kende. Dette er til dig som er nysgerrig på hvordan
            vanecoaching kan hjælpe dig. Vi tager en snak om hvordan du er udfordret lige nu, hvor du gerne vil hen og
            hvordan jeg kan hjælpe dig.</p>
        <h4>Derefter har du mulighed for at vælge:</h4>
        <h5>1 Session (50 minutter): 950,-</h5>
        <hr id="green">
        <h4>eller investere i et forløb:</h4>
        <details class="accordion">
            <summary>5 Sessioner: 4.500,00 kr.</summary>
            <div class="content">
                <p id="highlight">spar 250,-</p>
                <p>Forløbet er for dig som ønsker at få hjælp til at tage skridtet mod mindre overspisning. Det kan være
                    at du allerede er i gang med at arbejde med dig selv, men har brug for lidt hjælp og støtte i din
                    proces.</p>
                <router-link to="/contact"><button class="alt">Kontakt</button></router-link>
            </div>
        </details>
        <details class="accordion">
            <summary>10 Sessioner: 8.800,00 kr.</summary>
            <div class="content">
                <p id="highlight">spar 700,-</p>
                <p>Forløbet er for dig der ønsker, at få hjælp og støtte til at slippe rigide madregler, styre efter
                    sult og mæthed samt få en generel forståelse af hvad du bruger spisning til og de vaner der er
                    forbundet med bestemte fødevarer. Alt sammen for at du opnår et fleksibelt forhold til mad. Forløbet
                    skaber en bedre mulighed for, at vi kan arbejde med de følelser og tanker der kan være undervejs i
                    processen.</p>
                <router-link to="/contact"><button class="alt">Kontakt</button></router-link>
            </div>
        </details>
        <details class="accordion">
            <summary>15 Sessioner: 13.400,00 kr.</summary>
            <div class="content">
                <p id="highlight">spar 850,-</p>
                <p>Forløbet er for dig som ønsker at få hjælp til at tage skridtet mod mindre overspisning. Det kan være
                    at du allerede er i gang med at arbejde med dig selv, men har brug for lidt hjælp og støtte i din
                    proces.</p>
                <router-link to="/contact"><button class="alt">Kontakt</button></router-link>
            </div>
        </details>
    </div>
</section>
<Clients></Clients>
`,
};
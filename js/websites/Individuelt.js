import Clients from '../components/Clients.js';

export default {
    components: {
        Clients
    },
template: `
<section class="pairs">
    <img src="/assets/svgs/Woman.svg" alt="Woman" height="200" width="200">
    <h1>Individuelt forløb</h1>
    <div class="green">
        <h4>Individuelt forløb; er for dig som ønsker individuel 1:1 coaching. Et forløb hos mig handler konkret om at
            gøre dig bevidst om hvad der er årsagen til din overspisninger, hvordan du kan håndtere dine følelser uden
            overspisning og hvordan du styrer efter hvornår du er sulten, mæt og hvad der er nydelse for dig. Jeg vil
            gerne støtte dig i, at der findes en vej som tager udgangspunkt i der hvor du er i dit liv, dine vaner og
            hvad du ønsker at opnå.</h4>
        <hr id="white">
        <p>Jeg vil gerne give dig en følelse af en god relation samt et frit og roligt rum hos mig, hvor du kan føle dig
            tryg nok til at kigge på alt det der udfordrer dig og din hverdag.</p>
        <p>Du kan bruge sessionerne med mig som en øvebane, for at indarbejde vaner som tager udgangspunkt i dine behov
            og som får dig til at gå fra tanke til handling. Sammen bygger vi din værktøjskasse op som styrker dig,
            fordi du får øvet dig på at du har andre muligheder end en overspisning og som ikke har noget restriktioner
            eller regler at gøre.</p>
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
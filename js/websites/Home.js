import Clients from '../components/Clients.js';
import Podcasts from '../components/Podcasts.js';

export default {
    components: {
        Clients,
        Podcasts
    },
template: `
<main>
    <section class="hero">
        <div>
            <h1>Ginta overspisningscoach</h1>
            <h3>Der er en mening med din overspisning</h3>
            <p>Oplever du at det dræner dig for energi og livsglæde, at være på vagt over for hvilken mad du spiser og
                hvor meget du spiser?</p>
            <p>Men har du nogensinde tænkt over hvorfor du ikke stopper med at spise eller hvilken funktion maden har,
                udover at give dig næring?</p>
        </div>
    </section>
    <section class="home">
        <div class="white">
            <h2>Ønsker du et liv?</h2>
            <div>
                <img src="/assets/images/icons8-2.png" alt="leaf used as bullet point" width="26px" height="26px">
                <p>uden daglig madstress og selvkritik?</p>
            </div>
            <div>
                <img src="/assets/images/icons8-2.png" alt="leaf used as bullet point" width="26px" height="26px">
                <p>med et fleksibelt forhold til mad og hvor du har taget et endeligt opgør mod kure og regler for hvad
                    du må og ikke må spise?</p>
            </div>
            <div>
                <img src="/assets/images/icons8-2.png" alt="leaf used as bullet point" width="26px" height="26px">
                <p>hvor du står stærkt i dig med redskaber til at håndtere dine overspisninger og løse følelsesmæssige
                    konflikter?</p>
            </div>
            <div>
                <img src="/assets/images/icons8-2.png" alt="leaf used as bullet point" width="26px" height="26px">
                <p>hvor du går efter det du virkelig gerne vil opnå, uden at lade dig begrænse af hverken mad, krop
                    eller vægt?</p>
            </div>
            <h4>Så lad mig hjælpe dig på vej mod det du drømmer om.</h4>
            <router-link to="/contact"><button>Kontakt</button></router-link>
        </div>
        <div class="green">
            <h2>Hvis du har en oplevelse af:</h2>
            <div>
                <img src="/assets/images/icons8-1.png" alt="leaf used as bullet point" width="26px" height="26px">
                <p>at du ikke kan stoppe med at spise, når du bliver overvældet af følelser</p>
            </div>
            <div>
                <img src="/assets/images/icons8-1.png" alt="leaf used as bullet point" width="26px" height="26px">
                <p>at du indtager en stor mængde mad på meget kort tid (ikke alene pga. fysisk sult)</p>
            </div>
            <div>
                <img src="/assets/images/icons8-1.png" alt="leaf used as bullet point" width="26px" height="26px">
                <p>at du kan bruge en del af din dag på at diskutere med dig selv om, at du burde spise "sundere",
                    bebrejder og skammer dig over dit valg af mad</p>
            </div>
            <div>
                <img src="/assets/images/icons8-1.png" alt="leaf used as bullet point" width="26px" height="26px">
                <p>at have været på utallige kure som efterlader dig med forvirrende madregler og en følelse af at du
                    ikke kan finde ud af det med mad</p>
            </div>
            <div>
                <img src="/assets/images/icons8-1.png" alt="leaf used as bullet point" width="26px" height="26px">
                <p>at din krop er forkert</p>
            </div>
            <h4>Så har du nok også oplevet hvor meget det dræner dig for energi og glæde, og forhindrer dig i at gøre
                det du virkelig gerne vil?</h4>
            <p>Kunne du tænke dig at lave om på det, så lad mig hjælpe dig.</p>
            <router-link to="/contact"><button>Kontakt</button></router-link>
        </div>
    </section>
</main>
<Podcasts></Podcasts>
<Clients></Clients>
`,
};
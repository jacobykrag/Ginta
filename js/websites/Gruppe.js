import Clients from '../components/Clients.js';

export default {
    components: {
        Clients
    },
template: `
<section class="pairs">
    <img src="/assets/svgs/Women.svg" alt="Woman" height="200" width="200">
    <h1>Gruppe forløb</h1>
    <div class="green">
        <h4>Gruppeforløb; er for dig som ønsker et fællesskab af ligesindede. At være udfordret med krop og spisning kan
            føles utrolig ensomt og fyldt med skam, derfor kan det være godt at møde andre som også har et ønske om at
            komme ud af et uhensigtsmæssigt spisemønster. Et møde med ligesindede kan være med til at give en indsigt,
            forståelse og være med til at motivere dig til forandring. Her vil du opleve støtte, opbakning og sammen
            øver I jer på redskaber, deler jeres erfaring og sårbarhed. Man er derfor aldrig alene i sin proces. Du vil
            få adgang til en lukket Facebook-gruppe sammen med de andre i din gruppe, hvor I løbende sparrer med
            hinanden og deler jeres erfaring.</h4>
        <hr id="white">
        <p>Måske er I 5 veninder/kolleger, som kunne tænke jer at bruge jeres gruppe i et gruppeforløb. Der vil være
            mulighed for individuel sparring eller tilkøb af individuelle samtaler.</p>
    </div>
    <div class="white">
        <h2>Priser og forløb:</h2>
        <h3>Gruppeforløb</h3>
        <p>8 mødegange á 2 timer.</p>
        <h5>6000 kr pr. person</h5>
        <hr id="green">
        <router-link to="/contact"><button>Kontakt</button></router-link>
    </div>
</section>
<Clients></Clients>
`,
};
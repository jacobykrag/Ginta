import ProfilePic from '../components/ProfilePic.js';

export default {
    components: {
        ProfilePic
    },

    template: `
<section class="contact">
    <profile-pic></profile-pic>
    <div class="glass">
        <h1>Kontakt</h1>
        <p>Har du noget på hjertet?</p>
        <p>Du er velkommen til at række ud – en mail eller en uforpligtende samtale kan være et godt første skridt.</p>
    </div>
    <div class="buttons">
        <a href="mailto:info@ginta.dk"><button><img src="/assets/svgs/mail.svg" alt="phone" width="22px" height="22px">Send en mail</button></a>
        <a href="tel:+4531332221"><button><img src="/assets/svgs/phone-call.svg" alt="phone" width="22px" height="22px">31 33 22 21</button></a>
    </div>
</section>
`,
};
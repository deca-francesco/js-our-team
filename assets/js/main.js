console.log("js linked");


const teamMembers = [
    {
        name: "Marco Bianchi",
        role: "Designer",
        email: "marcobianchi@team.com",
        img: "./assets/img/male1.png"
    },
    {
        name: "Laura Rossi",
        role: "Front-end Developer",
        email: "laurarossi@team.com",
        img: "./assets/img/female1.png"
    },
    {
        name: "Giorgio Verdi",
        role: "Back-end Developer",
        email: "giorgioverdi@team.com",
        img: "./assets/img/male2.png"
    },
    {
        name: "Marta Ipsum",
        role: "SEO Specialist",
        email: "martarossi@team.com",
        img: "./assets/img/female2.png"
    },
    {
        name: "Roberto Lorem",
        role: "SEO Specialist",
        email: "robertolorem@team.com",
        img: "./assets/img/male3.png"
    },
    {
        name: "Daniela Amet",
        role: "Analyst",
        email: "danielaamet@team.com",
        img: "./assets/img/female3.png"
    }
];

const rowEl = document.getElementById("cards_row")
let finalMarkup = "";   // se non lo inizializzo darà undefined
const formEl = document.querySelector("form");

for (let i = 0; i < teamMembers.length; i++) {
    let member = teamMembers[i];
    // destrutturo l'oggetto[i] dell'array salvo l'oggetto member con le stesse proprietà e valori
    const { name, role, email, img } = member;
    console.log(member);
    const markup = generateMember(member);
    finalMarkup += markup;
}
// aggiorno la DOM una volta sola
rowEl.innerHTML = finalMarkup;


formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    // prendo i valori degli input
    let name = document.getElementById("name").value;
    let role = document.getElementById("role").value;
    let email = document.getElementById("email").value;
    let img = document.getElementById("img").value;

    // salvo i valori nell'oggetto
    const newMember = 
    {
        name,
        role,
        email,
        img
    }
    // uso la funzione di prima per creare il markup
    const markup = generateMember(newMember);

    // inserisco il nuovo membro dopo gli altri già presenti
    rowEl.insertAdjacentHTML("beforeend", markup)
});


function generateMember(member) {
    // destrutturo l'oggetto[i] dell'array salvo l'oggetto member con le stesse proprietà e valori
    const { name, role, email, img } = member;

    return `
    <div class="col">
        <div class="d-flex bg-black text-white">
            <div>
                <img src="${img}">
            </div>
            <div class="col-8 d-flex flex-column justify-content-center my-auto ps-3">
                <h4 class="mb-0">${name}</h4>
                <span>${role}</span>
                <p class="text-primary mb-0">${email}</p>
            </div>
        </div>
    </div>`;
}
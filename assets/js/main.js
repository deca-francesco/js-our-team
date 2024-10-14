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

let rowEl = document.getElementById("cards_row")
let finalMarkup = "";   // se non lo inizializzo darà undefined

for (let i = 0; i < teamMembers.length; i++) {
    let member = teamMembers[i];
    const { name, role, email, img } = member;
    console.log(member);
    let markup = `
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
    // console.log(markup);
    
    finalMarkup += markup;
    // console.log(finalMarkup);
    
}

rowEl.innerHTML = finalMarkup;



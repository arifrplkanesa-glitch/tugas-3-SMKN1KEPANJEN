
const btnTema = document.querySelector('#btnToggleTema');
const bodyHalaman = document.querySelector('body');


btnTema.addEventListener('click', function () {
    
    bodyHalaman.classList.toggle('light-mode');

    
    if (bodyHalaman.classList.contains('light-mode')) {
        btnTema.textContent = 'Mode Terang ☀️';
    } else {
        btnTema.textContent = 'Mode Gelap 🌙';
    }
});

const btnBukaModal = document.querySelector('#btnKontak'); 
const elemenModal = document.querySelector('#modalKontak'); 
const btnTutupModal = document.querySelector('#btnTutupModal'); 


btnBukaModal.addEventListener('click', function(event) {  
    event.preventDefault();    
  elemenModal.classList.add('show');  
}); 


btnTutupModal.addEventListener('click', function() {  
    elemenModal.classList.remove('show'); 
});


document.addEventListener('keydown', function(event) {
    
    if (event.key === 'Escape') {

        
        if (elemenModal.classList.contains('show')) {
           
            elemenModal.classList.remove('show');

            
            console.log('modal ditutup menggunakan tombol ESC');
        }
    }
});

function ubahGreetingOtomatis(juniorWebDeveloper){
    
    const jam = new Date().getHours();
    let ucapan = "";

   
    if (jam >= 5 && jam < 11) {
        ucapan = "Selamat Pagi";
    } else if (jam >= 11 && jam < 15) {
        ucapan = "Selamat Siang";
    } else if (jam >= 15 && jam < 18) {
        ucapan = "Selamat Sore";
    } else {
        ucapan = "Selamat Malam"; 
    }

    
    const hasilTeks = juniorWebDeveloper.replace(/Junior Web Developer/g, ucapan);

    return hasilTeks;
}


const elemenRole = document.querySelector('.student-role');
elemenRole.textContent = ubahGreetingOtomatis(elemenRole.textContent);

const avatar = document.querySelector(".avatar-box");

if (avatar) {
    avatar.addEventListener("click", function() {
        avatar.classList.toggle("rotate");
        avatar.addEventListener("animationend", function() {
            avatar.classList.remove("rotate");
        }, { once: true });
    });
}

// Inisialisasi peta
var map = L.map('map').setView([-7.564148878815174, 110.8360755443573], 17);

// Menambahkan tile layer dari OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

// Menambahkan marker dengan ikon FontAwesome
var customIcon = L.divIcon({
  html: '<i class="fa fa-map-marker-alt" style="font-size: 32px; color: #bb2626;"></i>', // Ikon kustom
  className: 'custom-marker', // Kelas CSS opsional
  iconSize: [32, 32] // Ukuran sesuai dengan ukuran ikon
});

var marker = L.marker([-7.564148878815174, 110.8360755443573], { icon: customIcon }).addTo(map);
marker.bindPopup("<b>My Home</b>").openPopup();


// Kustomisasi gaya tombol zoom
var customZoomCSS = `
  .leaflet-control-zoom-in, .leaflet-control-zoom-out {
    border: 0px solid #555; /* Border berwarna */
    height: 10px;
  }
  .leaflet-control-zoom {
    box-shadow: none;       /* Hilangkan bayangan */
  }
`;
var styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = customZoomCSS;
document.head.appendChild(styleSheet);




const bottom = ScrollReveal({
    
    distance: '40px',
    duration: 1000,
    opacity:0,
    origin: 'bottom',
    reset: false ,
    viewFactor: 0.1
})
bottom.reveal('.nama-sc1', {})
bottom.reveal('.featured-name', {delay:200})
bottom.reveal('.featured-name', {delay:200})
bottom.reveal('.expl', {delay:1000})
bottom.reveal('.sl-donlod', { delay:600})
bottom.reveal('.sl-repo', {delay:800})
bottom.reveal('.skills-list span:nth-child(1)', {delay:600, opacity:0})
bottom.reveal('.skills-list span:nth-child(2)', {delay:700, opacity:0})
bottom.reveal('.skills-list span:nth-child(3)', {delay:800, opacity:0})
bottom.reveal('.skills-list span:nth-child(4)', {delay:900, opacity:0})
bottom.reveal('.projek', {duration:1000,scale:0 , distance:'100px', rotate:'180deg'})
bottom.reveal('.projects', {duration:1000})
bottom.reveal('.top-footer', {duration:2000})
bottom.reveal('.bottom-footer', {duration:2000})
bottom.reveal('.footer-social-icons', {duration:2000})
bottom.reveal('.icon:nth-child(1)', {duration:1000, delay:200})
bottom.reveal('.icon:nth-child(2)', {duration:1000, delay:400})
bottom.reveal('.icon:nth-child(3)', {duration:1000, delay:600})
bottom.reveal('.icon:nth-child(4)', {duration:1000, delay:800})
bottom.reveal('.show-all', {distance: '80px', duration: 1000})
bottom.reveal('.projek-sc4', {distance: '40px', duration: 1000})
bottom.reveal('.kirim', {distance: '0px',scale:0,delay:500, duration: 1000})




const kiri = ScrollReveal({
    origin: 'left',
    distance: '40px',
    duration: 1000,
    opacity:0,
    reset: false     
})
kiri.reveal('.info-sc1', {delay:700})
kiri.reveal('.sosmed-sc1 a:nth-child(1)', {delay:1100, opacity:0})
kiri.reveal('.sosmed-sc1 a:nth-child(2)', {delay:1200, opacity:0})
kiri.reveal('.sosmed-sc1 a:nth-child(3)', {delay:1300, opacity:0})
kiri.reveal('.sosmed-sc1 a:nth-child(4)', {delay:1400, opacity:0})
kiri.reveal('.box-quote:nth-child(1)', {delay:0, opacity:0})
kiri.reveal('.box-quote:nth-child(3)', {delay:0, opacity:0})
kiri.reveal('.info-sc2', {opacity:0})
kiri.reveal('.skill-title')




const kanan = ScrollReveal({
    origin: 'right',
    distance: '40px',
    duration: 1000,
    reset: false     
})
kanan.reveal('.profil', {delay:1500})
kiri.reveal('.Oline:nth-child(2)', {delay:2000,scale:0, opacity:0, visibility:'hidden'})
kiri.reveal('.Oline:nth-child(3)', {delay:2200,scale:0, opacity:0, visibility:'hidden'})
kiri.reveal('.Oline:nth-child(4)', {delay:2400,scale:0, opacity:0, visibility:'hidden'})
kanan.reveal('.box-quote:nth-child(2)', {delay:0, opacity:0})
kanan.reveal('.col', {delay:500})
kanan.reveal('.skills-box:nth-child(1)', {delay:200})
kanan.reveal('.skills-box:nth-child(2)', {delay:600})
kanan.reveal('.skills-box:nth-child(3)', {delay:800})




const atas = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 1000,
    reset: false     
})
atas.reveal('.awalsc', {});
atas.reveal('form', {delay:0});
atas.reveal('.nav', {delay:0, distance:'90px'});



 
 let typingEffect = new Typed(".typedText",{
    strings : ["Designer","Developer","Human"],
    loop : true,
    typeSpeed : 70, 
    backSpeed : 80,
    backDelay : 2000
 })

 

function buka() {
    var kosila = document.getElementById("kosil")
    var buka = document.getElementById("menu");
    var b1 = document.getElementById("baris1");
    var b3 = document.getElementById("baris3");
    buka.classList.toggle("buka");
    kosila.classList.toggle("kosile");
    [b1, b3].forEach(function(element) {
        element.classList.toggle("silang");
    });
}



function show() {
    var rowsc3 = document.getElementById("rowsc3");
    var expand = document.getElementById("expand");
    rowsc3.classList.toggle("show");
    if (expand.innerHTML === "Show All") {
      expand.innerHTML = "Less";
      expand.style.backgroundColor = "var(--1)";
      expand.style.color = "var(--5)";
      expand.style.transition = ".5s";
    } else {
      expand.innerHTML = "Show All";
      expand.style.backgroundColor = "var(--dr3)";
      expand.style.color = "var(--1)";
    }
}

function openModal(src, title, description) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var descriptionText = document.getElementById("deskripsi");

    modal.classList.toggle("modl");
    modal.style.display = "flex";
    modal.style.backgroundColor ="var(--dr3)";
    modal.style.transition = "display 3s";
    modal.style.justifyContent = "center";
    modal.style.flexDirection = "column";
    modal.style.alignItems = "center";
    modalImg.src = src;
    captionText.innerHTML = title;
    descriptionText.innerHTML = description;
}


function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}


function desk() {
    var desk = [
        document.getElementById("condesk"),
        document.getElementById("img01"),
        document.getElementById("desc"),
        document.getElementById("caption"),
        document.getElementById("closee"),
        document.getElementById("comodesc")
    ];
    desk.forEach(function(desk) {
        desk.classList.toggle("swapkanan");
    });
}









var prevScrollpos = window.pageYOffset;
var hed = document.getElementById("nav");
var ohy = document.getElementById("menu");
let sections = document.querySelectorAll("section");
let nav_links = document.querySelectorAll(".nav ul li a");

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop;
    let id = section.getAttribute("id");
    if (top >= offset + - 100) {
        nav_links.forEach(link => {
            link.classList.remove("active");
            document.querySelector(".nav ul li a[href*=" + id + "]").classList.add("active");
        })
    }
})
    prevScrollpos = currentScrollPos;
}
document.addEventListener("DOMContentLoaded", setActiveLink);
window.addEventListener("scroll", setActiveLink);
function setActiveLink() {
    let top = window.scrollY;
    sections.forEach(section => {
        let offset = section.offsetTop;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");
        // Menambahkan 100px sebagai offset tambahan (sesuaikan nilai ini dengan kebutuhan)
        if (top >= offset - 100 && top < offset + height - 100) {
            nav_links.forEach(link => {
                link.classList.remove("active");
                document.querySelector(".nav ul li a[href*=" + id + "]").classList.add("active");
            });
        }
    });
}

function sendEmail() {
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var isi = document.getElementById('isi').value;
    var errorMessageDiv = document.getElementById('error-messages');
    var successMessageDiv = document.getElementById('success-messages');
    if (!nama || !email || !isi) {
        // Tampilkan pesan error di dalam div
        errorMessageDiv.innerHTML = '<div id="error-message">Wait a second! All fields need some love</div>';
        errorMessageDiv.style.bottom = '10px';
        errorMessageDiv.style.opacity = '1';
        return; 
    }
    var params = {
        nama: nama,
        email: email,
        isi: isi
    };
    emailjs.send('service_wocvrs4','template_rzz34k4', params)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            successMessageDiv.innerHTML = '<div id="success-message">Done! Message flying now!</div>';
        }, function(error) {
            console.log('FAILED...', error);
        });
}

// function redirectToWhatsApp() {
//     // Ambil nilai input dari form
//     var nama = document.getElementById('nama').value.trim();
//     var judul = document.getElementById('judul').value.trim();
//     var isi = document.getElementById('isi').value.trim();

//     // Elemen untuk pesan error
//     var errorMessageDiv = document.getElementById('error-messages');
    
//     // Reset pesan error
//     errorMessageDiv.textContent = "";

//     // Validasi jika input masih kosong
//     if (!nama || !judul || !isi) {
//         // Tampilkan pesan error di dalam div
//         errorMessageDiv.innerHTML = '<div id="error-message"><i class="fi fi-br-exclamation"></i>please fill in all fields</div>';
//         errorMessageDiv.style.bottom = '10px';
//         errorMessageDiv.style.opacity = '1';
        
//         return; // Hentikan fungsi jika ada input yang kosong
//     }

    

//     // Nomor WhatsApp yang dituju (sesuaikan dengan nomor tujuan)
//     var phoneNumber = '6287739770494'; 

//     // Format pesan dengan Nama dan Judul menjadi teks bold dan italic
//     var message = ` *Nama:* *${nama}*\n *Judul:* *${judul}*\n Pesan: ${isi}`;

//     // Encode pesan agar aman untuk URL
//     var encodedMessage = encodeURIComponent(message);

//     // URL untuk mengarahkan ke WhatsApp
//     var url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

//     // Buka halaman WhatsApp dengan URL yang disiapkan
//     window.open(url);
// }


// document.addEventListener('mousemove', function(e) {
//     var mouseDiv = document.querySelector('.mouse-follow');
//     mouseDiv.style.left = e.pageX + 'px';
//     mouseDiv.style.top = e.pageY + 'px';
// });

  // Dapatkan elemen button
        var backToTopButton = document.getElementById("backToTop");

        // Fungsi untuk memantau posisi scroll
        window.onscroll = function() {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                backToTopButton.style.bottom = "20px"; // Tampilkan tombol jika scroll > 1000px
            } else {
                backToTopButton.style.bottom = "-100%";
                
            }
        };

        // Fungsi untuk scroll kembali ke atas
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Efek smooth scrolling
            });
        }





        // function kirimkan() {
        //     let prams = {
        //         name : document.getElementById('nama').value,
        //         email : document.getElementById('email').value,
        //         message : document.getElementById('isi').value,
        //     }

        //     emailjs.send('service_wocvrs4','template_rzz34k4',prams).then(alert('Pesan Terkirim'))
        // }
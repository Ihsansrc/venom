// decklarasi;

// var data = {
//   nama: "ihsan",
//   kelamin: "laki laki",
// };
// data.nama = "asep";
// let input = data.nama;

// console.log(data);

// function halo() {
//   console.log(this);
//   console.log("halo");
// }
// halo();
// // this mengembalikan global

// literal;

// function output(nama, tempat, lahir) {
//   var obj = {};
//   obj.nama = nama;
//   obj.tempat = tempat;
//   obj.lahir = lahir;
//   return obj;
// }

// let hasil = output("ihsan", "dadang", "agus");
// console.log(hasil);

// const person = {
//   nama: "asep",
//   lahir: "garut",
//   tempat: "ciawitali",
// };

// person.nama = "dadang";

// console.log(person);

// var data = { a: 10, agus: "dadang" };

// data.nama = function () {
//   console.log(this);
//   console.log("hello");
// };

// data.nama();
// // this mengembalikan object yang bersangkutan

// constraktor;

// function Semua(nama, alamat, lahir) {
//   this.nama = nama;
//   this.alamat = alamat;
//   this.lahir = lahir;
// }

// let nya = new Semua("dadang", "arip", "amir");
// console.log(nya.alamat);

// function Data() {
//   console.log(this);
//   console.log("halo");
// }

// var obj1 = new Data();
// var obj2 = new Data();

// // this mengembalikan object yang baru dibuat

// //  ulangan angkot
// let penumpang = ["sandika", "erik", "dody"];
// let tambahPenumpang = (nama, penumpang) => {
//   // jika penumpang kosong
//   if (penumpang == 0) {
//     penumpang.push(nama);
//     return penumpang;
//   } else {
//     // pengulangan
//     for (var i = 0; i < penumpang.length; i++) {
//       // jika penumpang ada yang undefined atau turun
//       if (penumpang[i] == undefined) {
//         penumpang[i] = nama;
//         return penumpang;
//       } else if (penumpang[i] == nama) {
//         // jika nama penumpang sama
//         console.log(`${nama} sudah ada di dalam`);
//         return penumpang;
//       } else if (i == penumpang.length - 1) {
//         // jika sudah penuh duduk di akhir (ingat lenght dan index beda jd kurangi 1)
//         penumpang.push(nama);
//         return penumpang;
//       }
//     }
//   }
// };

// let hapusPenumpang = (nama, penumpang) => {
//   if (penumpang == 0) {
//     console.log("angkot belum beroprasi");
//     return penumpang;
//   } else {
//     for (var i = 0; i < penumpang.length; i++) {
//       if (penumpang !== nama) {
//         console.log(`${nama} tidak ada di angkot`);
//         return penumpang;
//       } else if (penumpang[i] == nama) {
//         penumpang[i] = undefined;
//         return penumpang;
//       }
//     }
//   }
// };

// // menggunakan atribute .. harus menangkap dulu elementnya baru masukan atribute
// const judul = document.getElementsByTagName("h1")[0];
// judul.setAttribute("class", "text-red-500");

// // menambahkan value class dengan add
// const h1 = document.getElementsByTagName("h1")[0];
// h1.classList.add("text-white");

// // jika ada hapus tetapi jika tidak ada maka tambahkan
// const h1 = document.getElementsByTagName("h1")[0];
// h1.classList.toggle("font-text-lg");

// // menambahkan element baru yaitu p dan hasilnya tersimpan di memori dan ada di console secara permanen
// const pBaru = document.createElement("p");
// const baru = document.createTextNode("paragraf baru");

// pBaru.appendChild(baru);

// const header = document.getElementsByTagName("header")[0];
// header.appendChild(pBaru);

// // menambahkan element kedalam html

// const liBaru = document.createElement("li");
// const texLi = document.createTextNode("baru");

// liBaru.appendChild(texLi); //element

// const asu = document.querySelector("header#asu ul "); // parent yang mau dimasuki element
// const baru = asu.querySelector("li:nth-child(2)"); // mau sebelum apa element tsb dimasukan

// asu.insertBefore(liBaru, baru); // memasukan di parent asu dengan element libaru setelah baru

// // menghapus element
// const hapus = document.querySelector("header#asu ul"); // cari parentnya dulu
// const hapus1 = hapus.querySelector("li:nth-child(2)"); // pilih elementnya

// hapus.removeChild(hapus1); // //  js tolong hapus hapus1 didalam hapus

// // mengganti element
// const judul = document.querySelector("#asu nav");
// const hahi = judul.querySelector("h1");

// const h4Baru = document.createElement("h4");
// const texth4Baru = document.createTextNode("berubah");

// h4Baru.appendChild(texth4Baru);

// judul.replaceChild(h4Baru, hahi);

// h4Baru.style.backgroundColor = "salmon"; // dapat merubah backgroud dengan element baru

// // addeventlistener

// const tombol = document.querySelector("#hero #tombol");

// tombol.addEventListener("click", function () {
//   alert("jangan nonton ");
// });

// // menambahkan element baru menggunakan gabungan antara addevenlistener dan create element

// const satu = document.querySelector("#hero #dua");
// satu.addEventListener("click", function () {
//   const parent = document.querySelector("#hero");

//   const pBbaru = document.createElement("p");
//   const texBaru = document.createTextNode("ini adalah p baru");

//   pBbaru.appendChild(texBaru);

//   parent.appendChild(pBbaru);
// });

// // event handler
// const parent = document.querySelector("#hero .satu h1");

// function ubahWarna() {
//   const bungkus = document.querySelector("#asu nav ul");
//   const baru = document.createElement("li");
//   const teks = document.createTextNode("BISA");

//   baru.appendChild(teks);

//   bungkus.appendChild(baru);
// }

// // evnet handeler method

// const tombol = document.querySelector("#hero #dua");
// function ubahWarna() {
//   tombol.style.backgroundColor = "lightBlue";
// }

// tombol.onclick = ubahWarna;

// // addEvnelistener
// const ubah = document.querySelector("#hero #dua");
// ubah.addEventListener("click", function () {
//   const kabar = document.querySelector("#hero .satu h1");
//   kabar.style.backgroundColor = "lightBlue";
// });

// // penggunaan toggle harus ada class nya biar di tambah
// const ubah = document.querySelector("#hero #dua");

// ubah.addEventListener("click", function () {
//   document.body.classList.toggle("masuk"); // // masuk itu adalah class
// });

// // perubahan warna menggunakan event handler
// const ubah = document.querySelector("#hero #dua");
// ubah.onclick = function () {
//   const r = Math.round(Math.random() * 255 + 1);
//   const g = Math.round(Math.random() * 255 + 1);
//   const b = Math.round(Math.random() * 255 + 1);
//   document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
// };

// //perubahan warna menggunakan range dan valuenya dari range yaitu min max dan ambil value nya yang lalu di deklarasikan kedalam r g b
// const merah = document.querySelector("#hero .merah");
// const hijau = document.querySelector("#hero .hijau");
// const biru = document.querySelector("#hero .biru");
// merah.addEventListener("input", function () {
//   // dari awalnya change karena tidak real time jadi gunakan input dan element nya range
//   const r = merah.value;
//   const g = hijau.value;
//   const b = biru.value;
//   document.body.style.backgroundColor = "rgb(" + r + ", " + g + " ," + b + ")";
// });

// hijau.addEventListener("input", function () {
//   const r = merah.value;
//   const g = hijau.value;
//   const b = biru.value;
//   document.body.style.backgroundColor = "rgb(" + r + ", " + g + " ," + b + ")";
// });
// biru.addEventListener("input", function () {
//   const r = merah.value;
//   const g = hijau.value;
//   const b = biru.value;

//   document.body.style.backgroundColor = "rgb(" + r + ", " + g + " ," + b + ")";
// });

// // pembuatan warna dengan mousemove dalam event nya
// document.body.addEventListener("mousemove", function (e) {
//   const xPos = Math.round((e.clientX / window.innerWidth) * 255); // clientX itu scroll secara horizon yang memiliki value sedangkan innerWidth sama
//   const yPos = Math.round((e.clientY / window.innerHeight) * 255);
//   document.body.style.backgroundColor = "rgb(" + xPos + "," + yPos + ",100)";
// });

// var penumpang = ["asep", "dadang", "kumis"];
// var tambahPenumpang = function (namaPenumpang, penumpang) {
//   if (penumpang == 0) {
//     penumpang.push(namaPenumpang);
//     return penumpang;
//   } else {
//     for (var i = 0; i < penumpang.length; i++) {
//       if (penumpang[i] == undefined) {
//         penumpang[i] = namaPenumpang;
//         return penumpang;
//       } else if (penumpang[i] == namaPenumpang) {
//         console.log("nama" + " " + namaPenumpang + " " + "sudah ada di angkot");
//         return penumpang;
//       } else if (i == penumpang.length - 1) {
//         penumpang.push(namaPenumpang);
//         return penumpang;
//       }
//     }
//   }
// };

// var hapusPenumpang = function (namaPenumpang, penumpang) {
//   if (penumpang == 0) {
//     console.log("angkot masih kosong");
//     return penumpang;
//   } else {
//     for (var i = 0; i < penumpang.length; i++) {
//       if (penumpang[i] == namaPenumpang) {
//         penumpang[i] = undefined;
//         return penumpang;
//       } else if (i == penumpang.length - 1) {
//         console.log(namaPenumpang + "  " + "yang kamu cari tidak ada");
//         return penumpang;
//       }
//     }
//   }
// };

// // range warna
// const tWarna = document.querySelector("#hero #dua");
// tWarna.addEventListener("click", function () {
//   const red = Math.round(Math.random() * 255) + 1;
//   const green = Math.round(Math.random() * 255) + 1;
//   const blue = Math.round(Math.random() * 255) + 1;
//   document.body.style.backgroundColor =
//     "rgb(" + red + "," + green + "," + blue + ")";
// });

// const merah = document.querySelector("#hero .merah");
// merah.addEventListener("input", function () {
//   const r = merah.value;
//   const g = hijau.value;
//   const b = biru.value;

//   document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
// });
// const hijau = document.querySelector("#hero .hijau");
// hijau.addEventListener("input", function () {
//   const r = merah.value;
//   const g = hijau.value;
//   const b = biru.value;

//   document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
// });
// const biru = document.querySelector("#hero .biru");
// biru.addEventListener("input", function () {
//   const r = merah.value;
//   const g = hijau.value;
//   const b = biru.value;

//   document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
// });

// // angko versi lain

// const hasil = document.querySelector(".angkot .hasil");
// const tMasuk = document.querySelector(".tombol .masuk");
// const tKeluar = document.querySelector(".tombol .keluar");

// // masuk
// tMasuk.addEventListener("click", function () {
//   const input = document.getElementById("input").value;
//   const p = document.createElement("p");
//   p.textContent = input;
//   hasil.appendChild(p);
//   document.getElementById("input").value = "";
// });

// // keluar
// tKeluar.addEventListener("click", function () {
//   const input = document.getElementById("input").value;
//   const paragraphs = hasil.querySelectorAll("p");
//   for (const p of paragraphs) {
//     if (p.textContent === input) {
//       p.remove(); // Menghapus elemen jika teks cocok
//     }
//   }
//   document.getElementById("input").value = "";
// });

// // bermain suit jepang
// function getPilihanComputer() {
//   const comp = Math.random();

//   if (comp < 0.34) return "batu";
//   if (comp >= 0.34 && comp < 0.7) return "kertas";
//   return "gunting";
// }

// function getHasil(comp, player) {
//   if (player == comp) return "SERI";
//   if (player == "kertas") return comp == "batu" ? "MENANG" : "KALAH";
//   if (player == "gunting") return comp == "kertas" ? "MENANG" : "KALAH";
//   if (player == "batu") return comp == "gunting" ? "MENANG" : "KALAH";
// }

// function putar() {
//   const imgComputer = document.querySelector(".img-komputer");
//   const gambar = ["batu", "gunting", "kertas"];
//   let i = 0;
//   const waktuMulai = new Date().getTime();
//   setInterval(function () {
//     if (new Date().getTime() - waktuMulai > 1000) {
//       clearInterval;
//       return;
//     }
//     imgComputer.setAttribute("src", "gambar/" + gambar[i++] + ".png");
//     if (i == gambar.length) i = 0;
//   }, 100);
// }

// const pilihan = document.querySelectorAll("li img");
// pilihan.forEach(function (e) {
//   e.addEventListener("click", function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = e.className;
//     // putar();
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     setTimeout(function () {
//       const imgComputer = document.querySelector(".img-komputer");

//       imgComputer.setAttribute("src", "gambar/" + pilihanComputer + ".png");

//       const info = document.querySelector(".info");
//       info.innerHTML = hasil;
//     }, 1000);
//   });
// });

//
//
//
//

//
//

// const pBatu = document.querySelector(".batu");
// pBatu.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pBatu.className;

//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   const imgComputer = document.querySelector(".img-komputer");

//   imgComputer.setAttribute("src", "gambar/" + pilihanComputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pKertas = document.querySelector(".kertas");
// pKertas.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pKertas.className;

//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   const imgComputer = document.querySelector(".img-komputer");

//   imgComputer.setAttribute("src", "gambar/" + pilihanComputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pGunting = document.querySelector(".gunting");
// pGunting.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pGunting.className;

//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   const imgComputer = document.querySelector(".img-komputer");

//   imgComputer.setAttribute("src", "gambar/" + pilihanComputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// // suit jepang
// // buat pilihan komputer dengan math random
// function getPilihanComputer() {
//   const comp = Math.random();

//   if (comp < 0.34) return "batu";
//   if (comp >= 0.34 && comp < 0.7) return "kertas";
//   return "gunting";
// }

// // buat rules nya pake kondisioanal
// function getHasil(player, comp) {
//   if (player == comp) return "SERI";
//   if (player == "gunting") return comp == "kertas" ? "MENANG" : "KALAH";
//   if (player == "kertas") return comp == "batu" ? "MENANG" : "KALAH";
//   if (player == "batu") return comp == "gunting" ? "MENANG" : "KALAH";
// }

// // pilihan computer dan player
// const gambar = document.querySelectorAll("li img");
// gambar.forEach(function (e) {
//   e.addEventListener("click", function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = e.className;

//     const hasil = getHasil(pilihanPlayer, pilihanComputer);
//     putar();

//     setTimeout(function () {
//       const musuh = document.querySelector(".img-komputer");

//       musuh.setAttribute("src", "gambar/" + pilihanComputer + ".png");

//       const info = document.querySelector(".info");
//       info.innerHTML = hasil;
//     }, 1000);
//   });
// });
// // settimeout 1000
// // buat img musuh bergerak sesuai pilihannya
// // hasil masukin ke info

// close pop up

// // menggunkan style none
// const close = document.querySelector(".close");
// const card = document.querySelector(".card");

// close.addEventListener("click", function () {
//   card.style.display = "none";
// });

// // menggunakan perulangan
// const close = document.querySelectorAll(".close");
// const card = document.querySelectorAll(".card");

// close.forEach(function (e, i) {
//   e.addEventListener("click", function () {
//     card[i].style.display = "none";
//     // console.log(i);
//     // console.log(e);
//   });
// });

// // DOM Traversal
// const close = document.querySelectorAll(".close");

// close.forEach(function (e) {
//   e.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//     console.log(e);
//   });
// });

// const nama = document.querySelector(".nama");

// console.log(nama.nextElementSibling); // method traversal

// var button = document.getElementById("myButton");

// // Menambahkan event listener untuk menanggapi klik pada tombol
// button.addEventListener("click", function (event) {
//   // 'event.target' akan merujuk pada elemen tombol yang diklik
//   alert("Tombol " + event.target.id + " telah diklik!");
//   console.log(event);
// });

// // Prevent default dalam traversal
// const close = document.querySelectorAll(".close");

// close.forEach(function (e) {
//   e.addEventListener("click", function (close) {
//   close.target.parentElement.style.display = "none"; // close.target menghasilkan element a .. a yang parentnya masukan display none
//     close.preventDefault(); // menghilangkan href
//     close.stopPropagation(); // menghilangkan alert card nya
//   });
// });

// const card = document.querySelectorAll(".card");
// card.forEach(function (card) {
//   card.addEventListener("click", function (e) {
//     alert("oke");
//     // console.log(e); // e itu adalah event dari sebuah function yang merujuk pada click card, jadi apa apa yang di click dalam card akan menghasilkan element sesuai yang di klik yang mana target nya berbeda beda
//   });
// });

// bubling dalam container

// const container = document.querySelector(".container");
// container.addEventListener("click", function (e) {
//   console.log(e.target);
//   if (e.target.className == "close") {
//     e.target.parentElement.style.display = "none";
//     e.preventDefault();
//   } else if (e.target.className == "card") {
//     alert("oke");
//   }
// });

// const jumbo = document.querySelector(".jumbo");
// const thumbS = document.querySelector(".thumbnails");
// const thumbK = document.querySelectorAll(".thumb");

// thumbS.addEventListener("click", function (e) {
//   jumbo.src = e.target.src;
//   jumbo.classList.add("fade");

//   setTimeout(function () {
//     jumbo.classList.remove("fade");
//   }, 500);

//   thumbK.forEach(function (thumb) {
//     // if (thumb.classList.contains("active")) {
//     //   thumb.classList.remove("active");
//     // }
//     thumb.className = "thumb";
//   });
//   e.target.classList.add("active");
// });

// // belajar canvas
// // panggil canvas
// const myCanvas = document.querySelector("#myCanvas");

// // buat canvas
// myCanvas.width = innerWidth;
// myCanvas.height = innerHeight;

// // tentukan context
// const c = myCanvas.getContext("2d");

// // manipulasi canvas

// // rectanggel
// c.fillStyle = "pink";
// c.strokeStyle = "#999";
// c.lineWidth = "5";

// c.rect(50, 50, 200, 300);
// c.fill();
// c.stroke();

// // arc / circle
// c.fillStyle = "lightgreen";
// c.beginPath(); // berfungsi agar terpisah dengan shape lainnya tidak menyatu
// c.arc(500, 200, 100, 2, 2 * Math.PI);
// c.closePath();
// c.fill();
// c.stroke();

// // segitiga
// c.beginPath();
// c.fillStyle = "salmon";
// c.moveTo(800, 100);
// c.lineTo(900, 250);
// c.lineTo(700, 250);
// c.closePath();
// c.fill();
// c.stroke();

// // bentuk L penggabungan dengan bulat
// c.beginPath();
// c.fillStyle = "lightblue";
// c.moveTo(1050, 100);
// c.lineTo(1150, 100);
// c.lineTo(1150, 300);
// c.arc(1200, 400, 100, 5, 2 * Math.PI);
// c.lineTo(1200, 400);
// c.lineTo(1050, 400);
// c.closePath();
// c.fill();
// c.stroke();

// // animasi

// const animasi = document.querySelector("#animasi");
// animasi.width = innerWidth;
// animasi.height = innerHeight;

// const anim = animasi.getContext("2d");

// anim.fillStyle = "lightblue";
// anim.strokeStyle = "#999";
// anim.lineWidth = "5";

// // inti animasi
// let x = 300; // nilai awal dari sumbu x
// let y = 200; // nilai awal dari sumbu y
// let speadX = 5; // memberikan nilai kepada incrementnya
// let speadY = 5; // memberikan nilai kepada incrementnya
// let radius = 100;
// // dikarenakan menggunakan window.requestAnimationFrame maka akan terjadi perulangan terus menerus atau akan digambar lingkaran terus
// function draw() {
//   window.requestAnimationFrame(draw);
//   anim.clearRect(0, 0, innerWidth, innerHeight);
//   console.log("oke"); // coba
//   anim.beginPath();
//   anim.arc(x, y, radius, 0, 2 * Math.PI);
//   anim.fill();
//   anim.stroke();

//   // x + radius berfungsi agar titik tengahnya menajdi bagian terluar bulat karena x itu titk tengah dan ditambah jari2 maka titik nya di bulat
//   if (x + radius > innerWidth || x - radius < 0) {
//     // menggunakan or
//     // memantulkan kembali shape ketika innerWidthnya lebih kecil dari x dengan membalikan nilai spead menjadi -
//     speadX = -speadX;
//   }

//   if (y + radius > innerHeight || y - radius < 0) {
//     speadY = -speadY;
//   }

//   //   x++; //ini berfungsi agar jarak horizon bertambah setiap perulangan
//   x += speadX; // menambah kecepatannya
//   y += speadY;
// }

// draw();

// function coba() {
//   window.requestAnimationFrame(coba);
//   console.log("coba");
// }
// coba();

// membuat animasi gerak
// const animasi = document.querySelector("#animasi");

// animasi.width = innerWidth;
// animasi.height = innerHeight;

// const anim = animasi.getContext("2d");

// anim.fillStyle = "lightblue";
// anim.strokeStyle = "#999";
// anim.lineWidth = "5";

// let x = 300;
// let y = 200;
// let radius = 100;
// let speadX = 5;
// let speadY = 5;
// function draw() {
//   window.requestAnimationFrame(draw);
//   anim.beginPath();
//   anim.clearRect(0, 0, innerWidth, innerHeight);
//   anim.arc(x, y, radius, 0, 2 * Math.PI);
//   anim.fill();
//   anim.stroke();

//   if (x + radius > innerWidth || x - radius < 0) {
//     speadX = -speadX;
//   }

//   if (y + radius > innerHeight || y - radius < 0) {
//     speadY = -speadY;
//   }
//   x += speadX;
//   y += speadY;
// }

// draw();

const gantiAlamat = document.querySelector("#alamat");
const jalan = document.querySelector(".jalan");
const alamat = document.querySelector("#ganti-alamat");
const kirimAlamat = document.querySelector("#kirim-alamat");

let rumah = localStorage.getItem("rumah");
if (!rumah) {
  alamat.addEventListener("input", function (e) {
    rumah = e.target.value;
    localStorage.setItem("rumah", rumah);
  });
}
kirimAlamat.addEventListener("click", function () {
  jalan.innerHTML = `saya di ${rumah}`;
});
jalan.innerHTML = `saya di ${rumah}`;

// gantiAlamat.addEventListener("input", function (e) {
//   let hasil = e.target.value;
//   jalan.innerHTML = hasil;
// });

// const inputan = document.querySelectorAll("#inputan");
// const kirim = document.querySelector("#kirim");
// const box = document.querySelector("#box");

// inputan.forEach(function (inputElemnt) {
//   inputElemnt.addEventListener("input", function () {
//     let gabung = Array.from(inputan)
//       .map(function (input) {
//         return input.value;
//       })
//       .join(" ");
//     box.innerHTML = gabung;
//   });
// });

// alamat.addEventListener("click", function (e) {
//   rumah = prompt("masukan alamat");
//   localStorage.setItem("rumah", rumah);
//   e.preventDefault;
// });

// akhir ganti alamat

// penambah kurangan jumlah

const jumlah = document.querySelectorAll("#jumlah");
const bertambah = document.querySelectorAll("#bertambah");
const berkurang = document.querySelectorAll("#berkurang");

bertambah.forEach(function (bertambah, index) {
  bertambah.addEventListener("click", function () {
    let angka = parseInt(jumlah[index].textContent);
    angka++;
    jumlah[index].textContent = angka;
  });
});

// Loop melalui setiap elemen berkurang dan tambahkan event listener
berkurang.forEach(function (berkurang, index) {
  berkurang.addEventListener("click", function () {
    let angka = parseInt(jumlah[index].textContent);
    if (angka > 0) {
      angka--;
      jumlah[index].textContent = angka;
    }
  });
});

// akhir penmabahan pengurangan

// tombol catatan
const catatan = document.querySelectorAll("#catatan");
const clickCatatan = document.querySelector("#click-catatan");
const keluar = document.querySelectorAll("#keluar");
const kirim = document.querySelector("#Kirim");

// Menyembunyikan clickCatatan secara default
clickCatatan.classList.add("hidden");

kirim.addEventListener("click", function () {
  clickCatatan.classList.add("hidden");
});

catatan.forEach(function (e, i) {
  catatan[i].addEventListener("click", function (event) {
    // Mencegah klik dari menyebabkan peristiwa di elemen lain
    event.stopPropagation();
    clickCatatan.classList.toggle("hidden");
  });
});

// Menyembunyikan clickCatatan ketika klik di luar elemen catatan dan keluar
window.addEventListener("click", function (e) {
  if (e.target !== clickCatatan || e.target !== catatan) {
    clickCatatan.classList.add("hidden");
  } else if (e.target == kirim) {
    clickCatatan.classList.add("hidden");
  }
  // for (var i = 0; i < kirim.length; i++) {
  //   if (e.target === kirim[i] || e.target === keluar[i]) {
  //     clickCatatan.classList.add("hidden");
  //     console.log(kirim[i]);
  //     console.log(keluar[i]);
  //   }
  // }
});

// Menyembunyikan clickCatatan ketika klik di dalam elemen catatan
clickCatatan.addEventListener("click", function (event) {
  // Mencegah klik dari menyebabkan peristiwa di elemen lain
  event.stopPropagation();
});

// akhir tombol catatan

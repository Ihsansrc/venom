// // mengoprasikan angkot

// var penumpang = ["asep", undefined, "dadang"];
// var tambahPenumpang = function (nama, penumpang) {
//   if (penumpang == 0) {
//     penumpang.push(nama);
//     return penumpang;
//   } else {
//     for (var i = 0; i < penumpang.length; i++) {
//       if (penumpang[i] == nama) {
//         console.log(nama + " sudah berada dalam angkot");
//         return penumpang;
//       } else if (penumpang[i] == undefined) {
//         penumpang[i] = nama;
//         return penumpang;
//       } else if (i == penumpang.length - 1) {
//         penumpang.push(nama);
//         return penumpang;
//       }
//     }
//   }
// };

// var hapusPenumpang = function (nama, penumpang) {
//   if (penumpang == 0) {
//     console.log("angkot masih kosong");
//   } else {
//     for (var i = 0; i < penumpang.length; i++) {
//       if (penumpang[i] == nama) {
//         penumpang[i] = undefined;
//         return penumpang;
//       } else if (i == penumpang.length - 1) {
//         console.log(nama + " tidak ada dalam angkot");
//         return penumpang;
//       }
//     }
//   }
// };

// var mencari = function (nama, penumpang) {
//   for (var i = 0; i < penumpang.length; i++) {
//     if (penumpang[i] == nama) {
//       console.log(nama + " masih ada di angkot");
//       return penumpang;
//     } else if (i == penumpang.length - 1) {
//       console.log(nama + " sudah tidak ada di angkot");
//       return penumpang;
//     }
//   }
// };

//
//
//

// angkot dengan object constractor

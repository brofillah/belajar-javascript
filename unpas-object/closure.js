// function init() {
//  // let nama = 'Farhan'

//  return function (nama) {
//   console.log(nama)
//  }

// }

// let panggilNama = init()
// panggilNama('Farhan')
// panggilNama('Yudhi')







function ucapkanSalam(waktu) {
 return function (nama) {
  console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);

 }
}

let selamatPagi = ucapkanSalam('Pagi')
let selamatSiang = ucapkanSalam('Siang')
let selamatMalam = ucapkanSalam('Malam')

selamatPagi('Farhan')
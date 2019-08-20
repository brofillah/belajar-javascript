// Membuat Object
// Object Literal
var mhs1 = {
    nama: 'Farhan Yudhi Fatah',
    nrp: '3721973217',
    email: 'farhan.yudhi1199@gmail.com',
    jurusan: 'Teknik Informatika'
}

var mhs2 = {
    nama: 'masfar',
    nrp: '82731971923',
    email: 'farhanscience@hotmail.com',
    jurusan: 'Teknik Informatika'
}

// Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan){
    var mhs = []
    mhs.nama = nama
    mhs.nrp = nrp
    mhs.email = email
    mhs.jurusan = jurusan

    return mhs
}

var mhs3 = buatObjectMahasiswa('Yudhi', '837213173218', 'farhan.yudhi1199@gmail.com', 'Ilmu Komputer')

// Constructor
function Mahasiswa(nama, nr, email, jurusan) {
    this.nama = nama
    this.nr = nr
    this.email = email
    this.jurusan = jurusan
}

var mhs4 = new Mahasiswa('Erik', '91823921', 'erik@gmail.com', 'Teknik mesin')
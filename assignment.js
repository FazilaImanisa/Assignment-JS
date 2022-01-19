console.log(`--------------------- SOAL 1 ----------------------------------`);
let panjang = 20.5
let lebar = 30
let luasTanah = 0
let hargaTanah = 1500000
let totalTanah = 0
let ppn = 0
let nominal = 0

luasTanah = panjang * lebar
totalTanah = luasTanah * hargaTanah
ppn = 15/100 * totalTanah
nominal += totalTanah + ppn

console.log(`Luas tanah : ${luasTanah} meter`);
console.log(`Total harga tanah : ${totalTanah}`);
console.log(`Ppn : ${ppn}`);
console.log(`Jumlah nominal yang harus dibayarkan : ${nominal}`);

console.log(`---------------------- SOAL 2 ---------------------------------`);
let totalBelanja = 0
let beras = 0
let gula = 0
let telur = 0
let minyak = 0
let barang = [
    {nama : "Beras", harga: 10000, jumlah: 5 },
    {nama : "Gula", harga: 14000, jumlah: 5},
    {nama : "Telur", harga: 20000, jumlah: 2},
    {nama : "Minyak Goreng", harga: 9000, jumlah: 10}
]
for (let i = 0; i < barang.length; i++) {
    totalBelanja += barang[i].harga * barang[i].jumlah
}
for (let i = 0; i < barang.length; i++) {
    beras = barang[0].harga * barang[0].jumlah
}
for (let i = 0; i < barang.length; i++) {
    gula = barang[1].harga * barang[1].jumlah
}
for (let i = 0; i < barang.length; i++) {
    telur = barang[2].harga * barang[2].jumlah
}
for (let i = 0; i < barang.length; i++) {
    minyak = barang[3].harga * barang[3].jumlah
}
console.log(`Beras : ${beras}`);
console.log(`Gula : ${gula}`);
console.log(`Telur : ${telur}`);
console.log(`Minyak Goreng : ${minyak}`);
console.log(`Total Belanja : ${totalBelanja}`);

console.log(`---------------------- SOAL 3 ---------------------------------`);
let tb = 170
let bb = 90
let bmi = 0
let tinggi = 0

tinggi = tb /100
bmi = Math.round (bb / (tinggi * tinggi))

console.log(`Tinggi Rhody : ${tinggi} Meter`);
console.log(`Berat Badan Rhody : ${bb} Kg`);

    if(bmi < 18.5){
        console.log(`Rhody Kurang Gizi dengan BMI : ${bmi}`);
    }else if(bmi >= 18.5 && bmi < 24.9){
        console.log(`Rhody Normal dengan BMI : ${bmi}`);
    }else if(bmi >= 25 && bmi < 29.9){
        console.log(`Rhody Berat Lebih dengan BMI : ${bmi}`);
    }else{(bmi >= 30)
        console.log(`Rhody Obesitas dengan BMI : ${bmi}`);
    }

console.log(`---------------------- SOAL 4 ---------------------------------`);
let a = 4
let r = 1
let n = 10
let sn = 0
let un = 0
let bagi = 0

for (let index = 1; index <=n; index++) {
    let banyak = n-1
    un += a * (r ** banyak)
    sn += un
    console.log(`Suku Ke-${index} = ${un}`);
}
console.log(`Jumlah 10 Suku Pertama = ${sn}`);

console.log(`---------------------- SOAL 5 ---------------------------------`);

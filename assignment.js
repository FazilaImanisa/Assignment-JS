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



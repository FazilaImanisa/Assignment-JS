let umur = [50,20,80,47,15]
let jmlRemaja = 0, jmlDewasa = 0, jmlTua = 0

for (let number = 0; number < umur.length; number++) {
    if (umur[number] >= 12 && umur[number] <= 23){
        jmlRemaja = jmlRemaja + 1
    }
    if (umur[number] >= 24 && umur[number] <= 55){
        jmlDewasa = jmlDewasa + 1
    }
    if (umur[number] > 55){
        jmlTua = jmlTua + 1
    }
}

console.log(`Jumlah Remaja = ${jmlRemaja} orang`);
console.log(`Jumlah Dewasa = ${jmlDewasa} orang`);
console.log(`Jumlah Tua = ${jmlTua} orang`);

let hargaSatuan = [3000,10000,4500,5000]
let jmlBarang = [20,8,10,5]
let total = 0
let totalBayar = 0
let ppn = 0

for (i = 0; i < hargaSatuan.length; i++) {
    total += hargaSatuan[i] * jmlBarang[i]
}
ppn = 10/100 * total
totalBayar += total + ppn

console.log("Jumlah yang harus dibayar = " + totalBayar);

let pecahanUang = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100]
let butuhUang = 1490500

for (i = 0; i < pecahanUang.length; i++) {
    if (butuhUang > pecahanUang[i]) {
        jmlUang = Math.floor (butuhUang/pecahanUang[i])

        butuhUang = butuhUang - (jmlUang * pecahanUang[i])
        console.log(jmlUang + " lembar " + pecahanUang[i]);
    }
    
}

let data = [
	{nama: "Dhea", bb: 60, tb: 1.5 },
	{nama: "Essa", bb: 55, tb: 1.8 },
	{nama: "Fazila", bb: 90, tb: 1.6 },
	{nama: "Debbi", bb: 40, tb: 1.6 },
	{nama: "Faiza", bb: 30, tb: 1.4 },
]

let kurangGizi = [], normal=[]
let beratLebih = [], obesitas = []

for (let i = 0; i < data.length; i++) {
    let bmi = data[i].bb / (data[i].tb * data[i].tb)
    if(bmi < 18.5){
        kurangGizi.push(data[i].nama)
    }
    if(bmi >= 18.5 && bmi < 24.9){
        normal.push(data[i].nama)
    }
    if(bmi >= 25 && bmi < 29.9){
        beratLebih.push(data[i].nama)
    }
    if (bmi >= 30){
        obesitas.push(data[i].nama)
    }
}

console.log(`Data kurang gizi : ${kurangGizi}`);
console.log(`Data normal : ${normal}`);
console.log(`Data berat lebih : ${beratLebih}`);
console.log(`Data obesitas : ${obesitas}`);

for (let index = 1; index <=10; index++) {
    console.log(`Perulangan ke- ${index}`);
    
}

function repeat(s, n){
    var a = [];
    while(a.length < n){
        a.push(s);
    }
    return a.join('');
}
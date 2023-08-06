// const myName = "iqbal jauhari"
// const myAddress = "Kediri Raya..."
let i = 0

// function getDetailHuman(){
//     i += 1
//     // console.log (`nama saya ${data1} dan alamat saya di ${data2}.`)
//     if (i > 5){
//         console.log('lebih dari 5x diklik')
//     }else{
//         console.log('jatah klik masih ada')
//     }
    
    

// }

// //arrow fuction
// const getDetailHuman2 = () => {
//     i += 1
//     i > 5 ? console.log('lebih dari 5x bro human2') : console.log('jatah asih ada human2')
 
//    //console.log('getDetailhuman2') 
// }
// // getDetailHuman(myName, myAddress)


const mahasiswa = [

    {
        nama : "iqbal jauhari",
    alamat : " kediri",
    usia : 20,
    pekerjaan : "programmer" 
},
{
    nama : "iqbal jauhari",
    alamat : " kediri",
    usia : 20,
    pekerjaan : "programmer" 
}

]
// console.log(datas.alamat)


function getDetailData(){
    mahasiswa.map (function(result, i){
        console.table(result)
    })
    // console.log(`data yang anda cari adalah : ${datas.nama}`)
}
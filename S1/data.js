const nama = "iqbal jauhari";
let usia = 20;
console.log(nama);
console.log(usia);

// console.log(`nama saya adalah ${nama} dan usia saya ${usia} tahun`);
// console.log('nama saya adalah', nama, 'usia saya', usia, 'tahun');

const Bio = document.getElementById('Bio');
console.log(Bio);

function generateBio(){
    let generasi;

    if (usia > 10 && usia < 18){
        // ini kondisi terpenuhi
        //console.log('anda dewasa')
        generasi ="generasi remaja";
    }else if(usia > 18 && usia < 30){
        //kondisi tidak terpenuhi
       //console.log('tentu belum dewasa')
       generasi ="generasi dewasa"
    }else if (usia > 30 ){
        //console.log('widih dewasa')
        generasi ="generasi sudah dewasa"
    }else if (usia > 2 && usia < 10){
        //console.log('waduh waduh ga tau umur lu')
        generasi ="waduhhhhh"
    }else{
        //console.log('waduh waduh bocil')
        generasi ="bayi luu cilll"
    }

    //return console.log('generasi saya adalah', generasi)
    return Bio.innerHTML = generasi;



//     console.log(`nama saya adalah ${nama} dan usia saya ${usia} tahun`);
}


generateBio();
// const namaSaya ="Iqbal Jauhari"

// function getName(){
//     for(let i = 0; i < 100; i++){
//         console.log('nama saya adalah', namaSaya)
//     }

// };

// getName()

const http = require('http');
const rupiah = require('rupiah-format');
const fs = require('fs')
const os = require('os')
const host = '127.0.0.1'
const port = 3002
//console.log(http)

const server = http.createServer(function(request,response){
    const nama = "IQBAL JAUHARI";
    let uang = "500000";
    let jajan= "150000";
    let sisa = uang - jajan;

    uang = rupiah.convert(uang)
    jajan = rupiah.convert(jajan)
    sisa = rupiah.convert(sisa)
    
    fs.appendFile('sisauang.txt', sisa, () => {
        console.log('data uang berhasil disimpan')
    })

    const sisaRam = os.freemem();
    const jmlCpu = os.cpus();

    function checkCPU(){
        let myCPU = [];
        jmlCpu.map((cpu, i) => {
            myCPU.push(cpu.model)

        })
        return myCPU[0]
    }

    // const sisaRupiah = rupiah.convert(sisa);
    // console.log('sisa rupiah :' ,sisaRupiah)






    const hasil = `
    <head>
    <title>${nama}</title>
    </head> 
    <body>

    <p>
    halo saya ${nama}, saya jajan sebanyak ${jajan}, uang saya ${uang}, sekarang menjadi ${sisa}.
    </p>
    <h5>SISA RAM PC SAYA ${sisaRam}</h5>
    <h5>SISA JUMLAH CPU ${checkCPU()}</h5>
    </body> 
    `
    
    
    
    response.statusCode = 200;
    response.end(hasil);
});
server.listen(port, host,'', function(){
    console.log(`server menyala di${host}:${port} `);
});
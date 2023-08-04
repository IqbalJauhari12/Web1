function saklar(lamp) {
    let toggle1 = document.getElementById("default-toggle1");
    let toggle2 = document.getElementById("default-toggle2");
    let toggle3 = document.getElementById("default-toggle3");
    
    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");
    
    // toggle.checked ? alert('on') : alert('off')


    if(toggle1.checked){
        //console.log('on');
        lampu1.src = "assets/images/on.png"; 
    }else{
        //console.log('off');
        lampu1.src = "assets/images/off.png";
  
    }

    if(toggle2.checked){
        //console.log('on');
        lampu2.src = "assets/images/on.png"; 
    }else{
        //console.log('off');
        lampu2.src = "assets/images/off.png";
  
    }
    
    if(toggle3.checked){
        //console.log('on');
        lampu3.src = "assets/images/on.png"; 
    }else{
        //console.log('off');
        lampu3.src = "assets/images/off.png";
  
    }
    
    
    
    // console.log('testing', toggle.checked);




// //nyala
//     if (action == "on") {
//         if (lamp == 1) {
//             lampu1.src = "assets/images/on.png"; 
//         }
//         if (lamp == 2) {
//             lampu2.src = "assets/images/on.png";
//         }
//         if (lamp == 3) {
//             lampu3.src = "assets/images/on.png";
//         }
//     }
// //matiin
//     if (action == "off") {
//         if (lamp == 1) {
//             lampu1.src = "assets/images/off.png";
//         }
//         if (lamp == 2) {
//             lampu2.src = "assets/images/off.png";
//         }
//         if (lamp == 3) {
//             lampu3.src = "assets/images/off.png";
//         }
//     }
}
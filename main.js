let play = document.getElementById("musik");
        function playMusic(){
            let audio = new Audio("usa.mp3");
            audio.play()
        }
        play.addEventListener("click", playMusic);

function lanjut(){
    document.getElementById('menu').style.display = 'none';
    document.getElementById('1').style.display = 'block';
}


let satu = document.getElementById('1');
let dua = document.getElementById('2');
let tiga = document.getElementById('3');
let empat = document.getElementById('4');
let lima = document.getElementById('5');
let enam = document.getElementById('6');
let tuju = document.getElementById('7');
let lapan = document.getElementById('8');
let sembilan = document.getElementById('9');
let puluh = document.getElementById('10');
let belas = document.getElementById('11');
let duabelas = document.getElementById('12');
let tigabelas = document.getElementById('13');
let empatbelas = document.getElementById('14');
let end = document.getElementById('end');


let maju = document.getElementById("lanjut");
         function gas(){
            dua.style.display = 'block';
            satu.style.display = 'none';
         }
         maju.addEventListener("click", gas);
let ya = document.getElementById("lanjut1");
         function oye(){
            tiga.style.display = 'block';
            dua.style.display = 'none';
         }
         ya.addEventListener("click", oye);
let ya1 = document.getElementById("lanjut2");
         function oye1(){
            empat.style.display = 'block';
            tiga.style.display = 'none';
         }
         ya1.addEventListener("click", oye1);
let ya2 = document.getElementById("lanjut3");
         function oye2(){
            lima.style.display = 'block';
            empat.style.display = 'none';
         }
         ya2.addEventListener("click", oye2);
let ya3 = document.getElementById("extra");
         function oye3(){
            enam.style.display = 'block';
            lima.style.display = 'none';
         }
         ya3.addEventListener("click", oye3);
let ya4 = document.getElementById("extra1");
         function oye4(){
            tuju.style.display = 'block';
            enam.style.display = 'none';
         }
         ya4.addEventListener("click", oye4);
let ya5 = document.getElementById("lanjut4");
         function oye5(){
            tuju.style.display = 'block';
            lima.style.display = 'none';
         }
         ya5.addEventListener("click", oye5);
let ya6 = document.getElementById("lanjut5");
         function oye6(){
            lapan.style.display = 'block';
            tuju.style.display = 'none';
         }
         ya6.addEventListener("click", oye6);
let ya7 = document.getElementById("lanjut6");
         function oye7(){
            sembilan.style.display = 'block';
            lapan.style.display = 'none';
         }
         ya7.addEventListener("click", oye7);
let ya8 = document.getElementById("lanjut7");
         function oye8(){
            puluh.style.display = 'block';
            sembilan.style.display = 'none';
         }
         ya8.addEventListener("click", oye8);
let ya9 = document.getElementById("lanjut8");
         function oye9(){
            belas.style.display = 'block';
            puluh.style.display = 'none';
         }
         ya9.addEventListener("click", oye9);
let ya10 = document.getElementById("lanjut9");
         function oye10(){
            duabelas.style.display = 'block';
            belas.style.display = 'none';
         }
         ya10.addEventListener("click", oye10);
let ya11 = document.getElementById("lanjut10");
         function oye11(){
            tigabelas.style.display = 'block';
            duabelas.style.display = 'none';
         }
         ya11.addEventListener("click", oye11);
let ya12 = document.getElementById("lanjut11");
         function oye12(){
            empatbelas.style.display = 'block';
            tigabelas.style.display = 'none';
         }
         ya12.addEventListener("click", oye12);
let ya13 = document.getElementById("lanjut11");
         function oye13(){
            end.style.display = 'block';
            empatbelas.style.display = 'none';
         }
         ya13.addEventListener("click", oye13);
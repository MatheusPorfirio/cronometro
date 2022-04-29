let s = 0
let m = 0
let h = 0
let inter 


function twonumbers (digit) {
     if (digit < 10) {
     return ('0'+ digit)
     } else {
          return (digit)
     }
}

function play () {
     s++ 
     if (s === 60 ) {
          m++,  s=0
}    if (m === 60) {
     h++, m=0     
} 


document.getElementById ("num").innerHTML=twonumbers(h)+":"+twonumbers(m)+":"+twonumbers(s); 
}

function start () {


     inter = setInterval(play,1000)

 }

 function stop (){

clearInterval(inter)

}


function reset () {  
     
     clearInterval(inter)
     s=0
     m=0
     h=0
     document.getElementById ("num").innerHTML= "00"+":"+"00"+":"+"00"; 
}



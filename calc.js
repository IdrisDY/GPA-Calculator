let newmonth

var x = document.getElementById("p")
let container= Short("container")
let newP =  document.createElement("div")
container.appendChild(newP)
let resetBtn = document.getElementsByClassName('btn-reset')[0]

let g = 10

function Reset(){
   container.reset()
}
function Short (tag){
   return document.getElementById(tag)
}
/*
let P1=0
let P2=0
let P4=0
let P3=0
let P5=0
*/
var P1=0
var P2=0
var P3=0
var P4=0
var P5=0
let TP = P1 +P2+P3+P4+P5
console.log(TP)



 let inp2 = Short("Finp2")
 let inp1 = Short ("Finp1")
 let inp3 = Short ("Finp3") 


let Cinp1 = Short("Cinp1")
let Cinp2 = Short ("Cinp2")
let Cinp3 = Short ("Cinp3")


let sinp1 = Short("Sinp1")
let sinp2 = Short ("Sinp2")
let sinp3 = Short ("Sinp3")

let tinp1 = Short("Tinp1")
let tinp2 = Short ("Tinp2")
let tinp3 = Short ("Tinp3")
               

let Qinp1 = Short("Qinp1")
let Qinp2 = Short ("Qinp2")
let Qinp3 = Short ("Qinp3")
  

let TotalPoints=0


          

   





   console.log("working")
   function Calc(){
console.log(allFilled)

   switch(inp2.value){
      case("A"):
      console.log( P1 = 5 *inp3.value); 
      break;
      case ("B"):
      console.log(P1 = 4*inp3.value);
      break;
      case("C"):
      console.log(P1 =3*inp3.value);
      break;
      case ("D"):
      console.log(P1=2*inp3.value);
      break;
      case ("E"):
      console.log(P1 =1*inp3.value);
      break;
      case ("F"):
      console.log(P1=0*inp3.value);
      break;
            }
            //TotalPoints=   P1+P2+P3+P4+P5




 
      // 2ND ROW




  
   switch(sinp2.value){
      case("A"):
      console.log(   P2 = 5 *sinp3.value); 
      break;
      case ("B"):
      console.log(P2 = 4*sinp3.value);
      break;
      case("C"):
      console.log(P2 =3*sinp3.value);
      break;
      case ("D"):
      console.log(P2=2*sinp3.value);
      break;
      case ("E"):
      console.log(P2 =1*sinp3.value);
      break;
      case ("F"):
      console.log(P2=0*sinp3.value);
      break;
            }
           // TotalPoints= TotalPoints + P2
          // TotalPoints=   P1+P2+P3+P4+P5
            console.log (P2)
         
         // 3RD ROW 





   
   switch(Tinp2.value){
      case("A"):
      console.log(  P3 = 5 *Tinp3.value); 
      break;
      case ("B"):
      console.log(P3 = 4*Tinp3.value);
      break;
      case("C"):
      console.log(P3 =3*Tinp3.value);
      break;
      case ("D"):
      console.log(P3=2*Tinp3.value);
      break;
      case ("E"):
      console.log(P3 =1*Tinp3.value);
      break;
      case ("F"):
      console.log(P3=0*Tinp3.value);
      break;
            }
            //TotalPoints= TotalPoints +P3
          //  TotalPoints=   P1+P2+P3+P4+P5
   


//4TH ROW
   


  
switch(Qinp2.value){
   case("A"):
   console.log(  P4 = 5 *Qinp3.value); 
   break;
   case ("B"):
   console.log(P4 = 4*Qinp3.value);
   break;
   case("C"):
   console.log(P4 =3*Qinp3.value);
   break;
   case ("D"):
   console.log(P4 =2*Qinp3.value);
   break;
   case ("E"):
   console.log(P4 =1*Qinp3.value);
   break;
   case ("F"):
   console.log(P4 =0*Qinp3.value);
   break;
         }
        // TotalPoints= TotalPoints + P4
       // TotalPoints=   P1+P2+P3+P4+P5
         console.log (P4)
   
      
//5TH ROW 


   
   switch(Cinp2.value){
      case("A"):
      console.log(  P5 = 5 *Cinp3.value); 
      break;
      case ("B"):
      console.log(P5= 4*Cinp3.value);
      break;
      case("C"):
      console.log(P5 =3*Cinp3.value);
      break;
      case ("D"):
      console.log(P5 =2*Cinp3.value);
      break;
      case ("E"):
      console.log(P5 =1*Cinp3.value);
      break;
      case ("F"):
      console.log(P5 =0*Cinp3.value);
      break;
            }
           // TotalPoints= TotalPoints+ P1 + P2+P3+P4+ P5
          // TotalPoints= P1+P2+P3+P4+P5


 
      let TotalUnits =Number(inp3.value) + Number(sinp3.value) + Number (tinp3.value) +Number(Qinp3.value) + Number(Cinp3.value)


     
    let TotalPoints= P1+P2+P3+P4+P5

      console.log(TotalUnits)
      console.log(TotalPoints)
      console.log(P1)
      let FinalResult= TotalPoints/TotalUnits
      console.log (FinalResult.toFixed(2))
        
 console.log()
          x.innerHTML=`your GP is ${FinalResult.toFixed(2)} out of an obtainable 5.00}`
    }

function resBtn(){
   inp2.value =''
   inp1.value= ''
   inp3.value= ''
  
  
  Cinp1.value ='' 
  Cinp2.value =''
  Cinp3.value ='' 
  
  
  sinp1.value ='' 
  sinp2.value ='' 
  sinp3.value ='' 
  
  tinp1.value =''
  tinp2.value =''
  tinp3.value ='' 
                 
  
  Qinp1.value ='' 
  Qinp2.value =''
  Qinp3.value ='' 
    

}
let allFilled =  Boolean(Qinp2.value != '')
console.log(allFilled)
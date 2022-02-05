
var x = document.getElementById("p")
let container= Short("container")
let newP =  document.createElement("div")
container.appendChild(newP)




function Reset(){
   container.reset()
}
function Short (tag){
   return document.getElementById(tag)
}


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



Cinp3.onchange=function(event){
   Cinp3.value= event.target.value
   console.log(Cinp3.value)
   let TotalUnits =Number(inp3.value) + Number(sinp3.value) + Number (tinp3.value) +Number(Qinp3.value) + Number(Cinp3.value)
   Calc()}

   Qinp3.onchange=function(event){
      Qinp3.value= event.target.value
      console.log(Qinp3.value)
      let TotalUnits =Number(inp3.value) + Number(sinp3.value) + Number (tinp3.value) +Number(Qinp3.value) + Number(Cinp3.value)
      Calc()}

      tinp3.onchange=function(event){
         tinp3.value= event.target.value
         console.log(tinp3.value)
         let TotalUnits =Number(inp3.value) + Number(sinp3.value) + Number (tinp3.value) +Number(Qinp3.value) + Number(Cinp3.value)
         Calc()}
          
inp3.onchange=function(event){
inp3.value= event.target.value
console.log(inp3.value)
let TotalUnits =Number(inp3.value) + Number(sinp3.value) + Number (tinp3.value) +Number(Qinp3.value) + Number(Cinp3.value)
Calc()
}

   
sinp3.onchange=function(event){
sinp3.value= event.target.value
console.log(sinp3.value)

let TotalUnits =Number(inp3.value) + Number(sinp3.value) + Number (tinp3.value) +Number(Qinp3.value) + Number(Cinp3.value)
Calc()
}





   console.log("working")
inp2.onchange=function(event){
   inp2.value= event.target.value
   switch(inp2.value){
      case("A"):
      console.log(   P1 = 5 *inp3.value); 
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
    
}

 
      // 2ND ROW


sinp2.onchange=function(event){
   sinp2.value= event.target.value

   switch(Sinp2.value){
      case("A"):
      console.log(   P2 = 5 *Sinp3.value); 
      break;
      case ("B"):
      console.log(P2 = 4*Sinp3.value);
      break;
      case("C"):
      console.log(P2 =3*Sinp3.value);
      break;
      case ("D"):
      console.log(P2=2*Sinp3.value);
      break;
      case ("E"):
      console.log(P2 =1*Sinp3.value);
      break;
      case ("F"):
      console.log(P2=0*Sinp3.value);
      break;
            }

            console.log (P2)
}


         // 3RD ROW 



tinp2.onchange= function(event){
   tinp2.value=event.target.value
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
            console.log (TotalPoints)
   
}

//4TH ROW



Qinp2.onchange=function(event){
   Qinp2.value=event.target.value
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
   
         console.log (P4)
   

}
//5TH ROW 


Cinp2.onchange=function(event){
   Cinp2.value=event.target.value


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
   
}


        

   function Calc(){
      let TotalUnits =Number(inp3.value) + Number(sinp3.value) + Number (tinp3.value) +Number(Qinp3.value) + Number(Cinp3.value)

     
      console.log(TotalUnits)
      console.log(TotalPoints)
      let FinalResult= TotalPoints/TotalUnits
      console.log (FinalResult.toFixed(2))
        
 console.log()
          x.innerHTML=`your GP is ${FinalResult.toFixed(2)} out of an obtainable 5.00}`
    }

/*function show(){
   const node = document.createElement("p")
   node.value="inp3.value"
      const war = document.createTextNode('Water ') 
      node.appendChild(war)
     let die = document.getElementById("ninja")
     die.appendChild( node)
      const div2= document.getElementById("nin2")
      div2.appendChild(die)
   

   ;
}
 */
      

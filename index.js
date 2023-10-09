// Code your solutions in this file
let stringNames=["Guadalupe", "Ollie", "Aki"];

function writeCards(stringNames){
  for (i=0; i<3; i++)
  console.log (`Thankyou, ${stringNames[i]} for the wonderful surprise gift`);
}
writeCards(stringNames);


let messages =[`Thankyou, ${stringNames[0]} for the wonderful surprise gift`
                `Thankyou, ${stringNames[1]} for the wonderful surprise gift`       
                `Thankyou, ${stringNames[2]} for the wonderful surprise gift`
                ]
return messages;




const num=[0,1,2,3,4,5,6,7,8,9,10];

countDown=()=>{
  let i=10;
  while (i<11&& i>-1){
    console.log (num[i]);
    i--;
  } 
  
}
  console.log (countDown());  
  



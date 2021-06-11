// расчет индекса массы тела

let weight = +prompt('Enter weight, kg (as example "50")');
let hight = +prompt('Enter hight, m (as example "1.70")');


console.log( weight);
console.log( hight);


let index = (Math.round((weight / (hight ** 2) *10))) / 10; 

console.log( index);
 
if(index <= 16) {
    alert(`Body mass index is ${index} It means severe underweight`);
} else if(index > 16 && index <= 18.5) {
        alert(`Body mass index is ${index} It means underweight`);
     } else if(index > 18.5 && index <= 25) {
            alert(`Body mass index is ${index} It means normal weight`);
          } else if(index > 25 && index <= 30) {
               alert(`Body mass index is ${index} It means overweight`);
               } else if(index > 30 && index <= 35) {
                    alert(`Body mass index is ${index} It means obesity 1 degree`);
                    } else if(index > 35 && index <= 40) {
                         alert(`Body mass index is ${index} It means obesity 2 degree`);
                    } else {alert(`Body mass index is ${index} It means obesity 3 degree`);
                    }

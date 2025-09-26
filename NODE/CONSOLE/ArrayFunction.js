// let arr = [10,20,30,40,50]

//Sum Of Array
// const sumarr = arr.reduce((sum,a)=> {return sum+a})
// console.log("Sum = ",sumarr)


//  find mac and second max from array elements

// let arr1 = [10,20,30,40,50]

// const summax = arr1.reduce((summax,max)=> summax > max ? summax :max)
// const summax1 = arr1.reduce((a,b)=> b < summax ? b :a)
// console.log("Max = ",summax)
// console.log("Second Max = ",summax1)



// let arr1 = [10, 20, 30, 40, 50];
// let max1 = "" 
// let max2 = ""  

// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] > max1) {
//     max2 = max1;      
//     max1 = arr1[i];  
//   } else if (arr1[i] > max2 && arr1[i] < max1) {
//     max2 = arr1[i];  
//   }
// }

// console.log("Max =", max1);
// console.log("Second Max =", max2);


let arr2 = [10, 20, 30, 40, 50];
const replaced = arr2.splice(2, 2, 60, 70);
console.log("Removed Elements:", replaced);
console.log("Updated Array:", arr2);
console.log("Length of Removed Elements:", replaced.length);

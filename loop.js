
let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

//loop1
// for(let i =0;i<arr.length;i++){
// console.log(arr[i]);
// }




const res1 = arr.forEach(
    function (item, i) {
        console.log(item + " ->" + i);
        return item;
    }
)
console.log("res1: " + res1);
//forEach doesnt return anything

const res2 = arr.map(
    (item, i) => {
        console.log(item + " ->" + i);
        return item;
    }
);
console.log("res2: " + res2);
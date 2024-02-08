//push
//add new element at the end
const names=["monika","radha"];
names.push("mahi");
console.log(names);

//pop
//remove last element
const fruits=["apple","mango","grapes","lichi"];
fruits.pop();
console.log(fruits);

//shift
//delete first element
const veg=["potato","onion","carrat","tomato"];
veg.shift();
console.log(veg);

//unshift
//add new element at the begninng
const dryfruits=["badam","kaju","kismis"];
dryfruits.unshift("pista");
console.log(dryfruits);

//changing element by index number
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1[0] = "Kiwi";
console.log(fruits1);


//delete
//delete the element but leave empty space
const veg1=["potato","onion","carrat","tomato"];
delete veg1[2];
console.log(veg1);
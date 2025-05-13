console.log("hello oparaters");

//oparater is a symbole that tells the computer to do something with values

//Arithmetic oparators   ==>       +,- ,*,/,%,**
//Assingment oparators   ==>       =,+=,-=,*=,/=,%=,**=
//comparison oparators   ==>       ==,===,!=,!==,<,>,>=,<=
//logical oparators      ==>       && ,|| ,!
//increment and decrement oparators ==> ++,--
//ternary oparator        ==>      Condition ? True: False
//bitwise oparator        ==>      &,|,~,^,<<,>>

//===============================================================================================================================

//Arithmetic oparators 
/*
let result=5+3; // + is oparator //5 and 3 is oparants

console.log(result);

console.log(5-2);
console.log(5*2);
console.log(5/2);
console.log(5%2);
console.log(5**2);

//challange 1

let pricePerItem=150;
let quantity = 3;
let totalprice=pricePerItem*quantity;
let discount=totalprice*(10/100);
let discountPrice=totalprice-discount;

console.log("price per item = ",pricePerItem);
console.log("quantity =",quantity);
console.log("Discount = ",discount);
console.log("Total Price =",totalprice);
console.log("discount Price ",discountPrice);

*/

//===============================================================================================================================

//Assingment oparators

/*
let alpha = 55;  // (=) is assinment oparator
 //x += 2;
 alpha=alpha+5;
 console.log(alpha);

let a =5;
console.log(a);

a=a+5; //meance a=a+5
console.log(a);
a +=5; //a=a+5;
console.log(a);
a-=5; //a=a-5
console.log(a);
a*=5;//a=a*5;
console.log(a);
a/=4;//a=a/4;
console.log(a);
a%=5;//a=a%5;
console.log(a);
a**=3;//a=a**3;
console.log(a);

  */


//===============================================================================================================================

//comparison oparators
/*
let x=5
let y=3;
console.log(5==5);
// console.log(5==3);
// console.log(5=3);
// console.log(5===3);
console.log(5===3);
console.log("s"=="s");
console.log("s"==="s");
console.log(1==="s");

*/
// console.log(5!=="3");//true 
// console.log(5!==3);//true value compaire
// console.log(5!==5);
// console.log(5==5);
// console.log(5===5);
// console.log(5===5);




//===============================================================================================================================

//logical oparators (combine oparator)

//used when you are chechking more then one thing

//&& ANd Oparator == one condition is true and another condition false then output is false and both are true then true other wise false  
//Example (x>5)&&x<1000)

//   a    |   B    |  ANS
 //  T     |   F   |  F
 //  F    |   T    |  F
 //  T     |   T    |  T
 //  F    |   F    |  F


 //Example

 console.log(true && true);
 console.log(true && false);
 console.log(false && false);
 console.log(false && true);


 //Example

 let x =6;

 console.log(x>=0 && x<=1000);
 
 

//|| or oparator  == OR => one is true then ANS is true
//   a    |   B    |  ANS
 //  T     |   F   |  T
 //  F    |   T    |  T
 //  T     |   T    |  T
 //  F    |   F    |  F

 //Example

 console.log(true || true);
 console.log(true || false);
 console.log(false || false);
 console.log(false || true);

 //Example

 let y =6;

 console.log(y>=0 || y<=1000);
 
// ! not oparator  FALSE KO TRUE KARTA HAI REVARSE KARTA HAI
// !false => True  
// !true => False 

//Example

 console.log(!true);
 console.log(!false);



//===============================================================================================================================

//increment and decrement oparators

//one increment and one decriment
//pre-incriment
console.log(x++); //badmai incremet hota hai
console.log(x);

//post-incriment
console.log(++x);// pahele incriment hoto hai
console.log(x);

//pre-decriment
console.log(x--);
console.log(x);     


//post-decriment
console.log(--x);
console.log(x);





//===============================================================================================================================

//ternary oparator

//condition ? execute if condition is true : execute if condition is false;

//example 
// let age =19;
// let result=age >= 18 ? "Drive": "Can't Drive";  //read => if age is 18 0r more ,result is Drive and otherwise its can not drive
// console.log(result);


let name ="";
let pass ="";

const result1=(name && pass)?("Login Sucessfully"):("username and password are requared ")
console.log(result1);


//finde largest number for given 3 number let a=5; ,b=2; c=12;

let a=5 ,b=12,c=2;
let largest= a>b ? (a>c ? a:c ):(b>c ? b:c);
console.log(largest);

//===============================================================================================================================

//bitwise oparator

// &  Bitwise AND    A&B    

console.log(5&3);
console.log(4&7);

// | Bitwise OR

console.log(8|11);
console.log(26|15);

//  ~ Bitwise not

//shortCUt formula -(x+1)  -(3+1)= -4

console.log(~3);
console.log(~(-5));







//===============================================================================================================================

//non -boolean values truthy v/s falsy 

//falsy => false ,undefined null 0 -0 0n "" NaN
//truely => anything which is not falsy example name number all 


// let check = true && true ? "statemnt1" : "Statment2";
// console.log(check);
let check = "" && 25 ? "statemnt1" : "Statment2";
console.log(check);

//===============================================================================================================================


//SHort Circulting

//Short Circulting in javascript refals  to the way logical oparator (&& || and ??) evaluate exapression)

// || logical OR

let h= "" || undefined || "ABhi" || null || 0;
console.log(h);









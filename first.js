// let mainColors = localStorage.getItem("color-opt");

// if (mainColors !== null) {
//   document.documentElement.style.setProperty(
//     "--main-color",
//     localStorage.getItem("color-opt")
//   );

//   document.querySelectorAll(".colors-list li").forEach((element) => {
//     element.classList.remove("active");

//     if (element.dataset.color === mainColors) {
//       element.classList.add("active");
//     }
//   });
// }
// // toggle of setting

// document.querySelector(".toggle .fa-solid").onclick = function () {
//   this.classList.toggle("fa-spin");

//   document.querySelector(".setting-box").classList.toggle("open");
// };

// // end of setting
// // random back ground
// let header = document.querySelector(".header");
// let imgArr = [
//   "pexels-photo-265129.jpeg",
//   "01.jpg",
//   "02.jpg",
//   "03.jpg",
//   "pexels-photo-3183132 (1).jpeg",
// ];

// setInterval(() => {
//   let randomNum = Math.floor(Math.random() * imgArr.length);
//   console.log(randomNum);
//   header.style.backgroundImage = 'url("' + imgArr[randomNum] + '")';
// }, 3000);
// //  end of Random back ground

// let settingColor = document.querySelectorAll(".colors-list li");
// settingColor.forEach((li) => {
//   li.addEventListener("click", (e) => {
//     document.documentElement.style.setProperty(
//       "--main-color",
//       e.target.dataset.color
//     );
//     localStorage.setItem("color-opt", e.target.dataset.color);

//     e.target.parentElement.querySelectorAll(".active").forEach((element) => {
//       element.classList.remove("active");
//     });
//     e.target.classList.add("active");
//   });
// });

// تكليفات من 10ل17
// let numberOne = "10";
// let numberTwo = 20;
// console.log(numberOne + numberTwo);
// console.log(typeof (numberOne + numberTwo));
// console.log(`${numberOne}${numberTwo}`);
// console.log(typeof `${numberOne}${numberTwo}`);
// console.log(numberTwo + "\n" + numberOne);
// console.log(`${numberTwo}
// ${numberOne}`);
// console.log("++++++++++++++++++++++++++++++++++++++++++++++");
// console.log(elzero.innerHTML);
// console.log(typeof elzero);
// console.log("++++++++++++++++++++++++++++++++++++++++++++++");
// console.log("'I'm In \n \\\\ \n love \\\\ \"\"\" '''  ");
// console.log("++++++++++++++++++++++++++++++++++++++++++++++");
// let a = 21;
// let b = 20;
// let c = `${b}${a}`;
// let d = c;
// let e = c;

// console.log(`_${a}_${c}_${d}_${e}_${b} `);

//  17to10نهايه التكليفات

// //تحدي من 10ل17
// let title = "elzero",
//   description = "elzero web school",
//   date = "25/10";
// let mostafa = `<div>
// <h3>${title} </h3>
// <p>${description}</p>
// <span>${date}</span>
//   </div>`;
// document.write(mostafa.repeat(4));

// //تحدي من 10ل17 End

//  تكليفات من 18 ل 22
// console.log(10 * 20 + (15 % 3) + 190 + 10 - 400);
// console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
// let num = 3;
// console.log(num + true + true + true);
// console.log(num * num - num);
// console.log(num * (true + true));
// console.log(num * num - (true + true + true));
// console.log(num * --num);
// console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");

// let sum = "10";
// console.log(sum * (true + true));
// console.log(+sum + +sum);

// console.log((sum * sum) / (true + true + true + true + true));
// console.log(++sum + --sum - true);

// نهايه التكليفات
// تحدي 18ل20ل
// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;
// console.log(-a * +b + (c % true));
// console.log(++g * ++e + ++f + -d); // نهايه التحدي
// تكليفات من 23 -26
// console.log(Math.trunc(100000, 55));
// console.log(Math.floor(100000, 2));
// console.log(Math.round(100000, 1));
// console.log(Math.ceil(100000, 55));
// console.log(parseInt("100000"));
// console.log(1 * 100000);
// console.log(+(100000.22).toFixed(0));
// console.log(Math.min(100000, 10000000, 100000000));
// console.log(Math.max(100000, 1000, 100));
// console.log(200000 / 2);
// console.log("########################################");
// console.log(-Number.MIN_SAFE_INTEGER);
// console.log(Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER + 15);
// console.log("########################################");

// let myVar = "100.56789 Views";
// console.log(parseInt(myVar));
// console.log(+parseFloat(myVar).toFixed(2));
// console.log("########################################");

// let num = 10;
// console.log(Number.isInteger(num) + true);
// console.log("########################################");
// let flt = 10.4;

// console.log(Math.floor(flt)); // 10
// console.log(Math.round(flt)); // 10
// console.log(+Math.min(flt, 20, 30).toFixed(0)); // 10
// console.log(Math.trunc(flt)); // 10
// console.log("########################################");
// console.log(Math.floor(Math.random() * 5));
// نهايه التكليفات
// تحدي من 23-26
// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;
// console.log(+Math.min(a, b, c, d).toFixed(0));
// console.log(a ** Math.round(d));
// console.log(parseInt(d));
// console.log(Math.floor(d));
// console.log(Math.trunc(d));
// console.log(Math.round(d));
// console.log(Math.floor(b) / Math.ceil(d).toFixed(2));
// تحدي من 23-end of26

// نكليف من 27-3
// let userName = "Elzero";
// console.log(userName.toLowerCase().slice(0, 1));
// console.log(userName.toLowerCase().substring(0, 1));
// console.log(userName.toLowerCase().charAt(0));
// console.log(userName[0].toLowerCase());
// console.log(userName[0].toLowerCase().repeat(3));
// console.log("########################################");
// let word = "Elzero";
// let letterZ = "z";
// let letterE = "e";
// let letterO = "O";
// console.log(word.includes(letterZ));
// console.log(word.endsWith(letterO.toLowerCase()));
// console.log(word.startsWith(letterE.toUpperCase()));

// نهايه نكليف
// تحدي من 27-30
// let a = "Elzero Web School";
// console.log(a.charAt(2).toUpperCase() + a.slice(3, 6));
// console.log(a[13].toUpperCase().repeat(8));
// console.log(a.split(" ", 1));
// console.log(`${a.slice(0, 6)}${a.slice(10)}`);
// console.log(
//   a.charAt(0).toLowerCase() +
//     a.slice(1, length - 1).toUpperCase() +
//     a.slice(length - 1).toLowerCase()
// );
// تحدي من 27-30نهايه
// تكليف من 31ل32console.log(100 ? "100"); // true
// console.log(100 < 1000); // true
// console.log(110 > 100 > 10 < 20); // true
// console.log(-10 == "-10"); // true
// console.log(-50 !== -"-40"); // true
// console.log(10 !== -"-40"); // true
// console.log("10" == 10); // true
// console.log(20 > false); // true
// console.log("########################################");

// let num1 = 10;
// let num2 = 20;

// console.log(num1 < num2); // true
// console.log(num2 > num1); // true
// console.log(num1 != num2); // true
// console.log(num1 <= num2); // true
// console.log(num2 != num1); // true
// console.log(num1 !== num2); // true
// console.log("########################################");
// let a = 20;
// let b = 30;
// let c = 10;

// console.log((a < b && a > c) || a > b); // true
// console.log(a < b && a > c); // true
// console.log(a < b && !(a > b) && a > c && !(a < c)); // true
// تكليف من 31ل32نهايه
//
// تكليف من 33-37
// let num = 9;
// if (num < 10) {
//   console.log(`00${num}`);
// }
// let num = 20;
// if (num > 10 && num < 100) {
//   console.log(`0${num}`);
// }
// let num = 110;
// if (num >= 100) {
//   console.log(num);
// }
// let num1 = 9;
// let str = "9";
// let str2 = "20";
// if (num1 == str) {
//   console.log('"{num1}Is The Same Value As {str}"'); }
// if (typeof str === typeof str2 && str !== str2) {
//   console.log('"{str} Is The Same Type As {str2} But Not The Same Value"');
// }
// السطر الأول تأكد أن المتغير الثالث أكبر من الأول ولا يساوي الثاني في النوع
// let num1 = 10;
// let num2 = 30;
// let num3 = "30";
// if (num3 > num1 && typeof num3 !== typeof num2) {
//   console.log(
//     `"30 Is Larger Than 10 And Type string Not The Same Type As number"`
//   );
// }
// السطر الثاني تأكد أن المتغير الثالث أكبر من الأول ومساوي للثاني في القيمة ولا يساوي الثاني في النوع
// if (num3 > num1 && num3 == num2 && typeof num3 !== typeof num2) {
//   console.log(
//     `"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"`
//   );
// }
// السطر الثالث تأكد أن قيمة المتغير الثالث لا تساوي الأول من ناحية القيمة والنوع ولا تساوي الثاني من ناحية النوع
// if (num3 !== num1 && typeof num3 !== typeof num2) {
//   console.log(
//     `"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"`
//   );
// }

// نهايه التكليف
// تحدي من -33-37
// let a = 10;
// a < 10
//   ? console.log(10)
//   : a >= 10 && a <= 40
//   ? console.log("10 to 40")
//   : a > 40
//   ? console.log("30")
//   : console.log("unknown");
// console.log("########################################");
// let st = "Elzero Web School";
// if ((st.length * 2).toString() === "34") {
//   console.log("goooood");
// }

// if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
//   console.log("GOOD");
// }
// if (st.length !== "string") {
//   console.log("goOod");
// }
// if (typeof st === typeof "number") {
//   console.log("goooOod");
// }
// if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
//   console.log("gd");
// }
// نهايه التحدي
// تحدي من -39-38
// let day = "   friday  ";
// // You Need To Remove Spaces And Make First Letter Capital => Friday
// day = day.trim();
// day = day.charAt(0).toUpperCase() + day.slice(1);

// switch (day) {
//   case "Friday":
//   case "Saturday":
//   case "Sunday":
//     console.log("No Appointments Available");
//     break;

//   case "Monday":
//   case "Thursday":
//     console.log("From 10:00 AM To 5:00 PM");
//     break;

//   case "Tuesday":
//     console.log("From 10:00 AM To 6:00 PM");
//     break;

//   case "Tuesday":
//     console.log("From 10:00 AM To 6:00 PM");
//     break;

//   case "Wednesday":
//     console.log("From 10:00 AM To 7:00 PM");
//     break;

//   default:
//     console.log("Its Not A Valid Day");
// }

// نهايه التحدي
// function inputType(value) {
//   if (value == typeof "sasa") {
//     console.log("string");
//   } else if (value == typeof 5000) {
//     console.log("int");
//   } else if (value == typeof 21.5) {
//     console.log("double");
//   } else {
//     console.log("unknown");
//   }
// }
// تحدي الarray
// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;

// // Method 1
// console.log(myFriends.slice("", num)); // ["Ahmed", "Elham", "Osama"];

// // Method 2

// console.log(myFriends.splice("", num)); // ["Ahmed", "Elham", "Osama"];
// console.log("########################################");
// console.log("########################################");

// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// console.log(friends.splice(1, num - true)); // ["Eman", "Osama"]
// console.log("########################################");
// console.log("########################################");

// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];

// // Write One Single Line Of Code

// console.log(finalArr.concat(arrOne, arrTwo).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]
// console.log("########################################");
// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// console.log(words[2][0].slice(0 + true + true).toUpperCase()); // ZERO
// console.log("########################################");

// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];
// if (needle === haystack[1]) {
//   console.log("found");
// }
// console.log(haystack.indexOf(needle));
// console.log("found");
// console.log(haystack.includes(needle));
// console.log("found");
// console.log("########################################");

// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];

// // Your Code Here
// console.log(
//   allArrs
//     .concat(arr1, arr2)
//     .sort()
//     .slice(length - (true + true + true))
//     .join("")
//     .toLowerCase()
// );

// التحدي
// let zero = 0;
// let counter = 3;
// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
// console.log(my.slice("", counter + true).reverse());
// console.log("########################################");

// console.log(my.slice(zero + true, counter).sort());
// console.log("########################################");

// console.log(my[2].slice(0, 2) + my[1].slice(2));
// console.log("########################################");
// console.log(my[1].slice(4, -1) + my[1].slice(5).toUpperCase());
// // نهايه الarray

// تكليف if
// let start = 10;
// let end = 100;
// let exclude = 40;
// for (i = start; i <= end; i += start) {
//   if (i === exclude) {
//     continue;
//   }
//   console.log(i);
// }
// let start = 10;
// let end = 0;
// let stop = 3;
// for (let i = start; i >= stop; i--) {
//   if (i < start) {
//     console.log(`0${i}`);
//   } else {
//     console.log(`${i}`);
//   }
// }
// let start = 1;
// let end = 6;
// let breaker = 2;
// for (i = start; i <= end; i++) {
//   console.log(
//     `${i}
//   --${breaker}
//   --${breaker * 2}`
//   );
// }

// let index = 10;
// let jump = 2;
// let end2 = 0;
// for (i = index; i >= jump * jump; i -= jump) {
//   console.log(i);
// }
// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";
// // Output
// ("1 => Sayed");
// ("2 => Eman");
// ("3 => Mahmoud");
// ("4 => Osama");
// ("5 => Sameh");
// for (i = 0; i <= friends.length; i++) {
// if (friends[i].startsWith(letter.toUpperCase())) {
//     continue;
//   }

//   console.log(`" ${i}=> ${friends[i]}`);
// }
// let start6 = 0;
// let swappedName = "elZerO";
// let swappedNameFinished = "";

// for (i = start6; i < swappedName.length; i++) {
//   if (swappedName[i] === swappedName[i].toUpperCase()) {
//     swappedNameFinished += swappedName[i].toLowerCase();
//   } else {
//     swappedNameFinished += swappedName[i].toUpperCase();
//   }
// }
// console.log(swappedNameFinished);

// let start7 = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];
// for (let i = start7; i < mix.length; i++) {
//   if (typeof mix[i] === "string") {
//     continue;
//   } else if (mix[i] === 1) {
//     continue;
//   } else {
//     console.log(+`${mix[i]}`);
//   }
// }

// نهايه تكليف if

// scroll to top challenge(
// let btn = document.querySelector(".up");
// window.onscroll = function () {
//   if (this.scrollY >= 600) {
//     btn.classList.add("t3ala");
//   } else {
//     btn.classList.remove("t3ala");
//   }
// };
// btn.onclick = function () {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// };
// scroll to top challenge end of
// تكليف while
// let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
// let index = 0;
// let counter = 0;
// for (i = index; i < friends.length; i++) {
//   if (typeof friends[i] !== "string") {
//     continue;
//   } else if (friends[i].startsWith("A")) {
//     continue;
//   } else {
//     console.log(friends[i]);
//   }
// }
// the end of while

/* مشروع التليفونات  */
// let img = document.querySelector(".img");
// let baba = document.querySelector(".header");

// function rayan(rayano) {
//   img.src = rayano;
// }
// function header(khalfea, opacity) {
//   baba.style.background = khalfea;
// }
/* نهايه المشروع */
// تكليفات الفانكشن
// function sayHello(theName, theGender) {
//   // console.log(`hello mr ${theName} ${theGender}`);
//   // console.log(`hello miss ${theName}  ${theGender}`);
//   // console.log(`hello  ${theName}`);
//   if (theGender === "Male") {
//     console.log(`hello mr ${theName} `);
//   } else if (theGender === "Female") {
//     console.log(`hello miss ${theName}  `);
//   } else {
//     console.log(`hello ${theName}`);
//   }
// }

// // Needed Output
// sayHello("Osama", "Male"); // "Hello Mr Osama"
// sayHello("Eman", "Female"); // "Hello Miss Eman"
// sayHello("Sameh"); // "Hello Sameh"
// console.log("#####################################");
// function ageInTime(theAge) {
//   if (theAge > 100) {
//     console.log("out of range");
//   } else if (theAge < 10) {
//     console.log("out of range");
//   } else {
//     console.log(theAge * 12 + " months");
//     console.log(theAge * 12 * 7 + " week");
//     console.log(theAge * 12 * 7 * 24 + " days");
//     console.log(theAge * 12 * 7 * 24 * 60 * 60 + " secons");
//   }
// }

// // Needed Output
// ageInTime(110); // Age Out Of Range
// ageInTime(38); // Months Example => 456 Months
// console.log("#####################################");
// function checkStatus(a, b, c) {
//   if (typeof a === "string") {
//     console.log(`hello ${a}`);
//   } else if (typeof b === "number") {
//     console.log(`your age is ${b}`);
//   } else if (typeof c === true) {
//     console.log(`You Are Available For Hire`);
//   } else {
//     console.log(`Hello ${a}, Your Age Is ${b}, You Are Not Available For Hire`);
//   }
// }

// // Needed Output
// checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
// نهايه تكليفات الفانكشن

// مشروع بناء صفحه كامله ب جافا
// let names = ["mostafa", "sayed", "ali", "rawan"];
// let age = [19, 20, 21, 22];

// let container = document.createElement("div");
// let h = document.createElement("h1");
// let kalam = document.createTextNode("wlecome");
// h.appendChild(kalam);
// document.body.appendChild(h);
// h.style.textAlign = "center";
// h.style.margin = "20px auto";
// h.style.width = "fit-content";
// h.style.padding = "10px";
// h.style.background = "crimson";
// h.style.color = "#fff";
// h.style.borderRadius = "4PX";

// document.body.appendChild(container);
// container.style.textAlign = "center";
// function card(names, age) {
//   let card = document.createElement("div");
//   card.style.background = "#333";
//   card.style.color = "white";
//   card.style.padding = "20px";
//   card.style.margin = "2px";
//   card.style.width = "45%";
//   card.style.display = "inline-block";
//   let title = document.createElement("h1");
//   let txtTitle = document.createTextNode(names);
//   title.appendChild(txtTitle);
//   card.appendChild(title);
//   let p = document.createElement("p");
//   let txtP = document.createTextNode(age);
//   p.appendChild(txtP);
//   card.appendChild(p);
//   let img = document.createElement("img");
//   img.src = "1.png";
//   img.style.width = "200px";
//   card.appendChild(img);
//   container.appendChild(card);
// }
// for (i = 0; i < 4; i++) {
//   card(names[i], age[i]);
// }
// مشروع بناء صفحه كامله ب جافا End of
// حاجه كده ب local storage
// if (localStorage.length > 0) {
//   document.body.style.background = localStorage.getItem("color");
// }
// function background(color) {
//   document.body.style.background = color;
//   window.localStorage.setItem("color", color);
// }

// end of this

// tabs tutorial
// let content = ["content 1", "content 2", "content 3"];
// let lis = document.querySelectorAll(".tab");
// lis.forEach((item, index) => {
//   item.addEventListener("click", function () {
//     item.parentElement
//       .getElementsByClassName("active")[0]
//       .classList.remove("active");
//     item.classList.add("active");
//     theContent.innerHTML = content[index];
//     theContent.style.display = "flex";
//     theContent.style.alignItems = "center";
//     theContent.style.justifyContent = "center";
//   });
// });
// اهم مشروع ف حياتك cruds
// let title = document.getElementById("title");
// let count = document.getElementById("count");
// let create = document.getElementById("submit");
// let price = document.getElementById("price");
// let taxes = document.getElementById("taxes");
// let ads = document.getElementById("ads");
// let discount = document.getElementById("discount");
// let category = document.getElementById("category");
// let total = document.getElementById("total");
// let mood = "create";
// let tmp;

// //  1- اول داله لعمل الحساب علي زرار التوتال
// function getTotal() {
//   if (price.value != "") {
//     let result = +price.value + +taxes.value + +ads.value - +discount.value;
//     total.innerHTML = result;
//     total.style.background = "green";
//   } else {
//     total.innerHTML = "";
//     total.style.background = "red";
//   }
// }
// // the end of total

// // 2-الداله التانيه بتاعت انشاء العناصر
// let newArr;
// if (localStorage.product != null) {
//   newArr = JSON.parse(localStorage.product);
// } else {
//   newArr = [];
// }

// create.onclick = function () {
//   let newPro = {
//     title: title.value,
//     ads: ads.value,
//     taxes: taxes.value,
//     price: price.value,
//     discount: discount.value,
//     category: category.value,
//     count: count.value,
//     total: total.innerHTML,
//   };
//   // اضافه عدد كبير بضغطه واحده count
//   if (title.value != "" && price.value != "" && count.value <= 100) {
//     if (mood === "create") {
//       if (count.value > 1) {
//         for (let i = 0; i < count.value; i++) {
//           newArr.push(newPro);
//         }
//       } else {
//         newArr.push(newPro);
//       }
//     } else {
//       newArr[tmp] = newPro;
//       create.innerHTML = "create";
//       mood = "create";
//       count.style.display = "block";
//     }
//   }
//   //  نهايتها

//   localStorage.setItem("product", JSON.stringify(newArr));
//   clearData();
//   showData();
// };
// // نهايه الانشاء

// // function clear data
// function clearData() {
//   title.value = "";
//   ads.value = "";
//   discount.value = "";
//   taxes.value = "";
//   price.value = "";
//   category.value = "";
//   count.value = "";
//   total.innerHTML = "";
// }
// //end of function clear data

// // داله التشغيل
// function showData() {
//   let table = "";

//   for (let i = 0; i < newArr.length; i++) {
//     table += ` <tr>
//         <td>${[i + 1]}</td>
//        <td>${newArr[i].title}</td>
//        <td>${newArr[i].price}</td>
//        <td>${newArr[i].ads}</td>
//        <td>${newArr[i].count}</td>
//        <td>${newArr[i].discount}</td>
//        <td>${newArr[i].total}</td>
//        <td>${newArr[i].category}</td>
//        <td><button onclick="updateData(${i})" id="update">update</button></td>
//        <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
//     </tr>    `;
//   }
//   document.getElementById("tbody").innerHTML = table;
//   let btnDelete = document.getElementById("deleteAll");
//   if (newArr.length > 0) {
//     btnDelete.innerHTML = `<button onclick="deleteItems()" >delete ALL (${newArr.length})</button>`;
//   } else {
//     btnDelete.innerHTML = "";
//   }
// }
// //  نهايتها
// showData();

// // حذف منتج واحد
// function deleteData(i) {
//   newArr.splice(i, 1);
//   localStorage.product = JSON.stringify(newArr);
//   showData();
// }
// //  نهايتها
// // حذف منتجات كلها
// function deleteItems() {
//   localStorage.clear();
//   newArr.splice(0);
//   showData();
// }
// //  نهايتها
// function updateData(i) {
//   title.value = newArr[i].title;
//   ads.value = newArr[i].ads;
//   taxes.value = newArr[i].taxes;
//   price.value = newArr[i].price;
//   discount.value = newArr[i].discount;
//   count.value = newArr[i].count;
//   category.value = newArr[i].category;
//   getTotal();
//   count.style.display = "none";
//   create.innerHTML = "Update";
//   tmp = i;
//   mood = "update";
// }

// // search
// // let searchMood = "title";
// // function getSearchMood(id) {
// //   let search = document.getElementById("search");
// //   if (id == "title-search") {
// //     searchMood = "title";
// //     search.Placeholder = "search by title";
// //   } else {
// //     searchMood = "category";
// //     search.Placeholder = "search by category";
// //   }
// //   search.focus();
// // }
// // let table = "";
// // function searchData(value) {
// //   if (searchMood == "title") {
// //     for (let i = 0; i < newArr.length; i++) {
// //       if (newArr[i].title.includes(value)) {
// //         table += ` <tr>
// //         <td>${[i + 1]}</td>
// //        <td>${newArr[i].title}</td>
// //        <td>${newArr[i].price}</td>
// //        <td>${newArr[i].ads}</td>
// //        <td>${newArr[i].count}</td>
// //        <td>${newArr[i].discount}</td>
// //        <td>${newArr[i].total}</td>
// //        <td>${newArr[i].category}</td>
// //        <td><button onclick="updateData(${i})" id="update">update</button></td>
// //        <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
// //     </tr>    `;
// //       }
// //     }
// //   } else {
// //   }
// //   document.getElementById("tbody").innerHTML = table;
// // }
// // end search
// // the end of cruds

// <!-- scroll to top -->

// let up = document.getElementById("up");
// window.onscroll = function () {
//   if (scrollY >= 600) {
//     up.classList.add("open");
//   } else {
//     up.classList.remove("open");
//   }
// };
// up.onclick = function goUp() {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// };
// <!-- end of scroll to top -->

// اعاده مشروع الcrud

// 1-نخلي زرار التوتال يجمع حساب

let title = document.getElementById("title");
let count = document.getElementById("count");
let create = document.getElementById("submit");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let category = document.getElementById("category");
let total = document.getElementById("total");
let mode = "create";
let tmp;
function getTotal() {
  if (price.value != "") {
    let result = +price.value + +taxes.value + +ads.value - discount.value;
    total.innerHTML = result;
    total.style.background = "green";
  } else {
    total.innerHTML = "";
    total.style.background = "red";
  }
}

// لما ادوس علي كريات ينشا اوبجيكت في اراي
let dataPro;
if (localStorage.product != null) {
  dataPro = JSON.parse(localStorage.getItem("product"));
} else {
  dataPro = [];
}

submit.addEventListener("click", function () {
  let newObj = {
    title: title.value.toLowerCase(),
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    total: total.innerHTML,
    count: count.value,
    category: category.value,
  };

  if (title.value != "" && price.value != "") {
    if (mode === "create") {
      if (count.value > 1) {
        for (i = 0; i < count.value; i++) {
          dataPro.push(newObj);
        }
      } else {
        dataPro.push(newObj);
      }
    } else {
      dataPro[tmp] = newObj;
      mode = "create";
      submit.innerHTML = "create";
    }
    let kalam = document.getElementById("kalam");
    kalam.style.display = "none";
    let kalamp = document.getElementById("kalamp");
    kalamp.style.display = "none";
  } else {
    let kalam = document.getElementById("kalam");
    kalam.innerHTML = "at least enter 1 character here";
    kalam.style.color = "red";
    let kalamp = document.getElementById("kalamp");
    kalamp.innerHTML = "please enter price";
    kalamp.style.color = "red";
  }

  localStorage.setItem("product", JSON.stringify(dataPro));
  showData();
  clearData();
});

// لما ادوس علي كرييت دي بتفضي الداتا اللي مكتوبه
function clearData() {
  title.value = "";
  price.value = "";
  taxes.value = "";
  ads.value = "";
  discount.value = "";
  total.innerHTML = "";
  count.value = "";
  category.value = "";
  total.style.background = "red";
}

function showData() {
  let tbody = document.getElementById("tbody");
  let table = ``;
  for (let i = 0; i < dataPro.length; i++) {
    table += `
    <tr>
    <td>${[i + 1]}</td>
    <td>${dataPro[i].title}</td>
    <td>${dataPro[i].price}</td>
    <td>${dataPro[i].taxes}</td>
    <td>${dataPro[i].ads}</td>
    <td>${dataPro[i].discount}</td>
    <td>${dataPro[i].total}</td>
    <td>${dataPro[i].category}</td>
   <td><button onclick="updateData(${i})" id="update">update</button></td>
   <td><button onclick="deleteItem(${i})" id="delete">delete</button></td>

    </tr>
      `;
  }
  tbody.innerHTML = table;
  let btnDelete = document.getElementById("deleteAll");
  if (dataPro.length > 0) {
    btnDelete.innerHTML = `<button onclick="deleteAll()">deleteALL(${dataPro.length})</button>`;
  } else {
    btnDelete.innerHTML = "";
  }
}
showData();

// function delete one item
function deleteItem(i) {
  dataPro.splice(i, 1);
  localStorage.product = JSON.stringify(dataPro);
  showData();
}
function deleteAll() {
  localStorage.clear();
  dataPro.splice(0);
  showData();
}
function updateData(i) {
  title.value = dataPro[i].title;
  price.value = dataPro[i].price;
  taxes.value = dataPro[i].taxes;
  ads.value = dataPro[i].ads;
  discount.value = dataPro[i].discount;
  category.value = dataPro[i].category;
  getTotal();
  submit.innerHTML = "update";
  mode = "update";
  tmp = i;
}
// search operation by title

function searchData(value) {
  let table = "";
  for (let i = 0; i < dataPro.length; i++) {
    if (dataPro[i].title.includes(value.toLowerCase())) {
      table += `
      <tr>
      <td>${[i + 1]}</td>
      <td>${dataPro[i].title}</td>
      <td>${dataPro[i].price}</td>
      <td>${dataPro[i].taxes}</td>
      <td>${dataPro[i].ads}</td>
      <td>${dataPro[i].discount}</td>
      <td>${dataPro[i].total}</td>
      <td>${dataPro[i].category}</td>
     <td><button onclick="updateData(${i})" id="update">update</button></td>
     <td><button onclick="deleteItem(${i})" id="delete">delete</button></td>
  
      </tr>
        `;
    }
    tbody.innerHTML = table;
  }
}

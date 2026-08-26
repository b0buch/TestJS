
//alert("Hallo!");

//document.write("fwaf<br>fwedf<br>e<h1>Hallo</h1><ul><li>pop</li><li>gejsi</li></ul>");

//console.log("gugu gagu");
//console.log("Hallo!");

//console.info("info!!!!");

//console.error("fehler!");

//console.warn("warning!");

//var a = 1;
//a++
//console.log(a + 10);

//var num;
//num = 19;
//console.log(num);
//num = 10;
//console.log(num);
//num = num - 10;
//console.log(num);

//var a = 5;
//var bool;
//if (a == 6){
//    bool = false;
//} else 
//    bool = true;
//console.log(bool)

//const a = 19;
//console.log(a);
//a = 20;
//console.log(a);

//var text = "<h1>True</h1>";
//document.write(text);
//text = "<ul><li>1</li><li>2</li></ul>";
//document.write(text);

//console.log("min: " + Math.min(0,342,432,1,2,4,523,32,1,2,-1234,4,234,1));

//var string = "wd";
//switch(string) {
//   case "wor": 
//        console.log(false);
//        break;
//    case "word":
//        console.log(true);
//        break;
//    case "sw":
//        console.log("sw");
//    default:
//        console.log("fwaef");
//}

//var arr = [20,30,40,50,60,70,80,90,"S","St","Str","Stri","Strin","String"];
//arr[13] = "SSSTring";
//console.log(arr.length);
//console.log(arr[13]);
//console.log(arr[12]);
//arr[10] = "12";
//console.log(arr[10]);
//var matrix = [[20,30,40,50,60,70,80,90], ["S","St","Str","Stri","Strin","String"],["gugu","gagu"]];
//console.log(matrix[1][4])
//console.log(matrix[2].length)

//for(var i = 1; i < 10; i++){
//    document.write(i + "<br>");
//}

//var j = 1000
//while(j > 100){
//    console.log(j);
//    j -= 100;
//}
//var isHasCar = true;
//while(isHasCar){
//    console.log("Do not Start");
//}

//var i = 100;
//do {
//    console.log(i);
//    console.warn("Achtung! " + i + " ist false!");
//}while(i == 10);

//for(var i = 10; i <= 20; i += 2) {
//   if(i > 15){
//       break;
//    }else
//    console.log(i);
//}

//for(var i = 11; i <= 20; i++){
//    if(i % 2 == 0){
//        continue;
//    }
//
//    console.log(i);
//}

//var arr = [1,242,4241,24,23,4,23,4,234,2,44];
//for(var i = 0; i <arr.length; i++){
//   console.log("Element "+ (i + 1) + ": " + arr[i]);
//}

//var con = confirm("111");
//if(con) {
//    alert("fea");
//}else 
//    alert(false);

//var data = prompt("Name: ");
//if(data == "Yurii"){
//    console.log("Hallo");
//}else
//    console.log("Name Length: " + data.length);

//var person = null;
//if(confirm("Weiter?")) {
//    person = prompt("Name: ")
//    alert("Hallo! " + person);
//}else {
//    alert("Antwort nein");
//}

//function info(word) {
//    console.log(word + "!");
//}
// function summ(a, b){
//    var res = a + b;
//    info(res);
// }
//summ(5,7);

//function summa(arr){
//    var sum = 0;
//    for(var i = 0; i < arr.length; i++){
//        sum += arr[i];
//    }
//
//    console.log(sum);
//}
//var array = [534,543,3,4];
//var array2 = [1,2,3,4,5];
//summa(array);
//summa(array2);

//var counter = 0;
//
//function onClickButton(el) {
//   counter++;
//
//  el.innerHTML = "Knopf: " + counter;
//  el.style.background = "red";
//
//    el.style.cssText = "border-radius: 5px; border: 0; font-size: 20px;"
//
//   console.log(counter);
//   if(counter == 20){
//      alert("+20");   
//     }
//}
//
//function onInput(el){
//    if(el.value == "Hallo!"){
//        alert("Hallo!");
//    }
//    console.log(el.value);
//}

var text = document.getElementById("text");
text.titel = "New text";
console.log(text.titel);

text.style.color = "blue";
text.style.backgroundColor = "black";

text.innerHTML = "new<br>text";
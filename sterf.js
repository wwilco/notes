var counter = 10
var countDown = function() {
  if (counter > 0) {
    console.log(counter);
    counter--;
  } else {
    console.log("HAPPY NEW YEAR")
    clearInterval(refreshIntervalId);
  }
}
var refreshIntervalId = setInterval(countDown, 100);

var counter=3;
var newyear = function(){
  if (counter > 0){
    console.log(counter);
    counter--;
  } else {
    console.log("hap new year!");
    clearInterval(setter);
  }
}
var setter = setInterval(newyear, 500);

var num = 32243;
var reverseit = function(x){
  x = x + "";
  var val = x.split("").reverse().join("");
  var fin = parseInt(val) + 1;
  return fin;
};
console.log(reverseit(num));

var subit = function(str){
  var subset = [];
  for (var i=0; i<str.length; i++){
    for (var j=i+1; j<str.length+1; j++){
      subset.push(str.slice(i,j));
    }
  }
  return subset;
};
console.log(subit("dog"));

// using prototypes
String.prototype.sub_String = function() {
  var subset = [];
  for (var m = 0; m < this.length; m++) {
    for (var n = m+1; n<this.length+1; n++) {
      subset.push(this.slice(m,n));
    }
  }
  return subset;
};

console.log("dog".sub_String());

// bubble sort algorithem
Array.prototype.bubbleSort_algo = function() {
var is_sorted = false;
 while (!is_sorted) {
    is_sorted = true;
    for (var n = 0; n < this.length - 1; n++) {
      if (this[n] > this[n+1]){
        var x = this[n+1];
        this[n+1] = this[n];
        this[n] = x;
        is_sorted = false;
      }
    }
  }
  return this;
};
console.log([6,4,0, 3,-2,1].bubbleSort_algo());

var array = [2, 5, 9, 2];


var arr = [6,4,0, 3,-2,1];
var ahh = ['woah', 'hey', 'here'];
var last = ahh.lastIndexOf('here');
console.log(last);
var joined = ahh.join();
console.log(joined);
var sliced = joined.slice(",");
console.log(sliced);

console.log(arr.sort().reverse());

// V = πr2h
var cylinder = function(radius, height){
  // this.radius = Math.pow(radius,2);
  this.radius = radius * radius;
  this.height = height;
  this.volume = function(){
    return (this.radius * height * Math.PI);
  }
}
var cyl = new cylinder(2, 5);
console.log(cyl.volume().toFixed(4)); // limits decimal to four numbers

var library = [ {
       title: 'Bill Gates',
       author: 'The Road Ahead',
       readingStatus: true
   }, {
       title: 'Steve Jobs',
       author: 'Walter Isaacson',
       readingStatus: true
   }, {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       readingStatus: false
   }];
for (var i=0; i<library.length; i++){
  var book = library[i].title + " by: " + library[i].author;
  // console.log(book);
  if (library[i].readingStatus === true){
    console.log("You have read " + book);
  } else {
    console.log("You still need to read " + book)
  }
}

var student = {
  name : "David Rayy",
  class : "VI",
  rollno : 12,
  something: "woah"
};
oInfo = function(obj){
  for (key in obj){
    console.log(key + " = " + obj[key]);
  }
}
oInfo(student);
oSize = function(obj){
  var counter = 0;
  for (key in obj){
    counter++;
  } console.log(counter);
};
oSize(student)
delete student.rollno;
console.log(student);

//for... in
var allKeys = function(obj){
   var keys = [];
   for (key in obj) {
      keys.push(key);
   }
   console.log(keys);
};
allKeys(student);

var number = process.argv[2];
var computer = Math.floor(Math.random() * 6);
console.log(computer);

var farm = ['cow', 'chicken', 'pig', 'horse']
var things = ['scissor', 'stapler', 'pencil', 'pen']
var sample = function(arr){
  var rando = arr[Math.floor(Math.random()*arr.length)];
  console.log(rando);
}
sample(farm);
sample(things);

var mergeHashes = function(hash1, hash2){
  var merged = {};
  var hash1keys = Object.keys(hash1);
  var hash2keys = Object.keys(hash2);
  for (var i = 0; i < hash1keys.length; i++){
    var keys1 = hash1keys[i];
    merged[keys1] = hash1[keys1];
    console.log(keys1); //keys
    console.log(hash1[keys1]); //values
  }
  for (var i = 0; i < hash2keys.length; i++){
    var keys2 = hash2keys[i];
    merged[keys2] = hash2[keys2];
  }
  console.log(merged);
}
var blue = {
  "Heisenberg": "Hello, anyone home?",
  "Cap'n Cook": "Science, friend!",
  "James McGill": "Ring, ring!"
}
var ciudad = {
  "Vuente": "Salud!",
  "Gus": "One taste and you'll know.",
  "Tio": "Family is all."
}
var happyFamily = mergeHashes(blue, ciudad);

var removeEvens = function(arr){
  var odds = [];
  for (var i=0; i<arr.length; i++){
    var number = arr[i];
    if (number % 2 === 1){
      odds.push(number);
    }
  }
  console.log(odds);
}
var a = [3,4,5,6,20,11];
var b = removeEvens(a);

var fun = ["pretzels", "cheez-its", "m&ms", "choco"];
var work = ["raisins", "dried apricots", "nuts", "apple", "seeds"];
var mergeArray = function(a1,a2){
  var a3 = [];
  var short;
  var long;
  if (a1.length > a2.length){
    long = a1;
    short = a2;
  } else {
    long = a2;
    short = a1;
  }
  for (var i = 0; i<short.length; i++){
    a3.push(short[i]);
    a3.push(long[i]);
  }
  for (var j = short.length; j<long.length; j++){
    a3.push(long[j]);
  }
  // for (var i=0; i<a1.length; i++){
  //   a3.push(a1[i]);
  //   a3.push(a2[i]);
  // }
  console.log(a3);
};
var trailMix = mergeArray(fun, work);

var initials = function(str){
  var words = str.split(" ");
  console.log(words);
  var inits = []
  for (var i = 0; i<words.length; i++){
    var letter = words[i].charAt(0);
    console.log(letter);
  }
}
initials('Will Guerre Wilcox');

var filterWords = function(x, arr){
  for (var i=0; i<arr.length; i++){
    var word = arr[i];
    if ( x < word.length){
      console.log(word);
    }
  }
}
filterWords(3, ["hello", "hi", "hey", "hola", "aloha"])

var Car = function(brand, model, color){
  this.brand = brand;
  this.model = model;
  this.color = color;
  this.gear = "parked";
  this.stopped = true;
  this.drive = function(){
    this.gear = "drive";
    this.stopped = false;
    console.log(this.brand + " " + this.model + " is in drive.")
  }
  this.accelerate = function(){
    if (this.gear === "parked"){
      console.log(this.brand + " " + this.model +  " is parked. must shift gears to drive");
    } else {
      console.log(this.brand + " " + this.model + " is accelerating.")
    }
  }
  this.stop = function(){
    if (this.gear === "drive"){
      this.stopped = true;
      console.log(this.brand + " " + this.model + " has stopped.")
    } else {
      console.log(this.brand + " " + this.model + " is already stopped.")
    }
  }
  this.park = function(){
    if (this.stopped === false){
      console.log("plase stop " + this.brand + " " + this.model + " before parking.")
    } else {
      this.gear = "parked";
      console.log(this.brand + " " + this.model + " is parked.")
    }
  }
}
var rav4 = new Car("toyota", "rav4", "green");
rav4.drive();
rav4.accelerate();
rav4.park();
rav4.stop();
rav4.park();
var civic = new Car("honda", "civic", "blue");
civic.accelerate();
civic.stop();
civic.park();

var BaseballPlayer = function(player, team) {
  this.player = player;
  this.team = team;
};
var x = new BaseballPlayer("Lucas Duda", "NY Mets");
console.log(x);

var mergeHashes = function(hash1,hash2){
  var merged = {};
  var keys1 = Object.keys(hash1);
  var keys2 = Object.keys(hash2);
  for (var i=0; i<keys1.length; i++){
    var key1 = keys1[i];
    merged[key1] = hash1[key1];
  }
  for (var i=0; i<keys2.length; i++){
    var key2 = keys2[i];
    merged[key2] = hash2[key2];
  }
  console.log(merged);
}
var blue = {
  "Heisenberg": "Hello, anyone home?",
  "Cap'n Cook": "Science, friend!",
  "James McGill": "Ring, ring!"
}
var ciudad = {
  "Vuente": "Salud!",
  "Gus": "One taste and you'll know.",
  "Tio": "Family is all."
}
var happyFamily = mergeHashes(blue, ciudad);

var mergeArray = function(arr1,arr2){
  var arr3 = [];
  var long;
  var short;
  if (arr1.length > arr2.length){
    long = arr1;
    short = arr2;
  } else {
    long = arr2;
    short = arr1;
  }
  for (var i=0; i < short.length; i++){
    arr3.push(short[i]);
    arr3.push(long[i]);
  }
  for (var j=short.length; j < long.length; j++){
    arr3.push(long[j]);
  }
  // // alternating if arrays are same length
  // for (var i = 0; i <arr1.length; i++){
  //   arr3.push(arr1[i]);
  //   arr3.push(arr2[i]);
  // }
  console.log(arr3);
}
var fun = ["pretzels", "cheez-its", "m&ms"];
var work = ["raisins", "dried apricots", "nuts", "apple"];
var trailMix = mergeArray(fun, work);

var stooges = ["Larry", "Curly", "Moe"];
var mergeString = function(arr){
  for(var i = 0; i < arr.length; i++){
    var name = arr[i];
    console.log("Hey there " + name + ".")
  }
}
var stoogeString = mergeString(stooges);

var double = function(num){
  console.log(num * 2);
}
var doubleArr = function(nums){
  nums.forEach(double)
}
doubleArr([1,5,10]);


var removeEvens = function(arr){
  var odds = [];
  for(var i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 1){
      odds.push(arr[i]);
    }
  }
  return odds;
}
console.log(removeEvens([1,2,3,4,5,6]));


var doublePrintArrays = function(nums){
  var newarray = [];
  nums.forEach(function(num){
    newarray.push(num * 2)
  });
  console.log(newarray);
}
doublePrintArrays([2,3,4]);

// function double print
var doublePrint = function(num){
  console.log(num * 2);
}
var doublePrintArrays = function(nums){
  nums.forEach(doublePrint)
}
doublePrintArrays([1,2,3]);

// set time out
var callfive = function(txt){
  setTimeout(txt, 1000);
};
callfive(function(){
  console.log("yo son!")
});

var message = function(){
  console.log("wowmom");
}
var setter = setInterval(message,100);
setTimeout(function(){
  clearInterval(setter);
}, 1500);

var msg = function(){
  console.log("sup?")
}
var sender = setInterval(msg,1800);
setTimeout(function(){
  clearInterval(sender);
},2000);

var callfive = function(x){
  setTimeout(x, 2000);
}
callfive(function(){
  console.log("this is happenidng")
})

var callfive = function(){
  console.log("call me in ive");
}
setInterval(function(){
  callfive();
}, 1000)

setTimeout(function(){
  callfive();
}, 1000)
var stopper = function(){
  clearInterval(callfive);
}, 3000);

var zoo = ['elephant', 'alligator', 'panda', 'lion', 'monkey', 'koala', 'tiger', 't-rex', 'puffins', 'dodo', 'Crawford','penguins'];
var newzoo = [];
newzoo.push(zoo);
// zoo.push('kangaroo');
var add = function(x){
  newzoo.push(x);
}
var remove = function(x){
  var data = zoo.indexOf(x);
  zoo.splice(data, 1);
}
var sort =  function(){
  zoo.sort()
}
var reverse = function(){
  zoo.reverse();
}
var swap = function(x,y){
  var z = x;
  y = x;
  z = y;
}

add('kangaroo');
remove('dodo');
swap(zoo.indexOf("tiger"), zoo.indexOf("Crawford"));
// sort();
// reverse();
console.log(newzoo);
console.log(zoo);


var double =  function(a, b, c){
  if (a > b && a > c){
    console.log(a);
  }
  else if (b > a && b > c){
    console.log(b);
  } else {
    console.log(c);
  }
}
double(3, 4, 5);
double(5, 7, 6);
double(10, 2, 3);
// double(3, 3, 3)

var double = function(num){
  var dbl = num * 2;
  console.log(dbl);
}
var doubleArray = function(array){
  array.forEach(double);
  // for (var i=0; i <array.length; i++){
  //   double(array[i])   // does same thing bus using for loop
  // }
};
doubleArray([1,2,3]);

// number match
var num = parseInt(process.argv[2]);
var rando = Math.floor(Math.random()*11);
console.log(rando);
if (num === rando){
  console.log("nice!");
} else {
  console.log("try again!")
}

// fizz buzz
var counter = 1;
while (counter < 20){
  if ((counter % 3 === 0) && (counter % 5 === 0)){
    console.log("fizzbuzz");
  } else if (counter % 5 === 0) {
    console.log("buzz");
  } else if (counter % 3 === 0){
    console.log("fizz");
  } else {
    console.log(counter);
  }
  counter++;
};

// flip the word
var word = process.argv[2];
var flip = function(str){
  var word2 = str.split("").reverse().join("");
  console.log(word2);
}
flip(word);

// flip the word
var counter = 0;
var newstring = "";
while (counter < word.length){
  newstring += word[word.length - (counter + 1)];
  counter++;
}
console.log(newstring);

var calc = function(){
  var num = 3;
  var sq = num * num;
  for (var i=sq; i<num; i++){
    console.log(sq * sq);
  }
}
var x = setInterval(calc,500);
setTimeout(function(){
  clearInterval(x);
},2000);

var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
var printer = function(obj){
  for(key in obj){
    console.log(key + " = " + obj[key]);
  }
}

printer(person);
var Animal = function(type, name, age){
  this.type = type;
  this.name = name;
  this.age = age;
}
var harry = new Animal("camel", "Harry", "3");
var lucy = new Animal("penguin", "Lucy", "45");
Animal.prototype.friendly = true;
var printer = function(obj){
  for(key in obj){
    console.log(key + " = " + obj[key]);
  }
}
printer(harry);
lucy.friendly = false;
console.log(lucy.type);
console.log(harry.type);
printer(lucy);

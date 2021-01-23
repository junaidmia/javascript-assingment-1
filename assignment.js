// first solution

function kilometerToMeter(kilo){
    var meter = kilo * 1000;
    return meter;
    }
    var valueOfmeter = kilometerToMeter(5);
    console.log(valueOfmeter);
    




// second solution

function budgetCalculator(watch, phone, laptop){
    var amountOfwatch = watch * 10;
    var amountOfphone = phone * 20;
    var amountOflaptop = laptop * 30;

    var totalPrice = amountOfwatch + amountOfphone + amountOflaptop ;

    return totalPrice;

}

var mainPrice = budgetCalculator(50, 100, 500);

console.log(mainPrice);






// third solution

function hotelCost(passingDays){
var price = 0 ;
if(passingDays <= 10){
    price = passingDays * 100;
}
else if(passingDays <= 20){
   var first10DaysCost = 10 * 50;
   var remaining = passingDays - 10 ; 
   var second10DaysCost = remaining * 80;
   
   price = first10DaysCost + second10DaysCost;
}
else{
    var first10DaysCost = 10 * 100;
    var second10DaysCost = 10 * 80;
    var remaining = passingDays - 20 ;
    var after20DaysCost = remaining * 50;
    price = first10DaysCost +  second10DaysCost + after20DaysCost;
} 
return price;
}
var fullPrice = hotelCost(30);
console.log ( fullPrice );





// fourth solution


function megaFriend(friendsName) {
    var largest = friendsName[0];
    for (var i = 1; i < friendsName.length; i++) {
        if (friendsName[i].length > largest.length) {
            largest = friendsName[i];
        }
    }
    return largest;
}

var friendsName = ["rifat", "sohan", "junaid", "abir", "ratul"];

console.log(megaFriend(friendsName));

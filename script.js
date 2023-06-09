alert("It works");

// #задача 1
// На терминала клиента трябва да въведе серийния номер на своята карта. Това е цяло число което има скрито значение. 
// Серийния номер съдържа по 6 цифри, по принцип, но на някой клиенти са дадени различни номера. 
// Ако номера съдържа повече от 2 цифри клиента е от тип EARLY_ADOPTER 
// ако клиентския номер съдържа повече от 6 цифри то клиента е LAGGER ако съдържа 6 цифри значи е NORMAL.


const EARLY_ADOPTER_COEFICIENT = 99;
const NORMAL_USER_COEFICIENT = 100000;
const LAGGER_USER_COEFICIENT = 999999;
const SECOND_MEAL_APPLICATION_DIGIT = 3;


const customerNumber = prompt("Въведи си номера на картата:");
// 100 000 най-малкото шестцифрено число
// 999 999 най-голямото шестцифрено число
// всичко под 100 000 е 5-цифрено число, а всичко над 999 999 е 7-цифрено число.

//числото трябва да е по-голямо или равно на 100 000
const isCustomerNumberGreaterThanSixDigit = customerNumber >= NORMAL_USER_COEFICIENT; 

//числото трябва да е по-малко или равно на 999 999
const isCustomerNumberLowerThanSixDigit = customerNumber <= LAGGER_USER_COEFICIENT;


// логическо И се отбелязва със символа "&&"
// то връща ДА (или ИСТИНА), когато всички отговори са ДА (или ИСТИНА)
// Когато отговарям с ДА, е еквивалентно на числото 1
// Когато отговарям с НЕ, е еквивалентно на числото 0
// Опрерацията логическо И може да се сведе до УМНОЖЕНИЕ (когато умножаваме нещо с 0, то всичко става 0).

const isCustomerNumberSixDigit = isCustomerNumberGreaterThanSixDigit && isCustomerNumberLowerThanSixDigit;

// оптимизирана версия на кода:
const isCustomerNormal = (customerNumber >= NORMAL_USER_COEFICIENT) && (customerNumber <= LAGGER_USER_COEFICIENT);

const isCustomerEarlyAdopter = (customerNumber > EARLY_ADOPTER_COEFICIENT) && (customerNumber <= NORMAL_USER_COEFICIENT);

const isCustomerLagger = (customerNumber > LAGGER_USER_COEFICIENT);

//Извеждане на стойности:
// Работа с условни конструкции:
// винаги между отваряща и затваряща малка скоба слагаме израз, който връща TRUE или FALSE.
// САМО ако стойността в ВЯРНА, if() се изпълнява.
if(isCustomerNormal) {
    console.log("Потребителят е НОРМАЛЕН");
}
if(isCustomerEarlyAdopter) {
    console.log("Потребителят е НАХЪСАН да купува");
}
if(isCustomerLagger) {
    console.log("Потребителят е закъснял много");
}


// #задача 2
// Всички клиенти чиито номера завършват на четно число са VIP клиенти а останалите са обикновени такива. 
// Пример : 105468 четно число клиента е VIP Пример : 115485 нечетно число клиента няма специални правомощия

// Аритметични оператори:
// +
// -
// *
// /
// ==	равенство
// % 

const isCustomerVIP = (customerNumber%2) == 0;




// #задача 3
// Ако пред последната цифра на номера на клиента е число по голямо от 3, клиента има право да поръча допълнително второ ястие, 
// в противен случай няма да има такава възможност.

/// 123456 - номер на карта
const getNextToLastDigit = parseInt((123456 % 100) /10); // това ще ми върне 56, което ще бъде разделено на 10 и ще получим 5,6. 
// След това добавяме функцията parseInt, която взима първата цифра от 5,6. 

const isCustomerApplicableForSecondMeal = getNextToLastDigit > SECOND_MEAL_APPLICATION_DIGIT;




// #задача 4
// Ако клиента е VIP и има право да направи повторна поръчка то това означава че клиента е със специален SUPER VIP статус 
// и това му дава възможност да получи отстъпка от цената на всички артикули които е поръчал.
const isCustomerSuperVIP = isCustomerVIP && isCustomerApplicableForSecondMeal;




// #задача 5
// Да се изведе меню със всички поръчки които клиента може да направи, за да се направи избор за храната е необходимо да се избере, 
// номера на поръчката. В експерименталната програма, в която участват тези продукти е необходимо да няма възможност тяхната стойност да се променя.

console.log("1. Пица - 2 лв");
console.log("2. Паста - 3 лв");
console.log("3. Пържола - 4 лв");


// Конструкция само с IF:
// if(orderId == 1) {
//     console.log("Ти поръча пица");
// }
// if(orderId == 2) {
//     console.log("Ти поръча паста");
// }
// if(orderId == 3) {
//     console.log("Ти поръча пържола");
// }
// if(orderId < 1 && orderId > 3) {
//     console.log("Невалидна поръчка - самоубивам се");
// }

var PriceToPay = 0;

// Конструкция с IF и ELSE:
if(orderId == 1) {
    console.log("Ти поръча пица");
    PriceToPay = 2;
}
else if(orderId == 2) {
    console.log("Ти поръча паста");
    PriceToPay = 3;
}
else if(orderId == 3) {
    console.log("Ти поръча пържола");
    PriceToPay = 4;
}
else {
    console.log("Невалидна поръчка - самоубивам се");
}




// #задача 8
// Разработчиците експериментирали с нова функционалност, която да дава нечество предимство на тайни потребители, които текстват системата. След като научат цената на поръчката, потребителите с код ЧЕТНО ЧИСЛО , могат да въведат своята възраст.

// Ако потребителя е непълнолетен - той заплаща 0 лв
// АКо потребителя е точно на 18 години стойността на поръчката му се увеличава с 10 лв
// Ако потребителя е в категория до 35 години стойността на поръчката му се увеличава с 5 лв
// Ако потребителя е на 65 години получава добавка за старост от 60 лв - стойността на поръчката му е цената до момента - добавката
// При всички останали случай потребителя си плаща като пич.

if(customerVIP) {
    const customerAge = prompt("На колко години си?");
    if(customerAge < 18) {
        PriceToPay = 0;
    }
}
else if(customerAge == 18) {
    PriceToPay = PriceToPay + 10;
}
else if(customerAge == 21 || customerAge == 22) {
    PriceToPay = 0;
}
else if(customerAge <= 35) {
    PriceToPay = PriceToPay + 15;
}
else if(customerAge == 65) {
    PriceToPay = PriceToPay - 60;
}











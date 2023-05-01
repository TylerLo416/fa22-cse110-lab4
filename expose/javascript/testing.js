/*function sumValues(num1,num2,add) {
    if(add) {
        var result =num1+num2;
        console.log('values added: ',result);

    } else return;
    console.log('final result: ', result);

}
sumValues(10,10,true);*/
/*function discountPrices(prices, discount) {
    const discounted = [];
    const length = prices.length;

    for(let i = 0; i < length; i++) {
        const discountedPrice = prices[i] * (1-discount);
        discounted.push(discountedPrice);
    }
    //console.log(i);
    //console.log(discountedPrice);
    //console.log(finalPrice);
    //console.log(discounted);
    console.log("ji" + discounted);
    return discounted;
}
discountPrices([100,200,300],.5);*/
/*let student = {
    name: 'Sarah',
    major: 'Computer Science',
    'Grad Year': 2022,
    greeting: function() { console.log('Hello!'); },
    'Favorite Teacher': {
        name: 'Thomas Powell',
        course: 'CSE 110'
    },
    courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
};
//console.log(student.courseLoad[0]);
console.log('3'+2);
console.log('3'-2);
console.log(3+null);
console.log('3'+null);
console.log(true+3);
console.log(false+null);
console.log('3'+undefined);
console.log('3'-undefined);
console.log(Boolean(2));*/
/*let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}
for(const numCars in statistics) {
    if(`${statistics}`.substring(0,1) == 'r' || 
        (`${statistics[numCars]}`) % 2 == 1) {
            console.log(`${statistics[numCars]}`);
        }
}*/
/*function modifyArray(array, callback) {
    const newArr = [];
    for(let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i]));
    }
    return newArr;
}
function doSomething(num) {
    return num*2;
}
console.log(modifyArray([1,2,3],doSomething));*/
/*function createTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
let time = setInterval(createTime, 1000);*/
function printNums() {
    console.log(1);
    setTimeout(function() { console.log(2);}, 1000);
    setTimeout(function() { console.log(2); }, 0);
    console.log(4);
}
printNums();
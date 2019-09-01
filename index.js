function repeat(fn,n){
    for(let i = 0; i < n; i++){
        fn();
    }
}

function hello(){
    console.log('hello World');

}

function goodbye(){
    console.log('Goodbye world');
}

repeat(hello,5);
repeat(goodbye,5);


function filter(arr,fn) {
    let newArray = [];
for(i=0;i < arr.length; i++){
    if(fn.arr[i] === true){
        newArray.push(arr[i]);
    }
}
return newArray;
}

filter(myNames);

const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
    return name[0] === 'R';
});

console.log(filteredNames) 

function hazardWarningCreator(typeOfWarning){
    let warningCounter = 0;
    return (location =>{
        warningCounter++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`)
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times(s) today!`)
    })
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const tornadoWarning = hazardWarningCreator('Tornado in the sky');
const hailWarning = hazardWarningCreator('Hail falling from the sky');


hailWarning('Miami')
hailWarning('london')
hailWarning('Atlanta')


let turtleSteps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
turtleSteps = turtleSteps.filter(steps => steps[0] >= 0 && steps[1] >= 0);

let totalTurtleSteps = turtleSteps.map(steps => steps[0] + steps[1]);

totalTurtleSteps.forEach(distance => {
  console.log(distance);
});

const strangeWords = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
    const arrayMaker = strangeWords.split(" ");
    const reduced = arrayMaker.reduce((normalWords,word) =>{
    if(word.length ===3){
     return normalWords + ' ';
    }
    else {
    return normalWords + word[word.length-1].toUpperCase();
    }
        
    },'');
    console.log(reduced)
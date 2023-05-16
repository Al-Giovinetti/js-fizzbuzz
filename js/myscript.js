// Creo elemento all' interno del div con classe container
// 1 - Seleziono il container
const div = document.querySelector("div.container");

// 2 -Creo elemnti nel container

const ulFizzBuzz = document.createElement("ul")

const liFizzBuzz = document.createElement("li")

console.log(typeof(liFizzBuzz))

// Fai una lista che arrivi fino a 100 e ad ogni numero controlla per cosa è divisibile

for( let index=1 ; index <= 100; index++){
    
    if((index % 3 === 0) && (index % 5 === 0)){
        console.log("FizzBuzz");
        div.append(ulFizzBuzz.append(liFizzBuzz));
        liFizzBuzz.append("FizzBuzz")
    }else if(index % 3 === 0){
        console.log("Fizz");
        div.append(ulFizzBuzz.append(liFizzBuzz));
        liFizzBuzz.append("Fizz")
    }else if(index % 5 === 0){
        console.log("Buzz");
        div.append(ulFizzBuzz.append(liFizzBuzz));
        liFizzBuzz.append("Buzz")
    }else{
        console.log(index);
        div.append(ulFizzBuzz.append(liFizzBuzz));
        liFizzBuzz.append(index)
    }

     
}

console.log(typeof(liFizzBuzz))









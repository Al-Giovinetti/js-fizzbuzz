// Creo elemento all' interno del div con classe container
// 1 - Seleziono il container
const div = document.querySelector("div.container");

// 2 -Creo elemnti nel container

const ulFizzBuzz = document.createElement("ul")

div.append(ulFizzBuzz);

ulFizzBuzz.classList.add("card","border-danger","m-3","d-flex","flex-row","flex-wrap")


// Fai una lista che arrivi fino a 100 e ad ogni numero controlla per cosa è divisibile

for( let index=1 ; index <= 100; index++){

    let liFizzBuzz = document.createElement("li")
    ulFizzBuzz.append(liFizzBuzz)


    if((index % 3 === 0) && (index % 5 === 0)){
        console.log("FizzBuzz");
        liFizzBuzz.append("FizzBuzz")
        liFizzBuzz.classList.add("text-success","fw-bold")
    }else if(index % 3 === 0){
        console.log("Fizz");
        liFizzBuzz.append("Fizz")
        liFizzBuzz.classList.add("text-warning")
    }else if(index % 5 === 0){
        console.log("Buzz");
        liFizzBuzz.append("Buzz")
        liFizzBuzz.classList.add("text-primary")


    }else{
        console.log(index);
        liFizzBuzz.append(index)

    }

liFizzBuzz.classList.add("list-group-item","p-3","m-2")
     
}













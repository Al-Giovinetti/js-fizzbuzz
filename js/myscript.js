// Fai una lista che arrivi fino a 100 e ad ogni numero controlla per cosa è divisibile

for( let index=1 ; index <= 100; index++){
    if((index % 3 === 0) && (index % 5 === 0)){
        console.log("FizzBuzz");
    }else if(index % 3 === 0){
        console.log("Fizz");
    }else if(index % 5 === 0){
        console.log("Buzz");
    }else{
        console.log(index);
    }
     
}



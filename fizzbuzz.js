function fizzBuzz(list1, list2){
    let totalLength = list1.length + list2.length;
        if(totalLength % 15 ===0) console.log('FizzBuzz');
        else if (totalLength % 3 === 0) console.log('Fizz');
        else if (totalLength % 5 ===0) console.log('Buzz');
        else console.log (totalLength);
    

}
fizzBuzz([20,80], [40,67]);
function returnEvenValues(array){
    let evenNumns = [];
    for(let i = 0; i <array.length; i++){
        if(array [i] % 2 === 0){
            evenNumns.push(array[i]);
        }
    }
    console.log(evenNumns);
}

let array = [1, 2, 4, 5, 7, 8];

returnEvenValues(array);

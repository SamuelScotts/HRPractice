//Problem: The Lonely Integer.
// Write a function that prints 
// the only number that appears
// uniquely in the array below.

a = [1,2,3,4,4,6,3,2,1]

function lonelyInteger(a){
    let count = 0

    for(let i = 0; i<a.length; i++){
        for(let j = 0; j < a.length; j++){
            if(a[i] == a[j]){
                count++
            }
        }
        if(count>1){
            count = 0;
        } else {
            return a[i];
        }
    }
}

lonelyInteger(a);
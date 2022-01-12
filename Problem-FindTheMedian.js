// Problem: Find the median.

function findMedian(){
    arr = [4, 3, 5, 1, 2, 6, 7]
    let newArr = arr.sort(function(a, b) {
        return a - b;
      });

    let total = arr.length / 2;
    let rounded = Math.floor(total);

    if(arr.length % 2 == 0){
        let a = arr[rounded];
        let b = arr[rounded]+1;
        let even = (a+b)/2;
        console.log(even);
    } else {
        console.log(arr[rounded]);
    }
}

findMedian();   
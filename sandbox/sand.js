// function number(array){
//     //your awesome code here
//     if(array.length === 0){
//       return []
//       }
//     var result = []
//     for(var a = 0; a < array.length; a++){
//         var arr = [a+1] + ': ' + array[a]
//         result.push(arr)
//       }
//     return result
//   }
  
  
//   console.log(number(["a", "b", "c"]))


// console.log(array1k)

// function number(n){
//     var banyak = n
//     for(var a = 1; a < 3; a++){
//         banyak *= n
//     }
//     var array1k = []
//     for(var a = 1; a <= banyak; a++){
//         if(a % 2 != 0){
//          array1k.push(a)
//         }
//     }
//     var skip = 0
//     for(var a = n-1; a > 0; a--){
//         skip += a
//     }
//     var hasil = []
//     for(var a = skip; a < array1k.length; a++){
//         if(a <= skip+n-1){
//             hasil.push(array1k[a])
            
//         }
//     }
//     var hasilSeriusan = 0
//     for(var a = 0; a < hasil.length; a++){
//         hasilSeriusan += hasil[a]
//     }
//     return hasilSeriusan
// }

// console.log(number(1))
// console.log(number(2))
// console.log(number(3))
// console.log(number(10))

function bilPrima(n){
    var jum = n*n
    var jumlahBilPrima = []
    var temp = 0
    for(var a = 2; a < jum; a++){
        temp += a
        for(var b = 2; b < jum; b++){
            if(temp % temp === 0 && temp % b != 0){
                jumlahBilPrima.push(temp)
                temp = 0
            }
        }
        if(jumlahBilPrima.length === n){
            return jumlahBilPrima
        }
    }
}
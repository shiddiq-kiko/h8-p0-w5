function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var str = String(angka)
    var pengkali = angka
    var hasil = angka
    // while (pengkali >= 10){
      // pengkali = 1
      // for(var a = 0; a < String(hasil).length; a++){
        // pengkali *= Number(String(hasil)[a])
      // }
      // hasil = pengkali
    // }
    if(pengkali <= 10){
      return angka
    } else {
      pengkali = 1
      for(var a = 0; a < String(hasil).length; a++){
        pengkali *= Number(String(hasil)[a])
      }
      hasil = pengkali
      return kaliTerusRekursif(pengkali)
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6
// a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P

function changeVocals (str) {
    //code di sini
    var cv = []
    for(var ac = 0; ac < str.length; ac++){
        cv.push(str[ac])
    }
    for(var an = 0; an < cv.length; an++){
        if(cv[an] === 'a'){
            cv[an] = 'b'
        } else if(cv[an] === 'i'){
            cv[an] = 'j'
        } else if(cv[an] === 'u'){
            cv[an] = 'v'
        } else if(cv[an] === 'e'){
            cv[an] = 'f'
        } else if(str[an] === 'o'){
            str[an] = 'p'
        } else if(cv[an] === 'A'){
            cv[an] = 'B'
        } else if(cv[an] === 'I'){
            cv[an] = 'J'
        } else if(cv[an] === 'U'){
            cv[an] = 'V'
        } else if(cv[an] === 'E'){
            cv[an] = 'F'
        } else if(cv[an] === 'O'){
            cv[an] = 'P' 
        }
    }    
    return cv.join('')
  }
  
  function reverseWord (str) {
    //code di sini
    var balik = ''
    for(var a = str.length-1; a >= 0; a--){
        balik += str[a]
    }
    return balik
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var besar = ''
    for(var a = 0; a < str.length; a++){
        if(str[a] === str[a].toUpperCase()){
            besar += str[a].toLowerCase()
        } else if(str[a] === str[a].toLowerCase()){
            besar += str[a].toUpperCase()
        }
    }
    return besar
  }
  
  function removeSpaces (str) {
    //code di sini
    var gabung = ''
    for(var a = 0; a < str.length; a++){
        if(str[a] != ' '){
            gabung += str[a]
        }
    }
    return gabung
  }
  
  function passwordGenerator (name) {
    //code di sini
    var change = changeVocals(name)
    var reverse = reverseWord(change)
    var besar = setLowerUpperCase(reverse)
    var gabung = removeSpaces(besar)
    if(gabung.length < 5){
        return "'Minimal karakter yang diinputkan adalah 5 karakter'"
    }
    return gabung
  }
//   console.log(changeVocals('Sergei Dragunov'))
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
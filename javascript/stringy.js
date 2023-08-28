function stringy(size) {
    let i = '0';
    let j = 0;
    let result ='';
    while (j < size){
       i = (i == '0' ? '1' : '0');
      result += i;
      j++;
    }
    return result;
  }
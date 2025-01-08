function sqNum(num) {
    
    if (typeof num !== "number") {
      throw " not number"; 
    }
  
    return num * num;
  }
  
  try {
    console.log(sqNum(3)); 
    console.log(sqNum("karkash")); 
  } catch (err) {
    console.error(err); 
  }
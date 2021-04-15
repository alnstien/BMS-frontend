 const  validateFormat=(string)=>{
    var stringFormatted = string.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());
    
    return stringFormatted;
   }
   export default validateFormat;
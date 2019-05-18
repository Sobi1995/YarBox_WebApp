export {}
String.prototype.ToEnglishNumber = function (): string  {
     
    
    var p = /^[\u0600-\u06FF\s]+$/;
    if (p.test(this)) 
        return this;
   
      var a=  this instanceof String
         
        const regex = /[۰-۹]/g
    let str = this;
    let result = str.replace(regex, function (w) {
        return String.fromCharCode(w.charCodeAt(0) - 1728)
      }
    )
};
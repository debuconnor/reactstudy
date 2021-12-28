function scope(){
   const a = 0;
   let b = 0;
   var c = 0;

   console.log("init: ", a, b, c);

   if(a===0){
      const a = 1;
      let b = 1;
      var c = 1;

      console.log("if block: ", a, b, c)
   }

   console.log("function block: ", a, b, c);
}

scope()
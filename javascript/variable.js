function scope(){
   const a = 0;
   let b = 0;
   var c = 0;

   if(a===0){
      const a = 1;
      let b = 1;
      var c = 1;
   }
}
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const array = [10,20,30,40,50,60,70];
    let fiveArray = []; 
    for (let index = 0; index <= 5; index += 1) {
      fiveArray.push(array[index] * 5);
    }
   console.log(fiveArray);



    event.preventDefault();
  });
});



     

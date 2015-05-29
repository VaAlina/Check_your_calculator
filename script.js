$(function(){

//Starts code for tabs.
$(".tab").click(function(){
  var id = (this).id.slice(8,10);
  $(".tab").not(this).addClass("passive_tab").removeClass("active_tab");
  $(".tab_content").addClass("display_none");  
  $("#tab"+id).removeClass("display_none");
  $(this).removeClass("passive_tab").addClass("active_tab");
});
//Ends code for tabs.



//Starts user iput validation.
$('input#userInput').keyup(function(e){
    if (/\D/g.test(this.value)){//Не допускает ввод не чисел.
        this.value = this.value.replace(/\D/g, '');
    }
});
//Ends user input validation.


});




correct=0;
incorrect=0;
all=0;

var go = function(){
//Starts main part of the program.


//Creating new object.

function Manipulation(num1, num2){
  this.num1 = num1;
  this.num2 = num2;
  this.sum = num1+num2;
  this.multi = num1*num2; 
  this.minus = num1-num2;
  this.div = num1/num2;
}

//An array with operation types. "+" is default.
var operationType = ["+"]; 

//If any other operation type was chosen, then the code will add it to the array.
$("input:checkbox:checked").map(function(){
  operationType.push($(this).val());
});
	
	
//Generation of random operation from our operation array.
var rand = Math.floor( Math.random() * operationType.length ); 
var operation = operationType[rand];

//Validation of results. Let`s remove the nagative result, the result with too simple variables (such as 1, 2).
while((n1 % n2) != 0 || (n1 - n2) < 0 || n1 == n2 || n2 == 1 || n2 == 2){
  //Generate 2 random variables from 1 to 100.
  var n1 = Math.round(Math.random()*100);
  var n2 = Math.round(Math.random()*100);
}


//Creating new object.
var s = new Manipulation(n1, n2); 

//Printing variables and operation.
document.getElementById("var1").innerHTML = s.num1;
document.getElementById("operation").innerHTML = operation;
document.getElementById("var2").innerHTML = s.num2;

//Getting operation result.
switch(operation){
  case "+":{ 
    result = s.sum;
    };
  break;
  case "-":{
    result = s.minus;
    };
  break;
  case "*":{
    result = s.multi;
    };
  break;
  case "/":{
    result = s.div;
    };
  break;
  default:{
    result = s.sum;
    };
}


//Displaing the result on the screen.
$("#getInput").click(function(){
  //Gets user input.
  var userInput = document.getElementsByTagName('input')[1].value;
  //Gets the data from second user input.
  if(userInput == result){
	correct ++;
	all++;
	$("#cor").text(correct);
	$("#incor").text(incorrect);//Puts the amount of correct ansvers in field with this id.
	$("#all_cor_incor").text(all);
	document.getElementById("test").innerHTML = "Правильно!";
  }else{
	incorrect++;
	all++;
	$("#cor").text(correct);
	$("#incor").text(incorrect);
	$("#all_cor_incor").text(all);
	document.getElementById("test").innerHTML = "Правильный ответ "+result;
  }document.getElementById("userInput").value = "";
  
  s = null;
  go();
  
})


//Displays the result in the table.
$(function(){
  $("#getInput").click(function(){
    $("#cor").text(correct);
    $("#incor").text(incorrect);
    $("#all_cor_incor").text(all);
  });
});


//Deleting an object that I`ve just created. So I will create one more object with another properties.
s = null;
go();//Recursion.
}
//The end of the main programm part.

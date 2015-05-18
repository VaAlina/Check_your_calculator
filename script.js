$(document).ready(function(){

//Начало кода для табов.
//Starts code for tabs.
$("#tab_name2").click(function(){
  $(this).removeClass("passive_tab");
  $(this).addClass("active_tab");
  $("#tab_name1").addClass("passive_tab");
    if($("#tab2").hasClass("display_none")){
	  $("#tab2").removeClass("display_none");
	  $("#tab1").addClass("display_none");
	}
  });

$("#tab_name1").click(function(){
  $(this).removeClass("passive_tab");
  $(this).addClass("active_tab");
  $("#tab_name2").addClass("passive_tab");
    if($("#tab1").hasClass("display_none")){
	  $("#tab1").removeClass("display_none");
	  $("#tab2").addClass("display_none");
	}
  });
//Конец кода для табов.
//Ends code for tabs.



//Начало валидации ввода пользователя.
//Starts user iput validation.
$('input#userInput').keyup(function(e){
    if (/\D/g.test(this.value)){//Не допускает ввод не чисел.
        this.value = this.value.replace(/\D/g, '');
    }
});
//Конец валидации ввода пользователя.
//Ends user input validation.


});




correct=0;
incorrect=0;
all=0;

var go = function(){
//Начало основной части программы.
//Starts main part of the program.


//Создаю основной объект.
//Creating new object.

function Manipulation(num1, num2){
  this.num1 = num1;
  this.num2 = num2;
  this.sum = num1+num2;
  this.multi = num1*num2; 
  this.minus = num1-num2;
  this.div = num1/num2;
}

//Массив с видами операций. Плюс выбран по-умолчанию.
//An array with operation types. "+" is default.
var operationType = ["+"]; 

//Если выбрана еще какая-нибудь операция - этот код добавит её в массив.
//If any other operation type was chosen, then the code will add it to the array.
$("input:checkbox:checked").map(function(){
  operationType.push($(this).val());
});
	
	
//Генерация случайной операции из заданного массива.
//Generation of random operation from our operation array.
var rand = Math.floor( Math.random() * operationType.length ); 
var operation = operationType[rand];

//Исключаю генерацию видов результата: с остатком, отрицательного, с одинаковыли либо слишком простыми (1, 2) переменными.
//Validation of results. Let`s remove the nagative result, the result with too simple variables (such as 1, 2).
while((n1 % n2) != 0 || (n1 - n2) < 0 || n1 == n2 || n2 == 1 || n2 == 2){
  //Генерирую 2 случайные переменные в диапазоне от 1 до 100.
  //Generate 2 random variables from 1 to 100.
  var n1 = Math.round(Math.random()*100);
  var n2 = Math.round(Math.random()*100);
}


//Создаю новый объект.
//Creating new object.
var s = new Manipulation(n1, n2); 

//Записываю полученные переменные и операцию.
//Printing variables and operation.
document.getElementById("var1").innerHTML = s.num1;
document.getElementById("operation").innerHTML = operation;
document.getElementById("var2").innerHTML = s.num2;

//Получить результат операции.
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


//Отображение результата вычислений на экране.
//Displaing the result on the screen.
$("#getInput").click(function(){
  //Получить ввод пользователя.
  //Gets user input.
  var userInput = document.getElementsByTagName('input')[1].value;
  //Получить данные со второго тэга input.
  //Gets the data from second user input.
  if(userInput == result){
	correct ++;
	all++;
	$("#cor").text(correct);//В поле в этим id, поместить количество правильных ответов.
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

//Отображение результата в таблице.
//Displays the result in the table.
$(document).ready(function(){
  $("#getInput").click(function(){
    $("#cor").text(correct);
    $("#incor").text(incorrect);
    $("#all_cor_incor").text(all);
  });
});

//Удаляю объект.
//Deleting an object that I`ve just created. So I will create one more object with another properties.
s = null;
go();//Рекурсия. Recursion.
}
//Конец основной части программы.
//The end of the main programm part.

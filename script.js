$(document).ready(function(){

//Начало кода для табов.
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



//Начало валидации ввода пользователя.
$('input#userInput').keyup(function(e){
    if (/\D/g.test(this.value)){//Не допускает ввод не чисел.
        this.value = this.value.replace(/\D/g, '');
    }
});
//Конец валидации ввода пользователя.


});




correct=0;
incorrect=0;
all=0;

var go = function(){
//Начало основной части программы.



//Создаю основной объект.
//Начало объявления классов.
function Manipulation(num1, num2){
  this.num1 = num1;
  this.num2 = num2;
  this.sum = num1+num2;
  this.multi = num1*num2; 
  this.minus = num1-num2;
  this.div = num1/num2;
}
//Конец объявлению классов.


var operationType = ["+"]; //Массив с видами операций. Плюс выбран по-умолчанию.
    
$("input:checkbox:checked").map(function(){//Если выбрана еще какая-нибудь операция - этот код добавит её в массив.
  operationType.push($(this).val());
});
	
	
	
var rand = Math.floor( Math.random() * operationType.length ); //Генерация случайной операции из заданного массива.
var operation = operationType[rand];

while((n1 % n2) != 0 || (n1 - n2) < 0 || n1 == n2 || n2 == 1 || n2 == 2){//Исключаю генерацию видов результата: с остатком, отрицательного, с одинаковыли либо слишком простыми (1, 2) переменными.
  var n1 = Math.round(Math.random()*100);//Генерирую 2 случайные переменные в диапазоне от 1 до 100.
  var n2 = Math.round(Math.random()*100);
}



var s = new Manipulation(n1, n2); //Создаю новый объект.

document.getElementById("var1").innerHTML = s.num1;//Записываю полученные переменные и операцию.
document.getElementById("operation").innerHTML = operation;
document.getElementById("var2").innerHTML = s.num2;

//Получить результат операции.
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
$("#getInput").click(function(){//Получить ввод пользователя.
  var userInput = document.getElementsByTagName('input')[1].value;//Получить данные со второго тэга input.
  if(userInput == result){
	correct ++;
	all++;
	$("#cor").text(correct);//В поле в этим id, поместить количество правильных ответов.
	$("#incor").text(incorrect);
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
$(document).ready(function(){
  $("#getInput").click(function(){
    $("#cor").text(correct);
    $("#incor").text(incorrect);
    $("#all_cor_incor").text(all);
  });
});

s = null;//Удаляю объект.
go();//Рекурсия.
}
//Конец основной части программы.

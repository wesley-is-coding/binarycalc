
var tobin = function(int) {
  return (int >>> 0).toString(2);
};

var bitvalue = function(arr) {
  arr.reverse();
  var sum = 0;
  for(var i in arr) {
    if(arr[i] == 1) {
      sum += Math.pow(2, i);
    }
  }
  return sum;
};

var operand1 = [];
var operand2 = [];
var operator = [];

var display = function() {
  var operand1Disp = operand1.join("");
  var operand2Disp = operand2.join("");
  document.getElementById("res").innerHTML = operand1Disp+operator+operand2Disp;
};

var fillArr = function() {
  var e = window.event;
  var btn = e.target || e.srcElement;
  if(!operator.length) {
    operand1.push(parseInt(document.getElementById(btn.id).innerHTML));
    display();
    }
  else if (operator.length) {
    operand2.push(parseInt(document.getElementById(btn.id).innerHTML));
    display();
  }
};

var fillOp = function() {
  var e = window.event;
  var btn = e.target || e.srcElement;
  if(!operator.length) {
    operator.push(document.getElementById(btn.id).innerHTML);
    display();
  }

};

var clear = function() {
  operand1 = [];
  operator = [];
  operand2 = [];
  display();
};

var getResult = function (){
  num1 = bitvalue(operand1);
  num2 = bitvalue(operand2);
  var res = 0;
  if(operator[0] == "+"){
    res = tobin(num1+num2);
    document.getElementById("res").innerHTML = res;
    operand1 = (""+res).split("");
  }
  else if(operator[0] == "-"){
    res = tobin(num1-num2);
    document.getElementById("res").innerHTML = tobin(num1-num2);
    operand1 = (""+res).split("");
  }
  else if(operator[0] == "*"){
    res = tobin(num1*num2);
    document.getElementById("res").innerHTML = tobin(num1*num2);
    operand1 = (""+res).split("");
  }
  else if(operator[0] == "/"){
    res = tobin(num1/num2);
    document.getElementById("res").innerHTML = tobin(num1/num2);
    operand1 = (""+res).split("");
  }
  operand2=[];
  operator=[];
};

document.getElementById("btn0").addEventListener("click", fillArr);
document.getElementById("btn1").addEventListener("click", fillArr);
document.getElementById("btnSum").addEventListener("click", fillOp);
document.getElementById("btnSub").addEventListener("click", fillOp);
document.getElementById("btnMul").addEventListener("click", fillOp);
document.getElementById("btnDiv").addEventListener("click", fillOp);
document.getElementById("btnClr").addEventListener("click", clear);
document.getElementById("btnEql").addEventListener("click", getResult);

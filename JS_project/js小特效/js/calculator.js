var container = document.getElementById('container');

//获取按钮面板
var buttonTable = document.getElementById('buttonTable');

//获取按钮面板下的按钮组合
var btns = buttonTable.getElementsByTagName('button');

//显示面板
var show = document.getElementById('show');

//最大化按钮
var bigger = document.getElementById('bigger');

//还原按钮
var smaller = document.getElementById('smaller');

//关闭按钮
var down = document.getElementById('close');

//获取ON键按钮
var on = btns[0];

//获取OFF按钮
var off = btns[1];

//打开计算机按钮
var calculator = document.getElementById('calc');

//还原键
var reset = document.getElementById('reset');

var remove = document.getElementById('remove');

var num1 = ''; //进行运算的值
var num2 = '';

var eq = ''; //装运算符号

var res = 0; //运算结果

//(function() {
//	$(function() {
//		$('#container').hide();
//	});
//})();

//封装事件对象方法
var eventHandler = {
	addHandler: function(obj, ev, fun) {
		if(addEventListener) {
			obj.addEventListener(ev, fun, false);
		} else if(attachEvent) {
			obj.attachEvent('on' + ev, fun);
		}
	},

	removeHandler: function(obj, ev, fun) {
		if(removeEventListener) {
			obj.removeEventListener(ev, fun);
		} else if(detachEvent) {
			obj.detachEvent('on' + ev, fun);
		}
	}
}

//先调用一次关机事件
shut();

//给最大化添加点击事件
eventHandler.addHandler(bigger, 'click', big);

//给还原添加点击事件
eventHandler.addHandler(smaller, 'click', small);

//给关闭添加点击事件
eventHandler.addHandler(down, 'click', clo);

//给on键添加点击事件
eventHandler.addHandler(on, 'click', open);

//给off添加点击事件
eventHandler.addHandler(off, 'click', shut);

//给C键添加点击事件
eventHandler.addHandler(reset, 'click', zero);

//给回键添加事件
eventHandler.addHandler(remove, 'click', del);

//打开计算器按钮
eventHandler.addHandler(calculator, 'click', calculate);

//最大化事件函数
function big() {
	container.style.transition = 'all 1s';
	container.style.width = '800px';
}

//还原事件函数
function small() {
	container.style.width = '311px';
}

//关闭事件函数
function clo() {
	$(function() {
		$('#container').fadeOut();
		$('#calc').fadeIn();
		shut();
	});
}

//开机事件函数
function open() {
	
	mathNum.innerRes('',show.firstElementChild);
	mathNum.innerRes(0,show.lastElementChild);
	
	num1 = '';
	
	for(var i = 0; i < btns.length; i++) {
		btns[i].removeAttribute('disabled');
	}
}

//关机事件
function shut(){
	show.firstElementChild.innerText = '';
	show.lastElementChild.innerText = '';
	
	for(var i = 0; i < btns.length; i++) {
		if(i == 0) {

		} else {
			btns[i].setAttribute('disabled', 'disabled');
		}
	}
}

//归0事件
function zero() {	
	
	mathNum.innerRes('',show.firstElementChild);
	mathNum.innerRes(0,show.lastElementChild);

	num1 = '';
	num2 = '';
	res = 0;
}

//删除事件
function del() {
	if(mathNum.hasOperator(num1)) {
		var str = (String(show.lastElementChild.innerText)).slice(0, -1);
		
		num1 = str;
		
		mathNum.innerRes(str,show.lastElementChild);
		
	} else {
		var str = (String(show.lastElementChild.innerText)).slice(0, -1);
		
		num2 = str;
		
		mathNum.innerRes(str,show.lastElementChild);
		
		console.log(num2);
	}

}

//打开计算机
function calculate() {
	$(function() {
		$('#container').fadeIn();
	});
}

var num = '0';

var pattern = /[.]/;

//按键事件
for(var i = 0; i < btns.length; i++) {
	btns[i].onclick = function() {
		
		num = this.innerText;	
		
		if(mathNum.isFunKey(num)) {
			
			if(mathNum.hasOperator(num1)) {
				num1 += num;
				
				mathNum.removePos(num1,pos);

				mathNum.innerRes(num1,show.lastElementChild);
				
				mathNum.moveLeft(num1,12,show);

			} else if(mathNum.isOperator(num)) {
				if(num2 == '') {
					num1 = num1.slice(0, -1) + num;
				} else {
					eq = num1.slice(-1);
					
					num1 = mathNum.parse(num1);
					num2 = mathNum.parse(num2);
					
					calc(num1, num2, eq);
				}

			} else {
				
				mathNum.removePos(num2,pos);
				
				num2 += num;

				mathNum.innerRes(num2,show.lastElementChild);

				mathNum.moveLeft(num2,12,show);

			}
		}

		if(mathNum.isOperator(num)) {
			//判断用户是否按了多次
			eq = num1.slice(-1);

			if(mathNum.sliceOperator(num2)) {
			
				num1 = mathNum.parse(num1);
				num2 = mathNum.parse(num2);
				
				calc(num1, num2, eq);
				
			} else {

				mathNum.innerRes(num1,show.firstElementChild);
				mathNum.innerRes(num2,show.lastElementChild);
			}
		}
		if(num == '=') {
			
			num2 = mathNum.isNull(num1,num2);

			num1 = mathNum.parse(num1);
			num2 = mathNum.parse(num2);

			calc(num1, num2, eq);
		}
	}
}

//计算函数
function calc(x, y, cal) {
	switch(cal) {
		case '+':
			res = x + y;
			res = mathNum.formatNum(res);
			mathNum.innerRes(res,show.lastElementChild);
			//			console.log(res);
			num1 = String(res);
			//			console.log(num1);
			num2 = '';
			mathNum.innerRes('',show.firstElementChild);
			break;
		case '-':
			res = x - y;
			res = mathNum.formatNum(res);
			mathNum.innerRes(res,show.lastElementChild);
			num1 = String(res);
			num2 = '';
			mathNum.innerRes('',show.firstElementChild);
			break;
		case '×':
			res = x * y;
			res = mathNum.formatNum(res);
			mathNum.innerRes(res,show.lastElementChild);
			num1 = String(res);
			num2 = '';
			mathNum.innerRes('',show.firstElementChild);
			break;
		case '÷':
			res = x / y;
			res = mathNum.formatNum(res);
			mathNum.innerRes(res,show.lastElementChild);
			num1 = String(res);
			num2 = '';
			mathNum.innerRes('',show.firstElementChild);
			break;
		case '%':
			res = x % y;
			res = mathNum.formatNum(res);
			mathNum.innerRes(res,show.lastElementChild);
			num1 = String(res);
			num2 = '';
			mathNum.innerRes('',show.firstElementChild);
			break;
	}
}


//判断是否为小数点  然后转换为相应的number数据
var mathNum = {	
	
	//转换为对应类型
	parse : function(x){
		if(pattern.test(x)) {
			x = parseFloat(x);
		} else {
			x = parseInt(x);
		}
		return x;
	},
	
	moveLeft : function(x,target,scrollObj){
		var checkNum = x.split('');
		if(checkNum.length > target) {
			scrollObj.scrollLeft += 42;
		}	
	},
	
	innerRes : function(x,target){
		target.innerText = x;
	},
	
	removePos : function(obj,target){
		if(pattern.test(obj)) {
			target.setAttribute('disabled', 'disabled');
		} else {
			target.removeAttribute('disabled');
		}
	},
	
	formatNum : function(res){
		return (res = Math.floor(res*100)/100);
	},
	
	isNull : function(x,y){
		if(x.slice(-1) == '=') {
			y = '0';
			eq = '+';
		} else if(y.slice(0, 1) == '=') {
			y = '0';
			eq = '+';
		}
		
		return y;
	},
	
	isFunKey : function(FunKey){
		return (FunKey !== 'ON' && FunKey !== 'OFF' && FunKey !== 'C' && FunKey !== '←')
	},
	
	isOperator : function(opera){
		return (opera == '+' || opera == '-' || opera == '×' || opera == '÷' || opera == '%');
	},
	
	hasOperator : function(obj){
		return (obj.indexOf('+') == -1 && obj.indexOf('-') == -1 && obj.indexOf('×') == -1 && obj.indexOf('÷') == -1 && obj.indexOf('%') == -1)
	},
	
	sliceOperator : function(obj){
		return (obj.slice(-1) == '+' || obj.slice(-1) == '-' || obj.slice(-1) == '×' || obj.slice(-1) == '÷' || obj.slice(-1) == '%')
	}
	
}


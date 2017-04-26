var container = document.getElementById('container');

var divs = container.getElementsByTagName('div');

var speed = 0;

var timer = null;

var num = 2;

function show(){
	divs[num].style.width = '420px';
}

//show();

for(var i=1;i<divs.length+1;i++){
	divs[i-1].innerHTML = '<img src="./img/'+i+'.jpg" height="300"/>';
}

for(var j=0;j<divs.length;j++){
	divs[j].onmouseover = function(){
		clearInterval(this.timer);
		change(this,420);
	}
	divs[j].onmouseout = function(){
		change(this,90);
	}
}

function change(obj,target){
	
	clearInterval(obj.timer);
	
	obj.timer = setInterval(function(){
		width = window.getComputedStyle(obj,null).width;
		speed = (target - parseInt(width))/20;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if(speed == 1){
			clearInterval(obj.timer);
		}else if(speed == 0){
			clearInterval(obj.timer);
		}else{
			obj.style.width =  parseInt(width) + speed + 'px';
		}
	},20);
}

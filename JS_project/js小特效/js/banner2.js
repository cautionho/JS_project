var container = document.getElementById('container');

var divs = container.getElementsByTagName('div');

var num = divs.length-3;

var speed = 0;

for(var i=1;i<divs.length+1;i++){
	divs[i-1].innerHTML = '<img src="./img/'+i+'.jpg" height="300"/>';
}

show();

function show(){
	divs[num].style.width = '420px';
}

for(var i=0;i<divs.length;i++){
		
	divs[i].onmouseover = function(){	
		for(var j=0;j<divs.length;j++){
			divs[j].style.width = '90px';
		}
		if(window.getComputedStyle(this,null).width >= '90px'){
			this.style.width = '420px';
		}else{
			this.style.width = '90px';		
		}
	}
	
	divs[i].onmouseout = function(){
		this.style.width = '90px';
		divs[num].style.width = '420px';
	}
}

divs[num].onmouseover = function(){
	divs[num].style.width = '420px';
}

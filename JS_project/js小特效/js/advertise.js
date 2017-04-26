var right = document.getElementById('right');

var close = right.getElementsByTagName('a')[0];

var leftDiv = document.getElementById('left');

var showTogle = leftDiv.getElementsByTagName('a')[0];

var speed = 1;

var timer = null;

close.onclick = function(){
	right.style.display = 'none';
}

showTogle.onclick = function(){
	if(window.getComputedStyle(left,null).left == -90 + 'px'){
		timer = setInterval(function(){
			leftDiv.style.left = leftDiv.offsetLeft + speed + 'px';
			if(leftDiv.style.left == '0px'){
				clearInterval(timer);
			}
		},5);
		leftDiv.firstElementChild.firstElementChild.innerText = '收起';
	}else{
		timer = setInterval(function(){
			leftDiv.style.left = leftDiv.offsetLeft - speed + 'px';
			if(leftDiv.style.left == '-90px'){
				clearInterval(timer);
			}
		},5);		
		leftDiv.firstElementChild.firstElementChild.innerText = '展开';
	}
}

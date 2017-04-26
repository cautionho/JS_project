var img = document.getElementById('img');

var btn = document.getElementById('btn');

var imgShow = img.getElementsByTagName('li');

var btnShow = btn.getElementsByTagName('li');

var num = 0;

//轮播时的下标
var index = 0;

for(var i=0;i<btnShow.length;i++){
	btnShow[i].addEventListener('click',show,false);
	imgShow[i].style.display = 'none';
	imgShow[0].style.display = 'block';
}

//自发轮播
var timer = setInterval(roll,1000);

function roll(){
//	console.log(num);
	index += 1;
	if(index == 6){
			index = 0;
		}
	for(var i = 0;i<imgShow.length;i++){
		if(i == index){
//			imgShow[i].style.transform = 'translateX(0px)';
			imgShow[index].style.display  = 'block';
			btnShow[index].style.border = '1px solid yellow';
		}else{
//			imgShow[i].style.animation = 'move 5s linear';
			imgShow[i].style.display = 'none';
			btnShow[i].style.border = '1px solid #fff';
		}
	}
}

//点击事件
function show(){

	num = this.innerText -1;
	
	for(var i=0;i<btnShow.length;i++){
		btnShow[i].style.border = '1px solid #fff';
	}
	this.style.border = '1px solid yellow';
	
	//点击下面小图对应大图
	for(var j=0;j<imgShow.length;j++){
		if(j == num){
			imgShow[num].style.display = 'block';
		}else{
			imgShow[j].style.display = 'none';
		}
	}
	
	index = num;
	clearInterval(timer);
	timer = null;
	timer = setInterval(roll,1000);
}

show();
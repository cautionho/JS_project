var rollText = document.getElementById('rollText');

var songText = rollText.getElementsByTagName('p');

//play
var play = document.getElementById('btn1');

//replay
var replay = document.getElementById('btn2');

//faster
var faster = document.getElementById('btn3');

//slower
var slower = document.getElementById('btn4');

//stop
var stop = document.getElementById('btn5');

//获取audio节点
var music = document.getElementById('music');

//步长
var step = 1;

//一次性定时器 控制歌词滚动
var timer = null;

//速度  控制歌词滚动速度
var speed = 0;

//播放状态
var playStatus = true;

//第一次高亮
var mark = null;

//高亮歌词下标
var num = 0;

//歌词高亮
var highMark = null;

//播放键的定时器
var playTimer = null;

function rolling(){
	
	rollText.scrollTop = (rollText.scrollTop + speed + step);
	
	timer = setTimeout(rolling,105);
}

//play
play.onclick = function(){
	clearTimeout(timer);	
	highMark = null;	
	play.setAttribute('disabled','disabled');
	music.play();
	speed = 0;
	rolling();
	if(playStatus){
		clearTimeout(playTimer);
		playTimer = setTimeout(light,16000);
		playStatus = false;
	}else{
		clearTimeout(playTimer);
		clearTimeout(highMark);
		playTimer = setTimeout(light,3000);
	}
}

//replay
replay.onclick = function(){
	rollText.scrollTop = 0;
	if(playStatus){
		music.pause();
		music.currentTime = 0;
	}else{
		music.currentTime = 0;
	}
	music.play();
	clearTimeout(highMark);
	clearTimeout(mark);
	num = 0;
	mark = setTimeout(light,16000);
	clearTimeout(timer);
	speed = 0;
	rolling();
}

//faster
faster.onclick = function(){
	clearInterval(timer);
	speed += 1;
	setTimeout(rolling,80);
}

//slower
slower.onclick = function(){
	
	clearInterval(timer);	
	if(speed == 0){
		speed = 0;
	}else{
		speed -= 1;
	}
	setTimeout(rolling,80);
	
}

//stop
stop.onclick = function(){
	speed = speed;
	play.removeAttribute('disabled');
	music.pause();
	playStatus = false;
	clearTimeout(highMark);
	highMark = null;
	clearInterval(timer);
	timer = null;
}

function light(){
	
	clearTimeout(highMark);
	for(var i=0;i<songText.length;i++){
		songText[i].style.color = 'rgb(50,50,50)';
	}
	
	if(num < songText.length){
		songText[num].style.color = '#00AB8B';
		num++;
	}else{
		return false;
	}
	
	
	highMark = setTimeout(light,3700);
}
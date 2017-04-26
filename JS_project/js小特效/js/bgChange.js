var bgStyle = document.getElementById('bgStyle');

var bgStyleLi = bgStyle.getElementsByTagName('li');

var nextStyle = document.getElementById('nextStyle');

var randomStyle = document.getElementById('randomStyle');

var num = 0;

var next = 0;

document.body.style.background = 'url("'+bgStyleLi[0].firstElementChild.getAttribute('src')+'") 0% 0% / cover no-repeat';

for(var i=0;i<bgStyleLi.length;i++){

	bgStyleLi[i].onclick = function(){
		var url = this.firstElementChild.getAttribute('src');
		document.body.style.background = 'url('+url+') no-repeat';
		document.body.style.backgroundSize = 'cover';
		num = i;
	}
}

nextStyle.onclick = function(){
	
	var bgUrl = document.body.style.background;
	
	for(var i=0;i<bgStyleLi.length;i++){
		if(bgUrl == ''){
			document.body.style.background = 'url("'+bgStyleLi[0].firstElementChild.getAttribute('src')+'") 0% 0% / cover no-repeat';
		}else if('url("'+bgStyleLi[i].firstElementChild.getAttribute('src')+'") 0% 0% / cover no-repeat' == bgUrl){
			next += 1;
			if(next == 7){
				next = 0;
			}
			document.body.style.background = 'url("'+bgStyleLi[next].firstElementChild.getAttribute('src')+'") 0% 0% / cover no-repeat';
		}
	}
}
//随机变换背景
randomStyle.onclick = function(){
	var ranIndex = Math.floor(Math.random()*bgStyleLi.length);
	
	document.body.style.background = 'url("'+bgStyleLi[ranIndex].firstElementChild.getAttribute('src')+'") 0% 0% / cover no-repeat';
	document.body.style.backgroundSize = 'cover';
}



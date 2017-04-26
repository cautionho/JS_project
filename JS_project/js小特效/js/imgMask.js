var container = document.getElementById('container');

var list = container.getElementsByTagName('li');

var direction = ['translateX','translateY','translateX','translateY','translateX'];

var long = ['-300px','300px','300px','-300px','-300px'];

var ranIndex = 0;

for(var i = 0;i<list.length;i++){
	list[i].style.background = 'url(./img/'+(i+1)+'.jpg) no-repeat';
	list[i].style.backgroundSize = 'cover';
//	list[i].onmouseover = function(){
//		this.firstElementChild.style.transform = '0';
//	}
//	
//	list[i].onmouseout = function(){
//		this.firstElementChild.style.bottom = '-150px';
////	}
}
	for(var j=0;j<direction.length;j++){
		var index = j;
		var res = direction[index];
//		console.log(res);
		list[j].firstElementChild.style.transform = direction[j]+'('+long[j]+')';
	} 
	for(var i=0;i<direction.length;i++){
		list[i].onmouseover = (function(index){
			return function(){
				if(list[index].firstElementChild.style.transform == 'translateY(300px)'){
					list[index].firstElementChild.style.transform = direction[index]+'(50px)';
				}else{
					list[index].firstElementChild.style.transform = direction[index]+'(0px)';
				}
			}
		})(i);
		
		list[i].onmouseout = (function(index){
			return function(){
				list[index].firstElementChild.style.transform = direction[index]+'('+long[index]+')';
			}
		})(i);
	}
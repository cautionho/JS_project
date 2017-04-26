var qq = document.getElementById('qq');

var container = document.getElementById('container');

//封装添加事件监听函数
function addEvent(obj, ev, fun) {
	if(addEventListener) {
		obj.addEventListener(ev, fun, false);
	} else if(attachEvent) {
		obj.attachEvent('on' + ev, fun);
	}
}

//封装移除事件监听函数
function removeEvent(obj, ev, fun) {
	if(removeEventListener) {
		obj.removeEventListener(ev, fun);
	} else if(detachEvent) {
		obj.detachEvent(ev, fun);
	}
}

//鼠标悬浮事件监听
addEvent(qq, 'mouseover', change);

function change() {
	qq.style.left = '-80px';
	//	qq.style.transform = 'translateX(0px) rotateZ(30deg)';
	qq.style.transform = 'rotateZ(30deg)';
}

//鼠标移开事件监听
addEvent(qq, 'mouseout', recover);

function recover() {
	qq.style.left = '-105px';
	//	qq.style.transform = 'translateX(0px) rotateZ(15deg)';
	qq.style.transform = 'rotateZ(15deg)';
}

//鼠标点击事件
window.addEvent(qq, 'click', show);

/* 第一种方法 */
function show() {
	if(qq.style.transform == 'rotateZ(30deg)') {
		qq.style.transform = 'translateX(350px) rotateZ(30deg)';
		container.style.transform = 'translateX(350px)';
		removeEvent(qq, 'mouseover', change);
		removeEvent(qq, 'mouseout', recover);

		console.log(qq.style.transform);
	} else if(qq.style.transform == 'translateX(350px) rotateZ(30deg)') {
		qq.style.transform = 'translateX(0px) rotateZ(15deg)';
		container.style.transform = 'translateX(0px)';
		addEvent(qq, 'mouseover', change);
		addEvent(qq, 'mouseout', recover);
	}
}

/* 第二种方法 */
//function show(){
//	
//}
//
$(function(){
		
		var imgArr = container.getElementsByTagName('img');
		
		var styleArr = ['no1','no2','no3','no4','no5','no6','no7'];
		
		setAttr(imgArr,styleArr,'class');

		function move(){
			
			var arr = imgArr[0];
			
			$('#container>img').eq(0).remove();
			
			container.appendChild(arr);

			setAttr(imgArr,styleArr,'class');
			
		}
		
		$timer = setInterval(move,3000);
		
		//按钮
		$('#left').on('click',moveLeft);
		
		$('#right').on('click',moveRight);
		
		function moveLeft(){
			
			clearInterval($timer);
			
			var arr = imgArr[imgArr.length-1];
			
			$('#container>img').eq(imgArr.length-1).remove();
			
			container.insertBefore(arr,imgArr[0]);

			setAttr(imgArr,styleArr,'class');
			
			$timer = setInterval(move,3000);
			
		}
		
		function moveRight(){
	
			clearInterval($timer);
		
			var arr = imgArr[0];
			
			$('#container>img').eq(0).remove();
			
			container.appendChild(arr);
			
			setAttr(imgArr,styleArr,'class');
			
			$timer = setInterval(move,3000);
			
		}
		
		//遍历添加class的函数
		function setAttr(arr1,arr2,target){
			
			for(var i=0;i<imgArr.length;i++){
			
				arr1[i].setAttribute(target,arr2[i]);
			
			}
			
		}
		
});
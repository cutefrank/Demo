	//show()函式要輸入兩個參數：obj是CheckBox元素本身；item為期限的id
	function show(obj,item){
		//判斷CheckBox是否被勾選 若是則顯示日期 反之則隱藏
		document.getElementById(item).style.display = obj.checked?"block":"none";
	}
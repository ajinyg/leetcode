export default (str) => {
	/*
		递归的本质
		说明 1.处理的内容是相同的
		    2.输入和输出是相同的
			  3.处理的结果是未知的
	*/
	let result = [];
	//递归函数
	let _search = (cur,sub) => {
		//处理边界
		//cur.join('') 检查是否满足原字符串
		if(cur.length === 4 && cur.join('') == str){
			result.push(cur.join('.'))
		}else{
			//否则不满足条件，则继续去查找
			for(let i=0,len = Math.min(3,sub.length),tmp;i<len;i++){
				//只能最多查找3位
				tmp = sub.substr(0,i+1);
				
				if(tmp < 256){
					//找到当前满足条件合并 ， 从满足条件下一位开始继续去查找
					_search(cur.concat([tmp]),sub.substr(i + 1))
				}
			}
		}
	}
	_search([],str);
	// console.log(result,`result`)
	return result;
}
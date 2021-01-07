export default (str)=>{
	let map = ['',1,'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
	let num = str.split(''); // 2，3，4 = > ['2','3','4']
	let code = [];//处理 键盘 与字母的映射关系  如 ：['abc','def']
	num.forEach(item => {
		if (map[item]){
			code.push(map[item])
		}
	});

	//组合对比
	const comb = (arr)=>{
		let tmp = []; //存储临时组合的变量
		for (let i=0,len = arr[0].length; i<len; i++){
			for(let j=0,len = arr[1].length; j<len; j++){
				tmp.push(`${arr[0][i]}${arr[1][j]}`)
			}
		}
		arr.splice(0,2,tmp);
		if(arr.length > 1) {
			comb(arr);
		}else {
			return tmp;
		}
		return arr[0]
		/*
			返回arr[0]第一个元素值
			为什么 返回是 数组里第一个元素呢 ? 
			因为 如果arr数组里有两组元素的话，程序还会一直递归下去，
			剩一组元素说明程序满足条件执行完成了。
		*/
	}

	return comb(code);
}
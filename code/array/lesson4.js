export default (n)=>{
	let rel = [];
	//递归函数， 处理 10进制与2进制转换
	const make = n =>{
		if ( n === 1 ){
			return ['0','1']
		}
		//拿到 n-1 的2进制
		let prev = make(n-1);
		// 求出 2进制的长度，且 - 1 从第一位开始算起
		let max = Math.pow(2,n)-1;
		let result = [];
		// 通过 n-1 上一次的2进制 与当前去做映射
		for( let i = 0,len = prev.length; i<len; i++ ){
			result[i] = `0${prev[i]}`;
			result[max-i] = `1${prev[i]}`; 
		}
		return result;
	}
	//二进制转十进制
	make(n).forEach( item =>{
		rel.push(parseInt(item,2));
	})
	return rel;
}
export default arr => {
	/*
			1.排序
			排序完之后组成字符串 如 “1234556”
	*/
	let str = arr.sort().join('').split('').sort().join('');
	/*
		2.组合
		匹配单张或多张分组 如 ['11','1111','22','3333']
	*/
	let group = str.match(/(\d)\1+|\d/g);
	const gcd = (a,b) =>{
		//b===0  的情况就是 余数为 0 情况,说明 最大公约数 为 a 。
		if ( b === 0 ){
			return a
		}else {
			return gcd(b,a%b);
		}
	}
	while ( group.length > 1 ) {
		/*
			求最大公约数， 排完 ，组合完成之后 ， 取 group 前两个求最大公约数
		*/ 
		let a = group.shift().length;
		let b = group.shift().length;
		let v = gcd(a,b);
		if( v === 1 ){
			//如果 公约数  === 1 ,不满足 题目条件， 返回false
			return false 
		}else {
			group.unshift('0'.repeat(v));
		}
	} 
	/*
		 边界处理分两种情况
		 group == 0 为空  返回 false
		 group  > 0 如果 > 0 需要检查里面牌数 是否 > 1  
	*/
	return group.length ? group[0].length > 1 :false;
}
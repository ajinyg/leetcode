export default str => {
	//定义结构
	let r = [];
	//抽象查找带连续 0 | 1 的子串 
	//给定任意输入都返回一个符合条件的子串
	const match = (str)=>{
		let j = str.match(/^(0+|1+|)/)[0];
		let o = (j[0] ^ 1).toString().repeat(j.length);
		let reg = new RegExp(`^(${j}${o})`);
		if(reg.test(str)){
			return RegExp.$1
		}else{
			return ''
		}
	}
	for(let i=0,len=str.length-1;i<len; i++ ){
		//从0字符开始截取字符
		let sub = match(str.slice(i));
		if (sub){
			r.push(sub)
		}
	}
	return r;
}
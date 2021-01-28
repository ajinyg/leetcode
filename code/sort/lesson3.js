export default (arr)=>{
	arr.sort((a,b)=>a-b);
	let odd = 1;
	let even = 0;
	let tmp = [];
	arr.forEach((v,k,i)=>{
		if ( v % 2 === 1 ){
			tmp[odd] = v;
			odd += 2
		}else {
			tmp[even] = v;
			even += 2
		}
	})	
	return tmp;
}
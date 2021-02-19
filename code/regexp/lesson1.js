export default (str)=>{
	console.log(str,`strsss`)
	return /^([a-z]+\1+)$/.test(str);
}
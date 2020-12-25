export default (str)=>{
	//1.将字母按空格进行分割，保存数组，数组的元素的先后顺序就是单词的顺序
	//2.对数组进行遍历，然后每个元素进行反转
	let arr = str.split(' '); //  split(/\s/g) 验证空格
	console.log("origin ------ Let's take LeetCode contest")
	console.log(arr,`str`)
	let result = arr.map(item=>{
		return item.split('').reverse().join('')
	})
	console.log(result.join(' '),`result`)
	return result.join(' ')
}
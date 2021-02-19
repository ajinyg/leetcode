import sort from '../../code/sort/lesson5';
test('找出相邻元素之间最大的差值-1',()=>{
	expect(sort([3,6,9,1])).toBe(3)
})
test('找出相邻元素之间最大的差值-2',()=>{
	expect(sort([10])).toBe(0)
})
test('找出相邻元素之间最大的差值-3',()=>{
	expect(sort([13,16,19,1])).toBe(12)
})
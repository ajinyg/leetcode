import sort from '../../code/sort/lesson7';
test('冒泡排序',()=>{
	expect(sort([1,5,6,3,13,45])).toEqual([1,3,5,6,13,45])
})
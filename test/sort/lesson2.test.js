import sort from '../../code/sort/lesson2';
test('选择排序',()=>{
	expect(sort([1,5,6,3,13,45])).toEqual([1,3,5,6,13,45])
})
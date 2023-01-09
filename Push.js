The .push() Method and .pop() Method!

Let’s learn about some built-in JavaScript methods that make working with arrays easier. These methods are specifically called on arrays to make common tasks, like adding and removing elements, more straightforward.

One method, .push(), allows us to add items to the end of an array. Here is an example of how this is used:

1.
const itemTracker = ['item 0', 'item 1', 'item 2'];
 
itemTracker.push('item 3', 'item 4');
 
console.log(itemTracker); 
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];



2.
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('item 5', 'item 6');
console.log(chores);




Another array method, .pop(), removes the last item of an array. 

const newItemTracker = ['item 0', 'item 1', 'item 2'];
 
const removed = newItemTracker.pop();
 
console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2



2.


const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop('mop floor');
console.log(chores);



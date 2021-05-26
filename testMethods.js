import LinkedList from "./LinkedList/LinkedList.js";
import Queue from "./QueueAndDecks/Queue.js";
import Stack from "./Stack/StackArray";


// Testing Stack

console.log("Testing Stack based in Array");
const stack = new Stack();
console.log(stack.isEmpty()); // true

stack.push(10);
stack.push(9);

console.log(stack.peek()); // 9

stack.push(15);
console.log(stack.size()); // 3
console.log(stack.isEmpty()); //false

stack.push(20);

stack.pop();
stack.pop();
console.log(stack.size()); // 2

//Testing Queue

console.log("Testing Queue");
const queue = new Queue();
console.log(queue.isEmpty()); //true

queue.enqueue("Joao");
queue.enqueue("Joaquim");
console.log(queue.toString());

queue.enqueue("Camila");

console.log(queue.toString());
console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue();
queue.dequeue();
console.log(queue.toString());

//Testing LinkdeLists

const list = new LinkedList();
list.push(15);
list.push(10);

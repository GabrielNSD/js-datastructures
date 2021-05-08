import Queue from "./Queue.js";

const queue = new Queue();
console.log(queue.isEmpty());

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

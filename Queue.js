export default class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  enqueue(element) {
    //add element to the end
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    //remove the first element
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  peek() {
    //return the first element
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  isEmpty() {
    //check if the queue is empty
    return this.size() === 0;
  }

  size() {
    //return queue's size
    return this.count - this.lowestCount;
  }

  clear() {
    //clear all items
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }

    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }
    return objString;
  }
}
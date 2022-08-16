// create the Queue class with two methods to remove and add an element
class Queue {
    constructor(container = []) {
        this.container = container;
    }

    // adds an element to the back of the queue
    addToQueue(el) {
        this.container.push(el);
    }

    // removes an element from the front of the queue
    removeFromQueue() {
        this.container.shift();
    }

}

module.exports = Queue;

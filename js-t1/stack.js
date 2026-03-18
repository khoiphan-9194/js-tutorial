// =========================
// 📚 WHAT IS A QUEUE?
// =========================
// A Queue is a data structure that follows:
//
// 👉 FIFO = First In, First Out
//
// Think of a line of people 🚶‍♂️🚶‍♀️
// - First person in line leaves first
// - New people join at the back
//
// Example:
// enqueue(2), enqueue(3), enqueue(4)
//
// Queue looks like:
// Front → 2 → 3 → 4 ← Back
//
// - enqueue() → add to BACK
// - dequeue() → remove from FRONT


// =========================
// 💡 COMMON USE CASES
// =========================
// 1. Line at a store (first come, first serve)
// 2. Printer queue (print jobs in order)
// 3. Task scheduling (jobs processed in order)
// 4. BFS (tree/graph traversal)


// =========================
// 🧠 VISUALIZATION
// =========================
/*
QUEUE (FIFO)

----------------------------------------
Initial State:
----------------------------------------

Front                                Back
  ↓                                   ↓
first → 2 → 3 → 4 → 5 → null
                    ↑
                  last


----------------------------------------
ENQUEUE (add to BACK)
----------------------------------------

Add 6:

first → 2 → 3 → 4 → 5 → 6 → null
                        ↑
                      last


----------------------------------------
DEQUEUE (remove from FRONT)
----------------------------------------

Remove 2:

first → 3 → 4 → 5 → null
                ↑
              last
*/


// =========================
// 🧱 NODE CLASS
// =========================
class Node {
    constructor(value) {
        this.value = value; // store the value
        this.next = null;   // pointer to next node
    }
}


// =========================
// 📦 QUEUE CLASS (Linked List)
// =========================
class Queue {
    constructor() {
        this.first = null; // FRONT (remove from here)
        this.last = null;  // BACK (add here)
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);

        // If queue is empty:
        // first and last BOTH point to new node
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            // Add to BACK
            this.last.next = newNode; // connect last node to new node
            this.last = newNode;      // move last pointer forward
        }

        return ++this.size;
    }

    dequeue() {
        // If empty → nothing to remove
        if (!this.first) {
            return null;
        }
    
        // Store node being removed (the FRONT of the queue)
        let removedNode = this.first;
    
        // If ONLY ONE node exists in the queue
        if (this.first === this.last) {
            // This means first and last point to the same node,
            // so after removing it, the queue will become empty.
            // We need to manually set last = null to indicate the queue is now empty.
            // We do NOT set first = null here yet because we will move it forward below.
            this.last = null; // queue becomes empty
        }
    
        // Move front forward
        // The new front of the queue becomes the next node.
        // Example: if queue is 2 -> 3 -> 4 and we remove 2,
        // this.first.next points to 3, so first now points to 3.
        // if this.first.next does not exist then it becomes null
        this.first = this.first.next;
    
        // Decrease the size since we removed one node
        this.size--;
    
        // Return the value of the removed node
        return removedNode.value;
    }
}


// =========================
// 🔥 EXAMPLE USAGE
// =========================
let q = new Queue();

q.enqueue(2); // [2]
q.enqueue(3); // [2, 3]
q.enqueue(4); // [2, 3, 4]

/*
Front → 2 → 3 → 4 ← Back
*/

q.dequeue(); // removes 2

/*
Front → 3 → 4 ← Back
*/
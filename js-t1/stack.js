// =========================
// 📚 WHAT IS A STACK?
// =========================
// A Stack is a data structure that follows:
//
// 👉 LIFO = Last In, First Out
//
// Think of a stack of plates 🍽️
// - You put a plate on top (push)
// - You remove the top plate (pop)
// - You cannot remove from the bottom
//
// Example:
// push(7), push(8), push(9)
//
// Stack looks like:
//   9  ← top (removed first)
//   8
//   7  ← bottom
//
// Real life use:
// - Browser back button
// - Undo / Redo
// - Function calls in JavaScript


// =========================
// 🧱 NODE CLASS
// =========================
// A Node is like a box:
// - value = data
// - next = pointer to next node
class Node {
    constructor(value) {
        this.value = value; // store the value
        this.next = null;   // point to next node (default is null)
    }
}


// =========================
// 📦 STACK CLASS (Linked List)
// =========================
class Stack {
    constructor() {
        this.first = null; // top of the stack (VERY IMPORTANT)
        this.last = null;  // bottom of the stack
        this.size = 0;     // number of elements
    }

    // LIFO visualization
    /*
        9
        |
        v
        8
        |
        v
        7

        OR (linked list view)

            last
              |
              v
      null <- 2 <- 3 <- 4  <- temp
                        ^
                        |   <- first.next
               first -> 5
    */

    push(val) {
        let newNode = new Node(val);

        // If there is NO node in the stack (empty stack)
        // both first (top) and last (bottom) point to newNode
        if (!this.first || this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            // Save the current top node
            let temp = this.first; // temp holds the old first node

            // Move first pointer to new node (new top)
            this.first = newNode;

            // Connect new node to previous top
            this.first.next = temp;
        }

        // Increase size
        return ++this.size;
    }

    pop() {
        // If stack is empty → nothing to remove
        if (!this.first) {
            return null;
        }

        // Save the node we are removing (top node)
        let removedNode = this.first;

        // If there is only ONE node in the stack
        if (this.first === this.last) {
            this.last = null; // bottom also disappears
        }

        // Move top pointer to next node
        this.first = this.first.next;

        // Decrease size
        this.size--;

        // Return removed value
        return removedNode.value;
    }

    // Helper: convert stack to array (top → bottom)
    printV2() {
        let arr = [];
        let currentNode = this.first;

        // Traverse through all nodes from top to bottom
        while (currentNode) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return arr;
    }
}
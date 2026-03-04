class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// let firstNode = new Node(43)

// console.log(firstNode);

class SinglyLinkedList {
    /*
    A singly linked list keeps a reference to the first node (head) 
    and usually the last node (tail) because 
    we cannot directly access nodes by index like an array. 
    To find or modify a node, we must start at the head and move through 
    the list one node at a time using temporary pointers.

    A temporary pointer is a variable that temporarily 
    stores a reference to a node so we can traverse or modify the linked list.
    Examples: current, previous, next, temp
    */
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value);
        // if newNode is the first node in the list then
        // head and tail pointing to the first node
        if (!this.head) {
            this.head = newNode; //
            this.tail = newNode;
        }
        // moving tail
        else {
            // console.log("Attention: previous node "+this.tail.value+ " and "+ this.tail.next)
            this.tail.next = newNode;
            //   console.log("Attention: previous node "+this.tail.next.value  +" and "+ this.tail.next.next)
            this.tail = newNode;
            //console.log(this.tail)
        }

        this.length++;
        return this;
    }

    print() {
        let currentNode = this.head; // currentNode now has [value, next]
        // as long as currentNode not null, we still print out the value
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }

    listSize() {
        if (!this.head) {
            return null;
        }
        let currentNode = this.head;
        let counter = 1;
        while (currentNode.next) {
            // as long as currentNode has next not null
            currentNode = currentNode.next;
            counter++;
        }
        return counter;
    }

    pop() {
        // If the list is empty, nothing to remove
        if (!this.head) {
            return null;
        }
    
        // If there is only one node in the list
        if (this.head === this.tail) {
            let removedNode = this.head; // store the node being removed
    
            this.head = null; // list becomes empty
            this.tail = null;
    
            this.length--; // decrease list size
    
            return removedNode;
        }
    
        // Otherwise, we need to find the node before the tail
        let currentNode = this.head;
        let previousNode = null;
    
        // Traverse until we reach the last node
        while (currentNode.next) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
    
        /*
        Example:
    
        10 → 20 → 30 → 40
    
        previousNode = 30
        currentNode  = 40 (node to remove)
        */
    
        // Remove the last node by disconnecting it
        previousNode.next = null;
    
        // Update tail to the new last node
        this.tail = previousNode;
    
        // Decrease list length
        this.length--;
    
        // Return the removed node
        return currentNode;
    }
    unshift(value) {
        /*
        List: 10 → 20 → 30
        unshift(5)
        Result: 5 → 10 → 20 → 30
        */

        let newNode = new Node(value);

        // Case 1: Empty list
        if (!this.head) {
            this.head = newNode; // head points to new node
            this.tail = newNode; // tail also points to new node
        } else {
            // Case 2: Non-empty list
            newNode.next = this.head; // new node points to current head
            this.head = newNode;      // update head to new node
        }

        // Increase length
        this.length++;

        return this;
    }
    shift() {
        // If the list is empty, there is nothing to remove
        if (!this.head) {
            return null;
        }
    
        // Save the current head node so we can return it later
        // Example:
        // 10 → 20 → 30
        // removedNode = 10
        let removedNode = this.head;
    
        // Case 1: The list only has one node
        // head and tail are pointing to the same node
        if (this.head === this.tail) {
    
            // Remove the only node by setting head and tail to null
            this.head = null;
            this.tail = null;
    
            // Decrease the length because we removed one node
            this.length--;
    
            // Return the removed node
            return removedNode;
        }
    
        /*
        Case 2: The list has more than one node
    
        Before shift():
        head
         ↓
        10 → 20 → 30 → null
    
        After shift():
        head
         ↓
        20 → 30 → null
        */
    
        // Move the head pointer to the next node
        // This removes the first node from the list
        this.head = this.head.next;
    
        // (Optional but clean) disconnect the removed node from the list
        removedNode.next = null;
    
        // Decrease the list length
        this.length--;
    
        // Return the node that was removed
        return removedNode;
    }

 
 /*
    Insert Node
     Example:
        Current list: 10 → 20 → 30
        Insert 25 at index 2
        Result: 10 → 20 → 25 → 30
        We’ll use this example:

10 → 20 → 30 → 40

We want to insert 25 at index 2.

✅ 1️⃣ We validate the index
❓ Why?

Because the list only has certain positions.

If the list length is 4, valid indexes are:

0, 1, 2, 3, 4

If someone says:

Insert at -1 ❌

Insert at 10 ❌

That position doesn’t exist.

If we don’t check:

We might try to access null

The program might crash

The list could break

👉 So we validate first to make sure the request makes sense.

✅ 2️⃣ We traverse to the node before the desired index
❓ Why?

Because in a singly linked list:

We cannot jump directly to index 2 like an array.

We must start from the head and move step by step.

More importantly:

If we want to insert at index 2 (before 30),
we must stop at index 1 (node 20).

Why?

Because 20 is the node that is pointing to 30.

20 → 30

If we want to put 25 in between, we must change 20’s arrow.

👉 We stop one node before because that’s the node whose .next we must change.

✅ 3️⃣ We insert the new node by updating the pointers
❓ Why?

Because a linked list is just nodes connected by arrows (pointers).

Right now:

20 → 30

To insert 25, we must:

Make 25 point to 30

Make 20 point to 25

So it becomes:

20 → 25 → 30

If we forget one of these:

We might lose 30 and everything after it

The chain would break

👉 The list only works if all arrows connect properly.
        */
insertNode(index, value) {
        // 1️⃣ Validate index
        // If index is less than 0 or greater than list length, insertion is not possible
        if (index < 0 || index > this.length) {
            return false;
        }

        // 2️⃣ Create a new node with the given value
        let newNode = new Node(value);

        // 3️⃣ Case 1: Insert at the beginning (index 0)
        if (index === 0) {
            // Point the new node's next to the current head
            newNode.next = this.head;

            // Update head to point to the new node
            this.head = newNode;

            // If the list was empty, also update tail to point to the new node
            if (this.length === 0) {
                this.tail = newNode;
            }

            // Increase list length
            this.length++;

            // Return the updated list
            return this;
        }

        // 4️⃣ Case 2: Insert at the end (index === length)
        if (index === this.length) {
            // Link the current tail to the new node
            this.tail.next = newNode;

            // Update tail to point to the new node
            this.tail = newNode;

            // Increase list length
            this.length++;

            return this;
        }

        // 5️⃣ Case 3: Insert in the middle
        // Start traversal from head
        let previousNode = this.head;

        // Traverse the list to find the node **right before** the insertion point
        for (let i = 0; i < index - 1; i++) {
            previousNode = previousNode.next;
        }
        /* while loop version
      let previousNode = this.head;
      let i = 0;
      while (i < index - 1) {
      previousNode = previousNode.next;
      i++;
         }
      */

        // Link the new node to the next node
        newNode.next = previousNode.next;

        // Link the previous node to the new node
        previousNode.next = newNode;

        // Increase list length
        this.length++;

        // Return the updated list
        return this;
    }


    remove(index) {

        /*
        Remove a node at a specific index
    
        Example:
        List: 10 → 20 → 30
        remove(1)
    
        Result: 10 → 30
        Returns: Node(20)
        */
    
        // Validate index
        if (index < 0 || index >= this.length) {
            console.log("NO index found in the list")
            return null;
        }
    
        // Case 1: Remove the first node
        if (index === 0) {
            return this.shift(); // call function shift
        }
    
        // Case 2: Remove the last node
        if (index === this.length - 1) {
            return this.pop(); // call function pop
        }
    
        // Case 3: Remove a middle node
    
        // Traverse to the node before the one we want to remove
        // We traverse to the node before the target 
        // so we can update its next pointer to skip the node being removed 
        // and keep the linked list connected.
        let previousNode = this.head;
    
        for (let i = 0; i < index - 1; i++) {
            previousNode = previousNode.next;
        }
    
        // Store the node we want to remove
        let removedNode = previousNode.next;
    
        // Relink nodes to skip the removed node
        // console.log(removeNode.next) // same as previousNode.next.next  
        previousNode.next = removedNode.next;
    
        // Decrease list length
        this.length--;
        removedNode.next = null;
    
        return removedNode;
        /*
        🔑 One Rule That Controls Everything

        Almost all linked list deletion follows this formula:

        previous.next = nodeToDelete.next
            Instead of thinking:

            ❌ "Remove the node at index"

        Think:

        ✅ "Find the node BEFORE the one I want to remove."
        */
    }

    getNode(index) {
        /*
        Returns the node at a specific index
        Example:
        List: 10 → 20 → 30
        getNode(1) returns Node(20)
        */
    
        // Validate index: must be between 0 and length-1
        if (index < 0 || index >= this.length) {
            return null;
        }
    
        // Start from head
        let currentNode = this.head;
    
        // Move forward `index` times
        // After loop, currentNode points to the node at position `index`
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
    
        return currentNode;
    }


    reverseList() {

        /*
        PURPOSE:
        Reverse the linked list in-place (no extra array).

        Example: 
        Before:
        head
         ↓
        10 → 20 → 30 → 40 → null
                         ↑
                        tail
        After:
        head
         ↓
        40 → 30 → 20 → 10 → null
                         ↑
                        tail
        */
        // If the list is empty, nothing to reverse
        if (!this.head) {
            return null;
        }
    
        // If the list has only one node,
        // reversing does nothing
        if (this.head === this.tail) {
            return this;
        }
    
        /*
        We need 3 pointers to reverse a singly linked list:
    
        1. currentNode  → the node we are currently processing
        2. previousNode → the node that comes before currentNode
        3. nextNode     → temporarily stores the next node
                          (so we don’t lose the rest of the list)
        */
    
        let currentNode = this.head;   // Start from the head
        let previousNode = null;       // Initially null (new tail will point to null)
        let nextNode = null;           // Temporary storage, this will hold the value of currentNode.next, 
        //this helps us to traverse  to the end of linkedList
       
        // Important:
        // The old head will become the new tail
        this.tail = this.head;
    
        /*
        MAIN IDEA:
        For each node:
        1. Save next node
        2. Reverse pointer
        3. Move previous forward
        4. Move current forward
        After reversing a singly linked list, you must 
        repoint both head and tail to the correct nodes.
        Because reversing only changes the internal next pointers — 
        it does NOT automatically update your external references.
        */
    
        while (currentNode) // the loop runs as long as currentNode is not null
        {
    
            // Step 1: Hold the value of the next node
            // will help where the currentNode will point to for traverse
            nextNode = currentNode.next;
    
            // Step 2: Reverse pointer
            // Instead of pointing forward,
            // make it point backward
            currentNode.next = previousNode;
    
            // Step 3: Move previous forward
            previousNode = currentNode;
            // console.log("__ "+previousNode.next)
    
            // Step 4: Move current forward
            currentNode = nextNode;
        }
        /*
        When loop finishes:
    
        previousNode = new head
        currentNode  = null
    
        So we update head
        */

        this.head = previousNode;
        return this;
    }


/*
     updateNode(index, value) — update node value

Change the value of a node at a given index.

List: 10 → 20 → 30
updateNode(1, 25)
Result: 10 → 25 → 30

Why: Useful in algorithms or when editing data in-place.
*/
updateNode(index, newValue) {

    // Step 1: If the list is empty, there is nothing to update
    if (!this.head) {
        return null;
    }

    // Step 2: Validate the index
    // Index must be within 0 and length - 1
    // If it's out of bounds, we cannot update anything
    if (index < 0 || index >= this.length) {
        return null;
    }

    // Step 3: Start from the head of the list
    // We will move step by step until we reach the desired index
    let currentNode = this.head;

    // Traverse the list until we reach the node at the given index
    // For example, if index is 2, we move forward 2 times
    for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
    }

    // Step 4: Update the node's value
    // Once we reach the correct node, we replace its value
    currentNode.value = newValue;

    // Return the updated value (or you could return true)
    return newValue;
}

clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
 }

 toArray() {
    /*
    PURPOSE:
    Convert the linked list into a standard JavaScript array.

    Example:
    List: 10 → 20 → 30 → 40
    Result: [10, 20, 30, 40]
    */

    // Step 1️⃣: Create an empty array to store the values
    let result = [];

    // Step 2️⃣: Start traversal from the head
    let currentNode = this.head;

    // Step 3️⃣: Walk through each node until we reach the end (null)
    while (currentNode) {
        // Add the current node's value to the array
        result.push(currentNode.value);

        // Move to the next node in the list
        currentNode = currentNode.next;
    }

    // Step 4️⃣: Return the array containing all node values
    return result;
}

includes(value) {
    /*
    PURPOSE:
    Check if a value exists in the linked list.

    Example:
    List: 10 → 20 → 30 → 40
    includes(30) returns true
    includes(50) returns false
    */

    let currentNode = this.head; // Start at the head

    while (currentNode) { // Traverse the list
        if (currentNode.value === value) {
            return true; // Found the value
        }
        currentNode = currentNode.next; // Move to next node
    }

    return false; // Value not found
}

toFind(value) {
    /*
    PURPOSE:
    Search for a node by its value in the linked list.

    Example:
    List: 10 → 20 → 30 → 40
    toFind(30) returns Node(30)
    toFind(50) returns null
    */

    // Step 1️⃣: Start at the head
    let currentNode = this.head;

    // Step 2️⃣: Traverse the list until the end
    while (currentNode) {
        // Step 3️⃣: Check if current node's value matches
        if (currentNode.value === value) {
            return currentNode; // Found the node
        }

        // Step 4️⃣: Move to the next node
        currentNode = currentNode.next;
    }

    // Step 5️⃣: Value not found
    return null;
}

}

// [10,next]->[20,next]->[30,next]->null
let list = new SinglyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
let array = list.toArray();
console.log(array.includes(20))
list.print();

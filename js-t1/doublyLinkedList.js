

class Node
{
constructor(value)
{
    this.value = value;
    this.next = null;
    this.previous = null
}
}
//  let first = new Node (20);
//  first.next = new Node("Hello");
//  first.next.previous = first;
//  let third = new Node("This is heo");

//  first.next.next = third;
//  third.previous = first.next;



// console.log(first)


class doubleLinkedList
{
    constructor()
    {
            this.head = null;
            this.tail = null;
            this.length =0;
    }
    push(newValue)
    {
        let newNode = new Node(newValue);
           // if newNode is the first node in the list then
        // head and tail pointing to the first node
        if (!this.head) {
            this.head = newNode; //
            this.tail = newNode;
        }
        else
        {
            this.tail.next = newNode;
            
            newNode.previous = this.tail;// same as this.tail.next.previous = this.tail;
             // Because this.tail.next is already newNode.
            this.tail = newNode;
        }
        this.length++;
        return this
    }
    pop() {

        // If the list is empty, there is nothing to remove
        if (!this.head) {
            return undefined;
        }
    
        // Store the current tail node
        // We will return this node after removing it
        let temp = this.tail;
    
        // If the list only has one node
        if (this.length === 1) {
    
            // Removing that node makes the list empty
            this.head = null;
            this.tail = null;
    
        } 
        else {
    
            // Move the tail pointer one node backward
            // (because we are removing the current tail)
            this.tail = this.tail.previous;
    
            // Disconnect the new tail from the removed node
            // so the list properly ends with null
            this.tail.next = null;
    
            // Optional but good practice:
            // detach the removed node from the list
            temp.previous = null;
        }
    
        // Decrease the length because we removed one node
        this.length--;
    
        // Return the removed node
        return temp;
    }
  shift()
{
    /*
             ->     ->    ->    ->
       null    3      4     5     6     null
            <-   <-     <-    <-
    */

    // If the list is empty, there is nothing to remove
    if(!this.head)
    {
        return undefined;
    }

    // Save the current head node
    // We store it because we will remove it but still want to return it
    let oldHead = this.head; // hold the value of head

    // Case 1: If there is only ONE node in the list
    if(this.length === 1)
    {
        // Removing the only node makes the list empty
        this.head = null;
        this.tail = null;
    }
    else{

        // Move the head pointer forward to the next node
        // because the current head will be removed
        this.head = oldHead.next;

        // The new head should not point back to the removed node
        this.head.previous = null;

        // Disconnect the removed node from the list
        // This prevents the removed node from still referencing the list
        oldHead.next = null;
    }

    // One node has been removed, so decrease the length
    this.length--;

    // Return the removed node
    return oldHead;
}

unshift(value)
{
      /*
             ->     ->    ->    ->
       null    3      4     5     6     null
            <-   <-     <-    <-

       Current list

       We want to insert a new node at the beginning

            new node
            -> null
             2
       null <-

       After insertion:

             ->     ->    ->    -> 
       null    2      3     4     5     6     null
            <-   <-     <-    <-
    */

    // Create a new node with the given value
    let newNode = new Node(value);

    // If the list is empty (no head yet)
    if(!this.head || this.length === 0)
    {
        // The new node becomes both the head and tail
        // because it is the only node in the list
        this.head = newNode;
        this.tail = newNode;
    }
    else
    {
        // Connect the current head back to the new node
        // (because this is a doubly linked list)
        this.head.previous = newNode;

        // Connect the new node forward to the current head
        newNode.next = this.head;

        // Move the head pointer to the new node
        // because the new node is now the first node
        this.head = newNode;
    }

    // Increase the length since we added a node
    this.length++;

    // Return the list so methods can be chained
    return this;
}

getNode1(index)
{

     /*
             ->     ->    ->    ->   ->
       null    3      4     5     6     7  null
            <-   <-     <-    <-     <-
    */

    // Validate index: must be between 0 and length-1
    if (index < 0 || index >= this.length) {
        return null;
    }

    // Find the middle of the list
    // We use this to decide whether to start from head or tail
    let middle = Math.floor(this.length / 2);

    // If index is in the first half of the list
    if(index <= middle)
    {
        // Start from head
        console.log("WORKING FROM START")
        let currentNode = this.head;

        // Move forward until we reach the target index
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }
    else{

        // Start from tail
        console.log("WORKING FROM END")
        let currentNode = this.tail;

        // Move backwards until we reach the target index
        for (let i = this.length - 1; i > index; i--) {
            currentNode = currentNode.previous;
        }

        return currentNode;
    }
}

getNodeV2(index)
{
    if (index < 0 || index >= this.length) return null;

    let middle = Math.floor(this.length / 2);
    let currentNode;
    let counter;

    if (index < middle) {
        currentNode = this.head;
        counter = 0;

        // Move forward until we reach the target index
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
    } else {
        currentNode = this.tail;
        counter = this.length - 1;

        // Move backward until we reach the target index
        while (counter !== index) {
            currentNode = currentNode.previous;
            counter--;
        }
    }

    return currentNode;
}


    printV1() {
        let currentNode = this.head; // currentNode now has [value, next]
        // as long as currentNode not null, we still print out the value
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
    printV2() {
        let arr = [];
        let currentNode = this.head;
    
        while (currentNode) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
    
        return arr;
    }
}

 let doulist = new doubleLinkedList();
 doulist.push(3)
 doulist.push(2)
 doulist.push(4)
 doulist.push(5)
 doulist.push(6)
 doulist.push(7)
//  doulist.unshift(21);
console.log(doulist.getNode(2))

//  console.log(doulist.printV1());

 


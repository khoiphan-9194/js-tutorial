


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



class Queue {
    constructor() {
        this.first = null; 
        this.last = null;  
        this.size = 0;     // number of elements
    }
    /*
    2->3->4->5
    */
    enqueue(val)
    {
        let newNode = new Node(val)
        
        if(!this.first|| this.size===0)
        {
            this.first = newNode;
            this.last = newNode;
        }
        else
        {
            this.last.next = newNode;
            this.last = newNode;
        }
     
        return ++this.size;
    }
    
    dequeue()
    {
        if(!this.first)
        {
            return null;
        }
        let removedNode = this.first;
        if(this.first === this.last)
        {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return removedNode.value;
    }

}

   let queue = new Queue();
 console.log(queue.enqueue(10));
 console.log(queue.enqueue(20));
 console.log(queue.enqueue(30));

 console.log(queue.dequeue());


 console.log(queue.enqueue(22))




   

 
// Each node in the tree
class Node {
    constructor(value) {
        this.value = value;  // store the value
        this.left = null;    // left child
        this.right = null;   // right child
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null; // start with an empty tree
    }



insertRecursive(value, node = this.root) {

        // Step 1: If the tree is empty (only happens on first call)
        // we create the root node
        if (!this.root) {
            this.root = new Node(value);
            return this; // return the whole tree
        }
    
        // Step 2: If the value already exists → do nothing
        if (value === node.value) {
            console.log("The node already exists");
            return this;
        }
    
        // Step 3: If value is smaller → go LEFT
        if (value < node.value) {
    
            // Step 3a: If there is NO left child → insert here
            if (!node.left) {
                node.left = new Node(value);
                return this;
            }
    
            // Step 3b: Otherwise → go deeper to the left (recursion)
            // IMPORTANT: we return so the result goes back up the call stack
            return this.insertRecursive(value, node.left);
        }
    
        // Step 4: If value is greater → go RIGHT
        else {
    
            // Step 4a: If there is NO right child → insert here
            if (!node.right) {
                node.right = new Node(value);
                return this;
            }
    
            // Step 4b: Otherwise → go deeper to the right (recursion)
            return this.insertRecursive(value, node.right);
        }
    }

    insertNode(value) {

        /*
             10
            /  \
           5    15
                  \
                  20
        */

        // Step 1: Create a new node with the given value
        let newNode = new Node(value);

        // Step 2: If tree is empty → make new node the root
        if (!this.root) {
            this.root = newNode;
            return this; // return the tree
        }

        // Step 3: Start from the root
        let current = this.root;

        // Step 4: Traverse the tree to find correct position
        while (true) {

            // Step 5: Prevent duplicate values
            if (value === current.value) {
                console.log("Error: Duplicate value not allowed");
                return undefined;
            }

            // Step 6: If value is smaller → go LEFT
            if (value < current.value) {

                // If no left child → insert here
                if (!current.left) {
                    current.left = newNode;
                    return this; // ⛔ STOP LOOP HERE
                }

                // Otherwise move to left child and repeat loop
                current = current.left;
            }

            // Step 7: If value is greater → go RIGHT
            else {

                // If no right child → insert here
                if (!current.right) {
                    current.right = newNode;
                    return this; // ⛔ STOP LOOP HERE
                }

                // Otherwise move to right child and repeat loop
                current = current.right;
            }
        }
    }

    findNode_V1(targetValue) {
        /*
             10
            /  \
           5    15
                  \
                  20
        */
        // Step 1: If the tree is empty → nothing to search
        if (!this.root) {
            return false;
        }
    
        // Step 2: Start from the root node
        let current = this.root;
    
        // Step 3: Keep searching while there is a node
        // (when current becomes null → stop)
        while (current) {
    
            // Step 4: If we found the value → return true
            if (targetValue === current.value) {
                console.log("Found");
                return true;
            }
    
            // Step 5: If target is smaller → go LEFT
            if (targetValue < current.value) {
    
                // Move to the left child
                current = current.left;
            }
    
            // Step 6: If target is bigger → go RIGHT
            else {
    
                // Move to the right child
                current = current.right;
            }
        }
    
        // Step 7: If we exit the loop → value was not found
        return false;
    }

    findNode_V2(targetValue) {    
        // Step 1: If the tree is empty → nothing to search
        if (!this.root) {
            return false;
        }
    
        // Step 2: Start from the root node
        let current = this.root;
    
        // Step 3: Keep searching while there is a node
        // (when current becomes null → stop)
        while (current) {
    
            // Step 4: If we found the value → return true
            if (targetValue === current.value) {
                console.log("Found");
                return true;
            }
    
            // Step 5: If target is smaller → go LEFT
            if (targetValue < current.value) {
    
                // Move to the left child
                current = current.left;
            }
    
            // Step 6: If target is bigger → go RIGHT
            else {
    
                // Move to the right child
                current = current.right;
            }
        }
    
        // Step 7: If we exit the loop → value was not found
        return false;
    }

    findNode_V4_Recursive(target, nodeFlow = this.root) {

        // Step 1: If the tree is empty (only on first call) → nothing to find
        if (!this.root) {
            return false;
        }
    
        // Step 2: If current node matches target → FOUND
        if (target === nodeFlow.value) {
            console.log("Node Found:", target);
            return true;
        }
    
        // Step 3: If target is smaller → go LEFT
        if (target < nodeFlow.value) {
    
            // If no left child → value does not exist
            if (!nodeFlow.left) {
                return false;
            }
    
            // Otherwise → search in left subtree (recursion)
            return this.findNode_V3_Recursive(target, nodeFlow.left);
        }
    
        // Step 4: If target is bigger → go RIGHT
        else {
    
            // If no right child → value does not exist
            if (!nodeFlow.right) {
                return false;
            }
    
            // Otherwise → search in right subtree (recursion)
            return this.findNode_V3_Recursive(target, nodeFlow.right);
        }
    }
   
    findNode_V5_Recursive(target, nodeFlow = this.root) {

        // Step 1: If current node is null → stop searching
        // (this means we reached the end and didn't find the value)
        if (!nodeFlow) {
            return false;
        }
    
        // Step 2: If value matches → FOUND
        if (target === nodeFlow.value) {
            console.log("Node Found:", target);
            return true;
        }
    
        // Step 3: If target is smaller → search LEFT subtree
        if (target < nodeFlow.value) {
            return this.findNode_V3_Recursive(target, nodeFlow.left);
        }
    
        // Step 4: If target is bigger → search RIGHT subtree
        else {
            return this.findNode_V3_Recursive(target, nodeFlow.right);
        }
    }
}
 /*
             10
            /  \
           5    15
                  \
                  20
        */
    


let t = new BinarySearchTree();
t.insertNode(15);
t.insertRecursive(10);
t.insertRecursive(5);

t.insertNode(20);


console.log(t.findNode_V3_Recursive(15));
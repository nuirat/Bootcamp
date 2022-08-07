class BSNode {
    constructor(value) {
      this.value = value;
      this.leftChild;
      this.rightChild;
    }
    insertNode(newVal) {
      if (!this.value) {
        this.value = newVal;
      } else if (newVal > this.value && this.rightChild) {
        this.rightChild.insertNode(newVal);
      } else if (newVal <= this.value && this.leftChild) {
        this.leftChild.insertNode(newVal);
      } else if (newVal <= this.value) {
        this.leftChild = new BSNode(newVal);
      } else {
        this.rightChild = new BSNode(newVal);
      }
    }
    removeNode(node, val) {
        if (!node)
            return undefined;
        else if (val < node.value) {
            node.leftChild = this.removeNode(node.leftChild, val);
            return node;
        } else if (val > node.value) {
            node.rightChild = this.removeNode(node.rightChild, val);
            return node;
        } else {
            if (!node.leftChild && !node.rightChild) {
                node = undefined;
                return node;
            } else if (!node.leftChild) {
                node = node.rightChild;
                return node;
            } else if (!node.rightChild) {
                node = node.leftChild;
                return node;
            }


            let minNode = this.findMinNode(node.leftChild);
            node.value = minNode.value;


            node.leftChild = this.removeNode(node.leftChild, minNode.value);
            return node;
        }


    }
    findMinNode(node) {
        if (!node.rightChild)
            return node;
        else
            return this.findMinNode(node.rightChild);
    }
  }
  
  const node = new BSNode(15);
  node.insertNode(25);
  node.insertNode(10);
  node.insertNode(7);
  node.insertNode(22);
  node.insertNode(17);
  node.insertNode(13);
  node.insertNode(5);
  node.insertNode(9);
  node.insertNode(27);
  
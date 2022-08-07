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
  findNode(node, data)
  {
      if(node == undefined)
          return false;
      
      else if(data < node.value)
          return this.findNode(node.leftChild, data);
  
      else if(data > node.value)
          return this.findNode(node.rightChild, data);

      else
          return true;
  } 
}

const node =new BSNode(15)
node.insertNode(25)
node.insertNode(10)
node.insertNode(7)
node.insertNode(22)
node.insertNode(17)
node.insertNode(13)
node.insertNode(5)
node.insertNode(9)
node.insertNode(27)
console.log(node.findNode(node,25));


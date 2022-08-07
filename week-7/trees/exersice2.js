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
  findCommonParent(node1, node2) {
    return this.findCommonParentForTree(this, node1, node2);
  }

  findCommonParentForTree(root, node1, node2) {
    if (!root) {
      return null;
    } else if (root.value === node1 || root.value === node2) {
      return root;
    }

    let leftCommon = this.findCommonParentForTree(root.leftChild, node1, node2);
    let rightCommon = this.findCommonParentForTree(
      root.rightChild,
      node1,
      node2
    );

    if (leftCommon && rightCommon) {
      return root;
    } else {
      return leftCommon ? leftCommon : rightCommon;
    }
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

class LinkedList {
  constructor() {
    this.headNode = null;
    this.tailNode = null;
  }

  append(value) {
    let node = new Node();
    node.value = value;
    if (!this.tailNode) {
      this.tailNode = node;
      this.headNode = node;
    } else {
      this.tailNode.nextNode = node;
      this.tailNode = node;
    }
  }
  prepend(value) {
    let node = new Node();
    node.value = value;
    if (!this.headNode) {
      this.headNode = node;
      this.tailNode = node;
    } else {
      node.nextNode = this.headNode;
      this.headNode = node;
    }
  }
  size() {
    let current = this.headNode;
    let res = 0;
    if (current == null) {
      return 0;
    } else
      while (current !== null) {
        res += 1;
        current = current.nextNode;
      }
    return res;
  }
  head() {
    return this.headNode;
  }
  tail() {
    return this.tailNode;
  }
  at(index) {
    if (index >= this.size()) {
      throw new Error("this index is bigger than the list's size!");
    } else if (this.size == 0) {
      throw new Error("the list is empty!");
    } else {
      let currentNode = this.headNode;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.nextNode;
      }
      return currentNode;
    }
  }
  pop() {
    if (this.size() == 0 || this.size() == 1) {
      this.headNode = null;
      this.tailNode = null;
    } else {
        let aux=this.at(this.size() - 2)
      aux.nextNode = null;
      this.tailNode = aux;
    }
  }
  contains(value) {
    if (this.size() == 0) {
      throw new Error("the list is empty!");
    } else {
      let current = this.headNode;
      while (current !== null) {
        if (current.value == value) {
          return true;
        } else {
          current = current.nextNode;
        }
      }
      return false;
    }
  }
  find(value) {
    if (this.size() == 0) {
      throw new Error("the list is empty!");
    } else {
      let current = 0;
      let currentNode = this.headNode;
      while (currentNode !== null) {
        if (currentNode.value == value) {
          return current;
        } else {
          currentNode = currentNode.nextNode;
          current += 1;
        }
      }
      return null;
    }
  }
  toString() {
    if (this.headNode == null) {
      return "null";
    } else {
      let res = "";
      let current = this.headNode;
      while (current !== null) {
        res += "(" + current.value + ") -> ";
        current = current.nextNode;
      }
      return res + " null";
    }
  }
  insertAt(value, index) {
    if (index > this.size()) {
      throw new Error("this index is bigger than the list's size!");
    }
    else if(this.headNode===null){
        node=new Node();
        node.value=value;
        this.append(node);
    }
    else{
        let current=0;
        let currentNode=this.headNode;
        let afterCurrentNode=this.headNode;
        while(current<index-1){
            current+=1;
            currentNode=currentNode.nextNode;
            afterCurrentNode=currentNode.nextNode;
        }
        let insert=new Node();
        insert.nextNode=afterCurrentNode;
        insert.value=value;
        currentNode.nextNode=insert;

    }
  }
  removeAt(index){
    if (index >= this.size()) {
        throw new Error("this index is bigger than the list's size!");
      }
      else{
        let current=0;
        let currentNode=this.headNode;
        let afterCurrentNode=this.headNode;
        while(current<index-1){
            current+=1;
            currentNode=currentNode.nextNode;
            afterCurrentNode=currentNode.nextNode;
        }
        currentNode.nextNode=afterCurrentNode.nextNode;

      }
  }
}
class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}

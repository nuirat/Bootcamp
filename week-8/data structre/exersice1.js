class UniqueArray {
  constructor() {
    this.array = new Set();
  }
  add(item) {
     this.array.add(item) 
  }
  showAll(){
    this.array.forEach(item=>console.log(item))
  }
  exisist(item){
    return this.array.has(item)
  }
  get(item){
    if(!this.array.has(item))
    return -1
    let index=0
    console.log(this.array.size);
    for (let i of this.array)
    {
     if(i==item)
     return index
     index++
    }

  }


}
uniqueArray = new UniqueArray()
uniqueArray.add(5)
uniqueArray.add(4)
uniqueArray.add(1)
uniqueArray.showAll()
console.log(uniqueArray.exisist(5));
console.log(uniqueArray.get(5));


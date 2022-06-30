let i=0
numbers=[1,2,3,4,5,6,7,8,9,10]
const myObject = {
    
    [Symbol.iterator]() {
        let i = 0;
        numbers=[1,2,3,4,5,6,7,8,9,10]

        return {
           
          next() {
            i++;
            if(numbers[i]%2)
            this.next()
            //console.log("Returning", i);
            if (i === numbers.length) return { done: true, value: i };
            return { done: false, value: numbers[i] };
          },

       
          
          
        };

      }
}

    
    for (let x of myObject) {
        console.log(x)
    }
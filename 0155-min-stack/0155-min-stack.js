
var MinStack = function() {
  this.stack=[]
  this.minStack=[]
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if(this.minStack.length==0 ||val<=this.minStack[this.minStack.length-1]){
        this.minStack.push(val)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
 
    if(this.minStack.length && this.stack.pop()==this.minStack[this.minStack.length-1]){
        this.minStack.pop()
    }
       if(this.stack.length==0 ){
        return 'Stack is empty'
    }

};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
      if(this.minStack.length==0){
        console.log("stack is empty,cannot retrive top")
        return null
    }
    return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.minStack.length==0){
        console.log("Min stack is empty")
        return null
    }
    return this.minStack[this.minStack.length-1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    let slow=head;
    let fast=head
    let prev=null
    let arr
    while(fast && fast?.next){
        prev=slow;
        slow=slow.next
        fast=fast.next.next
    }
   if(prev?.next){ prev.next=slow.next
   }else{
    head=prev
   }
return head
    
};
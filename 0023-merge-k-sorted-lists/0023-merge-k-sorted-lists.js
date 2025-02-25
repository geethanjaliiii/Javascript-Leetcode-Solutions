/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length===0) return null
    return mergeHelper(lists,0,lists.length-1)
};

function mergeHelper(lists,left,right){
    if(left===right) return lists[left]
    let mid=left+Math.floor((right-left)/2)
    let mergedLeft=mergeHelper(lists,left,mid)
    let mergedRight=mergeHelper(lists,mid+1,right)
    return merge(mergedLeft, mergedRight)
}
function merge(list1,list2){
    let result=new ListNode();
    let newHead=result;

    while(list1 && list2){
        if(list1.val<list2.val){
            result.next=list1;
            list1=list1.next
        }else{
            result.next = list2;
            list2=list2.next
        }
        result=result.next
    }
    if(list1) result.next=list1;
    if(list2) result.next=list2
    return newHead.next;
}
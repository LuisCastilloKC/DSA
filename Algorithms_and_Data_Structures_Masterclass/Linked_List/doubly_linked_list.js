

class Node{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class Dobly_link_list{
    constructor(){
        this.head = null
        this.tail = null
    }
// This how to add to the end of a list
    append(val){
        let newNode = new Node(val)
        // If it is empty
        if(!this.tail){
            this.head = newNode
            this.tail = newNode
            // If is not empty
        } else {
            // this is grabing the old tail
            let oldTail = this.tail
            // setting the tail to be the new node
            this.tail = newNode
            // The old tail Next to be the New tail
            oldTail.next = this.tail
            // setting the new Tail prev to be the oldTail
            this.tail.prev = oldTail
        }
    }

}

// let dll = new Dobly_link_list()
// dll.append(20)


class Node{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class Dll{
    constructor(){
        this.head = null
        this.tail = null
    }

    append(val){
        let newNode = new Node(val)
        
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            let oldHead = this.head
            this.head = newNode

            oldHead.prev = this.head
             
            this.head.next = oldHead
        }
    }

}
class ListNode<T> {
    prev_: ListNode<T>;
    next_: ListNode<T>;
    data_: T;

    public constructor(data: T) {
        this.data_ = data;
        this.prev_ = null;
        this.next_ = null;
    }
}

export class LinkedList<T> {
    private head_: ListNode<T>;
    private tail_: ListNode<T>;

    public constructor() {
        this.head_ = null;
        this.tail_ = null;
    }

    public getHead() : T {
        if(this.head_ === null ) throw Error();
        return this.head_.data_;
    }

    public getTail() : T {
        return this.tail_.data_;
    }

    public insertBack(data:T) {
        if( this.head_ === null ) {
            this.head_ = new ListNode(data);
            this.tail_ = this.head_;
            return
        }
        this.tail_.next_ = new ListNode(data);
        this.tail_.next_.prev_ = this.tail_;
        this.tail_ = this.tail_.next_;
    }

    public insertFront(data:T) {
        if( this.head_ === null ) {
            this.head_ = new ListNode(data);
            this.tail_ = this.head_;
            return
        }

        this.head_.prev_ = new ListNode(data);
        this.head_.prev_.next_ = this.head_;
        this.head_ = this.head_.prev_;
    }

    public popFront() : T {
        if(this.head_ === null ) throw Error();

        let ret_val = this.head_.data_;
        if(this.head_ === this.tail_ ) {
            this.head_ = null;
            this.tail_ = null;
        } else {
            this.head_.next_.prev_ = null;
            this.head_ = this.head_.next_;
        }
        return ret_val
    }

    public popBack() : T {
        if(this.tail_ === null ) throw Error();

        let ret_val = this.tail_.data_;
        if(this.head_ === this.tail_) {
            this.head_ = null;
            this.tail_ = null;
        } else {
            this.tail_.prev_.next_ = null;
            this.tail_ = this.tail_.prev_;
        }
        return ret_val;
    }
}
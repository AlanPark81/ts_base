import { LinkedList } from "../src/linkedlist"

describe("LinkedList", () => {
    it("insert_front & insert_back", () => {
        let list = new LinkedList<number>();
        expect(()=>{list.getHead()}).toThrow();
        for(var i=0 ; i<100 ;i++ ) {
            if(i%2 == 0){
                list.insertFront(i);
                expect(list.getHead()).toBe(i);
            } else {
                list.insertBack(i);
                expect(list.getTail()).toBe(i);
            }
            if(i==0){
                expect(list.getHead()).toBe(list.getTail())
            } else {
                expect(list.getHead()).not.toBe(list.getTail())
            }
        }
    });

    it("pop_back & pop_front", () => {
        let list = new LinkedList<number>();
        expect(()=>{list.getHead()}).toThrow();
        for(var i = 0 ; i<100 ;i++ ) {
            if(i%2 == 0){
                list.insertFront(i);
                expect(list.getHead()).toBe(i);
            } else {
                list.insertBack(i);
                expect(list.getTail()).toBe(i);
            }
            if(i==0){
                expect(list.getHead()).toBe(list.getTail())
            } else {
                expect(list.getHead()).not.toBe(list.getTail())
            }
        }

        for(var i = 0 ; i < 100 ; i++) {
            var modulo = list.popFront()%2;
            if(i<50)
                expect(modulo).toBe(0);
            else
                expect(modulo).toBe(1);
        }

        list = new LinkedList();
        for(var i = 0 ; i < 100 ; i++) {
            list.insertBack(i);
        }

        for(var i = 0 ; i < 100 ; i++) {
            expect(list.popBack()).toBe(99-i);
        }
        expect(()=>{
            list.popBack()
        }).toThrow();

        expect(()=>{
            list.getHead()
        }).toThrow();


        list = new LinkedList();
        for(var i = 0 ; i < 100 ; i++) {
            list.insertBack(i);
        }

        for(var i = 0 ; i < 100 ; i++) {
            expect(list.popFront()).toBe(i);
        }
        expect(()=>{
            list.popFront()
        }).toThrow();
        expect(()=>{
            list.getTail()
        }).toThrow();
    })
});

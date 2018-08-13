(function(){
    'use strict';
    function getDataStructure() {
        var dStructure = {
            stack : function() {
                this.values=[];
            },    
            linkedList : function(){
                singlyLinkedList = function(){
                    this.head = null;
                    this.size = 0;
                },
                doublyLinkedList = function(){

                }
            }
        };
        function addPrototypes(){
            function stackProtos(){
                dStructure.stack.prototype.pop = function(){
                    if(this.values){
                        return this.values.pop();
                    }
                    else{
                        console.log("Stack empty");
                    }
                },
                dStructure.stack.prototype.push = function(item){
                    try{
                        if(item){
                            this.values.push(item);
                        }
                    }
                    catch(e){
                        console.log(e);
                    }
                },
                dStructure.stack.prototype.peek = function(){
                    if(this.values){
                        return this.values[this.values-1];
                    }
                    else{
                        console.log("stack empty");
                    }
                },
                dStructure.stack.prototype.isEmpty = function(){
                    return this.values.length == 0;
                },
                dStructure.stack.prototype.printStack = function(){
                    return this.values;
                }
                return dStructure;
            }
            function linkedListProtos() {
                function singlyLinkedListProtos() {
                    dStructure.linkedList.singlyLinkedList.node = function(element){
                            this.value = element;
                            this.next = null;
                            return this;
                    },
                    dStructure.linkedList.singlyLinkedList.addNode = function(element){
                        let node = new dStructure.linkedList.singlyLinkedList.node(element);
                        let currentNode;
                        if(this.head == null){
                            this.head = node;
                        }
                        else{
                            current = this.head;
                            while(current.next){
                                current = current.next;
                            }
                            current.next = node;
                        }
                        this.size++;
                    },
                    
                }
                function doublyLinkedListProtos() {

                }
                return singlyLinkedListProtos(), doublyLinkedListProtos();
            }
            return stackProtos(), linkedListProtos();
        }
        addPrototypes();
        return dStructure;
    }
    if(typeof(dStructure) === 'undefined'){
        window.dStructure = getDataStructure();
    }
})();
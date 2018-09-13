(function(){
    'use strict';
    function getDataStructure() {
        var dStructure = {
            stack : function() {
                this.values=[];
            },    
            queue : function(){
                this.head = null;
                this.tail = null;
                this.values=[];
            },
            linkedList : function(){
                var linkedList = {
                    singlyLinkedList: function (){
                        this.head = null;
                        this.size = 0;
                    },
                    doublyLinkedList : function(){
                        this.head = null;
                        this.tail = null;
                        this.size = 0;
                    },
                    circularLinkedList :function(){
                        this.head=null;
                        this.size=0;
                    }
                }
               return linkedList;
            },
            Graph : function() {
                this.vertices = [];
                this.edges = [];
                this.numberOfEdges = 0;
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
            function queueProtos(){
                dStructure.queue.prototype.add = function(element){
                    if(element){
                        if(this.values.length == 0){
                            this.values.push(element);
                            this.head = this.values[0];
                            this.tail = null;
                            return this;
                        }
                        this.values.push(element);
                        this.tail = element;
                        return this;
                    }
                },
               
                dStructure.queue.prototype.pop = function(){
                    return this.values.shift();
                },
           
                dStructure.queue.prototype.length = function(){
                    return this.values.length;
                }
                return dStructure;
            }
            function linkedListProtos() {
                function singlyLinkedListProtos() {
                    dStructure.linkedList().singlyLinkedList.prototype.node = function(element){
                            this.value = element;
                            this.next = null;
                            return this;
                    },
                    dStructure.linkedList().singlyLinkedList.prototype.addNode = function(element){
                        let node = new dStructure.linkedList().singlyLinkedList.node(element);
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
                    dStructure.linkedList().singlyLinkedList.prototype.insertNodeAt = function(element, index){
                        if(index>0 && index> this.size){
                            return false;
                        }
                        else{
                            let node = new dStructure.linkedList().singlyLinkedList.node(element);
                            let current, previous;
                            current = this.head;
                            if(index == 0){
                                node.next = this.head;
                                this.head = node;
                            }  
                            else{
                                curr = this.head;
                                var count = 0;
                                while (count < index) {
                                    count++;
                                    prev = curr;
                                    curr = curr.next;
                                }
                                node.next = curr;
                                prev.next = node;
                            }
                            this.size++;
                        }
                    },
                    dStructure.linkedList().singlyLinkedList.prototype.removeNodeAt = function(index){
                        if(index > 0 && index > this.size){
                            return false;
                        }
                        else{
                            var current, previous, count=0;
                            current = this.head;
                            previous = current;
                            if(index==0){
                                this.head = current.next;
                            }
                            else{
                                while(count < index){
                                    count++;
                                    previous = current;
                                    current = current.next;
                                }
                                previous.next = current.next;
                            }
                            this.size--;
                            return current.element;
                        }
                    },
                    dStructure.linkedList().singlyLinkedList.prototype.removeElement= function(element)
                    {
                        var current = this.head;
                        var previous = null;
                     
                        // iterate over the list
                        while (current != null) {
                            // comparing element with current
                            // element if found then remove the
                            // and return true
                            if (current.element === element) {
                                if (previous == null) {
                                    this.head = current.next;
                                } else {
                                    previous.next = current.next;
                                }
                                this.size--;
                                return current.element;
                            }
                            previous = current;
                            current = current.next;
                        }
                        return -1;
                    },
                    dStructure.linkedList().singlyLinkedList.prototype.indexOf = function(element){
                        let count = 0;
                        let current = this.head;
                        while(current != null){
                            if(current.element === element)
                                return count;
                            count++;
                            current = current.next;
                        }
                        return -1;
                    },
                    dStructure.linkedList().singlyLinkedList.prototype.isEmpty = function(){
                        return this.size == 0;
                    },
                    dStructure.linkedList().singlyLinkedList.prototype.listSize = function(){
                        return this.size;
                    },
                    dStructure.linkedList().singlyLinkedList.prototype.printList = function(){
                        return this;
                    }
                    return dStructure;
                }
                function doublyLinkedListProtos() {
                    dStructure.linkedList().doublyLinkedList.prototype.Node = function(element){
                        this.element=element;
                        this.next=null;
                        this.previous=null;
                    }
                    dStructure.linkedList().doublyLinkedList.prototype.addNode=function(element){
                        if(element){
                            let node = new Node(element);
                            if(this.size == 0){
                                this.head=node;
                                this.size++;
                                return this;
                            }
                            let current, count=0;
                            current = this.head;
                            while(current.next){
                                current = current.next;
                                if(this.size == count+1){
                                    break;
                                }
                                count++;
                            }
                            node.previous = current;
                            node.next = this.head;
                            current.next = node;
                            this.tail= current.next;
                            this.size++;
                            return this;
                        }
                    }
                    dStructure.linkedList().doublyLinkedList.prototype.insertNodeAt=function(index, element){
                        if(element && index){
                            let node = new Node(element);
                            if(this.size == 0){
                                this.head=node;
                                this.size++;
                                return this;
                            }
                            let current, count=0;
                            current = this.head;
                            while(current.next){
                                current = current.next;
                                if(index == count){
                                    break;
                                }
                                count++;
                            }
                            node.next = current;
                            node.previous = current.previous;
                            current = node;
                            this.size++;
                            return this;
                        }
                    }
                    dStructure.linkedList().doublyLinkedList.prototype.deleteNodeAt = function(index){
                        if(index){
                            let count=1, current;
                            current = this.head;
                            while(current.next){
                                current = current.next;
                                if(count == index-1){
                                    break;
                                }
                                count++;
                            }
                            current.next.previous = current.previous;
                            current = current.next;
                            this.size--;
                            return this;
                        }
                    }
                    dStructure.linkedList().doublyLinkedList.prototype.deleteNode = function(element){
                        if(element){
                            let current;
                            current = this.head;
                            while(current.next){
                                current = current.next;
                                if(current.element == element){
                                    break;
                                }
                            }
                            current.next.previous = current.previous;
                            current = current.next;
                            this.size--;
                            return this;
                        }
                    }       
                    dStructure.linkedList().doublyLinkedList.prototype.insertBefore = function(elementBefore, elementToBeInserted){
                        if(elementBefore && elementToBeInserted){
                            let node = new Node(elementToBeInserted);
                            let current;
                            current = this.head;
                            while(current.next){
                                if(current.element == elementBefore){
                                    break;
                                }
                                current = current.next;
                                count++;
                            }
                            node.next = current;
                            node.previous = current.previous;
                            current.previous = node;
                            this.size++;
                            return this;
                        }
                    }
                    dStructure.linkedList().doublyLinkedList.prototype.insertAfter = function(elementAfter, elementToBeInserted){
                        if(elementBefore && elementToBeInserted){
                            let node = new Node(elementToBeInserted);
                            let current;
                            current = this.head;
                            while(current.next){
                                if(current.element == elementBefore){
                                    break;
                                }
                                current = current.next;
                                count++;
                            }
                            node.next = current.next;
                            node.previous = current;
                            current.next = node;
                            this.size++;
                            return this;
                        }
                    }
                    dStructure.linkedList().doublyLinkedList.prototype.isEmpty = function(){
                        return this.size == 0;
                    }
                    dStructure.linkedList().doublyLinkedList.prototype.getList = function(){
                        return this;
                    }
                    return dStructure;                    
                }
                function circularLinkedList() {       
                    dStructure.linkedList().circularLinkedList.prototype.node=function(element){
                        this.element = element;
                        this.next=null;
                    },
                    dStructure.linkedList().circularLinkedList.prototype.addNode = function(element){
                        if(element){
                            let node = new Node(element);
                            if(this.size == 0){
                                this.head = node;
                                this.size++;
                                return this;
                            }
                            else{
                                let current, count=0;
                                current = this.head;
                                while(current.next){
                                    current = current.next;
                                    count++;
                                    if(this.size == count+1){
                                        break;
                                    }
                                }
                                node.next = this.head;
                                current.next = node;
                                this.size++;
                                return this;
                            }
                        }
                    },
                    dStructure.linkedList().circularLinkedList.prototype.insertNodeAt = function(index, element){
                        if(index){
                            let node = new Node(element);
                            let current = this.head; let count = 0;
                            while(current.next){
                                current = current.next;
                                count++;
                                if(index == count){
                                    break;
                                }
                            }
                            node.next = current;
                            current.next = node;
                            this.size++;
                            return this;
                        }
                    }, 
                    dStructure.linkedList().circularLinkedList.prototype.deleteNodeAt = function(index){
                        if(index){
                            var current, count =1;
                            current = this.head;
                            while(current.next){
                                current = current.next;
                                count++;
                                if(index == count){
                                    break;
                                }
                            }
                            current.next=current.next.next;
                            this.size--;
                            return this
                        }
                    },
                    dStructure.linkedList().circularLinkedList.prototype.deleteElement = function(element){
                        if(element){
                            let current = this.head; let count = 0;
                            while(current.next){
                                current = current.next;
                                count++;
                                if(current.element == element){
                                    break;
                                }
                            }
                            current = current.next;
                            this.size--;
                            return this;
                            
                        }
                    },
                    dStructure.linkedList().circularLinkedList.prototype.isEmpty = function(){
                        return this.size == 0;
                    },  
                    dStructure.linkedList().circularLinkedList.prototype.getList = function(){
                        this;
                    }
                    return dStructure;
                }
                return singlyLinkedListProtos(), doublyLinkedListProtos(), circularLinkedList();
            }
            function graphProtos(){
                dStructure.Graph.prototype.addVertex = function(vertex) {
                    this.vertices.push(vertex);
                    this.edges[vertex] = [];
                }

                dStructure.Graph.prototype.removeVertex = function(vertex) {
                    var index = this.vertices.indexOf(vertex);
                    if(~index) {
                      this.vertices.splice(index, 1);
                    }
                    while(this.edges[vertex].length) {
                      var adjacentVertex = this.edges[vertex].pop();
                      this.removeEdge(adjacentVertex, vertex);
                    }
                }
                
                dStructure.Graph.prototype.addEdge = function(vertex1, vertex2) {
                    this.edges[vertex1].push(vertex2);
                    this.edges[vertex2].push(vertex1);
                    this.numberOfEdges++;
                }

                dStructure.Graph.prototype.removeEdge = function(vertex1, vertex2) {
                    var index1 = this.edges[vertex1] ? this.edges[vertex1].indexOf(vertex2) : -1;
                    var index2 = this.edges[vertex2] ? this.edges[vertex2].indexOf(vertex1) : -1;
                    if(~index1) {
                      this.edges[vertex1].splice(index1, 1);
                      this.numberOfEdges--;
                    }
                    if(~index2) {
                      this.edges[vertex2].splice(index2, 1);
                    }
                }

                dStructure.Graph.prototype.size = function() {
                    return this.vertices.length;
                }

                dStructure.Graph.prototype.relations = function() {
                    return this.numberOfEdges;
                }

                dStructure.Graph.prototype.traverseDFS = function(vertex, fn) {
                    if(!~this.vertices.indexOf(vertex)) {
                      return console.log('Vertex not found');
                    }
                    var visited = [];
                    this._traverseDFS(vertex, visited, fn);
                }

                dStructure.Graph.prototype._traverseDFS = function(vertex, visited, fn) {
                    visited[vertex] = true;
                    if(this.edges[vertex] !== undefined) {
                      fn(vertex);
                    }
                    for(var i = 0; i < this.edges[vertex].length; i++) {
                      if(!visited[this.edges[vertex][i]]) {
                        this._traverseDFS(this.edges[vertex][i], visited, fn);
                      }
                    }
                }

                dStructure.Graph.prototype.traverseBFS = function(vertex, fn) {
                    if(!~this.vertices.indexOf(vertex)) {
                      return console.log('Vertex not found');
                    }
                    var queue = [];
                    queue.push(vertex);
                    var visited = [];
                    visited[vertex] = true;
                  
                    while(queue.length) {
                      vertex = queue.shift();
                      fn(vertex);
                      for(var i = 0; i < this.edges[vertex].length; i++) {
                        if(!visited[this.edges[vertex][i]]) {
                          visited[this.edges[vertex][i]] = true;
                          queue.push(this.edges[vertex][i]);
                        }
                      }
                    }
                }

                dStructure.Graph.prototype.pathFromTo = function(vertexSource, vertexDestination) {
                    if(!~this.vertices.indexOf(vertexSource)) {
                      return console.log('Vertex not found');
                    }
                    var queue = [];
                    queue.push(vertexSource);
                    var visited = [];
                    visited[vertexSource] = true;
                    var paths = [];
                  
                    while(queue.length) {
                      var vertex = queue.shift();
                      for(var i = 0; i < this.edges[vertex].length; i++) {
                        if(!visited[this.edges[vertex][i]]) {
                          visited[this.edges[vertex][i]] = true;
                          queue.push(this.edges[vertex][i]);
                          // save paths between vertices
                          paths[this.edges[vertex][i]] = vertex;
                        }
                      }
                    }
                    if(!visited[vertexDestination]) {
                      return undefined;
                    }
                  
                    var path = [];
                    for(var j = vertexDestination; j != vertexSource; j = paths[j]) {
                      path.push(j);
                    }
                    path.push(j);
                    return path.reverse().join('-');
                }

                dStructure.Graph.prototype.print = function() {
                    console.log(this.vertices.map(function(vertex) {
                      return (vertex + ' -> ' + this.edges[vertex].join(', ')).trim();
                    }, this).join(' | '));
                }
                return dStructure;
            }
            return stackProtos(),queueProtos(),linkedListProtos(),graphProtos();
        }
        addPrototypes();
        return dStructure;
    }
    if(typeof(dStructure) === 'undefined'){
        window.dStructure = getDataStructure();
    }
})();
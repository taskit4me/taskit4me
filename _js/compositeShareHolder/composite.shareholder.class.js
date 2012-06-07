var CompositeShareHolder = function(id, name, date, parent){
    Component.call(this, id, name, date);
    this.parent = parent;
};

CompositeShareHolder.prototype = new Component();

CompositeShareHolder.prototype.remove = function(){
    console.log("REMOVE DANS COMPOSITESHAREHOLDER");
};

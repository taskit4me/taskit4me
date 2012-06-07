var CompositeTask = function(id, name, date, parent){
    Component.call(this, id, name, date);
    this.parent = parent;
};

CompositeTask.prototype = new Component();

CompositeTask.prototype.remove = function(){
    console.log("REMOVE DANS COMPOSITE TASK");
};

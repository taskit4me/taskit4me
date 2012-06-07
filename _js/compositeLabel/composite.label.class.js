var CompositeLabel = function(id, name, date, parent){
    Component.call(this, id, name, date);
    this.parent = parent;
};

CompositeLabel.prototype = new Component();

CompositeLabel.prototype.remove = function(){
    console.log("REMOVE DANS COMPOSITE LABEL");
};

var CompositeRole = function(id, name, date, parent){
    Component.call(this, id, name, date);
    this.parent = parent;


};

CompositeRole.prototype = new Component();
CompositeRole.prototype.remove = function(){
    console.log("REMOVE DANS COMPOSITE ROLE");
};

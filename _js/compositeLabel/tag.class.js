var Tag = function(id, name, date, parent, children){
    CompositeTag.call(this, id, name, date, parent);

    var _children = children;

    this.setChilds = function(children){ _children = children; };
    this.addOneChild = function(child){ _children.push(child); };

    this.removeChildren = function(){  };
    this.removeOneChild = function(index){  };

    this.getChildren = function(){ return _children; };
    this.getOneChild = function(index){ return _children[index]; };
};

Tag.prototype = new CompositeTag();


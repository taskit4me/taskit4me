var Team = function(id, name, date, parent, children){
    CompositeShareHolder.call(this, id, name, date, parent);
    var _children = children;

    this.setChildren = function(children){ _children = children };
    this.addChild = function(child){ _children.push(child); };

    this.removeChildren = function(){  };
    this.removeOneChild = function(index){  };

    this.getChildren = function(){ return _children; };
    this.getOneChild = function(index){ return _children[index]; }
};

Team.prototype = new CompositeShareHolder();
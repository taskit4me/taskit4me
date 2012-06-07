var ShareHolder = function(id, name, date, parent, role){
    CompositeShareHolder.call(this, id, name, date, parent);
    var _role = role;

    this.setRole = function(role){ _role = role; };
    this.getRole = function(){ return _role; };
};

ShareHolder.prototype = new CompositeShareHolder();
var Right = function(id, name, date, parent, r, w, x){
    CompositeRole.call(this, id, name, date, parent);
    var _r = r; var _w = w; var _x = x;

    this.setR = function(r){ _r = r; };
    this.getR = function(){ return _r };

    this.setW = function(w){ _w = w; };
    this.getW = function(){ return _w };

    this.setX = function(x){ _x = x; };
    this.getX = function(){ return _x };
};

Right.prototype = new CompositeRole();

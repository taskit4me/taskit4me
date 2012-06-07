var Label = function(id, name, date, parent, color, priority, energy){
    CompositeLabel.call(this, id, name, date, parent);
    var _color = color; var _priority = priority; var _energy = energy;

    this.setColor = function(color){ _color = color; };
    this.getColor = function() { return _color; };

    this.setPriority = function(priority){ _priority = priority; };
    this.getPriority = function() { return _priority; };

    this.setEnergy = function(energy){ _energy = energy; };
    this.getEnergy = function() { return _energy; };
};

Label.prototype = new CompositeLabel();


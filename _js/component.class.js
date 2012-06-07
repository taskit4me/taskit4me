var Component = function(id, name, dateCreation){
    this.id = id; this.name = name; this.dateCreation = dateCreation;
};

Component.prototype.toString = function(){
    return "Id du composant : " + this.id
                + " / Nom du composant : " + this.name
                + " / Date création : " + this.dateCreation;
};


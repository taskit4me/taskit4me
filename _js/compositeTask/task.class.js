var Task = function(id, name, date, parent, shareHolders, labels, end){
    CompositeTask.call(this, id, name, date, parent);

    var _shareHolders = shareHolders;
    var _labels = labels
    var _end = end;

    this.setShareHolders = function(shareHolders){ _shareHolders = shareHolders; };
    this.addShareHolders = function(shareHolder){ _shareHolders.push(shareHolder); };

    this.removeShareHolders = function(){ };
    this.removeShareHolder = function(index){ };

    this.getShareHolders = function(){ return _shareHolders; };
    this.getOneShareHolder = function(index){ return _shareHolders[index]; };


    this.setLabels = function(labels){ _labels = labels; };
    this.addLabel = function(label){ _labels.push(label); };

    this.removeLabels = function(){ };
    this.removeLabel = function(index){ };

    this.getLabels = function(){ return _labels; };
    this.getOneLabel = function(index){ return _labels[index]; };

    this.setEnd = function(end){ _end = end; };
    this.getEnd = function(){ return _end; };
};

Task.prototype = new CompositeTask();
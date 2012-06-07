$(document).ready(function() {
    var compositeTask = new CompositeTask(0, "Composite Task 1", "2012", undefined);
    compositeTask.remove();

    var compositeSH = new CompositeShareHolder(0, "Composite SH 1", "2012", undefined);
    compositeSH.remove();

    var list = new List(1, "List 1", "2012", undefined, new Array());
    list.remove();

    var task = new Task(1, "Task 1", "2012", undefined, undefined, undefined);
    task.remove();
    console.log(task);

    var team = new Team();
    team.remove();

    var compositeRole = new CompositeRole(1, "List 1", "2012", undefined);
    compositeRole.remove();
});
var tab1es =
    {
        queue:
            [
                 // {id: 0, name:"In the middle of Hall"},
                 // {id: 1, name:"Near the window"},
                 // {id: 2, name:"three"},
                 // {id: 3, name:"Next to the picture"},
                 // {id: 4, name:"Next to the fireplace"}
            ]
    };

outputIt();

function outputIt() {
    var restoredTab1es = JSON.parse(localStorage.getItem('tab1es'));
    var outputs = "";
    for(var i = 0; i < restoredTab1es.queue.length; i++)
    {
        outputs += '<div id="'+restoredTab1es.queue[i].id + '">' + restoredTab1es.queue[i].id+':'+restoredTab1es.queue[i].name + '</div>';
    }
    document.getElementById("demo").innerHTML= outputs;
}
function popIt() {
    var restoredTab1es  = JSON.parse(localStorage.getItem('tab1es'));
    restoredTab1es.queue.shift();
    localStorage.setItem('tab1es', JSON.stringify(restoredTab1es));
    outputIt();
}
let i = 0
function pushIt() {
    if (JSON.parse(localStorage.getItem('tab1es')).queue.length === 5){
        alert("You can make only 5 elements, delete previous if you want to add new ones");
        return;

    }
    else {
        var restoredTab1es = JSON.parse(localStorage.getItem('tab1es'));
        i++
        restoredTab1es.queue.push({
            id:  i, name: $('input').val()});
        localStorage.setItem('tab1es', JSON.stringify(restoredTab1es));
        outputIt();
        if (i === 5)
            i = 0
    }
}

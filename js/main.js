let toDolist = [];
let tr = 1;
let allTask = 0
let completeTask = 0

function addTask(){
    let taskName = document.getElementById("taskInput").value;  
    if(taskName !=""){
        let object = {
            tartib: tr++,
            name: taskName,
            complete: false
        }
        toDolist.push(object);
        chizish();
        allTask = toDolist.length
        document.getElementById("allTask").innerText = allTask
    }
}

function chizish(){
    toDolist.forEach(function(item){
        
    })
    let list = "";
    toDolist.forEach(function(item){
        list += '<li class="list-group-item">'+
                    '<input '+ (item.complete ? "checked" : "") +' onchage="completed(this)" type="checkbox" id="'+ item.tartib +'"><label for="'+ item.tartib +'" class="ml-2">'+ item.name +'</label>'+
                '</li>'
    });
    document.getElementById("list").innerHTML = list;
    document.getElementById("complateTask").innerText  = completeTask;
    let progressW = (completeTask * 100) / allTask;
    document.getElementById(progress).style.width = progressW + "%";    
}
function completed(input){
    let searchId = input.getAttribute("id");
    let checked = input.getAttribute(checked);
    toDolist.forEach(function(item,i){
        if(item.tartib == searchId){
            toDolist[i].complete = item.complete ? false : true;
        }
    })
    console.log(checked);
    if(checked == null){
        completeTask++;
    }
    else{
        completeTask--;
    }
    chizish();
}
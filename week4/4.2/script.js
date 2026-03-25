let taskId = 1;
function addTodo(){
    const title = document.querySelector("#title").value;
    const desc = document.querySelector("#desc").value;
    const div = document.querySelector("#todos");
    // DIV
    const outerDiv = document.createElement("div");
    outerDiv.id = `task${taskId}`;
    // DIV -> PARA
    const para = document.createElement("p");
    para.innerHTML = `<b>TASK:</b> <b>${title}</b> <small>(${desc})</small>`;
    // DIV -> button
    const btn = document.createElement("button");
    btn.setAttribute("onclick",`taskDone('task${taskId}')`);
    btn.innerText = "Mark As Done";
    // Adding everything to outerDiv
    outerDiv.appendChild(para);
    outerDiv.appendChild(btn);
    div.appendChild(outerDiv);
    taskId++; 
}
function taskDone(id){
    const div = document.getElementById(id);
    div.remove();
}
let ipEle = document.querySelector(".input-task");
// console.log(ipEle);
let btnAdd = document.querySelector(".btn-add");
let ulTasks = document.querySelector(".tasks");

btnAdd.addEventListener("click", (event) => {
    if(ipEle.value.trim() !== "") {
        AddTask(ipEle.value);
        ipEle.value="";
    }
})

ipEle.addEventListener("keydown", (e) => {
    if(e.code == "Enter") {
        if(ipEle.value.trim() !== "") {
            AddTask(ipEle.value);
            ipEle.value="";
        }
    }
})

function AddTask(value) {
    let li = document.createElement('li');
    li.className="task list-group-item d-flex justify-content-between rounded"
    let text = document.createTextNode(value);
    li.appendChild(text);
    let span = document.createElement("span");
    span.className="delete";
    span.innerHTML='<i class="fa-sharp fa-solid fa-xmark"></i>'
    li.appendChild(span);
    ulTasks.appendChild(li);
    // ulTasks.innerHTML += `
    //     <li class="task list-group-item d-flex justify-content-between rounded">
    //         ${value}
    //         <span class="delete">
    //             <i class="fa-sharp fa-solid fa-xmark"></i>
    //         </span>
    //     </li>
    // `
}

ulTasks.addEventListener("click", (e) => {
    if(e.target.classList.contains("fa-xmark") || e.target.classList.contains("delete")) {
        let li = e.target.offsetParent;
        li.remove();
    }
    if(e.target.classList.contains("task")) {
        e.target.classList.toggle("done");
    }
})

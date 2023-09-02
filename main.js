const inputbox =document.getElementById("input-box");
const listcontainer =document.getElementById("list-container");

function AddTask(){
    if(inputbox.value === ''){
        alert("You must write something!");
    }

    else{
         // Create a new li element.
        let li = document.createElement("li");

        // Set the li element's inner HTML to the task name.
        li.innerHTML = inputbox.value;

        // Append the li element to the list container.
        listcontainer.appendChild(li);

       let span = document.createElement("span");
       span.innerHTML="\u00d7";
       li.appendChild(span);
       saveData();
    }

     // Clear the input box.
     inputbox.value = "";
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//save data
function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML)
}

function showTask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}


showTask();
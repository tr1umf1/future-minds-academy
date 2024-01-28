let header = document.createElement("h1");
header.textContent = `Tasks for ${todaysDate()}`;

function todaysDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); 
  var year = today.getFullYear();
  today = mm + "/" + dd + "/" + year;
  return today;
}

document.body.appendChild(header);

function acceptedTasks() {
  while (tasks != "") {
    var tasks = prompt("What are your tasks for the today?");
    var task = document.createElement("p");
    task.textContent = tasks;
    document.body.appendChild(task);
  }
}
acceptedTasks();
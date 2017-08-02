var addProject = document.querySelector("#projects input");
var projectListDisplay = document.querySelector("#projects ul");
var projects = document.querySelectorAll("#projects li");
var tasks = document.querySelector("#tasks");
var taskListDisplay = document.querySelector("#tasks ul");
var taskTitle = document.querySelector("#tasks p");

var taskList = {};

// init();

addProject.addEventListener("keypress",function(e) {
	if (e.which === 13) {
		projectListDisplay.innerHTML = projectListDisplay.innerHTML + "<li><span>delete </span>"+ this.value +"</li>";
		this.value = "";
	}
});

projectListDisplay.addEventListener("click",function(e) {
	if (e.target.nodeName==="SPAN") {
		if (confirm("Are you sure you want to delete \"" + e.target.parentNode.textContent.substring(7) + "\"?")) {
			if (taskTitle.textContent = e.target.parentNode.textContent.substring(7)) {
				tasks.classList.add("hidden");
			}
			e.target.parentElement.remove();
		}
	}
	if (e.target.nodeName==="LI") {
		showTasks(e.target.textContent.substring(7))
	}

});


function showTasks(projectName) {
	if (tasks.classList.contains("hidden")) {
		taskTitle.textContent = projectName;
		tasks.classList.remove("hidden");
	}
	else if (taskTitle.textContent !== projectName) {
		taskTitle.textContent = projectName;
	}
	else {
		tasks.classList.add("hidden");
	}
}

// function init() {
// 	projects.forEach()
// }
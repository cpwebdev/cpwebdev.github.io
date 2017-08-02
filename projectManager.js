var addProject = document.querySelector("#projects input");
var projectListDisplay = document.querySelector("#projects ul");
var projects = document.querySelectorAll("#projects li");
var tasks = document.querySelector("#tasks");
var taskListDisplay = document.querySelector("#tasks ul");
var taskTitle = document.querySelector("#tasks p");

var projectTaskList = {
	"Project Number One": ["P1 Task One", "P2 Task Two"],
	"Project Number Two": ["Different Task One","Different Task Two"] ,
	"Project Number Three": ["Not the Same Task One","Not the Same Task Two"]
};

// init();

addProject.addEventListener("keypress",function(e) {
	if (e.which === 13) {
		projectListDisplay.innerHTML = projectListDisplay.innerHTML + "<li><span>delete </span>"+ this.value +"</li>";
		projectTaskList[this.value] = [];
		this.value = "";
	}
});

projectListDisplay.addEventListener("click",function(e) {
	if (e.target.nodeName==="SPAN") {
		if (confirm("Are you sure you want to delete \"" + e.target.parentNode.textContent.substring(7) + "\"?")) {
			deleteProject(e.target.parentNode.textContent.substring(7),e);
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
		buildTasks(projectName);
	}
	else if (taskTitle.textContent !== projectName) {
		taskTitle.textContent = projectName;
		buildTasks(projectName);
	}
	else {
		tasks.classList.add("hidden");
	}
}

// function init() {
// 	projects.forEach()
// }

function deleteProject(projectName,e) {
	if (taskTitle.textContent = projectName) {
				tasks.classList.add("hidden");
			}
	delete projectTaskList[projectName];
	e.target.parentElement.remove();
};

function buildTasks(projectName) {
	taskListDisplay.innerHTML = ""
	projectTaskList[projectName].forEach(function(task) {
		taskListDisplay.innerHTML = taskListDisplay.innerHTML + "<li><span>delete </span>"+ task +"</li>";
	});
};
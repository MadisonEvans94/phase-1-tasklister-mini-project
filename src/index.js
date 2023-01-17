document.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector("#create-task-form");
	const ul = document.querySelector("#tasks");

	form.addEventListener("submit", (e) => {
		e.preventDefault();

		let newVal = document.createElement("li");
		newVal.innerText = document.getElementById("new-task-description").value;
		ul.append(newVal);

		e.target.reset();
	});
});

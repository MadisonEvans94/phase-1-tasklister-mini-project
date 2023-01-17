document.addEventListener("DOMContentLoaded", () => {
	let form = document.querySelector("#create-task-form");
	let ul = document.querySelector("#tasks");
	form.addEventListener("submit", (e) => {
		e.preventDefault();

		e.target.reset();
		let newVal = document.createElement("li");
		newVal.innerText = e.target.value;
		ul.append(newVal);
	});
});

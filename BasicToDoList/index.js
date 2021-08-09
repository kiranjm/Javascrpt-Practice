window.onload = function () {
  const button = document.getElementById("button");
  const input = document.getElementById("textInput");
  const listHead = document.getElementById("list");

  const finishTask = (e) => {
    if (e.target.checked) {
      e.target.setAttribute("class", "strike");
    } else {
      e.target.removeAttribute("class");
    }
  };

  const addItem = (e) => {
    let inputVal = input.value;
    if (!inputVal) {
      return;
    } else {
      const template = document.getElementById("temp");
      const clone = document.importNode(template.content, true);
      clone.querySelector("span").textContent = inputVal;
      clone.querySelector("input").addEventListener("click", finishTask);
      listHead.appendChild(clone);
    }
    input.value = "";
  };
  button.addEventListener("click", addItem);
};

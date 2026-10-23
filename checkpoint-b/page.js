
import { items } from "./items.js";

export function renderItems(list) {
  const ul = document.querySelector("#list");
  ul.innerHTML = "";

  list.forEach(item => {
    const li = document.createElement("li");
    li.className = "stock-line";
    li.textContent = item.name;
    ul.appendChild(li);
  });
}

export function matching() {
  return items.filter(item => item.category === "stationery");
}

export function start() {
  renderItems(items);

  const button = document.querySelector("#show-some");

  button.addEventListener("click", () => {
    renderItems(matching());
  });
}


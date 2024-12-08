
let banner = document.createElement("div")
banner.style.position = "fixed";
banner.style.top = "0";
banner.style.height = "100%";
banner.style.right = 0;
banner.style.background = "rgba(0,0,0,0.5)";
banner.style.width = "35px";
banner.style.zIndex = "1000000000000000000000000000000000000000000000000000000000000000000000000000000000000"

let div = document.createElement("div");
div.style.position = "fixed";
div.style.bottom = "50%";

let div2 = document.createElement("div");
div2.style.position = "fixed";
div2.style.bottom = "0%";

let div3 = document.createElement("div");
div3.style.position = "fixed";
div3.style.top = "0%";

let button = document.createElement("button");
button.innerText = "🏠";
button.style.width = "35px";
let button2 = document.createElement("button");
button2.innerText = "<";
button2.style.width = "35px";
let button3 = document.createElement("button");
button3.innerText = ">";
button3.style.width = "35px";
// button.id = "New-Ipad-Chrome"
button.addEventListener("click", (event) => {
  location.href = "http://localhost:1236"
});
button2.addEventListener("click", (event) => {
  history.back()
});
button3.addEventListener("click", (event) => {
  history.forward()
});
const shadow = banner.attachShadow({ mode: "closed" })
// const shadow2 = div2.attachShadow({mode:"closed"})
div.appendChild(button)
div2.appendChild(button2);
div3.appendChild(button3);
shadow.appendChild(div);
shadow.appendChild(div2);
shadow.appendChild(div3);

// shadow.appendChild(banner)
// shadow2.appendChild(button2);
document.body.appendChild(banner);
// document.body.appendChild(div2);
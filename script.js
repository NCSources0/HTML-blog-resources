var number = 0;
document.addEventListener("DOMContentLoaded", function () {
	var stylesheet = document.createElement("link");
	stylesheet.rel = "stylesheet";
	stylesheet.type = "text/css";
	stylesheet.href = "https://ncsources0.github.io/HTML-blog-resources/style.css";
	document.head.prepend(stylesheet);

  //Add a copy button to every codeblock
  document.body.querySelectorAll("code#fenced").forEach((e) => {
		let pre = document.createElement("pre");
		pre.textContent = e.textContent.trim();
		e.innerHTML = "";
		e.appendChild(pre);

    addCopyBtn("Code", e);
  });

  //Add a link to every h1, h2, h3, h4, h5, and h6
  document.querySelectorAll("h1", "h2", "h3", "h4", "h5", "h6").forEach((h) => {
    addLink(h, h);
  });

  //Add a link to every uScript
  document.body.querySelectorAll("uscript").forEach((e) => {
    addUScript(e, e.getAttribute("href"));
  });

  //Style the banner's image
  document.querySelector("banner").style.backgroundImage = `url(${document.querySelector("banner").getAttribute("img")})`;

  //Move the banner's image
  setInterval(() => {
    document.querySelector("banner").style.backgroundPosition = `0px ${window.scrollY / 2}px`
  }, 0);

	document.body.innerHTML = document.body.innerHTML.split("\n").join("<br>");
});

function addCopyBtn(type, element) {
  const text = element.textContent;
	var copy = document.createElement("a")
	copy.classList.add("copy")
	copy.classList.add("material-symbols-outlined")
	copy.textContent = "content_copy"
	element.prepend(copy);

  //If a button is clicked, copy the text stored in ogText
  element.querySelector("a.copy").addEventListener("click", function () {
    copy(type, text);
  });
}

function addLink(to, element) {
  to.id = `${to.id} link-${number}`.trim();
  number += 1;

	var link = document.createElement("a");
	link.classList.add("link");
	link.classList.add("material-symbols-outlined");
	link.href = `#${to.id}`;
	link.textContent = "link";
	element.append(link);
}

function copy(type, text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert(`${type} copied to clipboard!`);
    })
    .catch((err) => {
      console.error("Could not copy text: ", err);
      alert(`ERROR: ${err}`);
    });
}

function addUScript(element, link) {
	element.innerHTML = "";
  var icon = document.createElement("span"), text = document.createElement("span"), a = document.createElement("a");
  icon.classList.add("material-symbols-outlined");
  icon.textContent = "code";
	
  text.classList.add("text");
  text.textContent = "Userscript!";
  a.href = `https://ncsources0.github.io/verify?url=${link}`;
  element.append(icon, "Download the ", text, a);

	element.addEventListener("click", function () {
		window.open(`https://ncsources0.github.io/verify?${link}`);
	});
}
document.addEventListener("DOMContentLoaded", function () {
  document.head.innerHTML += `
<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap');
  body {
	  font-weight: bold;
	  font-family: 'Roboto';
	  background-color: #000;
	  color: #fff;
  }

  div#code a {
	  float: right;
	  background-color: #444;
  }

  a {
	  color: #fff;
	  cursor: pointer;
  }

  a:hover {
	  text-shadow: 0 0 10px #fff;
  }

  #code {
	  word-wrap: break-word;
	  font-family: 'Source Code Pro';
	  background-color: #222;
	  padding: 8px;
	  border-radius: 8px;
  }

  span#code,
  div#code a {
	  padding: 4px;
	  border-radius: 4px;
  }
</style>`;
  const bodyHTML = document.body.innerHTML;
  bodyHTML = `<pre>${bodyHTML}</pre>`
  document.querySelectorAll("div#code").forEach((div) => {
    mkCopyBtn(div);
  });
});

function mkCopyBtn(element) {
  const ogText = element.textContent;
  const ogHTML = element.innerHTML;
  ogHTML = `<a onclick = "copy('Code', \`${ogText}\`)"><svg xmlns='http://www.w3.org/2000/svg' height='20px' viewBox='0 -960 960 960' fill='#fff'><path d='M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z'/></svg></a>${ogHTML}`;
}

function copy(type, text) {
  navigator.clipboard.writeText(text);
  alert(`${type} copied to clipboard!`);
}

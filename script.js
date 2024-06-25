document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("div#code").forEach((div) => {
    mkCopyBtn(div);
  });
});

function mkCopyBtn(element) {
  const ogText = element.textContent;
  const ogHTML = element.innerHTML;
  element.innerHTML = `<a onclick = "copy('Code', '${ogText}')"><svg xmlns='http://www.w3.org/2000/svg' height='20px' viewBox='0 -960 960 960' fill='#fff'><path d='M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z'/></svg></a>${ogHTML}`;
}

function copy(type, text) {
  navigator.clipboard.writeText(text);
  alert(`${type} copied to clipboard!`);
}

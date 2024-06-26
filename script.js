document.addEventListener("DOMContentLoaded", function () {
  document.head.innerHTML += `
<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap');

  .material-symbols-outlined {
    font-variation-settings:
      "FILL" 0,
      "wght" 400,
      "GRAD" 0,
      "opsz" 24
  }

  body,
  pre {
    font-weight: bold;
    font-family: 'Roboto';
    background-color: #000;
    color: #fff;
    flex-wrap: wrap;
    text-wrap: wrap;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  a#copy {
    height: 20px;
    width: 20px;
    background-color: #222;
    transition: all 100ms;
    position: absolute;
    left: calc(100% - 44px);
    font-size: 20px;
    float: right;
    padding: 4px;
    border-radius: 4px;
    font-size: 20px;
  }

  a#copy:hover {
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
    overflow-x: scroll;
    text-wrap: nowrap;
    word-wrap: normal;
    min-height: 28px;
    font-family: 'Source Code Pro';
    background-color: #222;
    padding: 8px;
    border-radius: 8px;
  }

  span#code {
    min-height: 0;
    padding: 1px 2px;
    border-radius: 4px;
  }
</style>`;

  const bodyHTML = document.body.innerHTML;
  document.body.innerHTML = `<pre>${bodyHTML}</pre>`;

  document.querySelectorAll("div#code").forEach((div) => {
    addCopyBtn("Code", div);
  });
});

function addCopyBtn(type, element) {
  const ogText = element.textContent;
  const ogHTML = element.innerHTML;
  element.innerHTML = `<a id="copy" class="material-symbols-outlined"></a>${ogHTML}&Tab;`;
  element.querySelector("a#copy").addEventListener("click", function () {
    copy("Code", ogText);
  });
}

function copy(type, text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert(`${type} copied to clipboard!`);
    })
    .catch((err) => {
      console.error("Could not copy text: ", err);
    });
}

var number = 0;
document.addEventListener("DOMContentLoaded", function () {
  //Add the styles to the beginning, so any styles that you add overwrite these
  const headHTML = document.head.innerHTML, bodyHTML = document.body.innerHTML;
  document.head.innerHTML = `<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap');

  .material-symbols-outlined {
    font-variation-settings:
      "FILL" 0,
      "wght" 400,
      "GRAD" 0,
      "opsz" 24
  }

  * {
    font-family: "Roboto";
  }

  ncsCitation {
    position: fixed;
    right: 10px;
    bottom: 10px;
    padding: 5px;
    border-radius: 5px;
    background-color: #111;
    color: #fff;
    margin-left:8px;
    z-index: 9999;
  }

  body {
    font-weight: bold;
    background-color: #000;
    color: #fff;
  }

  a {
    transition: all 100ms;
    color: #fff;
    cursor: pointer;
  }

  a:hover {
    text-shadow: 0 0 10px #fff;
  }

  a.copy {
    height: 20px;
    width: 20px;
    background-color: #111;
    position: absolute;
    left: calc(100% - 44px);
    font-size: 20px;
    float: right;
    padding: 4px;
    border-radius: 4px;
    font-size: 20px;
  }

  a.copy:hover {
    background-color: #fff1;
  }

  a.link {
    rotate: 0deg;
    text-decoration: none;
    color: #0000;
  }
    
  a.link:hover {
    rotate: 45deg;
    color: #fff;
  }

  codeBlock {
    overflow-x: scroll;
    text-wrap: nowrap;
    word-wrap: normal;
    padding: 8px;
    border-radius: 8px;
    min-height: 28px;
    background-color: #111;
    display: block;
    font-family: 'Source Code Pro';
    padding-right: 44px;
  }

  code {
    font-family: 'Source Code Pro';
    min-height: 0;
    padding: 0px 3px;
    border-radius: 4px;
    background-color: #111;
  }
  
  uscript {
    padding: 4px;
    border-radius: 4px;
    background-color: #fff;
    display: block;
    color: #000;
    font-family: 'Source Code Pro';
    height: 50px;
    width: 150px;
    font-size: 13px;
    cursor: pointer;
    text-align: center;
  }
  
  uscript .material-symbols-outlined {
    height: 50px;
    width: 50px;
    background-color: #000;
    border-radius: 4px;
    float: left;
    font-size: 50px;
    color: #fff;
    margin-right: 4px;
  }

  uscript .text {
    font-size: 19px;
  }
  
  banner {
    position: relative;
    top: -8px;
    left: -8px;
  }

  banner #img {
    width: 100vw;
    height: calc(100vh / 3);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    /*filter: brightness(0.5);*/
    z-index: -1;
  }

  banner #text {
    position: absolute;
    top: -25vh;
    left: -50vw;
    width: 100vw;
    height: 25vh;
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    z-index: 0;
  }
</style>${headHTML}`;

  if (
    !document.body.innerHTML.includes(
      "//github.com/NCResources/HTML-blog-resources"
    )
  )
    document.body.innerHTML +=
      "<ncsCitation>Thanks to NCSources0 for making \"<a href='http://github.com/NCResources/HTML-blog-resources' target='_blank'>HTML-blog-resources</a>\"</ncsCitation>";

  //Add a copy button to every code div's inner html
  document.body.querySelectorAll("codeBlock").forEach((div) => {
    addCopyBtn("Code", div);
  });

  //Add a link to every h1, h2, h3, h4, h5, and h6
  document.querySelectorAll("h1", "h2", "h3", "h4", "h5", "h6").forEach((h) => {
    addLink(h, h);
  });

  //Add a link to every uScript
  document.body.querySelectorAll("uscript").forEach((e) => {
    addUScript(e, e.getAttribute("link"));
  });

  //Style the banner's image
  document.querySelector("banner").innerHTML = `<div id="img" style="background-image:url(${document.querySelector("banner").getAttribute("img")})"></div><div id="text">${document.querySelector("banner").innerHTML}</div>`;

  //Move the banner's image
  setInterval(() => {
    document.querySelector("banner").style.backgroundPosition = `0px ${window.scrollY / 2}px`
  }, 0);
});

function addCopyBtn(type, element) {
  //Save the text and html of the element for later
  const ogText = element.textContent;
  const ogHTML = element.innerHTML;

  //Add the copy button to the beginning of the element
  element.innerHTML = `<a class="copy material-symbols-outlined"></a>${ogHTML}   `;

  //If a button is clicked, copy the text stored in ogText
  element.querySelector("a.copy").addEventListener("click", function () {
    copy(type, ogText);
  });
}

function addLink(to, element) {
  number += 1;
  to.setAttribute("id", `${number}`);

  //Add a link to the element
  element.innerHTML += `<a class="link material-symbols-outlined" href="#${number}"></a>`;
}

function copy(type, text) {
  //
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert(`${type} copied to clipboard!`);
    })
    .catch((err) => {
      console.error("Could not copy text: ", err);
    });
}

function addUScript(e, link) {
  //Add the uScript to the beginning of the element
  e.outerHTML = `<uScript onclick="window.open('${link}')"><span class="material-symbols-outlined">code</span>Download the <span class="text">Userscript!</span></uscript>`;
}
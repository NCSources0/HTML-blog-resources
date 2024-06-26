# To use:

Copy & paste
``` js
<script src="https://ncresources.github.io/HTML-blog-resources/script.js"></script>
```
somewhere inside of each HTML file.

Create ```<div id="code">Code here</div>``` for a fenced code block, ```<span id="code">Code here</span>``` for a normal one.  
Fenced code blocks have a copy button, normal ones don't.

To make a copy button use ```mkCopyBtn(type, element);```; See [here](#mkcopybtntype-element).

To copy something use ```copy(type, text);```; See [here](#copytype-text).

# Explainations

## mkCopyBtn(type, element);

### Description

Copies text in its parent element.

### "type"

Any word you can think of that can describe the text that your button copies.

### "element"

Use ```document.getElementById('id')``` or ```document.querySelector('.className or #id or element')``` example of ```document.querySelector('')```: 
``` js
document.querySelector('element1#id1#id2.className1.className2 element2.className#id')
```
That would be read as:
``` html
<element1 id="id1 id2" class="className1 className2">
  <element2 id="id" class="className">
    The computer only sees what's in "element2"
  </element2>
</element1>
```

## copy(type, text);

### Description

Copies text to the clipboard

### "type"

Any word you can think of that can describe the text that is copied.

### "text"

Text to be copied to the clipboard

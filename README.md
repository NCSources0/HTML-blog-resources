# To use:

Copy & paste this somewhere inside of each HTML file:
``` html
<script src="https://ncresources.github.io/HTML-blog-resources/script.js"></script>
```

Or if you want the html to appear on the page like it does in the editor, put this inside your html:
``` html
<script src="https://ncresources.github.io/HTML-blog-resources/script.js">var pre=1</script>
```

Create `<div class="code">Code here</div>` for a fenced code block, `<span class="code">Code here</span>` for a normal one.  
Fenced code blocks have a copy button, normal ones don't.


To add a copy button use `addCopyBtn(type, element);`; See [here](#addcopybtntype-element).

To copy something use `copy(type, text);`; See [here](#copytype-text).

To add a link to something on the page use `addLink(to, element)` See [here](#addlinkto-element)

# Explainations

## addCopyBtn(type, element);

### Description

Copies text in its parent element.

### "type"

Any word you can think of that can describe the text that your button copies.

### "element"

Use `document.querySelector('.className or #id or element')` example: 
``` js
document.querySelector('element1#id1#id2.className1.className2 element2.className#id')
```
That would be read as:
``` html
<element1 class="id1 id2" class="className1 className2">
  <element2 class="id" class="className">
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

## addLink(to, element)
<h2 style="color:#f00;">REMEMBER</h2>
ANY element inside of "to" CANNOT have an "id" tag, use "class"

### Description

Links one place in the page to another

### "to"

What element the link leads to; Can be ```document.querySelector('.className or element')```

### "element"

What element the link gets added to.

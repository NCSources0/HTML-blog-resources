# To use:
Copy & paste this at the end of the body of each HTML file:
``` html
<script src="https://ncsources0.github.io/HTML-blog-resources/script.js"></script>
```

# Explainations
###### Advanced Explainations [below](#advanced-explainations)
## \<code> \</code>
Creates a codeblock, add the "fenced" id to make it a fenced codeblock, supports text inputs.

## \<banner img=""> \</banner>
Creates a banner image for your blog, supports text inputs.

## \<uscript href="">\</uscript>
Creates a userscript download button, doesn't support text inputs.

# Advanced Explainations
## addCopyBtn(type, element);
### Description
Adds a button that copies text in its parent element.

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
Anything you can think of to describe the text being copied

### "text"
Text to be copied to the clipboard

## addLink(to, element)
### ⚠*REMEMBER*⚠
ANY element inside of "to" CANNOT have an "id" tag, use "class"

### Description
Links one place in the page to another

### "to"
What element the link leads to; Can be ```document.querySelector('.className or element')```

### "element"
What element the link gets added to

## addUScript(element, link)
### Description
Adds a userscript button

### "element"
What element to replace

### "link"
The link to the userscript
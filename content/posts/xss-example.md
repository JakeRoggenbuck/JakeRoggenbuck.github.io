---
title: What is XSS?
type: page
---

### Vulnerable page

```html
<!DOCTYPE html>
<html>
  <body>
    <p id="entry">Hello</p>

    <script>
      function Done(event) {
        document.getElementById('entry').innerHTML = event.target.given.value;
        event.preventDefault();
      }
    </script>

    <form onsubmit="Done(event)">
      Enter: <input type="text" id="given" />
      <input type="submit" value="Submit" />
    </form>
  </body>
</html>
```

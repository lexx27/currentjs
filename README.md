currentjs
=========

Helps to automatically highlight current and active links in menu etc <li class="active"><a href="#" class="active">current link</a></li>


Usage 
------

Just create a new object

`
new Currentjs();
`


Parameters
-----

`
new Currentjs(selector,parentElement,className);
`

**selector**: the jquery selector that targets the `<a>` elements you want to check. default `'a'`  
**parentElement**: Do you want to add an active class to the parent elemnt? ex. `'li'`. default `false`  
**className**: The class name inserted to the active links. default `'active'`  

Full example
-----

Lets say we have the following html code

```
<ul id="mysupernav">
  <li>a href="/">Home</a></li>
  <li>a href="/about">About</a></li>
  <li>a href="/contact">Contact</a></li>
</ul>
```

And that we are at ``http://yoursite.com/about``
And you want to insert an active class named "current" at both the `a` and the `li` elements.


```
new Currentjs('#mysupernav','li','current');
```

Notes
------

- The code works for both relative and absolute links
- The current readme file took me more time than the actual code. So it should certainly needs some more work


currentjs
=========

Helps to automatically highlight current and active links in menu etc <li class="active"><a href="#" class="active">current link</a></li>


Usage 
------

Just call currentjs

`
$('.selector a').currentjs();
`


Parameters
-----

`
$('.selector a').currentjs(params);
`

**parentElement**: Do you want to add an active class to the parent elemnt? ex. `'li'`. default `false`  
**classname**: The class name inserted to the active links. default `'active'`  
**startonly**: In some cases you want to activate a link that only contains a part only of the url path. For example if your are at `http://yoursite.com/admin/user` you would like a link with href `/admin/` to be considered as active. Because you are in the admin area. default `false`  


Full example
-----

Lets say we have the following html code

```
<ul id="mysupernav">
  <li><a href="/">Home</a></li>
  <li><a href="/about">About</a></li>
  <li><a href="/contact">Contact</a></li>
</ul>
```

And that we are at ``http://yoursite.com/about``
And you want to insert an active class named "current" at both the `a` and the `li` elements.


```
$('#mysupernav a').currentjs({
  parentElement: 'li',
  classname: 'current,
  startonly: 'admin/posts'
});
```

Notes
------

- It works for both relative and absolute links
- The current readme file took me more time than the actual code. So it should certainly needs some more work


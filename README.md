# liteTemplate

Super lite weight template engine(just key value replace).

# Sample
```javascript
var obj = {
    name: 'Isken Huang',
    age: 18,
};

var template = '<h3>Hi! My name is {{ name }}.</h3><p>I am {{ age }} years old.</p>'

var html = liteTemplate(template, obj);
console.log(html); // <h3>Hi! My name is Isken Huang.</h3><p>I am 18 years old.</p>

// in browser
document.querySelector('body').innerHTML = html;
```

# Test
todo...
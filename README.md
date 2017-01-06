Prime Decomposition
=============

Jquery plugin that calculate prime decomposition

![Prime Decomposition](https://raw.githubusercontent.com/LaercioSantana/primeDecomposition/master/example/imgs/example.png)

Usage
-----

```js
<script src='primeDecomposition.js'></script>
<link rel='stylesheet' href='primeDecomposition.css' />

<div id="container"></div>

<script>
				$("#container").primeDecomposition({
					numbers: [75, 36, 45],
					showLcm: true
				});
</script>
```

Build
------
 * Fix dependencies. In project folder root:
 
 ```
    npm install -g grunt-cli
    npm install
 ```
 
 * Build:
 
 ```
    grunt
 ```

Docs
----- 
**Initialize options**
    
```js
       $("#container").primeDecomposition({
					numbers: [75, 36, 45],
					showLcm: true
			 });
```
    
* numbers <br />
  type: `Array:Integer` <br />
  description: array of numbers to be decomposed

* showLcm <br />
  type: `boolean` <br />
  description: If true, show least common multiple, not show, otherwise.
    
License
-------
The MIT License.

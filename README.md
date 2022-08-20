# AndroidSchema.js
AndroidSchema is a small library to empliment Android Schema lock, where you can add it to your page easily,it works like this:

```js
var lock = new AndroidSchemaLock(element,'lock_name')
```


## API

AndroidSchema has three main events,

  * <a href="#SchemaDrawingStarted"><code>SchemaDrawingStarted</code></a>
  * <a href="#SchemaDrawingDone"><code>SchemaDrawingDone</code></a>
  * <a href="#NewActivatePoint"><code>NewActivatePoint</code></a>


--------------------------------------------------------
<a name="SchemaDrawingStarted"></a>
### return int
<code>lock.on('SchemaDrawingStarted',function(e){
        console.log(e.detail,'SchemaDrawingStarted')
    })</code> lets you lesten whene the user started drawing the schema and return the first point intiger

------------------------------------------------
<a name="SchemaDrawingDone"></a>
### return array,int
<code>lock.on('SchemaDrawingDone',function(e){
        console.log(e.detail,'SchemaDrawingDone')
    })</code> lets you listen whene the user ends drawing the schema and return the last point intiger, and the complete pin as an array,


--------------------------------------------------------
<a name="NewActivatePoint"></a>
### return array,int
<code>lock.on('NewActivatePoint',function(e){
        console.log(e.detail,'NewActivatePoint')
    })</code> lets you listen whene the user choose a new point while he is drawing the schema,it returns the current pin as an array, and the new point as an intiger



## Contributors

  * [Jacob Thornton](https://github.com/fat/bean/commits/master?author=fat) ([GitHub](https://github.com/fat) - [Twitter](https://twitter.com/fat))
  * [Rod Vagg](https://github.com/fat/bean/commits/master?author=rvagg) ([GitHub](https://github.com/rvagg) - [Twitter](https://twitter.com/rvagg))
  * [Dustin Diaz](https://github.com/fat/bean/commits/master?author=ded) ([GitHub](https://github.com/ded) - [Twitter](https://twitter.com/ded))

Special thanks to:

 * [Dean Edwards](http://dean.edwards.name/)
 * [Diego Perini](https://github.com/dperini/nwevents)
 * [The entire MooTools team](https://github.com/mootools/mootools-core)

## Licence & copyright

Bean is copyright &copy; 2011-2012 Jacob Thornton and licenced under the MIT licence. All rights not explicitly granted in the MIT license are reserved. See the included LICENSE file for more details.
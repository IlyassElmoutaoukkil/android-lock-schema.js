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
<a name="SchemaDrawingStarted">SchemaDrawingStarted</a>
### SchemaDrawingStarted
return int


```js
  lock.on('SchemaDrawingStarted',function(e){
        console.log(e.detail,'SchemaDrawingStarted')
  })
```

lets you lesten whene the user started drawing the schema and return the first point intiger

------------------------------------------------
<a name="SchemaDrawingDone">SchemaDrawingDone</a>
### SchemaDrawingDone

return array,int

```js
    lock.on('SchemaDrawingDone',function(e){
        console.log(e.detail,'SchemaDrawingDone')
    })
```

     lets you listen whene the user ends drawing the schema and return the last point intiger, and the complete pin as an array,


--------------------------------------------------------
<a name="NewActivatePoint">NewActivatePoint</a>
### NewActivatePoint
return array,int

  ```js
    lock.on('NewActivatePoint',function(e){
            console.log(e.detail,'NewActivatePoint')
    })
  ```

     lets you listen whene the user choose a new point while he is drawing the schema,it returns the current pin as an array, and the new point as an intiger



########################################################
## Parameters

# roundedActivePoint = true 
show a circle arround the active point

# lockPointsDimentions = 10 
dimension of the lock points

# lockHeight = 500 
dimension of the lock (px, %, rem, ...)

# lockWidth = 500 
dimension of the lock (px, %, rem, ...)

# unActivePointColor = 'white' 
color of unactiving points

# bColorOnMouseMove = 'red' 
background color on mouse move 

# newActivePointsColor = 'black' 
new Active Points Color

# lineColor = 'rgb(231, 26, 26)' 
line color

# lineWidth = '4' 
line width

# roundedPointStroke = '3' 
circle arround the activated point stroke width 

# roundedPointStrokeColor = 'green' 
circle arround the activated point stroke color 




## Licence & copyright

AndroidSchemaLock is copyright &copy; 2022-2023 Ilyass ELMOUTAOUKKIL and licenced under the MIT licence. All rights not explicitly granted in the MIT license are reserved. See the included LICENSE file for more details.
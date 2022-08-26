# AndroidSchema.js
AndroidSchema is a small library to empliment Android Schema lock, where you can add it to your page easily,it works like this:

```js
var lock = new AndroidSchemaLock(element,'lock_name')
```
element is the name of the html tag where you want to add the lock,
lock_name is a name by your choice,

## API

AndroidSchema has three main events,

  * <a href="#SchemaDrawingStarted"><code>SchemaDrawingStarted</code></a>
  * <a href="#SchemaDrawingDone"><code>SchemaDrawingDone</code></a>
  * <a href="#NewActivatePoint"><code>NewActivatePoint</code></a>


--------------------------------------------------------
### SchemaDrawingStarted
returns int


```js
  lock.on('SchemaDrawingStarted',function(e){
        console.log(e.detail,'SchemaDrawingStarted')
  })
```

lets you lesten whene the user started drawing the schema and return the first point intiger

------------------------------------------------
### SchemaDrawingDone
returns array,int

```js
    lock.on('SchemaDrawingDone',function(e){
        console.log(e.detail,'SchemaDrawingDone')
    })
```

     lets you listen whene the user ends drawing the schema and return the last point intiger, and the complete pin as an array,


--------------------------------------------------------
### NewActivatePoint
returns array,int

  ```js
    lock.on('NewActivatePoint',function(e){
            console.log(e.detail,'NewActivatePoint')
    })
  ```

     lets you listen whene the user choose a new point while he is drawing the schema,it returns the current pin as an array, and the new point as an intiger



########################################################
## Parameters

### roundedActivePoint 
show a circle arround the active point  (true or false, default: true )

### lockPointsDimentions 
dimension of the lock points ( default: 10 )

### lockHeight 
dimension of the lock (px, %, rem, ...; default: 400)

### lockWidth 
dimension of the lock (px, %, rem, ...; default: 400)

### unActivePointColor  
color of unactiving points (hex code, rgb, ...; default: 'red')

### bColorOnMouseMove  
background color whene the mouse move (hex code, rgb, ...; default: 'yellow')

### bColorOnMouseDown  
background color whene the mouse is down (hex code, rgb, ...; default: 'blue')

### newActivePointsColor  
new Active Points Color (hex code, rgb, ...; default: 'black')

### lineColor 
line color (hex code, rgb, ...; default: 'white')

### lineWidth  
line width (int; default: 10)

### lineJoin
line join (int (arcs|bevel|miter|miter-clip|round); default: 'round')

### roundedPointStroke  
circle arround the activated point stroke's width (int; default: 3)

### roundedPointStrokeColor  
circle arround the activated point stroke's color  (hex code, rgb, ...; default: 'green')




## Licence & copyright

AndroidSchemaLock is copyright &copy; 2022-2023 Ilyass ELMOUTAOUKKIL and licenced under the MIT licence. All rights not explicitly granted in the MIT license are reserved. See the included LICENSE file for more details.

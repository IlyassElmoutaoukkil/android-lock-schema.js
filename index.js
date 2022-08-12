function AndroidSchemaLock(element,lock_name=null){
    var _this = this 
    this.draged = false;

    this.lock = element
    this.currentPin = []
    this.currentPinNumber = []
    this.Line = ""
    this.roundedActivePoint = true
    this.lockPointsDimentions = 10
    this.lockColor = 'red';
    this.lockHeight = 500
    this.lockWidth = 500
    

    this.lineColor = 'rgb(231, 26, 26)'
    this.lineWidth = '4'

    this.LockId_width = null
    this.LockId_height = null


    this.LockCordinates = []



    this.render = function () {
        this.lock.innerHTML=`<svg id="${lock_name}" height="${this.lockHeight}" width="${this.lockWidth}" style="background-color: ${this.lockColor}">
        <ellipse class="${lock_name}" id="${lock_name}_1" data="1" cx="25%" cy="25%" rx="${this.lockPointsDimentions}" ry="${this.lockPointsDimentions}" style="fill:white" />
        <ellipse class="${lock_name}_round" id="${lock_name}_1_r" data="1" cx="25%" cy="25%" rx="30" ry="30" style="fill:transparent;stroke:transparent;stroke-width:3" />

        <ellipse class="${lock_name}" id="${lock_name}_2" data="2" cx="50%" cy="25%" rx="${this.lockPointsDimentions}" ry="${this.lockPointsDimentions}" style="fill:white" />
        <ellipse class="${lock_name}_round" id="${lock_name}_2_r" data="1" cx="50%" cy="25%" rx="30" ry="30" style="fill:transparent;stroke:transparent;stroke-width:3" />

        <ellipse class="${lock_name}" id="${lock_name}_3" data="3" cx="75%" cy="25%" rx="${this.lockPointsDimentions}" ry="${this.lockPointsDimentions}" style="fill:white" />
        <ellipse class="${lock_name}_round" id="${lock_name}_3_r" data="1" cx="75%" cy="25%" rx="30" ry="30" style="fill:transparent;stroke:transparent;stroke-width:3" />



        <ellipse class="${lock_name}" id="${lock_name}_4" data="4" cx="25%" cy="50%" rx="${this.lockPointsDimentions}" ry="${this.lockPointsDimentions}" style="fill:white" />
        <ellipse class="${lock_name}_round" id="${lock_name}_4_r" data="1" cx="25%" cy="50%" rx="30" ry="30" style="fill:transparent;stroke:transparent;stroke-width:3" />

        <ellipse class="${lock_name}" id="${lock_name}_5" data="5" cx="50%" cy="50%" rx="${this.lockPointsDimentions}" ry="${this.lockPointsDimentions}" style="fill:white" />
        <ellipse class="${lock_name}_round" id="${lock_name}_5_r" data="1" cx="50%" cy="50%" rx="30" ry="30" style="fill:transparent;stroke:transparent;stroke-width:3" />

        <ellipse class="${lock_name}" id="${lock_name}_6" data="6" cx="75%" cy="50%" rx="${this.lockPointsDimentions}" ry="${this.lockPointsDimentions}" style="fill:white" />
        <ellipse class="${lock_name}_round" id="${lock_name}_6_r" data="1" cx="75%" cy="50%" rx="30" ry="30" style="fill:transparent;stroke:transparent;stroke-width:3" />



        <ellipse class="${lock_name}" id="${lock_name}_7" data="7" cx="25%" cy="75%" rx="${this.lockPointsDimentions}" ry="${this.lockPointsDimentions}" style="fill:white" />
        <ellipse class="${lock_name}_round" id="${lock_name}_7_r" data="1" cx="25%" cy="75%" rx="30" ry="30" style="fill:transparent;stroke:transparent;stroke-width:3" />
        
        <ellipse class="${lock_name}" id="${lock_name}_8" data="8" cx="50%" cy="75%" rx="${this.lockPointsDimentions}" ry="${this.lockPointsDimentions}" style="fill:white" />
        <ellipse class="${lock_name}_round" id="${lock_name}_8_r" data="1" cx="50%" cy="75%" rx="30" ry="30" style="fill:transparent;stroke:transparent;stroke-width:3" />
        
        <ellipse class="${lock_name}" id="${lock_name}_9" data="9" cx="75%" cy="75%" rx="${this.lockPointsDimentions}" ry="${this.lockPointsDimentions}" style="fill:white" />
        <ellipse class="${lock_name}_round" id="${lock_name}_9_r" data="1" cx="75%" cy="75%" rx="30" ry="30" style="fill:transparent;stroke:transparent;stroke-width:3" />

        <polyline stroke-linecap="round" id="Line${lock_name}" points="" style="fill:none;stroke:${this.lineColor};stroke-width:${this.lineWidth}" />
        </svg>`

        this.LockId_width = document.getElementById(lock_name).getAttribute('width')
        this.LockId_height = document.getElementById(lock_name).getAttribute('height')
        this.lockId = document.getElementsByClassName(lock_name)


        for (let l = 0; l < this.lockId.length; l++) {
            const element = this.lockId[l];
            var number = l+1
            var cx = this.LockId_width*(Number(element.getAttribute('cx').slice(0,2))/100)
            var cy = this.LockId_height*(Number(element.getAttribute('cy').slice(0,2))/100)
    
            _this.LockCordinates.push({'int':number,'coordinate':[cx,cy]})
        }
    }

    // LockId = document.getElementsByClassName(lock_name)

    





    this.lock.addEventListener("mousedown", function(event){
        _this.currentPin = []
        _this.currentPinNumber = []
        var e = 0
        
        for(var l=0;l<document.getElementsByClassName(lock_name+'_round').length;l++){
            e++
            console.log(e)
            document.getElementById(lock_name+'_'+e+'_r').style.stroke = 'transparent'
            document.getElementById(lock_name+'_'+e).style.fill='white'
        }
        
        _this.draged = true
        
        var x = event.offsetX
        var y = event.offsetY



        for (let d = 0; d < _this.LockCordinates.length; d++) {
            const e = _this.LockCordinates[d];
            var pointX = e.coordinate[0]
            var pointY = e.coordinate[1]

            if(Math.sqrt(Math.pow(x-pointX,2)+Math.pow(y-pointY,2))<50){
                document.getElementById(lock_name+'_'+e.int).style.fill='red'
                if(_this.roundedActivePoint){
                    document.getElementById(lock_name+'_'+e.int+'_r').style.stroke='white'
                }
                if(_this.currentPinNumber.indexOf(e.int)==-1){
                    _this.currentPin.push([pointX,pointY])
                    // document.getElementById('pin').value = _this.currentPinNumber.join('')
                    _this.currentPinNumber.push(e.int)
                    console.log(_this.currentPin)     
                }
            }else{
                
            }
        }

        // format (string) = "int,int "
    });


    _this.lock.addEventListener("mouseup", function(event){
        _this.draged = false
        _this.lock.style.backgroundColor=_this.lockColor
        if(_this.currentPin.length==1){
            _this.currentPin = []
        }{
            sc = _this.currentPin.slice(0,_this.currentPin.length).join(' ')
            document.getElementById('Line'+lock_name).setAttribute('points',sc)
            console.log(_this.currentPinNumber.join(''))
        }
    })

    _this.lock.addEventListener("mousemove", function(event){
        if(_this.draged){
            var olderLine = ''
            for (let old = 0; old < _this.currentPin.length; old++) {
                const older = _this.currentPin[old];
                olderLine=olderLine+' '+older[0]+','+older[1]
            }

            var x = event.offsetX
            var y = event.offsetY
            _this.lock.style.backgroundColor='blue'
            mousePosition = event.offsetX+','+event.offsetY
            if(_this.currentPin.length!=0){
                lastPoints = _this.currentPin[_this.currentPin.length-1][0]+','+_this.currentPin[_this.currentPin.length-1][1]


                document.getElementById('Line'+lock_name).setAttribute('points',olderLine+' '+lastPoints+' '+mousePosition)

                for (let d = 0; d < _this.LockCordinates.length; d++) {
                    const e = _this.LockCordinates[d];
                    var pointX = e.coordinate[0]
                    var pointY = e.coordinate[1]
                    
                    
                    if(Math.sqrt(Math.pow(x-pointX,2)+Math.pow(y-pointY,2))<50){
                        if(_this.currentPinNumber.indexOf(e.int)==-1){
                            document.getElementById(lock_name+'_'+e.int).style.fill='red'
                            if(_this.roundedActivePoint){
                                document.getElementById(lock_name+'_'+e.int+'_r').style.stroke='white'
                            }
                            _this.currentPin.push([pointX,pointY])
                            _this.currentPinNumber.push(e.int)
                            document.getElementById('pin').value = _this.currentPinNumber.join('')
                        }
                    } 
                    
                    
                }
            }else{
            }            
        }else{
        }
    })
}
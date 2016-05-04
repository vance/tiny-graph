window._graph = {
  xPos:0,
  objectMap:{},
  xAxis: 20,
  labelSkew: 50,
  draw: function(val, color , label, multiplier, vSize) {

    var map = this.objectMap[color];
    var target = document.getElementById('graph');

    if( ! multiplier ){
      multiplier = 1;
    }
    if( !vSize ){
      vSize = 3
    }

    if( !map){
      var id = 'graph-' +  Math.round( Math.random() * 40000 );
      var l = document.createElement('div');
      l.style.position = 'absolute';
      l.style.color = color;
      l.innerHTML = label;
      l.id=id;
      target.appendChild(l);
      this.objectMap[color] = {
        val: val,
        color:color,
        multiplier:multiplier,
        vSize:vSize,
        xPos:0,
        label:l,
        skew: this.labelSkew
      };
      this.labelSkew -= 10;
      map = this.objectMap[color];
    } else {
      map.xPos ++;
    }

    map.val = val * multiplier;

    var node = document.createElement('div');
    node.style.cssText = 'width:3px;height:'+ map.vSize+'px;background-color:' + map.color+ ';position:absolute;';

    node.style.marginLeft = this.xPos+ 'px';
    node.style.marginTop = (map.val + this.xAxis) + 'px';
    target.appendChild(node);

    map.label.style.marginLeft =  this.xPos + 20 + 'px';
    map.label.style.marginTop = (map.val + this.xAxis - 15 + map.skew ) + 'px';
    this.xPos += .25;
  },
  tag:function(val){
    var target = document.getElementById('graph');
    var node = document.createElement('div');
    node.style.position = 'absolute';
    node.style.color = 'white';
    node.innerHTML = '* ' + val;
    node.style.marginLeft = (this.xPos  ) + 'px';
    node.style.marginTop = '-7px';
    target.appendChild(node);
  }
};

window._graph = {
  xPos:0,
  objectMap:{},
  xAxis: 20,
  labelSkew: 50,
  draw: function(val, color , label, multiplier, vSize) {
    var map = this.objectMap[color];
    var target = document.getElementById('tiny-graph');
    var node = document.createElement('div');
    if( ! multiplier ){ multiplier = 1;}
    if( !vSize ){ vSize = 3;}
    if( !map){
      var l = document.createElement('div');
      l.style.position = 'absolute';
      l.style.color = color;
      l.innerHTML = label;
      target.appendChild(l);
      this.objectMap[color] = {
        label:l,
        skew: this.labelSkew
      };
      this.labelSkew -= 10;
      map = this.objectMap[color];
    }
    val = val * multiplier;
    node.style.cssText = 'width:3px;height:'+ vSize+'px;background-color:' + color+ ';position:absolute;';
    node.style.marginLeft = this.xPos+ 'px';
    node.style.marginTop = (val + this.xAxis) + 'px';
    target.appendChild(node);
    map.label.style.marginLeft =  this.xPos + 20 + 'px';
    map.label.style.marginTop = (val + this.xAxis - 15 + map.skew ) + 'px';
    this.xPos += .25;
  },
  tag:function(val){
    var target = document.getElementById('graph');
    var node = document.createElement('div');
    node.style.position = 'absolute';
    node.style.color = 'white';
    node.innerHTML = '* ' + val;
    node.style.marginLeft = (this.xPos  ) + 'px';
    node.style.marginTop = '7px';
    target.appendChild(node);
  }
};

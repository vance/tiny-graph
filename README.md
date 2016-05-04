# tiny-graph 
### js Debugging Helper with 0 Depedencies, Only 64 Lines of Code
The tiniest javascript variable debugging graph

![tin-graph](https://cloud.githubusercontent.com/assets/145471/15024175/b11b2d24-11e8-11e6-8b64-4810a9bf6cea.png)

* Tag events on the graph
* Plot lines are labelled! 
* Multiplier to scale all your vars to fit
* label scattering to help with overlap

Useful for quick debugging for things such as scrolling or physics. 

## Usage
Put it on you HTML:
```
<script src="tiny-graph.js"></script>
<div id="graph" style="width:100%;heght:500px"></div> <!-- or whatever size you want -->
```

### Call it
That's it. Now just call it from anywhere you want to debug:
```
var canvasHeight = 50;
window._graph.draw(canvasHeight, 'yellow', 'canvasHeight');
//draws a plot at 50 at the current x value 
```
x value is simply incremented with each call

### Tag Events
Put down a marker when an event fires
`window._graph.tag('someEvent');`

### Options
`draw(val, color , label, multiplier, vSize)`

* **val** [required] = the value
* **color** [required] = color of the plot
* **label** [optional] = label text
* **multiplier** [optional] = scale it up or down to fit, e.g. 0.1 or 100
* **vSize** [optional] = vertical size of the plot (a.k.a. plot a second dimension as a thickness)



var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};


function init(){
  //init data
  var json = {
    "children": [
       {
         "children": [
           {
             "children": [], 
             "data": {
               "description": "Start of the full text, begins with an an abridged version of Cosmos sections.", 
               "$angularWidth": 7490, 
               "link": "<a id='golink' href='gosomewhere.html'>Go Somewhere</a>", 
               "$color": "#FCD9A1", 
               "size": 7490
             }, 
             "id": "https://simplistic-physics-resource-madburgess.c9users.io/Chapter%20Directory/Chapter%201:%20Introduction%20to%20the%20Cosmos/Content/Chapter1IntroductiontotheCosmos.pdf", 
             "name": "Introduction to the Cosmos Full PDF"
           }
         ], 
         "data": {
           "description": "Fixed polar interpolation problem when theta = pi", 
           "$color": "#B0AAF6", 
           "link": "<a id='golink' href='gosomewhere.html'>Go Somewhere</a>", 
           "$angularWidth": 1000, 
           "size": 13880
         }, 
         "id": "Source/Coordinates", 
         "name": "Chapter 1"
       }, 
       {
         "children": [
           {
             "children": [], 
             "data": {
               "description": "www.google.com", 
               "$angularWidth": 14952, 
               "link": "<a id='golink' href='gosomewhere.html'>Go Somewhere</a>", 
               "$color": "#B2ABF4", 
               "size": 14952
             }, 
             "id": "Source/Core/Canvas.js", 
             "name": "C"
           }, 
           {
             "children": [], 
             "data": {
               "description": "Animated TreeMaps", 
               "$angularWidth": 14759, 
               "link": "<a id='golink' href='gosomewhere.html'>Go Somewhere</a>", 
               "$color": "#B2ABF4", 
               "size": 14759
             }, 
             "id": "Source/Core/Core.js", 
             "name": "Core.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "$jit namespace and $jit() for append vis to Global\n    \n    Example:\n    \n    new $jit.Hypertree({\n      'injectInto': 'myvisContainer'\n    });", 
               "$angularWidth": 5838, 
               "link": "<a id='golink' href='gosomewhere.html'>Go Somewhere</a>", 
               "$color": "#FCD9A1", 
               "size": 5838
             }, 
             "id": "Source/Core/Fx.js", 
             "name": "Fx.js"
           }
         ], 
         "data": {
           "description": "Animated TreeMaps", 
           "$color": "#B2ABF4", 
           "link": "<a id='golink' href='gosomewhere.html'>Go Somewhere</a>", 
           "$angularWidth": 1000, 
           "size": 35549
         }, 
         "id": "Source/Core", 
         "name": "Chapter 2"
       }, 

       {
         "children": [
           {
             "children": [], 
             "data": {
               "description": "<a id='golink' href='gosomewhere.html'>Go Somewhere</a>", 
               "$angularWidth": 13636, 
               "link": "<a id='golink' href='gosomewhere.html'>Go Somewhere</a>", 
               "$color": "#D2BFD0", 
               "size": 13636
             }, 
             "id": "Source/Visualizations/AreaChart.js", 
             "name": "AreaChart.js"
           },

           {
             "children": [], 
             "data": {
               "description": "www.google.com", 
               "$angularWidth": 16472, 
               "link": "<a id='golink' href='gosomewhere.html'>Go Somewhere</a>",  
               "$color": "#B2ABF4", 
               "size": 16472
             }, 
             "id": "Source/Visualizations/Treemap.js", 
             "name": "Treemap.js"
           }
         ], 
         "data": {
           "description": "www.google.com", 
           "$color": "#AEA9F8", 
           "link": "<a id='golink' href='gosomewhere.html'>Go Somewhere</a>", 
           "$angularWidth": 1000, 
           "size": 186221
         }, 
         "id": "Source/Visualizations", 
         "name": "Chapter 3"
       }
     ], 
     "data": {
       "$type": "none"
     }, 
     "id": "Source", 
     "name": "Select to Access Resources"
   };
    //end
    //init Sunburst
    var sb = new $jit.Sunburst({
        //id container for the visualization
        injectInto: 'infovis',
        //Distance between levels
        levelDistance: 90,
        //Change node and edge styles such as
        //color, width and dimensions.
        Node: {
          overridable: true,
          type: useGradients? 'gradient-multipie' : 'multipie'
        },
        //Select canvas labels
        //'HTML', 'SVG' and 'Native' are possible options
        Label: {
          type: labelType
        },
        //Change styles when hovering and clicking nodes
        NodeStyles: {
          enable: true,
          type: 'Native',
          stylesClick: {
            'color': '#ff0000'
          },
          stylesHover: {
            'color': '#b30000'
          }
        },
        //Add tooltips
        Tips: {
          enable: true,
          onShow: function(tip, node) {
            var html = "<div class=\"tip-title\">" + node.name + "</div>"; 
            var data = node.data;

            if("description" in data) {
              html += "<b>Description:</b> " + data.description ;
            }
            tip.innerHTML = html;
          }
        },
        //implement event handlers
        Events: {
          enable: true,
          onClick: function(node) {
            if(!node) return;
            //Build detailed information about the file/folder
            //and place it in the right column.
            var html = "<h4>" + node.name + "</h4>", data = node.data;
            
            if("description" in data) {
              html += "<b>Description:</b> " + data.description ;
            }
            if("link" in data) {
             html += "<br /><br /><b> Click Link to Go to Page:</b><br /><pre>" + data.link + "</pre>";  
            }
            $jit.id('inner-details').innerHTML = html;
            //hide tip
            sb.tips.hide();
            //rotate
            sb.rotate(node, animate? 'animate' : 'replot', {
              duration: 1000,
              transition: $jit.Trans.Quart.easeInOut
             
            });
            
          }
        },
        // Only used when Label type is 'HTML' or 'SVG'
        // Add text to the labels. 
        // This method is only triggered on label creation
        onCreateLabel: function(domElement, node){
          var labels = sb.config.Label.type,
              aw = node.getData('angularWidth');
          if (labels === 'HTML' && (node._depth < 2 || aw > 2000)) {
            domElement.innerHTML = node.name;
          } else if (labels === 'SVG' && (node._depth < 2 || aw > 2000)) {
            domElement.firstChild.appendChild(document.createTextNode(node.name));
          }
        },
        // Only used when Label type is 'HTML' or 'SVG'
        // Change node styles when labels are placed
        // or moved.
        onPlaceLabel: function(domElement, node){
          var labels = sb.config.Label.type;
          if (labels === 'SVG') {
            var fch = domElement.firstChild;
            var style = fch.style;
            style.display = '';
            style.cursor = 'pointer';
            style.fontSize = ".em";
            fch.setAttribute('fill', "#fff");
          } else if (labels === 'HTML') {
            var style = domElement.style;
            style.display = '';
            style.cursor = 'pointer';
            style.fontSize = "0.8em";
            style.color = "#ddd";
            var left = parseInt(style.left);
            var w = domElement.offsetWidth;
            style.left = (left - w / 2) + 'px';
          }
        }
   });
    //load JSON data.
    sb.loadJSON(json);
    //compute positions and plot.
    sb.refresh();
    //end
}

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
             "description": "",   
             "$angularWidth": 300,   
             "link": "<a id='golink' href=''>Download PDF on GitHub</a>",    
             "$color": "#ffa366",   
             "size": 7490  
           },   
           "id": "Source/Coordinates/Complex.js",   
           "name": "More Content "  
         },   
         {  
           "children": [],   
           "data": {  
             "description": "Chapter 2, an outline of physics",  
             "$angularWidth": 300,   
             "link": "<a id='golink' href='https://github.com/mcburgess/SimplisticPhysicsResource/tree/gh-pages/Chapter%20Directory/Chapter%202_%20Outline%20of%20Physics'>Download PDF on GitHub</a>",   
             "$color": "#ff8533",   
             "size": 6390  
           },   
           "id": "Source/Coordinates/Polar.js",   
           "name": "2.0"  
         }  
       ],   
       "data": {  
         "description": "Chapter 2, an outline of physics",     
         "$color": "#ff6600",   
         "link": "<a id='golink' href=''>Download PDF on GitHub</a>",    
         "$angularWidth": 1000,   
         "size": 13880  
       },   
       "id": "Source/Coordinates",   
       "name": "Chapter 2"  
     },   
     {  
       "children": [  
         {  
           "children": [],   
           "data": {  
             "description": "",   
             "$angularWidth": 500,   
             "link": "<a id='golink' href=''>Download PDF on GitHub</a>",   
             "$color": "#ff9999",   
             "size": 14952  
           },   
           "id": "Source/Core/Canvas.js",   
           "name": "More Content"  
         },   
         {  
           "children": [],   
           "data": {  
             "description": "",   
             "$angularWidth": 500,   
             "link": "<a id='golink' href=''>Download PDF on GitHub</a>",    
             "$color": "#ff9999",   
             "size": 14759  
           },   
           "id": "Source/Core/Core.js",   
           "name": "Cosmos PDF"   
         },
         
         {  
           "children": [],   
           "data": {  
             "description": "Chapter 1: An Introduction to the Cosmos",
             "$angularWidth": 500,   
             "link": "<a id='golink' href='https://github.com/mcburgess/SimplisticPhysicsResource/tree/gh-pages/Chapter%20Directory/Chapter%201_%20Introduction%20to%20the%20Cosmos/Content'>Download PDF on GitHub</a>",   
             "$color": "#ff3333",   
             "size": 5838  
           },   
           "id": "Source/Core/Fx.js",   
           "name": "1.0"  
         }  
       ],   
       "data": {  
         "description": "Chapter 1: An Introduction to the Cosmos",    
         "$color": "#ff0000",   
         "link": "<a id='golink' href=''>Download PDF on GitHub</a>",   
         "$angularWidth": 1000,   
         "size": 35549  
       },   
       "id": "Source/Core",   
       "name": "Chapter 1"  
     },   
     {  
       "children": [  
         {  
           "children": [],   
           "data": {  
             "description": "",    
             "$angularWidth": 500,   
             "link": "<a id='golink' href=''>Download PDF on GitHub</a>",    
             "$color": "#330033",   
             "size": 18672  
           },   
           "id": "Source/Extras/Extras.js",   
           "name": "to Main Site"  
         }  
       ],   
       "data": {  
         "description":  "Select topics in advance topics, upper division material (IN PROGRESS)",     
         "$color": "#4d004d",   
         "link": "<a id='golink' href=''>Download PDF on GitHub</a>",  
         "$angularWidth": 1000,   
         "size": 18672  
       },   
       "id": "Source/Extras",   
       "name": " to Advanced Mode "  
     }, 

     {  
       "children": [  
         {  
           "children": [],   
           "data": {  
             "description": "",    
             "$angularWidth": 10,   
             "link": "<a id='golink' href=''>Download PDF on GitHub</a>",    
             "$color": "#ff99ff",   
             "size": 1652  
           },   
           "id": "Source/Graph/Graph.Geom.js",   
           "name": "More Content"  
         },   
         {  
           "children": [],   
           "data": {  
             "description": "",    
             "$angularWidth": 10,   
             "link": "<a id='golink' href=''>Download PDF on GitHub</a>",    
             "$color": "#ff00ff",   
             "size": 27921  
           },   
           "id": "Source/Graph/Graph.js",   
           "name": "7.5"  
         },   
         {  
           "children": [],   
           "data": {  
             "description": "",    
             "$angularWidth": 10,   
             "link": "<a id='golink' href=''>Download PDF on GitHub</a>",    
             "$color": "#ff00ff",   
             "size": 9512  
           },   
           "id": "Source/Graph/Graph.Label.js",   
           "name": "7.4"  
         },   
         {  
           "children": [],   
           "data": {  
             "description": "",    
             "$angularWidth": 10,   
             "link": "<a id='golink' href=''>Download PDF on GitHub</a>",    
             "$color": "#ff00ff",   
             "size": 22838  
           },   
           "id": "Source/Graph/Graph.Op.js",   
           "name": "7.3"  
         },   
         {  
           "children": [],   
           "data": {  
             "description": "",   
             "$angularWidth": 10,   
             "link": "<a id='golink' href=''>Download PDF on GitHub</a>",    
             "$color": "#ff00ff",   
             "size": 18950  
           },   
           "id": "Source/Graph/Graph.Plot.js",   
           "name": "7.2"  
         },   
         {  
           "children": [],   
           "data": {  
             "description": "",    
             "$angularWidth": 10,   
             "link": "<a id='golink' href=''>Download PDF on GitHub</a>",    
             "$color": "#ff00ff",   
             "size": 6947  
           },   
           "id": "Source/Graph/Helpers.js",   
           "name": "7.1"  
         }  
       ],   
       "data": {  
         "description":  "Chapter 7, Electricity and Magnatism (IN PROGRESS)",   
         "$color": "#660066",   
         "link":"<a id='golink' href=''>Download PDF on GitHub</a>",    
         "$angularWidth": 300,   
         "size": 87820  
       },   
       "id": "Source/Graph",   
       "name": "Chapter 7"  
     },   
     {  
       "children": [  
         {  
           "children": [],   
           "data": {  
             "description": "",    
             "$angularWidth": 10,   
             "link": "<a id='golink' href=''>Download PDF on GitHub</a>",    
             "$color": "#bf80ff",   
             "size": 4064  
           },   
           "id": "Source/Layouts/Layouts.ForceDirected.js",   
           "name": "More Content"  
         },   
         {  
           "children": [],   
           "data": {  
             "description": "",   
             "$angularWidth": 10,   
             "link": "<a id='golink' href=''>Download PDF on GitHub</a>",    
             "$color": "#a64dff",   
             "size": 2198  
           },   
           "id": "Source/Layouts/Layouts.js",   
           "name": "6.4"  
         },   
         {  
           "children": [],   
           "data": {  
             "description": "", 
             "$angularWidth": 10,   
             "link": "<a id='golink' href=''>Download PDF on GitHub</a>",    
             "$color": "#a64dff",   
             "size": 4372  
           },   
           "id": "Source/Layouts/Layouts.Radial.js",   
           "name": "6.3"  
         },   
         {  
           "children": [],   
           "data": {  
             "description": "",    
             "$angularWidth": 10,   
             "link": "<a id='golink' href=''>Download PDF on GitHub</a>",  
             "$color": "#a64dff",   
             "size": 15570  
           },   
           "id": "Source/Layouts/Layouts.TM.js",   
           "name": "6.2"  
         },   
         {  
           "children": [],   
           "data": {  
            "description": "", 
             "$angularWidth": 10,   
             "link": "<a id='golink' href=''>Download PDF on GitHub</a>",    
             "$color": "#a64dff",   
             "size": 6696  
           },   
           "id": "Source/Layouts/Layouts.Tree.js",   
           "name": "6.1"  
         }  
       ],   
       "data": {  
         "description": "Chapter 6, Optics (IN PROGRESS)",    
         "$color": "#6600cc",   
         "link": "<a id='golink' href=''>Download PDF on GitHub</a>",    
         "$angularWidth": 300,   
         "size": 32900  
       },   
       "id": "Source/Layouts",   
       "name": "Chapter 6"  
     },   
      
     {  
       "children": [  
         {  
           "children": [],   
           "data": {  
             "description": "",    
             "$angularWidth": 100,   
             "link": "<a id='golink' href=''>Download PDF on GitHub</a>",    
             "$color": "#8585e0",   
             "size": 348  
           },   
           "id": "Source/Options/Options.AreaChart.js",   
           "name": "More Content"  
         },   
         {  
           "children": [],   
           "data": {  
             "description": "",  
             "$angularWidth": 100,   
             "link": "<a id='golink' href=''>Download PDF on GitHub</a>",    
             "$color": "#5c5cd6",   
             "size": 386  
           },   
           "id": "Source/Options/Options.BarChart.js",   
           "name": "5.14"  
         },   
         {  
           "children": [],   
           "data": {  
             "description": "",    
             "$angularWidth": 100,   
             "link": "<a id='golink' href=''>Download PDF on GitHub</a>",   
             "$color": "#5c5cd6",   
             "size": 392  
           },   
           "id": "Source/Options/Options.Canvas.js",   
           "name": "5.13"  
         },   
         {  
           "children": [],   
           "data": {  
             "description": "",    
             "$angularWidth": 100,   
             "link": "<a id='golink' href=''>Download PDF on GitHub</a>",    
             "$color": "#5c5cd6",   
             "size": 3856  
           },   
           "id": "Source/Options/Options.Controller.js",   
           "name": "5.12"  
         },   
         {  
           "children": [],   
           "data": {  
             "description": "", 
             "$angularWidth": 100,   
             "link": "<a id='golink' href=''>Download PDF on GitHub</a>",    
             "$color": "#5c5cd6",   
             "size": 1475  
           },   
           "id": "Source/Options/Options.Edge.js",   
           "name": "5.11"  
         },   
         {  
           "children": [],   
           "data": {  
             "description": "",   
             "$angularWidth": 100,   
             "link": "<a id='golink' href=''>Download PDF on GitHub</a>",    
             "$color": "#5c5cd6",   
             "size": 312  
           },   
           "id": "Source/Options/Options.Events.js",   
           "name": "5.10"  
         },   
         {  
           "children": [],   
           "data": {  
            "description": "", 
             "$angularWidth": 100,   
             "link": "<a id='golink' href=''>Download PDF on GitHub</a>",    
             "$color": "#5c5cd6",   
             "size": 749  
           },   
           "id": "Source/Options/Options.Fx.js",   
           "name": "5.9"  
         },   
         {  
           "children": [],   
           "data": {  
             "description": "", 
             "$angularWidth": 100,   
             "link": "<a id='golink' href=''>Download PDF on GitHub</a>",    
             "$color": "#5c5cd6",   
             "size": 530  
           },   
           "id": "Source/Options/Options.js",   
           "name": "5.8"  
         },   
         {  
           "children": [],   
           "data": {  
             "description": "",    
             "$angularWidth": 100,   
             "link": "<a id='golink' href=''>Download PDF on GitHub</a>",   
             "$color": "#5c5cd6",   
             "size": 203  
           },   
           "id": "Source/Options/Options.Label.js",   
           "name": "5.7"  
         },   
         {  
           "children": [],   
           "data": {  
             "description": "", 
             "$angularWidth": 100,   
             "link": "<a id='golink' href=''>Download PDF on GitHub</a>",    
             "$color": "#5c5cd6",   
             "size": 137  
           },   
           "id": "Source/Options/Options.Navigation.js",   
           "name": "5.6"  
         },   
         {  
           "children": [],   
           "data": {  
             "description": "", 
             "$angularWidth": 100,   
             "link": "<a id='golink' href=''>Download PDF on GitHub</a>",  
             "$color": "#5c5cd6",   
             "size": 2083  
           },   
           "id": "Source/Options/Options.Node.js",   
           "name": "5.5"  
         },   
         {  
           "children": [],   
           "data": {  
             "description": "",    
             "$angularWidth": 100,   
             "link": "<a id='golink' href=''>Download PDF on GitHub</a>",   
             "$color": "#5c5cd6",   
             "size": 583  
           },   
           "id": "Source/Options/Options.NodeStyles.js",   
           "name": "5.4"  
         },   
         {  
           "children": [],   
           "data": {  
            "description": "",    
             "$angularWidth": 100,   
             "link": "<a id='golink' href=''>Download PDF on GitHub</a>",   
             "$color": "#5c5cd6",   
             "size": 380  
           },   
           "id": "Source/Options/Options.PieChart.js",   
           "name": "5.3"  
         },   
         {  
           "children": [],   
           "data": {  
             "description": "", 
             "$angularWidth": 100,   
             "link": "<a id='golink' href=''>Download PDF on GitHub</a>",   
             "$color": "#5c5cd6",   
             "size": 1120  
           },   
           "id": "Source/Options/Options.Tips.js",   
           "name": "5.2"  
         },   
         {  
           "children": [],   
           "data": {  
             "description": "",   
             "$angularWidth": 100,   
             "link": "<a id='golink' href=''>Download PDF on GitHub</a>",    
             "$color": "#5c5cd6",   
             "size": 1021  
           },   
           "id": "Source/Options/Options.Tree.js",   
           "name": "5.1"  
         }  
       ],   
       "data": {  
         "description": "Chapter 5, an introduction to classical mechanics",   
         "$color": "#3333cc",   
         "link": "<a id='golink' href=''>Download PDF on GitHub</a>",  
         "$angularWidth": 2000,   
         "size": 13575  
       },   
       "id": "Source/Options",   
       "name": "Chapter 5"  
     },
     {  
       "children": [  
         {  
           "children": [],   
           "data": {  
             "description": "4.0 Calculus, a basic introduction to differential and intergral calculus",   
             "$angularWidth": 2,   
             "link": "<a id='golink' href='https://github.com/mcburgess/SimplisticPhysicsResource/blob/gh-pages/Chapter%20Directory/Chapter%204_%20Introduction%20to%20Calculus/Content/Chapter4IntroductiontoCalculus.pdf'>Download PDF on GitHub</a>",   
             "$color": "#1aff66",   
             "size": 80  
           },   
           "id": "Source/Loader/Loader.js",   
           "name": "4.0 "  
         }  
       ],   
       "data": {  
         "description": "Chapter 4 An Introduction to Calculus",   
         "$color": "#009933",   
         "link": "<a id='golink' href='https://github.com/mcburgess/SimplisticPhysicsResource/tree/gh-pages/Chapter%20Directory/Chapter%204_%20Introduction%20to%20Calculus'>Download PDF on GitHub</a>",   
         "$angularWidth": 300,   
         "size": 8079  
       },   
       "id": "Source/Loader",   
       "name": "Chapter 4"  
     },  
     {  
       "children": [  
         {  
           "children": [],   
           "data": {  
             "description": "",    
             "$angularWidth": 100,   
             "link": 19,   
             "$color": "#ffff80",   
             "size": 13636  
           },   
           "id": "Source/Visualizations/AreaChart.js",   
           "name": "More Content"  
         },   
         {  
           "children": [],   
           "data": {  
             "description": "3.9 Vectors, basics of vectors and component additon, view more content for better explanations",   
             "$angularWidth": 100,   
             "link": "<a id='golink' href='https://github.com/mcburgess/SimplisticPhysicsResource/blob/gh-pages/Chapter%20Directory/Chapter%203_%20Measurments.1/Content/3.9Vectors.pdf'>Download PDF on GitHub</a>",   
             "$color": "#ffff33",   
             "size": 12608  
           },   
           "id": "3.9",   
           "name": "3.9"  
         },
         {  
           "children": [],   
           "data": {  
             "description": "3.8 Precision, Accuracy, and Signifcant Figures, and why they are imporant",   
             "$angularWidth": 100,   
             "link": "<a id='golink' href='https://github.com/mcburgess/SimplisticPhysicsResource/blob/gh-pages/Chapter%20Directory/Chapter%203_%20Measurments.1/Content/3.8PrecisionAccuracySignificantFigures.pdf'>Download PDF on GitHub</a>",   
             "$color": "#ffff33",   
             "size": 16954  
           },   
           "id": "3.8",   
           "name": "3.8"  
         },   
         {  
           "children": [],   
           "data": {  
             "description": "3.7 Orders of Magnitude, how to do an order of magntude calculation, how we use order of magntudes",   
             "$angularWidth": 100,   
             "link": "<a id='golink' href='https://github.com/mcburgess/SimplisticPhysicsResource/blob/gh-pages/Chapter%20Directory/Chapter%203_%20Measurments.1/Content/3.7OrdersofMagnitude.pdf'>Download PDF on GitHub</a>",   
             "$color": "#ffff33",   
             "size": 23448  
           },   
           "id": "3.7",   
           "name": "3.7"  
         },   
         {  
           "children": [],   
           "data": {  
             "description": "3.6 Scientific Notation, how to move decimal places, what is scientific notation",   
             "$angularWidth": 100,   
             "link": "<a id='golink' href='https://github.com/mcburgess/SimplisticPhysicsResource/blob/gh-pages/Chapter%20Directory/Chapter%203_%20Measurments.1/Content/3.6ScientificNotation.pdf'>Download PDF on GitHub</a>",   
             "$color": "#ffff33",   
             "size": 0  
           },   
           "id": "3.6",   
           "name": "3.6"  
         },   
         {  
           "children": [],   
           "data": {  
             "description": "3.5 Unit Conversion, how we convert from one unit to another, also called dimensional analysis",   
             "$angularWidth": 100,   
             "link": "<a id='golink' href='https://github.com/mcburgess/SimplisticPhysicsResource/blob/gh-pages/Chapter%20Directory/Chapter%203_%20Measurments.1/Content/3.5UnitConversion.pdf'>Download PDF on GitHub</a>",  
             "$color": "#ffff33",   
             "size": 10762  
           },   
           "id": "3.5",   
           "name": "3.5"  
         },   
         {  
           "children": [],   
           "data": {  
             "description": "3.4 Unit Prefixes, what is a unti prefix and how we use it",   
             "$angularWidth": 100,   
             "link": "<a id='golink' href='https://github.com/mcburgess/SimplisticPhysicsResource/blob/gh-pages/Chapter%20Directory/Chapter%203_%20Measurments.1/Content/3.4UnitPrefixes.pdf'>Download PDF on GitHub</a>",   
             "$color": "#ffff33",   
             "size": 18010  
           },   
           "id": "3.4",   
           "name": "3.4"  
         },   
         {  
           "children": [],   
           "data": {  
             "description": "3.3 Standards and Units, SI systems and units comprehensively, also look at list of units in more content! ",   
             "$angularWidth": 100,   
             "link": "<a id='golink' href='https://github.com/mcburgess/SimplisticPhysicsResource/blob/gh-pages/Chapter%20Directory/Chapter%203_%20Measurments.1/Content/3.3StandardsandUnits.pdf'>Download PDF on GitHub</a>",  
             "$color": "#ffff33",   
             "size": 52895  
           },   
           "id": "3.3",   
           "name": "3.3"  
         },   
         {  
           "children": [],   
           "data": {  
             "description": "3.2 Physical Quanities, why we have standards, SI Units, what is a physical quanitiy. Also look at the list of physical quantities in more content!",   
             "$angularWidth": 100,   
             "link": "<a id='golink' href='https://github.com/mcburgess/SimplisticPhysicsResource/blob/gh-pages/Chapter%20Directory/Chapter%203_%20Measurments.1/Content/3.2PhysicalQuanitieskilogrammetersthosethings.pdf'>Download PDF on GitHub</a>",   
             "$color": "#ffff33",   
             "size": 214  
           },   
           "id": "3.2",   
           "name": "3.2"  
         }, 
         {  
           "children": [],   
           "data": {  
             "description": "3.1 Basic Mathematical Foundations, an introduction to study and review of measurements/unit conversion",   
             "$angularWidth": 100,   
             "link": "<a id='golink' href='https://github.com/mcburgess/SimplisticPhysicsResource/blob/gh-pages/Chapter%20Directory/Chapter%203_%20Measurments.1/Content/3.1BasicMathematicalFoundationssimpleunitsconversionandaweebitofmetacognition.pdf'>Download PDF on GitHub</a>",   
             "$color": "#ffff33",   
             "size": 164  
           },   
           "id": "3.1",   
           "name": "3.1"  
         }   
       ],   
       "data": {  
        "description": "Chapter 3 Measurements, an introduction to measurment; physical quanities,units,orders of magntudes, vectors",   
         "$color": "#ffff00",   
         "link": "<a id='golink' href=''>Download PDF on GitHub</a>",    
         "$angularWidth": 2000,   
         "size": 100  
       },   
       "id": "Source/Visualizations",   
       "name": "Chapter 3"  
     }  
   ],   
   "data": {  
     "$type": "none"  
   },   
   "id": "Source",   
   "name": "Source"  
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

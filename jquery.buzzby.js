/*
* jQuery.buzzby - Evenly space child elements in various shapes
* Thomas Summerall
* Released into the public domain
* Date: 8 August 2014
* @author Thomas Summerall
* @version 0.5
*/

(function($){
 $.fn.buzzby = function(options) {
    var newLocs= [];
    var defaults = {
      shape:"ellipse",
      fit:true,
      origin:"tl",
      arcStart:Math.PI,
      arcLength:Math.PI*2,
      arcDirection:"cw",
      animate:true,
      duration:2000
    };
   
    var options = $.extend(defaults, options); 
    var containerSize = {width:this.width(), height:this.height()};
    var alignRect = {left:parseInt(this.css('left')),top:parseInt(this.css('top')), width:containerSize.width, height:containerSize.height};
    var numPoints = this.children().length;
    var numIntervals = numPoints-1;
    if(options.fit) {
      alignRect.width -= $(this.children()[numPoints-1]).width();
      alignRect.height -= $(this.children()[numPoints-1]).height();
    }
    switch(options.shape) {
      case "ellipse":
        if(options.arcLength >= Math.PI*2) {
         numIntervals = numPoints;
        }
        var radiusH = alignRect.width/2;
        var radiusV = alignRect.height/2;
        var arcInterval = defaults.arcLength / numIntervals;
        if(options.arcDirection == "cw") {
          arcInterval *= -1;
        }
        var curArcPos = defaults.arcStart ? defaults.arcStart : 0; 
        return this.children().each(function() {
          var xPos = Math.sin(curArcPos) * radiusH;
          var yPos = Math.cos(curArcPos) * radiusV;
          var nextPoint = addPoints([{x:xPos,y:yPos},{x:radiusH, y:radiusV}]);
          if(options.animate) {
           $(this).stop();
           $(this).animate({left: nextPoint.x, top: nextPoint.y}, options.duration);
          } else {
            $(this).css('top',nextPoint.y+'px');
            $(this).css('left',nextPoint.x+'px');
          }
          curArcPos += arcInterval;
        });
        break;
      case "line": // assume tl
        var xOff = (alignRect.width)/numIntervals;
        var yOff = (alignRect.height)/numIntervals;
        var xOrigin=0;
        var yOrigin=0;
        switch(options.origin) {
          case "tr":
            xOrigin = alignRect.width;
            xOff *= -1;
            break;
          case "br" :
            xOrigin = alignRect.width;
            xOff *= -1;
            yOrigin = alignRect.height;
            yOff *= -1;
            break;
          case "bl" :
            yOrigin = alignRect.height;
            yOff *= -1;
            break;
          default:
            break;
        }
        return this.children().each(function() {
          if(options.animate) {
            $(this).stop();
            $(this).animate({left: xOrigin, top: yOrigin}, options.duration);
          } else {
            $(this).css('top',yOrigin+'px');
            $(this).css('left',xOrigin+'px');
          }
          xOrigin+=xOff;
          yOrigin+=yOff;
        });
        break;
      default:
        break;
    }
   
    // This is to ease more complex frames of reference in the future
    function addPoints(points) {
      var resultPoint = {x:0,y:0};
      for(var curPoint = 0; curPoint<points.length; curPoint++) {
        resultPoint.x += points[curPoint].x;
        resultPoint.y += points[curPoint].y;
      }
      return resultPoint; 
    }
 };
})(jQuery);

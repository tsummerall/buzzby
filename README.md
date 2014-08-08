buzzby
======

Basic element layout plugin for query. Demo here http://codepen.io/tsum/pen/xhpei

(I apologize for the skimpy docs. I just started this as a utility for a larger project and hope to come back to it. I uploaded it because there seem to be few elliptical alignment scripts around.)

Usage:

Assuming a div with id="controller" contains a bunch of immediate children that you want to align and distribute in a line or on an ellipse:

$('#controller').buzzby({shape:"ellipse"});

or 

$('#controller').buzzby({shape:"ellipse",arcLength:Math.PI/2,arcStart:Math.PI*1.5});

or

$('#controller').buzzby({shape:"line"});

Elliptical options include: arcStart in radians, arcLength in radians, arcDirection ("cw" or "ccw" for clockwise and counter clockwise)

Line options include origin ("tl","tr","bl","br") which determines which corner to start the line in. The line of items will stretch to the opposite corner of the container.

The fit boolean option for both determines if all elements should stay within bounds of container (otherwise the top left css alignment will cause the bottom right items to be outside)

The animate boolean option determines whether or not to animate. The duration option specifies milliseconds for the animation.

The child elements should be absolutely positioned and the container should be relatively positioned.

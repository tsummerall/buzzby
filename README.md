buzzby
======

Basic element layout plugin for query. 

(I apologize for the skimpy docs. I just started this as a utility for a larger project and hope to come back to it. I uploaded it because there seem to be few elliptical alignment scripts around.)

Usage:

Assuming a <div id="controller"> contains a bunch of immediate children that you want to align and distribute in a line or a on an ellipse:

$('#controller').buzzby({shape:"ellipse"});

or 

$('#controller').buzzby({shape:"ellipse",arcLength:Math.PI/2,arcStart:Math.PI*1.5});

or

$('#controller').buzzby({shape:"line"});

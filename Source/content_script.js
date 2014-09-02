
if (url_domain("data!") == "www.flowdock.com"){
	setInterval(function(){
		walk(document.getElementById("chat"));
	}, 10000);
}

function url_domain(data) {
	// this wonderful little trick courtesty of:
	// http://stackoverflow.com/a/8498668/3250582
	// - BFG9k

  var    a      = document.createElement('a');
         a.href = data;
  return a.hostname;
}

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	// There's something to be said about a glorified
	// find-replace fork of a plugin whose very
	// function is a glorified find-replace... -BFG9k

	v = v.replace(/\bflow\b/g, "room");
	v = v.replace(/\bFlow\b/g, "Room");
	v = v.replace(/\bfLow\b/g, "rOom");
	v = v.replace(/\bflOw\b/g, "roOm");
	v = v.replace(/\bfloW\b/g, "rooM");
	v = v.replace(/\bflOW\b/g, "roOM");
	v = v.replace(/\bfLOw\b/g, "rOOm");
	v = v.replace(/\bFLow\b/g, "ROom");
	v = v.replace(/\bfLoW\b/g, "rOoM");
	v = v.replace(/\bFlOw\b/g, "RoOm");
	v = v.replace(/\bFloW\b/g, "RooM");
	v = v.replace(/\bfLOW\b/g, "rOOM");
	v = v.replace(/\bFLOw\b/g, "ROOm");
	v = v.replace(/\bFlOW\b/g, "RoOM");
	v = v.replace(/\bFLoW\b/g, "ROoM");
	v = v.replace(/\bFLOW\b/g, "ROOM");

	v = v.replace(/\bfl0w\b/g, "ro0m");
	v = v.replace(/\bFl0w\b/g, "Ro0m");
	v = v.replace(/\bfL0w\b/g, "rO0m");
	v = v.replace(/\bfl0W\b/g, "ro0M");
	v = v.replace(/\bFL0w\b/g, "RO0m");
	v = v.replace(/\bfL0W\b/g, "rO0M");
	v = v.replace(/\bFl0W\b/g, "Ro0M");
	v = v.replace(/\bFL0W\b/g, "RO0M");
	
	v = v.replace(/\bflows\b/g, "rooms");
	v = v.replace(/\bFlows\b/g, "Rooms");
	v = v.replace(/\bfLows\b/g, "rOoms");
	v = v.replace(/\bflOws\b/g, "roOms");
	v = v.replace(/\bfloWs\b/g, "rooMs");
	v = v.replace(/\bflowS\b/g, "roomS");
	v = v.replace(/\bFLows\b/g, "ROoms");
	v = v.replace(/\bfLOws\b/g, "rOOms");
	v = v.replace(/\bflOWs\b/g, "roOMs");
	v = v.replace(/\bfloWS\b/g, "rooMS");
	v = v.replace(/\bFlOws\b/g, "RoOms");
	v = v.replace(/\bfLoWs\b/g, "rOoMs");
	v = v.replace(/\bflOwS\b/g, "roOmS");
	v = v.replace(/\bFloWs\b/g, "RooMs");
	v = v.replace(/\bfLowS\b/g, "rOomS");
	v = v.replace(/\bFlowS\b/g, "RoomS");
	v = v.replace(/\bflOWS\b/g, "roOMS");
	v = v.replace(/\bFloWS\b/g, "RooMS");
	v = v.replace(/\bFLowS\b/g, "ROomS");
	v = v.replace(/\bFLOws\b/g, "ROOms");
	v = v.replace(/\bfLoWS\b/g, "rOoMS");
	v = v.replace(/\bFlOwS\b/g, "RoOmS");
	v = v.replace(/\bFLoWs\b/g, "ROoMs");
	v = v.replace(/\bfLOwS\b/g, "rOOmS");
	v = v.replace(/\bFlOWs\b/g, "RoOMs");
	v = v.replace(/\bfLOWs\b/g, "rOOMs");
	v = v.replace(/\bFLOWs\b/g, "ROOMs");
	v = v.replace(/\bFLOwS\b/g, "ROOmS");
	v = v.replace(/\bFLoWS\b/g, "ROoMS");
	v = v.replace(/\bFlOWS\b/g, "RoOMS");
	v = v.replace(/\bfLOWS\b/g, "rOOMS");
	v = v.replace(/\bFLOWS\b/g, "ROOMS");

	v = v.replace(/\bfl0ws\b/g, "ro0ms");
	v = v.replace(/\bFl0ws\b/g, "Ro0ms");
	v = v.replace(/\bfL0ws\b/g, "rO0ms");
	v = v.replace(/\bfl0Ws\b/g, "ro0Ms");
	v = v.replace(/\bfl0wS\b/g, "ro0mS");
	v = v.replace(/\bFL0ws\b/g, "RO0ms");
	v = v.replace(/\bfL0ws\b/g, "rO0ms");
	v = v.replace(/\bfl0WS\b/g, "ro0MS");
	v = v.replace(/\bfL0Ws\b/g, "rO0Ms");
	v = v.replace(/\bFl0Ws\b/g, "Ro0Ms");
	v = v.replace(/\bfL0wS\b/g, "rO0mS");
	v = v.replace(/\bFl0wS\b/g, "Ro0mS");
	v = v.replace(/\bFl0WS\b/g, "Ro0MS");
	v = v.replace(/\bFL0wS\b/g, "RO0mS");
	v = v.replace(/\bfL0WS\b/g, "rO0MS");
	v = v.replace(/\bFL0Ws\b/g, "RO0Ms");			
	v = v.replace(/\bFL0wS\b/g, "RO0mS");
	v = v.replace(/\bFL0WS\b/g, "RO0MS");

	textNode.nodeValue = v;
}

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

// Powered by http://stackoverflow.com/questions/17264639/replace-text-but-keep-case
function matchCase(text, pattern)
{
  var result = '';

  for(var i = 0; i < text.length; i++)
  {
    var c = text.charAt(i);
    var p = pattern.charCodeAt(i);

    if(p >= 65 && p < 65 + 26)
    {
      result += c.toUpperCase();
    }
    else
    {
      result += c.toLowerCase();
    }
  }

  return result;
}

// Hap-hazard functionality testing done at http://jsfiddle.net/te1zxocx/
function handleText(textNode)
{
  var v = textNode.nodeValue;

  v = v.replace(/\bfl(o|0)ws?\b/ig, function(match) {
    var replaceValue = 'room';

    // Use case: 'Fl0w' => 'Ro0m'
    if (match.indexOf("0") > -1)
    {
      replaceValue = 'ro0m';
    }

    // Use case: 'Flows' => 'Rooms'
    if (match.indexOf("s") > -1 || match.indexOf("S") > -1)
    {
      replaceValue = replaceValue + 's';
    }
    return matchCase(replaceValue, match);
  });

  textNode.nodeValue = v;
}

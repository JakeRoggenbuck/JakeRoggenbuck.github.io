function populate(data, id) {
    for (var i = 0; i < data.length; i++) {
        var col = document.createElement("div");
        col.setAttribute('class', 'col s12 m4');
        col.setAttribute('margin-bottom', '100px');
        var ico = document.createElement("div");
        ico.setAttribute('class', 'icon-block');
        var space = document.createElement("div");
		space.setAttribute('class', 'space');

        var name = document.createElement("h5");
        name.setAttribute('class', 'center');

        var desc = document.createElement("p");
        desc.setAttribute('class', 'light');

		var link = document.createElement("a");
        link.setAttribute('class', 'light');
        link.setAttribute('href', data[i]["url"]);

        // Create text nodes
        var nodeName = document.createTextNode(data[i]["name"]);
        var nodeDesc = document.createTextNode(data[i]["desc"]);
        var nodeLink = document.createTextNode(data[i]["url"]);
        // Get entrys element
        var elementEntrys = document.getElementById(id);

        // Append text nodes to elements
        name.appendChild(nodeName);
        desc.appendChild(nodeDesc);
        link.appendChild(nodeLink);
        // Append elements to xib
        ico.appendChild(name);
        ico.appendChild(desc);
        ico.appendChild(link);
        space.appendChild(ico);
		col.appendChild(space);
        // Append xib to entrys
        elementEntrys.appendChild(col);
    }
}

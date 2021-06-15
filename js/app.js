function rank_repos(repos) {
  for (var i = 0; i < repos.length; i++) {
    var entry = repos[i];
    var rank = 4;

    if (entry["description"] != null) {
      rank--;
    }
    if (entry["license"] != null) {
      rank--;
    }
    if (entry["language"] != null) {
      rank--;
    }
    if (entry["stargazers_count"] > 0) {
      rank--;
    }
    entry["rank"] = rank;
  }
  return repos;
}

function sortRepos(repos) {
  repos.sort(function (first, second) {
    return first.rank != second.rank ? (first.rank < second.rank ? -1 : 1) : 0;
  });
  return repos;
}

function populate_repos(data, id) {
  var data = rank_repos(data);
  var data = sortRepos(data);

  for (var i = 0; i < data.length; i++) {
    var entry = data[i];
    var col = document.createElement("div");
    col.setAttribute("class", "col s12 m4");
    col.setAttribute("margin-bottom", "100px");
    var ico = document.createElement("div");
    ico.setAttribute("class", "icon-block");
    var space = document.createElement("div");
    space.setAttribute("class", "space");

    var name = document.createElement("h5");
    name.setAttribute("class", "center");

    var desc = document.createElement("p");
    desc.setAttribute("class", "light");

    var lang = document.createElement("p");
    lang.setAttribute("class", "light");

    var link = document.createElement("a");
    link.setAttribute("class", "light");
    link.setAttribute("href", entry["url"]);

    // Create text nodes
    var nodeName = document.createTextNode(entry["name"]);
    var nodeDesc = document.createTextNode(entry["description"]);
    var nodeLang = document.createTextNode(entry["language"]);
    var nodeLink = document.createTextNode(entry["html_url"]);

    // Get entrys element
    var elementEntrys = document.getElementById(id);

    // Append text nodes to elements
    name.appendChild(nodeName);
    desc.appendChild(nodeDesc);
    lang.appendChild(nodeLang);
    link.appendChild(nodeLink);
    // Append elements to xib
    ico.appendChild(name);

    if (entry["description"] != null) {
      ico.appendChild(desc);
    }

    if (entry["language"] != null) {
      ico.appendChild(lang);
    }

    ico.appendChild(link);
    space.appendChild(ico);
    col.appendChild(space);
    // Append xib to entrys
    elementEntrys.appendChild(col);
  }
}

function populate(data, id) {
  for (var i = 0; i < data.length; i++) {
    var entry = data[i];
    var col = document.createElement("div");
    col.setAttribute("class", "col s12 m4");
    col.setAttribute("margin-bottom", "100px");
    var ico = document.createElement("div");
    ico.setAttribute("class", "icon-block");
    var space = document.createElement("div");
    space.setAttribute("class", "space");

    var name = document.createElement("h5");
    name.setAttribute("class", "center");

    var desc = document.createElement("p");
    desc.setAttribute("class", "light");

    var link = document.createElement("a");
    link.setAttribute("class", "light");
    link.setAttribute("href", entry["url"]);

    // Create text nodes
    var nodeName = document.createTextNode(entry["name"]);
    var nodeDesc = document.createTextNode(entry["desc"]);
    var nodeLink = document.createTextNode(entry["url"]);
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

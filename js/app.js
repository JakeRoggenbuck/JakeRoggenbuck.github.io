function rank_repos(repos) {
  for (var i = 0; i < repos.length; i++) {
    var entry = repos[i];
    var rank = 4;

    reduce_when_not_null = (field) => {
      if (entry[field] != null) {
        rank--;
      }
    };

    reduce_when_greater_then_one = (field) => {
      if (entry[field] > 0) {
        rank--;
      }
    };

    reduce_when_not_null("license");
    reduce_when_not_null("language");
    reduce_when_greater_then_one("stargazers_count");

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
    link.setAttribute("href", entry["html_url"]);

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

function populate_tutoring(data, id) {
  for (var i = 0; i < data.length; i++) {
    var entry = data[i];

    var frame = document.createElement("div");
    frame.setAttribute("class", "tutor-class-frame");

    var name = document.createElement("h5");
    name.setAttribute("class", "center");

    var desc = document.createElement("p");
    desc.setAttribute("class", "light");

    // Create text nodes
    var nodeName = document.createTextNode(entry["name"]);
    var nodeDesc = document.createTextNode(entry["description"]);

    // Makes the list of prerequisites in a div
    var prerequisites_div = document.createElement("div");
    prerequisites_div.setAttribute("class", "prerequisites");

    var prerequisites = entry["prerequisites"];
    for (var i = 0; i < prerequisites.length; i++) {
      var prerequisite = prerequisites[i];
      // Create the text node for a prerequisite
      var prerequisite_text = document.createTextNode(prerequisite);

      // Make an element the text will be appended to
      var prerequisites_element = document.createElement("p");
      prerequisites_element.setAttribute("class", "light");

      // Add the text to the element
      prerequisites_element.appendChild(prerequisite_text);
      // Add the element to the main div of all the prerequisites
      prerequisites_div.appendChild(prerequisites_element);
    }

    var avalible_times_div = document.createElement("div");
    avalible_times_div.setAttribute("class", "avalible-times");

    var times_available = entry["times_available"];
    for (var i = 0; i < times_available.length; i++) {
      var avalible_time = times_available[i];
      var avalible_time_text = document.createTextNode(avalible_time);

      // Create the list of avalible times
      var times_available_element = document.createElement("p");
      times_available_element.setAttribute("class", "light");

      times_available_element.appendChild(avalible_time_text);
      avalible_times_div.appendChild(times_available_element);
    }

    // Append text nodes to elements
    name.appendChild(nodeName);
    desc.appendChild(nodeDesc);

    // Append elements to xib
    frame.appendChild(name);
    frame.appendChild(desc);
    frame.appendChild(prerequisites_div);
    frame.appendChild(avalible_times_div);

    // Append xib to entrys
    var elementEntrys = document.getElementById(id);
    elementEntrys.appendChild(frame);
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

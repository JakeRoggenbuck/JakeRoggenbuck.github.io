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
    lang.setAttribute("class", "heavy");

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
  var current_row = document.createElement("div");
  current_row.setAttribute("class", "row tutor-row");

  for (var i = 0; i < data.length; i++) {
    var entry = data[i];

    var frame = document.createElement("div");
    frame.setAttribute("class", "tutor-class-frame col");

    var name = document.createElement("h5");
    name.setAttribute("class", "center");

    var desc = document.createElement("p");
    desc.setAttribute("class", "light");

    var elementEntrys = document.getElementById(id);

    // Create text nodes
    var nodeName = document.createTextNode(entry["name"]);
    var nodeDesc = document.createTextNode(entry["description"]);

    make_list = (data_point, div) => {
      var data_points = entry[data_point];
      var list = document.createElement("ul");
      list.setAttribute("class", "prerequisites-list");
      for (let i = 0; i < data_points.length; i++) {
        var this_data_point = data_points[i];
        // Create the text node for a data_point
        var data_point_text = document.createTextNode(this_data_point);

        // Make an element the text will be appended to
        var data_points_element = document.createElement("p");
        data_points_element.setAttribute("class", "light");

        var list_element = document.createElement("li");
        list_element.setAttribute("class", "list-item");

        // Add the text to the element
        data_points_element.appendChild(data_point_text);
        list_element.appendChild(data_points_element);
        // Add the element to the main div of all the data_points
        list.appendChild(list_element);
      }
      div.appendChild(list);
    };

    // Makes the list of prerequisites in a div
    var prerequisites_div = document.createElement("div");
    prerequisites_div.setAttribute("class", "prerequisites");
    if (entry["prerequisites"].length != 0) {
      // Make a title that says "Prerequisites" if there are prerequisites
      var prereq_title_element = document.createElement("p");
      prereq_title_element.setAttribute("class", "light prerequisites-title");
      var prereq_title = document.createTextNode("Recommended prerequisite:");
      prereq_title_element.appendChild(prereq_title);

      prerequisites_div.appendChild(prereq_title_element);
    }
    make_list("prerequisites", prerequisites_div);

    var avalible_times_div = document.createElement("div");
    avalible_times_div.setAttribute("class", "avalible-times");

    var times_available = entry["times_available"];
    make_list("times_available", avalible_times_div);

    var signup_title = document.createTextNode("Sign Up");
    var signup = document.createElement("button");
    signup.setAttribute("class", "btn signup-button");

    var signup_link = document.createElement("a");
    signup_link.setAttribute("href", entry["url"]);
    signup_link.setAttribute("target", "_blank");

    signup.appendChild(signup_title);
    signup_link.appendChild(signup);

    // Append text nodes to elements
    name.appendChild(nodeName);
    desc.appendChild(nodeDesc);

    // Append elements to xib
    frame.appendChild(name);
    frame.appendChild(desc);
    frame.appendChild(prerequisites_div);
    frame.appendChild(avalible_times_div);
    frame.appendChild(signup_link);

    if (current_row.childNodes.length < 3) {
      current_row.appendChild(frame);
    }
    if (current_row.childNodes.length == 3) {
      elementEntrys.appendChild(current_row);
      current_row = document.createElement("div");
      current_row.setAttribute("class", "row tutor-row");
    }
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

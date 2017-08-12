$(function() {

    var url = "https://script.google.com/macros/s/AKfycbwL0b2a_JNnkKOHNjKjSSeXL_gZk6wTLQp109P9GCqm0QDpb5c/exec?action=read";

    $.getJSON(url, function (json) {

        console.log(json.records);

        var table = document.createElement("div");
        table.setAttribute("class", "div-all");

        var header = document.createElement("div");
        header.innerHTML = "<div><b>Coluna 1</b></div>" +
                           "<div><b>Coluna 2</b></div>" +
                           "<div><b>Coluna 3</b></div>";

        header.setAttribute("class", "div-header");

        table.appendChild(header);

        for (var i = 0; i < json.records.length; i++) {
            var row = document.createElement("div");

            row.innerHTML = "<div>" + json.records[i].coluna1 + "</div>" +
                            "<div>" + json.records[i].coluna2 + "</div>" +
                            "<div>" + json.records[i].coluna3 + "</div>";

            row.setAttribute("class", "div-lines");
            table.appendChild(row);
        }

        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    });
});  
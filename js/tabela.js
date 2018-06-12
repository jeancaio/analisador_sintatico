var estados = [
        []
    ],
    geral = 0;

function linhas() {
    for (var d = [], b = 0; b < estados.length; b++) {
        var a = [];
        a.estado = b;
        for (var e = 97; 122 >= e; e++) {
            var c = String.fromCharCode(e);
            a[c] = "undefined" === typeof estados[b][c] ? "-" : estados[b][c]
        }
        "undefined" !== typeof estados[b]["final"] && (a["final"] = !0);
        d.push(a)
    }
    return d
}

function insereTabela() {
    for (var d = 0; d < collection.length; d++)
        for (var b = 0, a = collection[d], e = 0; e < a.length; e++) {
            if ("undefined" === typeof estados[b][a[e]]) {
                var c = geral + 1;
                estados[b][a[e]] = c;
                estados[c] = [];
                geral = b = c
            } else b = estados[b][a[e]];
            e == a.length - 1 && (estados[b]["final"] = !0)
        }
}

function tabela_geral(d) {
    tabela = $("#automato");
    tabela.html("");
    var b = $("<tr class='cabecalho'>"),
        a = $("<th>");
    a.html("-");
    b.append(a);
    for (var e = "z", c = 97; c <= e.charCodeAt(0); c++) a = $("<th>"), a.html(String.fromCharCode(c)), b.append(a);
    tabela.append(b);
    for (a = 0; a < d.length; a++) {
        b = $("<tr class='trestado'>");
        var f = $("<td>");
        d[a]["final"] ? f.html("q" + d[a].estado + "*") : f.html("q" + d[a].estado);
        b.append(f);
        b.addClass("estado_" + d[a].estado);
        e = "z";
        for (c = 97; c <= e.charCodeAt(0); c++) {
            var g = String.fromCharCode(c);
            f = $("<td>");
            f.addClass("caracter_" + g);
            "-" != d[a][g] && f.html("q" + d[a][g]);
            b.append(f)
        }
        tabela.append(b)
    }
};

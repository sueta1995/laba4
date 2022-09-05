ID = 1;

function add() {
    $("#nettovarov").remove();

    createHeader("tablica-tovarov", "shapka")

    $("#tablica-tovarov").append(
        '<br>' + 
        '<div class="row" onclick="addInOrder(this)" id="tovar' + ID + '" tovari>' +
            '<div class="col-8">' +
                "<span class='tekst-tovari'>" + $("#nazvanie").val() + "</span>" +
            "</div>" +
            '<div class="col-4">' +
                "<span class='tekst-tovari'>" + $("#cena").val() + " ₽</span>" +
            "</div>" +
        "</div>"
    );

    ID += 1;
}

function addInOrder(obj) {
    $("#netzakazov").remove();

    createHeader("tablica-zakaz", "shapka-zakaz")

    var good = $("#" + obj.id);
    var name = good.children(".col-8").children(".tekst-tovari").text();
    var price = good.children(".col-4").children(".tekst-tovari").text();

    $("#tablica-zakaz").append(
        '<br>' + 
        '<div class="row" tovari>' +
            '<div class="col-8">' +
                "<span class='tekst-tovari'>" + name + "</span>" +
            "</div>" +
            '<div class="col-4">' +
                "<span class='tekst-tovari'>" + price + " </span>" +
            "</div>" +
        "</div>"
    );
    
    var sum = parseInt($("#stoimost").text());

    $("#stoimost").text(sum + parseInt(price));

}

function createHeader(tag1, tag2) {
    if ($("#" + tag1).has($("#" + tag2)).length == 0) {
        $("#" + tag1).append(
            "<br>" +
            "<div class='row' id='" + tag2 + "'>" +
                '<div class="col-8">' +
                    "<strong>Товар, название</strong>" +
                "</div>" +
                '<div class="col-4">' +
                    "<strong>Цена, рубли</strong>" +
                "</div>" +
            "</div>"
        )
    }
}
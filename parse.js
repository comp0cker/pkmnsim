function get_card(input)
{
    var url = parse_input(input);

    alert("ready..." + input);

    $.ajax({
        async: false,
        url: url,
        success: function (data) {
            $(".print").append("<img src='" + data.cards[0].imageUrl + "'height=" + card_height + ">");
            alert("bingo!");
        }
    });
}

function parse_input(input)
{
    var url = "https://api.pokemontcg.io/v1/cards/?name=";
    var name = input;

    if (input.charAt(input.length - 4) == " ")
    {
        var pos = input.length - 4;
        var set = input.substr(pos + 1, 3);
        name = input.substr(0, pos);
        url += name + "&setCode=" + set_convert(set);
    }
    else if (input.charAt(input.length - 3) == " ")
    {
        var pos = input.length - 3;
        var set = input.substr(pos + 1, 2);
        name = input.substr(0, pos);
        url += name + "&setCode=" + set_convert(set);
    }
    else
    {
        url += name;
        if (input.charAt(0).toUpperCase() == "N" && input.length == 1)
            url += "&id=bw3-101";
    }

    alert(url);

    return url;
}

function set_convert(abbr){
    abbr = abbr.toUpperCase();

    if (abbr == "SHL")
        return "sm35";
    if (abbr == "BUR" || abbr == "BUS")
        return "sm3";
    if (abbr == "GRI" || abbr == "GUR")
        return "sm2";
    if (abbr == "EVO")
        return "xy12";
    if (abbr == "STS" || abbr == "STM")
        return "xy11";
    if (abbr == "FAC" || abbr == "FCO")
        return "xy10";
    if (abbr == "GEN")
        return "g1";
    if (abbr == "BKP" || abbr == "BRP")
        return "xy9";
    if (abbr == "BKT")
        return "xy8";
    if (abbr == "AOR")
        return "xy7";
    if (abbr == "ROS" || abbr == "RSK")
        return "xy6";
    if (abbr == "DCR")
        return "dc1";
    if (abbr == "PRC")
        return "xy5";
    if (abbr == "PHF")
        return "xy4";
    if (abbr == "FFI" || abbr == "FUF")
        return "xy3";
    if (abbr == "FLF")
        return "xy2";
    if (abbr == "XY")
        return "xy1";
    if (abbr == "KSS")
        return "xy0";
    if (abbr == "PR" || abbr == "PR-" || abbr == " XY")
        return "xyp";
    if (abbr == "LTR")
        return "bw11";
    if (abbr == "PLB")
        return "bw10";
    if (abbr == "PLF")
        return "bw9";
    if (abbr == "PLS")
        return "bw8";
    if (abbr == "BCR")
        return "bw7";
    if (abbr == "DRV")
        return "dv1";
    if (abbr == "DRX")
        return "bw6";
    if (abbr == "DEX")
        return "bw5";
    if (abbr == "NXD")
        return "bw4";
    if (abbr == "NVI")
        return "bw3";
    if (abbr == "EPO")
        return "bw2";
    if (abbr == "BLW" || abbr == "BW " || abbr == "BW" || abbr == " BW")
        return "bw1";
    if (abbr == "SM" || abbr == " SM" || abbr == "SM " || abbr == "SAM" || abbr == "SUM")
        return "sm1";
}
const list = ["#000000 Black",
    "#000080 Navy",
    "#00008B DarkBlue",
    "#0000CD MediumBlue",
    "#0000FF Blue",
    "#006400 DarkGreen",
    "#008000 Green",
    "#008080 Teal",
    "#008B8B DarkCyan",
    "#00BFFF DeepSkyBlue",
    "#00CED1 DarkTurquoise",
    "#00FA9A MediumSpringGreen",
    "#00FF00 Lime",
    "#00FF7F SpringGreen",
    "#00FFFF Aqua",
    "#00FFFF Cyan",
    "#191970 MidnightBlue",
    "#1E90FF DodgerBlue",
    "#20B2AA LightSeaGreen",
    "#228B22 ForestGreen",
    "#2E8B57 SeaGreen",
    "#2F4F4F DarkSlateGray",
    "#2F4F4F DarkSlateGrey",
    "#32CD32 LimeGreen",
    "#3CB371 MediumSeaGreen",
    "#40E0D0 Turquoise",
    "#4169E1 RoyalBlue",
    "#4682B4 SteelBlue",
    "#483D8B DarkSlateBlue",
    "#48D1CC MediumTurquoise",
    "#4B0082 Indigo",
    "#556B2F DarkOliveGreen",
    "#5F9EA0 CadetBlue",
    "#6495ED CornflowerBlue",
    "#663399 RebeccaPurple",
    "#66CDAA MediumAquaMarine",
    "#696969 DimGray",
    "#696969 DimGrey",
    "#6A5ACD SlateBlue",
    "#6B8E23 OliveDrab",
    "#708090 SlateGray",
    "#708090 SlateGrey",
    "#778899 LightSlateGray",
    "#778899 LightSlateGrey",
    "#7B68EE MediumSlateBlue",
    "#7CFC00 LawnGreen",
    "#7FFF00 Chartreuse",
    "#7FFFD4 Aquamarine",
    "#800000 Maroon",
    "#800080 Purple",
    "#808000 Olive",
    "#808080 Gray",
    "#808080 Grey",
    "#87CEEB SkyBlue",
    "#87CEFA LightSkyBlue",
    "#8A2BE2 BlueViolet",
    "#8B0000 DarkRed",
    "#8B008B DarkMagenta",
    "#8B4513 SaddleBrown",
    "#8FBC8F DarkSeaGreen",
    "#90EE90 LightGreen",
    "#9370DB MediumPurple",
    "#9400D3 DarkViolet",
    "#98FB98 PaleGreen",
    "#9932CC DarkOrchid",
    "#9ACD32 YellowGreen",
    "#A0522D Sienna",
    "#A52A2A Brown",
    "#A9A9A9 DarkGray",
    "#A9A9A9 DarkGrey",
    "#ADD8E6 LightBlue",
    "#ADFF2F GreenYellow",
    "#AFEEEE PaleTurquoise",
    "#B0C4DE LightSteelBlue",
    "#B0E0E6 PowderBlue",
    "#B22222 FireBrick",
    "#B8860B DarkGoldenRod",
    "#BA55D3 MediumOrchid",
    "#BC8F8F RosyBrown",
    "#BDB76B DarkKhaki",
    "#C0C0C0 Silver",
    "#C71585 MediumVioletRed",
    "#CD5C5C IndianRed",
    "#CD853F Peru",
    "#D2691E Chocolate",
    "#D2B48C Tan",
    "#D3D3D3 LightGray",
    "#D3D3D3 LightGrey",
    "#D8BFD8 Thistle",
    "#DA70D6 Orchid",
    "#DAA520 GoldenRod",
    "#DB7093 PaleVioletRed",
    "#DC143C Crimson",
    "#DCDCDC Gainsboro",
    "#DDA0DD Plum",
    "#DEB887 BurlyWood",
    "#E0FFFF LightCyan",
    "#E6E6FA Lavender",
    "#E9967A DarkSalmon",
    "#EE82EE Violet",
    "#EEE8AA PaleGoldenRod",
    "#F08080 LightCoral",
    "#F0E68C Khaki",
    "#F0F8FF AliceBlue",
    "#F0FFF0 HoneyDew",
    "#F0FFFF Azure",
    "#F4A460 SandyBrown",
    "#F5DEB3 Wheat",
    "#F5F5DC Beige",
    "#F5F5F5 WhiteSmoke",
    "#F5FFFA MintCream",
    "#F8F8FF GhostWhite",
    "#FA8072 Salmon",
    "#FAEBD7 AntiqueWhite",
    "#FAF0E6 Linen",
    "#FAFAD2 LightGoldenRodYellow",
    "#FDF5E6 OldLace",
    "#FF0000 Red",
    "#FF00FF Fuchsia",
    "#FF00FF Magenta",
    "#FF1493 DeepPink",
    "#FF4500 OrangeRed",
    "#FF6347 Tomato",
    "#FF69B4 HotPink",
    "#FF7F50 Coral",
    "#FF8C00 DarkOrange",
    "#FFA07A LightSalmon",
    "#FFA500 Orange",
    "#FFB6C1 LightPink",
    "#FFC0CB Pink",
    "#FFD700 Gold",
    "#FFDAB9 PeachPuff",
    "#FFDEAD NavajoWhite",
    "#FFE4B5 Moccasin",
    "#FFE4C4 Bisque",
    "#FFE4E1 MistyRose",
    "#FFEBCD BlanchedAlmond",
    "#FFEFD5 PapayaWhip",
    "#FFF0F5 LavenderBlush",
    "#FFF5EE SeaShell",
    "#FFF8DC Cornsilk",
    "#FFFACD LemonChiffon",
    "#FFFAF0 FloralWhite",
    "#FFFAFA Snow",
    "#FFFF00 Yellow",
    "#FFFFE0 LightYellow",
    "#FFFFF0 Ivory",
    "#FFFFFF White"];

let colors = new Map();
list.forEach((color)=>
{
    let hex = color.split(" ")[0];
    let name = color.split(" ")[1];
    let red = parseInt(hex.substr(1,2),16);
    let green = parseInt(hex.substr(3,2),16);
    let blue = parseInt(hex.substr(5,2),16);
    colors.set([red,green,blue],name);
});

const rgbInput = document.getElementById("rgb-input");
const hslInput = document.getElementById("hsl-input");
const colorInput = document.getElementById("color-input");

const colorName = document.getElementById("color-name");
const colorCode = document.getElementById("color-code");

rgbInput.addEventListener("change", rgbUpdate);
hslInput.addEventListener("change", hslUpdate);
colorInput.addEventListener("change", colorUpdate);

function rgbUpdate()
{
    let code = this.value;
    if(code[0]==='#') code=code.slice(1);
    const pattern = /^[0-9AaBbCcDdEeFf]{6}$/;
    if(code.match(pattern))
    {
        let red = parseInt(code.substr(0,2),16);
        let green = parseInt(code.substr(2,2),16);
        let blue = parseInt(code.substr(4,2),16);
        showColor(...findClosest([red,green,blue]));
    }


}

function hslUpdate()
{}

function colorUpdate()
{}

function findClosest(color)
{
    let min = Infinity;
    let name = undefined;
    let hex = undefined;
    colors.forEach((v,k) => {
        let d = colorDistance(color,k);
        if(d<min)
        {
            min=d;
            name = v;
            console.log(name);
            hex = k;
        }
    });
    hex = "#"+hueToHex(hex[0])+hueToHex(hex[1])+hueToHex(hex[2]);
    hex = hex.toUpperCase();

    return [name,hex];

}

function hueToHex(hue)
{
    let result = hue.toString(16);
    if(result.length===1)
    {
        result = "0"+result;
    }
    return result;
}

function colorDistance(c1,c2)
{
    return (c1[0]-c2[0])**2+(c1[1]-c2[1])**2+(c1[2]-c2[2])**2;
}

function showColor(name,hex)
{
    console.log(name,hex);
    colorName.innerText=name;
    colorCode.innerText=hex;
}
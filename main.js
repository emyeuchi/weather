// 東京(130000)の予報を取得
let url = "https://www.jma.go.jp/bosai/forecast/data/forecast/010000.json";

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(weather) {
        console.log(weather);
        console.log(weather[8].srf.timeSeries[0].areas.weathers[2]);
        // 新しい div 要素を作成します
        areaWeather(weather, 2, "海北");
        areaWeather(weather, 5, "奥羽");
        areaWeather(weather, 8, "吾妻");
        areaWeather(weather, 7, "北越");
        areaWeather(weather, 11, "東海");
        areaWeather(weather, 12, "畿内");
        areaWeather(weather, 15, "陰陽");
        areaWeather(weather, 13, "二名");
        areaWeather(weather, 17, "鎮西");
        areaWeather(weather, 20, "龍及");


    });

function areaWeather(weather, i, name) {
    const element = document.createElement("p");
    const newText = name + "地方： " + weather[i].srf.timeSeries[0].areas.weathers[2];
    const newContent = document.createTextNode(newText);
    element.appendChild(newContent);
    const currentDiv = document.getElementById("p");
    document.body.insertBefore(element, currentDiv);
}

window.onLoad = function() {

    //添加地图
    var map = new AMap.Map('map', {
        pitch:60,
        viewMode:'3D',// 地图模式
        center: [111.957697, 27.450303],
        layers: [
            // new AMap.TileLayer.RoadNet({
            //     //rejectMapMask:true
            // }),
            // new AMap.TileLayer.Satellite()

        ],
        // mapStyle: 'amap: //styles/266001daab2de36748e2ad652c178ffc',
        // zoom: 7
        zooms: [7, 15],
        zoom: 7.5
    });
    // map.setFeatures("");

    // map.setMapStyle('amap://styles/266001daab2de36748e2ad652c178ffc');



    //使用多边形显示湖南地图（polygonhunan.js中的showMap方法）
    showMap(map);

    //加载地点信息（placeinfo.js中的loadInfo方法）
    loadInfo();

    //添加标记点（marker.js中的addMarker方法）
    addMarker(map, placeinfoarray);

    meshline(map);
    // var toolBar = new AMap.ToolBar({
    // 	visible: true
    // });
    // map.addControl(toolBar);
}

var url =
    'https://webapi.amap.com/maps?v=1.4.15&key=566a621aa1716e87b6dfc4cfcdbab0b6&callback=onLoad&plugin=AMap.DistrictSearch,AMap.ToolBar';
var jsapi = document.createElement('script');
jsapi.charset = 'utf-8';
jsapi.src = url;
document.head.appendChild(jsapi);
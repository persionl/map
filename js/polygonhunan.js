//使用多边形显示湖南地图
function showMap(map) {
    map: map;
    new AMap.DistrictSearch({
        extensions: 'all',
        subdistrict: 0
    }).search('湖南省', function(status, result) {

        var outer = [ // 外多边形坐标数组和内多边形坐标数组
            new AMap.LngLat(-360, 90, true),
            new AMap.LngLat(-360, -90, true),
            new AMap.LngLat(360, -90, true),
            new AMap.LngLat(360, 90, true),
        ];
        var holes = result.districtList[0].boundaries
        var pathArray = [
            outer
        ];
        pathArray.push.apply(pathArray, holes)
        var polygon = new AMap.Polygon({
            pathL: pathArray, //线条颜色，使用16进制颜色代码赋值。默认值为#006600
            strokeColor: 'rgb(244, 0, 2)', //'rgba(5, 39, 175)', //'rgb(244, 0, 2)', //'rgb(20,164,173)',
            strokeWeight: 5, //轮廓线透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为0.9
            strokeOpacity: 0.5, //多边形填充颜色，使用16进制颜色代码赋值，如：#FFAA00
            fillColor: 0,//'rgba(5, 39, 175,.2)', //'rgba(244, 0, 2, .4)', //'rgba(5, 39, 175,.6)', //'rgba(99, 111, 158)', //'rgba(243,152,0)', //'rgba(197, 192, 192)','rgba(217,19,21)'//'rgba(28,119,145)'fillColor: ,//'rgba(227,21,24)',//多边形填充透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为0.9
            fillOpacity: 1, //轮廓线样式，实线:solid，虚线:dashed
            strokeStyle: 'solid',
            /*勾勒形状轮廓的虚线和间隙的样式，此属性在strokeStyle 为dashed 时有效， 此属性在    
                         ie9+浏览器有效 取值： 
                         实线：[0,0,0] 
                         虚线：[10,10] ，[10,10] 表示10个像素的实线和10个像素的空白（如此反复）组成的虚线
                         点画线：[10,2,10]， [10,2,10] 表示10个像素的实线和2个像素的空白 + 10个像素的实 
                         线和10个像素的空白 （如此反复）组成的虚线*/
            strokeDasharray: [10, 2, 10]
        });
        polygon.setPath(pathArray);
        map.add(polygon);
    })
}


// new AMap.DistrictSearch({
//     extensions: 'all',
//     subdistrict: 0
// }).search('湖南省', function (status, result) {

//     var outer = [   // 外多边形坐标数组和内多边形坐标数组
//         new AMap.LngLat(-360, 90, true),
//         new AMap.LngLat(-360, -90, true),
//         new AMap.LngLat(360, -90, true),
//         new AMap.LngLat(360, 90, true),
//     ];
//     var holes = result.districtList[0].boundaries
//     var pathArray = [
//         outer
//     ];
//     pathArray.push.apply(pathArray, holes)
//     var polygon = new AMap.Polygon({
//         pathL: pathArray,   //线条颜色，使用16进制颜色代码赋值。默认值为#006600
//         strokeColor: 'rgb(20,164,173)',
//         strokeWeight: 1,    //轮廓线透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为0.9
//         strokeOpacity: 0.5, //多边形填充颜色，使用16进制颜色代码赋值，如：#FFAA00
//         fillColor: 'rgba(255,255,255)', //'rgba(197, 192, 192)',//fillColor: 'rgba(255,255,255)',//'rgba(227,21,24)',//多边形填充透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为0.9
//         fillOpacity: 1, //轮廓线样式，实线:solid，虚线:dashed
//         strokeStyle: 'dashed',
//         /*勾勒形状轮廓的虚线和间隙的样式，此属性在strokeStyle 为dashed 时有效， 此属性在    
//                      ie9+浏览器有效 取值： 
//                      实线：[0,0,0] 
//                      虚线：[10,10] ，[10,10] 表示10个像素的实线和10个像素的空白（如此反复）组成的虚线
//                      点画线：[10,2,10]， [10,2,10] 表示10个像素的实线和2个像素的空白 + 10个像素的实 
//                      线和10个像素的空白 （如此反复）组成的虚线*/
//         strokeDasharray: [10, 2, 10]
//     });
//     polygon.setPath(pathArray);
//     map.add(polygon);
// })
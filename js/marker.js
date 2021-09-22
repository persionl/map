document.write('<link rel="stylesheet" href="css/window.css">');

function addMarker(map, placeinfoarray) {
    var p = placeinfoarray;
    var markers = [];
    var contents = [];
    var infoWindow = new AMap.InfoWindow({
        isCustom: true, //使用自定义窗体
        // closeWhenClickMap: true;
        size: new AMap.Size(0, 0),
        autoMove: true,
        offset: new AMap.Pixel(16, -45)
    });
    for (var i = 0; i < p.length; i++) {
        var point = [p[i].x, p[i].y]
        var marker = new AMap.Marker({
            icon: "images/redstar.png",
            position: point,
            map: map,
            title: p[i].title,
            address: p[i].address,
        });
        // contents.push(p[i].photo + p[i].address +("<br/>")+ p[i].detail);
        contents = p[i].photo + p[i].address + ("<br/>") + p[i].detail;
        var content = createInfoWindow(p[i].title, contents);
        marker.content = content;
        marker.on('click', markerClick);
        markers.push(marker);
    }
    //map.setFitView();

    function markerClick(e) {
        infoWindow.setContent(e.target.content);
        infoWindow.open(map, e.target.getPosition());
    }

    //构建自定义信息窗体
    function createInfoWindow(title, content) {
        var info = document.createElement("div");
        info.className = "custom-info input-card content-window-card";

        //可以通过下面的方式修改自定义窗体的宽高
        info.style.width = "270px";
        // info.style.height = "400px";
        // 定义顶部标题
        var top = document.createElement("div");
        var titleD = document.createElement("div");
        var closeX = document.createElement("img");
        top.className = "info-top";
        titleD.innerHTML = title;
        closeX.src = "https://webapi.amap.com/images/close2.gif";
        closeX.onclick = closeInfoWindow;

        top.appendChild(titleD);
        top.appendChild(closeX);
        info.appendChild(top);

        // 定义中部内容
        var middle = document.createElement("div");
        middle.className = "info-middle";
        middle.style.backgroundColor = 'white';
        middle.innerHTML = content;
        info.appendChild(middle);

        // 定义底部内容
        var bottom = document.createElement("div");
        bottom.className = "info-bottom";
        bottom.style.position = 'relative';
        bottom.style.top = '0px';
        bottom.style.margin = '0 auto';
        var sharp = document.createElement("img");
        sharp.src = "https://webapi.amap.com/images/sharp.png";
        bottom.appendChild(sharp);
        info.appendChild(bottom);
        return info;

    }
    //关闭信息窗体
    function closeInfoWindow() {
        map.clearInfoWindow();
    }
}




// //实例化信息窗体
// var title = '贺龙纪念馆<span style="font-size:11px;color:#F00;"></span>',
//     content = [];
// content.push("<img src='http://tpc.googlesyndication.com/simgad/5843493769827749134'>地址：北京市朝阳区阜通东大街6号院3号楼东北8.3公里");
// content.push("电话：010-64733333");
// content.push("<a href='https://ditu.amap.com/detail/B000A8URXB?citycode=110105'>详细信息</a>");
// var infoWindow = new AMap.InfoWindow({
//     isCustom: true,  //使用自定义窗体
//     content: createInfoWindow(title, content.join("<br/>")),
//     offset: new AMap.Pixel(16, -45)
// });

// //构建自定义信息窗体
// function createInfoWindow(title, content) {
//     var info = document.createElement("div");
//     info.className = "custom-info input-card content-window-card";

//     //可以通过下面的方式修改自定义窗体的宽高
//     //info.style.width = "400px";
//     // 定义顶部标题
//     var top = document.createElement("div");
//     var titleD = document.createElement("div");
//     var closeX = document.createElement("img");
//     top.className = "info-top";
//     titleD.innerHTML = title;
//     closeX.src = "https://webapi.amap.com/images/close2.gif";
//     closeX.onclick = closeInfoWindow;

//     top.appendChild(titleD);
//     top.appendChild(closeX);
//     info.appendChild(top);

//     // 定义中部内容
//     var middle = document.createElement("div");
//     middle.className = "info-middle";
//     middle.style.backgroundColor = 'white';
//     middle.innerHTML = content;
//     info.appendChild(middle);

//     // 定义底部内容
//     var bottom = document.createElement("div");
//     bottom.className = "info-bottom";
//     bottom.style.position = 'relative';
//     bottom.style.top = '0px';
//     bottom.style.margin = '0 auto';
//     var sharp = document.createElement("img");
//     sharp.src = "https://webapi.amap.com/images/sharp.png";
//     bottom.appendChild(sharp);
//     info.appendChild(bottom);
//     return info;
// }

// //关闭信息窗体
// function closeInfoWindow() {
//     map.clearInfoWindow();
// }

// // 直接创建一个 Marker 实例：
// var marker = new AMap.Marker({
//     position: new AMap.LngLat(110.168972, 29.473628),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
//     title: '贺龙纪念馆'
// });

// // 将创建的点标记添加到已有的地图实例：
// map.add(marker);

// //点标记实例
// var circleMarker = new AMap.CircleMarker({
//     center: [109.719553, 27.445958],
//     radius: 10 + Math.random() * 10,//3D视图下，CircleMarker半径不要超过64px
//     strokeColor: 'white',
//     strokeWeight: 2,
//     strokeOpacity: 0.5,
//     fillColor: 'rgba(255,0,0,1.000)',
//     fillOpacity: 0.5,
//     zIndex: 10,
//     bubble: true,
//     cursor: 'pointer',
//     clickable: true
// })
// circleMarker.setMap(map)


// AMapUI.loadUI(['control/BasicControl'], function (BasicControl) {

//     var zoomCtrl1 = new BasicControl.Zoom({
//         theme: 'dark'
//     }),
//         zoomCtrl2 = new BasicControl.Zoom({
//             position: 'br',
//             showZoomNum: true
//         });

//     map.addControl(zoomCtrl1);

//     map.addControl(zoomCtrl2);
// });



/*-------------------------------添加一个标记点的方法-------------------------------------*/
//添加点标记方法（高德示例）
// var marker = new AMap.Marker({
//     position: new AMap.LngLat(116.39,39.9),
//     offset: new AMap.Pixel(-10, -10),
//     icon: '//vdata.amap.com/icons/b18/1/2.png', // 添加 Icon 图标 URL
//     title: '北京'
// });

//添加一个点
// function addMarker(map) {
//     map.clearMap();

//     var marker1 = new AMap.Marker({
//         position: [110.168972, 29.473628],   // 经纬度构成的一维数组[116.39, 39.9]
//         title: '贺龙纪念馆'
//     });
//     var markerList = [marker1];
//     map.add(markerList);
//     //鼠标点击marker弹出自定义的信息窗体
//     AMap.event.addListener(marker, 'click', function () {
//         infoWindow.open(map, marker.getPosition());
//     });
// }

/**--------------------------------根据位置信息添加多个标记点的方法----------------------------------------- */
// function addMarker(map, placeinfoarray) {
//     var p = placeinfoarray;
//     var markers=[];
//     for (var i = 0; i < p.length; i++) {
//         var point = [p[i].x, p[i].y]
//         var marker = new AMap.Marker({
//             position: point,
//             map: map,
//             title: p[i].title,
//             address: p[i].address,

//             // svisible: true,

//         });

//         markers.push(marker);
//     }
//     //map.setFitView();
// }

/**--------------------------------多个点显示信息窗体----------------------------------------- */
// function addMarker(map, placeinfoarray) {
//     var p = placeinfoarray;
//     var markers = [];
//     var _location;
//     var infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(0, -30)});
//     for (var i = 0; i < p.length; i++) {
//         var point = [p[i].x, p[i].y]
//         var marker = new AMap.Marker({
//             position: point,
//             map: map,
//             title: p[i].title,
//             address: p[i].address,
//         });
//         marker.content = '我是第' + (i + 1) + '个Marker';
//         marker.on('click', markerClick);
//         marker.emit('click', { target: marker });
//         // AMap.event.addListener(marker, 'click', function (e) {
//         //     var clouddata = e.target.He;
//         //     _location = [clouddata.position.lng, clouddata.position.lat];
//         //     //var photo = ['<img width=240 height=100 src="' + clouddata.img + '"><br>'];
//         //     var infoWindow = new AMap.InfoWindow({
//         //         content: "<font class='title'>" + "名称：" + clouddata.title + "<br />" + "地址：" + clouddata.address + "<br />" + "联系电话：" + "021-69237067" + "<br />" + "经纬度：" + _location,
//         //         size: new AMap.Size(0, 0),
//         //         autoMove: true,
//         //         offset: new AMap.Pixel(0, -25)
//         //     });
//         //     infoWindow.open(map, _location);
//         //     console.log(clouddata);
//         // });
//         markers.push(marker);
//     }
//     //map.setFitView();

//     function markerClick(e) {
//         infoWindow.setContent(e.target.content);
//         infoWindow.open(map, e.target.getPosition());
//     }
// }
/**--------------------------------多个点显示信息窗体----------------------------------------- */
// function addMarker(map, placeinfoarray) {
//     var p = placeinfoarray;
//     var markers = [];
//         var infoWindow = new AMap.InfoWindow({

//         size: new AMap.Size(0, 0),
//         autoMove: true,
//         offset: new AMap.Pixel(0, -25)
//     });
//     for (var i = 0; i < p.length; i++) {
//         var point = [p[i].x, p[i].y]
//         var marker = new AMap.Marker({
//             position: point,
//             map: map,
//             title: p[i].title,
//             address: p[i].address,
//         });
//         var content = "<img src='#'>" + p[i].address;
//         marker.content = content;
//         marker.on('click', markerClick);
//         markers.push(marker);
//     }
//     //map.setFitView();

//     function markerClick(e) {
//         infoWindow.setContent(e.target.content);
//         infoWindow.open(map, e.target.getPosition());
//     }
// }
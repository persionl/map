// //构建自定义信息窗体
function createInfoWindow(title, content) {
    var info = document.createElement("div");
    info.className = "custom-info input-card content-window-card";

    //可以通过下面的方式修改自定义窗体的宽高
    info.style.width = "280px";
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




/**--------------------------构建自定义信息窗体---------------------------------------- */
// // 折线的节点坐标数组，每个元素为 AMap.LngLat 对象
// var content = [
//     "<div><img src="\"" http:="" webapi.amap.com="" images="" autonavi.png="" \"=""> ",
//     "<div style="\"padding:0px" 0px="" 4px;\"=""><b>高德软件有限公司</b>",
//     "电话 : 010-84107000   邮编 : 100102",
//     "地址 : 北京市望京阜通东大街方恒国际中心A座16层</div></div>"
// ];

// // 实现自定义窗体内容，返回拼接后的字符串
// function createInfoWindow (title, content){
//     // 内容拼接 ...
//     return content;
// }

// // 创建 infoWindow 实例 
// var infoWindow = new AMap.InfoWindow({
//    isCustom: true,  //使用自定义窗体
//    content: createInfoWindow(title,content.join("<br>")),  //传入 dom 对象，或者 html 字符串
//    offset: new AMap.Pixel(16, -50)
// });
// //添加marker标记
// function addMarker() {
//     //map.clearMap();
//     var marker = new AMap.Marker({
//         map: map,
//         position: [110.168972, 29.473628]
//     });
//     //鼠标点击marker弹出自定义的信息窗体
//     AMap.event.addListener(marker, 'click', function () {
//         infoWindow.open(map, marker.getPosition());
//     });
// }

// // 直接创建一个 Marker 实例：
// var marker = new AMap.Marker({
//     position: new AMap.LngLat(110.168972, 29.473628),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
//     title: '贺龙纪念馆'
// });
// //实例化信息窗体
// var title = '方恒假日酒店<span style="font-size:11px;color:#F00;">价格:318</span>',
//     content = [];
// content.push("<img src='#'>地址：北京市朝阳区阜通东大街6号院3号楼东北8.3公里");
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
// // }



/**-------------------------------------------------------------------------------------- */
// //添加点标记的方法   
    // addMarker();
    // function addMarker() {
    //     map.clearMap();

    //     var marker1 = new AMap.Marker({
    //         position: [110.168972, 29.473628],   // 经纬度构成的一维数组[116.39, 39.9]109.671416,28.217772
    //         title: '贺龙纪念馆'
    //     });
    //     var marker2 = new AMap.Marker({
    //         position: [109.671416, 28.217772],
    //     });
    //     var marker3 = new AMap.Marker({
    //         position: [109.721193, 27.44901],
    //     });
    //     window.markerList = [marker1, marker2, marker3];
    //     map.add(markerList);

    //     AMap.event.addListener(marker1, 'click', function () {   //鼠标点击marker弹出自定义的信息窗体
    //         infoWindow.open(map, marker1.getPosition());

    //     });
    //     AMap.event.addListener(marker2, 'click', function () {   //鼠标点击marker弹出自定义的信息窗体
    //         infoWindow.open(map, marker2.getPosition());
    //     });
    //     AMap.event.addListener(marker3, 'click', function () {   //鼠标点击marker弹出自定义的信息窗体
    //         infoWindow.open(map, marker3.getPosition());
    //     });
    // }

    // var title, content = [];

    // if (marker == marker1) {
    //     title = '贺龙纪念馆'
    //     content.push("<img src='#'>地址：北京市朝阳区阜通东大街6号院3号楼东北8.3公里");
    //     content.push("<a href='https://ditu.amap.com/detail/B000A8URXB?citycode=110105'>详细信息</a>");
    // } else if (marker == marker1) {
    //     title = '贺纪念馆'
    //     content.push("<img src='#'>地址：北京市朝阳区阜通东大街6号院3号楼东北8.3公里");
    //     content.push("<a href='https://ditu.amap.com/detail/B000A8URXB?citycode=110105'>详细信息</a>");
    // } else {
    //     title = '龙纪念馆'
    //     content.push("<img src='#'>地址：北京市朝阳区阜通东大街6号院3号楼东北8.3公里");
    //     content.push("<a href='https://ditu.amap.com/detail/B000A8URXB?citycode=110105'>详细信息</a>");
    // }

    // switch (markerList) {
    //     case marker1: title = '贺龙纪念馆'
    //         content.push("<img src='#'>地址：北京市朝阳区阜通东大街6号院3号楼东北8.3公里");
    //         content.push("<a href='https://ditu.amap.com/detail/B000A8URXB?citycode=110105'>详细信息</a>");
    //         break;
    //     case marker2: title = '贺纪念馆'
    //         content.push("<img src='#'>地址：北京市朝阳区阜通东大街6号院3号楼东北8.3公里");
    //         content.push("<a href='https://ditu.amap.com/detail/B000A8URXB?citycode=110105'>详细信息</a>");
    //         break;
    //     case marker3: title = '龙纪念馆'
    //         content.push("<img src='#'>地址：北京市朝阳区阜通东大街6号院3号楼东北8.3公里");
    //         content.push("<a href='https://ditu.amap.com/detail/B000A8URXB?citycode=110105'>详细信息</a>");
    //         break;
    // }


    // var title = '贺龙纪念馆',
    //     content = [];
    // content.push("<img src='#'>地址：北京市朝阳区阜通东大街6号院3号楼东北8.3公里");

    // content.push("<a href='https://ditu.amap.com/detail/B000A8URXB?citycode=110105'>详细信息</a>");
    // //实例化信息窗体

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
    //     info.style.width = "400px";

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
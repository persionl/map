function meshline(map) {

    var line1 = [
        new AMap.LngLat(113.00869, 28.067686, ),
        new AMap.LngLat(112.369182, 28.518018),
        new AMap.LngLat(111.720989, 29.023595),
        new AMap.LngLat(110.208652, 29.411332)
    ];

    var line2 = [
        new AMap.LngLat(110.166477, 29.474413),
        new AMap.LngLat(110.260912, 29.41493),
        new AMap.LngLat(110.377642, 29.360785),
        new AMap.LngLat(110.477206, 29.033511)
    ];

    var line3 = [
        new AMap.LngLat(110.477206, 29.033511),
        new AMap.LngLat(110.203223, 28.841695),
        new AMap.LngLat(109.879298, 28.536303),
        new AMap.LngLat(109.671416, 28.217772)
    ];

    var line4 = [
        new AMap.LngLat(109.671416, 28.217772),
        new AMap.LngLat(109.692125, 27.949706),
        new AMap.LngLat(109.712724, 27.617108),
        new AMap.LngLat(109.691881, 27.441369)
    ];

    var lines = [line1, line2, line3, line4];

    for (var i = 0; i < 4; i++) {

        var points = lines[i];

        var object3Dlayer = new AMap.Object3DLayer();
        var numberOfPoints = 180;
        var minHeight = 5;

        var meshLine = new AMap.Object3D.MeshLine({
            path: computeBezier(points, numberOfPoints, minHeight),
            height: getEllipseHeight(numberOfPoints, 300000, minHeight),
            color: 'rgba(55,129,240, 0.9)',
            width: 8
        });



        meshLine.transparent = true;
        object3Dlayer.add(meshLine);
        meshLine['backOrFront'] = 'both';
        map.add(object3Dlayer);

        function pointOnCubicBezier(cp, t) {
            var ax, bx, cx;
            var ay, by, cy;
            var tSquared, tCubed;

            cx = 3.0 * (cp[1].lng - cp[0].lng);
            bx = 3.0 * (cp[2].lng - cp[1].lng) - cx;
            ax = cp[3].lng - cp[0].lng - cx - bx;

            cy = 3.0 * (cp[1].lat - cp[0].lat);
            by = 3.0 * (cp[2].lat - cp[1].lat) - cy;
            ay = cp[3].lat - cp[0].lat - cy - by;

            tSquared = t * t;
            tCubed = tSquared * t;

            var lng = (ax * tCubed) + (bx * tSquared) + (cx * t) + cp[0].lng;
            var lat = (ay * tCubed) + (by * tSquared) + (cy * t) + cp[0].lat;

            return new AMap.LngLat(lng, lat);
        }

        function computeBezier(points, numberOfPoints) {
            var dt;
            var i;
            var curve = [];

            dt = 1.0 / (numberOfPoints - 1);

            for (i = 0; i < numberOfPoints; i++) {
                curve[i] = pointOnCubicBezier(points, i * dt);
            }

            return curve;
        }

        function getEllipseHeight(count, maxHeight, minHeight) {
            var height = [];
            var radionUnit = Math.PI / 180;

            for (var i = 0; i < count; i++) {
                var radion = i * radionUnit;

                height.push(minHeight + Math.sin(radion) * maxHeight);
            }

            return height;
        }

        function update() {
            var width = +document.querySelector('#widthInput').value;
            var maxHeight = +document.querySelector('#heightInput').value;

            if (width > 0) {
                meshLine.setWidth(width);
            } else {
                document.querySelector('#widthInput').value = 20;
            }

            if (maxHeight >= 1000) {
                meshLine.setHeight(getEllipseHeight(numberOfPoints, maxHeight, minHeight));
            } else {
                document.querySelector('#heightInput').value = 2000000;
            }
        }
    }
}
var a = require('./getLatLng.js');

a.compute(35.681382, 139.766084, 10, 90.1111111111111111);
a.compute(35.681382, 139.766084, 10, [90,0,0]);
//緯度，経度，距離(m)，方位角[度，分，秒] or 方位角(度)
//方位角は真北を0とした場合
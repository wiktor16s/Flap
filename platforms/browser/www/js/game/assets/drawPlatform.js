  var drawPlat1 = function (plat) {
      platform1 = platform.create(plat.x, plat.y, plat.key).setOrigin(0, 0);
      platform11 = platform.create(plat.x, plat.y - DIFFERENCE, plat.key).setOrigin(0, 0);
  }

  var drawPlat2 = function (plat) {
    platform2 = platform.create(plat.x, plat.y, plat.key).setOrigin(0, 0);
    platform22 = platform.create(plat.x, plat.y - DIFFERENCE, plat.key).setOrigin(0, 0);
}

var drawPlat3 = function (plat) {
    platform3 = platform.create(plat.x, plat.y, plat.key).setOrigin(0, 0);
    platform33 = platform.create(plat.x, plat.y - DIFFERENCE, plat.key).setOrigin(0, 0);
}

var drawPlat4 = function (plat) {
    platform4 = platform.create(plat.x, plat.y, plat.key).setOrigin(0, 0);
    platform44 = platform.create(plat.x, plat.y - DIFFERENCE, plat.key).setOrigin(0, 0);
}
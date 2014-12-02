/**
 * Created by tom on 11/24/14.
 */

var PentagonalHexacontahedron = function(){
  THREE.Geometry.call(this);
  this.vertices = [
    new THREE.Vector3(0.2319284,0.1389806,0.9727329),
    new THREE.Vector3(-0.01318484,0.2700603,0.9727329),
    new THREE.Vector3(-0.2443637,0.1157271,0.9727329),
    new THREE.Vector3(-0.2172871,-0.1609121,0.9727329),
    new THREE.Vector3(0.2319284,-0.3474105,0.9727329),
    new THREE.Vector3(0.6328167,-0.1609121,0.7700428),
    new THREE.Vector3(0.6569803,0.1157271,0.7578256),
    new THREE.Vector3(0.450672,0.2700603,0.8621356),
    new THREE.Vector3(0.4118671,0.524768,0.7578256),
    new THREE.Vector3(-0.03494478,0.7157612,0.7792039),
    new THREE.Vector3(-0.4610267,0.4821517,0.7578256),
    new THREE.Vector3(-0.4748357,0.2248753,0.8621356),
    new THREE.Vector3(-0.807821,-0.07906707,0.6796085),
    new THREE.Vector3(-0.4222218,-0.3126766,0.8621356),
    new THREE.Vector3(-0.3587899,-0.5623929,0.7578256),
    new THREE.Vector3(-0.09402938,-0.6461487,0.7700428),
    new THREE.Vector3(0.4313637,-0.6461487,0.6447735),
    new THREE.Vector3(0.6621283,-0.5623929,0.5144084),
    new THREE.Vector3(0.7658016,-0.3126766,0.5788755),
    new THREE.Vector3(0.9153902,-0.1791742,0.3863585),
    new THREE.Vector3(0.9295636,0.3067204,0.4031479),
    new THREE.Vector3(0.5815764,0.6106627,0.5551356),
    new THREE.Vector3(0.4862954,0.8008226,0.3761854),
    new THREE.Vector3(0.2267217,0.8942775,0.4100984),
    new THREE.Vector3(-0.3127563,0.8679392,0.4100984),
    new THREE.Vector3(-0.561992,0.7496433,0.3761854),
    new THREE.Vector3(-0.6382961,0.5511063,0.5551356),
    new THREE.Vector3(-0.8192969,0.3588645,0.4682782),
    new THREE.Vector3(-0.7341657,-0.5109127,0.4682782),
    new THREE.Vector3(-0.519325,-0.6644108,0.5551356),
    new THREE.Vector3(-0.3209764,-0.9793389,0.2419992),
    new THREE.Vector3(-0.00485529,-0.8271609,0.5788755),
    new THREE.Vector3(0.2655267,-0.8271609,0.5144084),
    new THREE.Vector3(0.3398819,-0.9141271,0.2610892),
    new THREE.Vector3(0.7527863,-0.7409091,0.07113717),
    new THREE.Vector3(0.9528016,-0.3029775,0.1403188),
    new THREE.Vector3(0.9961858,-0.1420654,-0.08213905),
    new THREE.Vector3(0.9996924,0.1335024,-0.04591079),
    new THREE.Vector3(0.7933841,0.6216485,0.05839917),
    new THREE.Vector3(0.5952976,0.8064762,0.120551),
    new THREE.Vector3(0.3209764,0.9793389,-0.2419992),
    new THREE.Vector3(0.09090658,0.9880731,0.186449),
    new THREE.Vector3(-0.1867239,0.9745186,0.186449),
    new THREE.Vector3(-0.3170919,0.9567434,-0.05839917),
    new THREE.Vector3(-0.7527863,0.7409091,-0.07113717),
    new THREE.Vector3(-0.9137039,0.3760884,0.2074084),
    new THREE.Vector3(-0.9961858,0.1420654,0.08213905),
    new THREE.Vector3(-0.9795717,-0.09587751,0.2248609),
    new THREE.Vector3(-0.9497342,-0.3325262,0.08213905),
    new THREE.Vector3(-0.8234415,-0.5461149,0.2074084),
    new THREE.Vector3(-0.6928012,-0.732814,0.04822608),
    new THREE.Vector3(0.1396282,-0.9961493,0.08663801),
    new THREE.Vector3(0.1867239,-0.9745186,-0.186449),
    new THREE.Vector3(0.431396,-0.8720954,-0.2695602),
    new THREE.Vector3(0.8102012,-0.4943842,-0.3442004),
    new THREE.Vector3(0.9227997,-0.2405687,-0.3314862),
    new THREE.Vector3(0.807821,0.07906707,-0.6796085),
    new THREE.Vector3(0.9296135,0.2949013,-0.2610892),
    new THREE.Vector3(0.8234415,0.5461149,-0.2074084),
    new THREE.Vector3(0.6537036,0.6597031,-0.3959533),
    new THREE.Vector3(-0.1624182,0.953533,-0.289328),
    new THREE.Vector3(-0.2655267,0.8271609,-0.5144084),
    new THREE.Vector3(-0.5174473,0.7111833,-0.4957643),
    new THREE.Vector3(-0.8861738,0.3523188,-0.3314862),
    new THREE.Vector3(-0.982018,0.1298329,-0.1951912),
    new THREE.Vector3(-0.9295636,-0.3067204,-0.4031479),
    new THREE.Vector3(-0.6958805,-0.6953107,-0.2271762),
    new THREE.Vector3(-0.4862954,-0.8008226,-0.3761854),
    new THREE.Vector3(-0.2855458,-0.9378397,-0.2413213),
    new THREE.Vector3(-0.03208251,-0.9445109,-0.3552261),
    new THREE.Vector3(0.03494478,-0.7157612,-0.7792039),
    new THREE.Vector3(0.4433524,-0.7454871,-0.5167237),
    new THREE.Vector3(0.6382961,-0.5511063,-0.5551356),
    new THREE.Vector3(0.5887621,-0.3507883,-0.7413652),
    new THREE.Vector3(0.5997871,0.5156204,-0.6274605),
    new THREE.Vector3(0.3587899,0.5623929,-0.7578256),
    new THREE.Vector3(0.1854095,0.7505892,-0.6492725),
    new THREE.Vector3(-0.08652481,0.7227204,-0.6996458),
    new THREE.Vector3(-0.2319284,0.3474105,-0.9727329),
    new THREE.Vector3(-0.5760447,0.4973583,-0.6634176),
    new THREE.Vector3(-0.7658016,0.3126766,-0.5788755),
    new THREE.Vector3(-0.7481168,0.05280211,-0.675906),
    new THREE.Vector3(-0.571274,-0.4571647,-0.6956738),
    new THREE.Vector3(-0.4221694,-0.678266,-0.6172874),
    new THREE.Vector3(0.3471003,-0.3562388,-0.878596),
    new THREE.Vector3(0.2443637,-0.1157271,-0.9727329),
    new THREE.Vector3(0.3891294,0.1165623,-0.9242874),
    new THREE.Vector3(0.2503795,0.3570264,-0.910581),
    new THREE.Vector3(-0.5416803,-0.007617117,-0.8519625),
    new THREE.Vector3(-0.450672,-0.2700603,-0.8621356),
    new THREE.Vector3(-0.1878216,-0.3146939,-0.9407478),
    new THREE.Vector3(-0.03092203,-0.09434697,-1.004718)
  ];
  this.faces = [
    new THREE.Face3(4,0,1), new THREE.Face3(1,2,3), new THREE.Face3(1,3,4),
    new THREE.Face3(0,4,5), new THREE.Face3(5,6,7), new THREE.Face3(5,7,0),
    new THREE.Face3(1,0,7), new THREE.Face3(7,8,9), new THREE.Face3(7,9,1),
    new THREE.Face3(2,1,9), new THREE.Face3(9,10,11), new THREE.Face3(9,11,2),
    new THREE.Face3(3,2,11), new THREE.Face3(11,12,13), new THREE.Face3(11,13,3),
    new THREE.Face3(4,3,13), new THREE.Face3(13,14,15), new THREE.Face3(13,15,4),
    new THREE.Face3(5,4,16), new THREE.Face3(16,17,18), new THREE.Face3(16,18,5),
    new THREE.Face3(6,5,18), new THREE.Face3(18,19,20), new THREE.Face3(18,20,6),
    new THREE.Face3(7,6,20), new THREE.Face3(20,21,8), new THREE.Face3(20,8,7),
    new THREE.Face3(9,8,21), new THREE.Face3(21,22,23), new THREE.Face3(21,23,9),
    new THREE.Face3(10,9,24), new THREE.Face3(24,25,26), new THREE.Face3(24,26,10),
    new THREE.Face3(11,10,26), new THREE.Face3(26,27,12), new THREE.Face3(26,12,11),
    new THREE.Face3(13,12,28), new THREE.Face3(28,29,14), new THREE.Face3(28,14,13),
    new THREE.Face3(15,14,29), new THREE.Face3(29,30,31), new THREE.Face3(29,31,15),
    new THREE.Face3(4,15,31), new THREE.Face3(31,32,16), new THREE.Face3(31,16,4),
    new THREE.Face3(17,16,32), new THREE.Face3(32,33,34), new THREE.Face3(32,34,17),
    new THREE.Face3(18,17,34), new THREE.Face3(34,35,19), new THREE.Face3(34,19,18),
    new THREE.Face3(20,19,35), new THREE.Face3(35,36,37), new THREE.Face3(35,37,20),
    new THREE.Face3(21,20,38), new THREE.Face3(38,39,22), new THREE.Face3(38,22,21),
    new THREE.Face3(23,22,39), new THREE.Face3(39,40,41), new THREE.Face3(39,41,23),
    new THREE.Face3(9,23,41), new THREE.Face3(41,42,24), new THREE.Face3(41,24,9),
    new THREE.Face3(25,24,42), new THREE.Face3(42,43,44), new THREE.Face3(42,44,25),
    new THREE.Face3(26,25,44), new THREE.Face3(44,45,27), new THREE.Face3(44,27,26),
    new THREE.Face3(12,27,45), new THREE.Face3(45,46,47), new THREE.Face3(45,47,12),
    new THREE.Face3(28,12,47), new THREE.Face3(47,48,49), new THREE.Face3(47,49,28),
    new THREE.Face3(29,28,49), new THREE.Face3(49,50,30), new THREE.Face3(49,30,29),
    new THREE.Face3(31,30,51), new THREE.Face3(51,33,32), new THREE.Face3(51,32,31),
    new THREE.Face3(34,33,51), new THREE.Face3(51,52,53), new THREE.Face3(51,53,34),
    new THREE.Face3(35,34,54), new THREE.Face3(54,55,36), new THREE.Face3(54,36,35),
    new THREE.Face3(37,36,55), new THREE.Face3(55,56,57), new THREE.Face3(55,57,37),
    new THREE.Face3(20,37,57), new THREE.Face3(57,58,38), new THREE.Face3(57,38,20),
    new THREE.Face3(39,38,58), new THREE.Face3(58,59,40), new THREE.Face3(58,40,39),
    new THREE.Face3(41,40,60), new THREE.Face3(60,43,42), new THREE.Face3(60,42,41),
    new THREE.Face3(44,43,60), new THREE.Face3(60,61,62), new THREE.Face3(60,62,44),
    new THREE.Face3(45,44,63), new THREE.Face3(63,64,46), new THREE.Face3(63,46,45),
    new THREE.Face3(47,46,64), new THREE.Face3(64,65,48), new THREE.Face3(64,48,47),
    new THREE.Face3(49,48,65), new THREE.Face3(65,66,50), new THREE.Face3(65,50,49),
    new THREE.Face3(30,50,66), new THREE.Face3(66,67,68), new THREE.Face3(66,68,30),
    new THREE.Face3(51,30,68), new THREE.Face3(68,69,52), new THREE.Face3(68,52,51),
    new THREE.Face3(53,52,69), new THREE.Face3(69,70,71), new THREE.Face3(69,71,53),
    new THREE.Face3(34,53,71), new THREE.Face3(71,72,54), new THREE.Face3(71,54,34),
    new THREE.Face3(55,54,72), new THREE.Face3(72,73,56), new THREE.Face3(72,56,55),
    new THREE.Face3(57,56,74), new THREE.Face3(74,59,58), new THREE.Face3(74,58,57),
    new THREE.Face3(40,59,74), new THREE.Face3(74,75,76), new THREE.Face3(74,76,40),
    new THREE.Face3(60,40,76), new THREE.Face3(76,77,61), new THREE.Face3(76,61,60),
    new THREE.Face3(62,61,77), new THREE.Face3(77,78,79), new THREE.Face3(77,79,62),
    new THREE.Face3(44,62,79), new THREE.Face3(79,80,63), new THREE.Face3(79,63,44),
    new THREE.Face3(64,63,80), new THREE.Face3(80,81,65), new THREE.Face3(80,65,64),
    new THREE.Face3(66,65,82), new THREE.Face3(82,83,67), new THREE.Face3(82,67,66),
    new THREE.Face3(68,67,83), new THREE.Face3(83,70,69), new THREE.Face3(83,69,68),
    new THREE.Face3(71,70,84), new THREE.Face3(84,73,72), new THREE.Face3(84,72,71),
    new THREE.Face3(56,73,84), new THREE.Face3(84,85,86), new THREE.Face3(84,86,56),
    new THREE.Face3(74,56,86), new THREE.Face3(86,87,75), new THREE.Face3(86,75,74),
    new THREE.Face3(76,75,87), new THREE.Face3(87,78,77), new THREE.Face3(87,77,76),
    new THREE.Face3(79,78,88), new THREE.Face3(88,81,80), new THREE.Face3(88,80,79),
    new THREE.Face3(65,81,88), new THREE.Face3(88,89,82), new THREE.Face3(88,82,65),
    new THREE.Face3(83,82,89), new THREE.Face3(89,90,70), new THREE.Face3(89,70,83),
    new THREE.Face3(84,70,90), new THREE.Face3(90,91,85), new THREE.Face3(90,85,84),
    new THREE.Face3(86,85,91), new THREE.Face3(91,78,87), new THREE.Face3(91,87,86),
    new THREE.Face3(88,78,91), new THREE.Face3(91,90,89), new THREE.Face3(91,89,88)
  ];
  this.computeFaceNormals();
};
PentagonalHexacontahedron.prototype = Object.create(THREE.Geometry.prototype);
PentagonalHexacontahedron.prototype.constructor = PentagonalHexacontahedron;

var pentagonal = function(container) {
  if(Detector.webgl) {
    var render = function () {
      renderer.render(scene, camera);
    };
    var animate = function () {
      requestAnimationFrame(animate);
      var delta = clock.getDelta();
      watchdog.getDelta();
      ph.rotation.x += 0.05 * delta;
      ph.rotation.y += 0.03 * delta;
      ph.rotation.z -= 0.02 * delta;
      ph.animate(delta);
      render()
    };
    var scale = 675;
    var clock = new THREE.Clock();
    var watchdog = new THREE.Clock();
    var w = container.offsetWidth;
    var h = container.offsetHeight;
    var renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    var scene = new THREE.Scene();
    var camera = new THREE.OrthographicCamera(w / -scale, w / scale, h / scale, h / -scale, 0.001, 100);
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(w, h);

    var ph = (function () {
      var outerGeo = new PentagonalHexacontahedron();
      var outerMat = new THREE.MeshBasicMaterial();
      var outerMesh = new THREE.Mesh(outerGeo, outerMat);
      var outerEdge = new THREE.EdgesHelper(outerMesh, 0x8e8e8e);
      outerEdge.material.linewidth = 2;
      var innerGeo = new PentagonalHexacontahedron();
      var innerMat = new THREE.MeshPhongMaterial({
        shininess: 0,
        color: 0x5d5d5d,
        side : THREE.DoubleSide
      });
      var innerMesh = new THREE.Mesh(innerGeo, innerMat);

      innerMesh.applyMatrix(new THREE.Matrix4().makeScale(0.7, 0.7, 0.7));
      innerMesh.applyMatrix(new THREE.Matrix4().set(-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1));
      var obj = new THREE.Object3D();
      obj.add(outerEdge);
      obj.add(innerMesh);
      obj.animate = function (delta) {
        innerMesh.rotation.x -= 0.02 * delta;
        innerMesh.rotation.y += 0.05 * delta;
        innerMesh.rotation.z += 0.03 * delta;
      };
      return obj;
    })();

    camera.position.set(0, 0, 2);
    if(h > w) { camera.lookAt(new THREE.Vector3(-0.7, 0, 0)); }
    else { camera.lookAt(new THREE.Vector3(0, 0.7, 0)); }
    scene.add(ph);
    scene.add(camera);
    scene.add(new THREE.AmbientLight(0x232323));
    var light = new THREE.DirectionalLight(0xffffff, 1.0);
    light.position.set(3, -3, -3);
    scene.add(light);
    $(renderer.domElement).addClass('pentagonal');
    $(container).prepend(renderer.domElement);
    window.onresize = function () {
      w = container.offsetWidth;
      h = container.offsetHeight;
      renderer.clear();
      camera.left = w / -scale;
      camera.right = w / scale;
      camera.top = h / scale;
      camera.bottom = h / -scale;
      camera.updateProjectionMatrix();
      if(h > w) { camera.lookAt(new THREE.Vector3(-0.7, 0, 0)); }
      else { camera.lookAt(new THREE.Vector3(0, 0.7, 0)); }
      renderer.setSize(w, h);
      render();
    };
    animate();
    setInterval(function(){
      if (watchdog.getDelta() > 5){
        animate();
      }
    });
  }
};

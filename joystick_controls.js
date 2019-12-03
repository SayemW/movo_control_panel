/**
 * Find use?
 */
createJoystick = function() {
  var options = {
    zone: document.getElementById("joystick"),
    threshold: 0.1,
    position: { top: "110px", left: "115px" },
    mode: "static",
    size: 100,
    color: "#000000"
  };
  manager = nipplejs.create(options);

  // Linear and angular components
  var linear = { x: 0, y: 0, z: 0 };
  var angular = { x: 0, y: 0, z: 0 };

  linear_speed = 0;
  angular_speed = 0;

  // On movement
  self.manager.on("start", function(event, nipple) {
    console.log("Movement start");
  });

  // During movement
  self.manager.on("move", function(event, nipple) {
    console.log("Moving");
  });

  // Ending movement
  self.manager.on("end", function() {
    console.log("Movement end");
  });

  // On movement start call move function
  manager.on("start", function(event, nipple) {
    timer = setInterval(function() {
      move(linear, angular);
    }, 25);
  });

  // On movement end
  manager.on("end", function() {
    if (timer) {
      clearInterval(timer);
    }
    self.move(0, 0);
  });

  // During movement
  manager.on("move", function(event, nipple) {
    max_linear = 5.0; // m/s
    max_angular = 2.0; // rad/s
    max_distance = 75.0; // pixels;
    linear_speed =
      (Math.sin(nipple.angle.radian) * max_linear * nipple.distance) /
      max_distance;
    angular_speed =
      (-Math.cos(nipple.angle.radian) * max_angular * nipple.distance) /
      max_distance;
    linear.x = linear_speed;
    angular.z = angular_speed;
  });
};

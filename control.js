// Import ROS Library from ROS Web Tools
var ros = new ROSLIB.Ros({
  url: "ws://localhost:9090"
});

// Test ROS Connection
ros.on("connection", function() {
    document.getElementById("info-panel").classList.remove("alert-warning");
    document.getElementById("info-panel").classList.remove("alert-error");
    document.getElementById("info-panel").classList.add("alert-success");
});

ros.on("error", function(error) {
    document.getElementById("info-panel").classList.remove("alert-success");
    document.getElementById("info-panel").classList.remove("alert-warning");
    document.getElementById("info-panel").classList.add("alert-error");
});

ros.on("close", function() {
    document.getElementById("info-panel").classList.remove("alert-success");
    document.getElementById("info-panel").classList.remove("alert-error");
    document.getElementById("info-panel").classList.add("alert-warning");
});

// Publish a ROS Topic
cmd_vel_listener = new ROSLIB.Topic({
  ros: ros,
  name: "?",
  messageType: "?"
});

move = function(linear, angular) {
  //console.log("Moving Function");
  var twist = new ROSLIB.Message({
    linear: {
      x: linear,
      y: 0,
      z: 0
    },
    angular: {
      x: 0,
      y: 0,
      z: angular
    }
  });
  cmd_vel_listener.publish(twist);
};

// Create joy stick
createJoystick = function() {
  var options = {
    zone: document.getElementById("joystick"),
    threshold: 0.1,
    position: { top: "110px", left: "110px" },
    mode: "static",
    size: 100,
    color: "#000000"
  };
  manager = nipplejs.create(options);

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
      move(linear_speed, angular_speed);
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
  });
};

window.onload = function() {
  // get handle for video placeholder
  video = document.getElementById("video");
  // Populate video source
  video.src =
    "http://9090/stream?topic=/camera/rgb/image_raw&type=mjpeg&quality=80";

  createJoystick();
};

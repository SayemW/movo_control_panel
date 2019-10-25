// Import ROS Library from ROS Web Tools
var ros = new ROSLIB.Ros({
  url: "ws://localhost:9090"
});


// Test ROS Connection
ros.on("connection", function () {
  document.getElementById("info-panel").classList.remove("alert-warning");
  document.getElementById("info-panel").classList.remove("alert-error");
  document.getElementById("info-panel").classList.add("alert-success");
});

ros.on("error", function (error) {
  document.getElementById("info-panel").classList.remove("alert-success");
  document.getElementById("info-panel").classList.remove("alert-warning");
  document.getElementById("info-panel").classList.add("alert-error");
});

ros.on("close", function () {
  document.getElementById("info-panel").classList.remove("alert-success");
  document.getElementById("info-panel").classList.remove("alert-error");
  document.getElementById("info-panel").classList.add("alert-warning");
});


// Publish a ROS Topic
cmd_vel_publisher = new ROSLIB.Topic({
  ros: ros,
  name: "/turtle1/cmd_vel",
  messageType: "geometry_msgs/Twist"
});

move = function (linear, angular) {
  //console.log("Moving Function");
  var twist = new ROSLIB.Message({
    linear: {
      x: linear.x,
      y: linear.y,
      z: linear.z
    },
    angular: {
      x: angular.x,
      y: angular.y,
      z: angular.z
    }
  });
  cmd_vel_publisher.publish(twist);
};

window.onload = function () {
  // Load buttons
  createBaseButtons();

  // get handle for video placeholder
  video = document.getElementById("video");
  // Populate video source
  video.src =
    "http://localhost:8080/stream?topic=/kinect2/sd/image_ir";
  createJoystick();
};

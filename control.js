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

window.onload = function () {
  // Load buttons
  createBaseButtons();
  createTorsoButtons();
  createHeadButtons();
  createLeftArmButtons();
  createRightArmButtons();

  // get handle for video placeholder
  video = document.getElementById("video");
  // Populate video source
  video.src =
    "http://localhost:8080/stream?topic=/kinect2/sd/image_ir";
  //createJoystick();
};

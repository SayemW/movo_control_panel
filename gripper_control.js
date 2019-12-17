/**
 * TODO: Add gripper controls once MOVO gripper is 
 * back online
 */
moveGripper = function() {
  // console.log("Opening / Closing Gripper")
  var gripper_position = new ROSLIB.Message({
    // Fill message
  });
  movo_gripper - publisher.publish(gripper_position);
};

createGripperButtons = function () {
    var openGripper = document.getElementById(gripper_open);
    var closeGripper = document.getElementById(gripper_close);

    openGripper.onmousedown = function() {
        // Open gripper
    }

    closeGripper.onmousedown = function() {
        // Close gripper
    }
}
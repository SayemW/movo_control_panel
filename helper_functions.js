/**
 * Relaxed ik helpers
 */
// Relaxed ik
relaxed_ik_ee_pose_goals_publisher = new ROSLIB.Topic({
  ros: ros,
  name: "/relaxed_ik/ee_pose_goals",
  messageType: "/relaxed_ik/EEPoseGoals"
});

/**
 * Clears values
 */
clearValues = function(linear, angular) {
  linear.x = linear.y = linear.z = 0;
  angular.x = angular.y = angular.z = 0;
};

/**
 * Stops buttons from executing
 */
function stop(move_interval) {
  console.log("Stop");
  clearInterval(move_interval);
}

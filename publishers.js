// Relaxed ik
relaxed_ik_ee_pose_goals_publisher = new ROSLIB.Topic({
  ros: ros,
  name: "/relaxed_ik/ee_pose_goals",
  messageType: "/relaxed_ik/EEPoseGoals"
});

// Head Control Message
movo_head_cmd_publisher = new ROSLIB.Topic({
  ros: ros,
  name: "movo/head/cmd",
  messageType: "movo_msgs/PanTiltCmd"
});

// Base Control Message
movo_teleop_cmd_vel_publisher = new ROSLIB.Topic({
  ros: ros,
  name: "movo/teleop/cmd_vel",
  messageType: "geometry_msgs/Twist"
});

// Torso Control Message
movo_linear_actuator_cmd_publisher = new ROSLIB.Topic({
  ros: ros,
  name: "movo/linear_actuator_cmd",
  messageType: "movo_msgs/LinearActuatorCmd"
});

// Gripper Control Message
movo_gripper_publisher = new ROSLIB.Topic({
  ros: ros,
  name: "movo/gripper",
  messageType: "movo_msgs/Gripper"
});

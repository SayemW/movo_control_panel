/**
 * Define message types (Publishers and subscribers)
 */
moveLeftArm = function(linear, angular) {
  //console.log("Moving Function");
  console.log(linear, angular);
  var ee_pose_goals_message = new ROSLIB.Message({
    ee_poses: [{
      position: {
        x: linear.x,
        y: linear.y,
        z: linear.z
      },
      orientation: {
        x: angular.x,
        y: angular.y,
        z: angular.z,
        w: angular.w
      }
    }]
  });
  relaxed_ik_ee_pose_goals_publisher.publish(ee_pose_goals_message);
};
/**
 * Controls the Arm of the movo
 */
createLeftArmButtons = function() {
  // Arm velocity
  var arm_velocity = 0.05;

  // Get buttons
  var arm_forward = document.getElementById("left_arm_forward");
  var arm_backward = document.getElementById("left_arm_backward");
  var arm_right = document.getElementById("left_arm_right");
  var arm_left = document.getElementById("left_arm_left");
  var arm_up = document.getElementById("left_arm_up");
  var arm_down = document.getElementById("left_arm_down");

  var arm_rotation_forward = document.getElementById(
    "left_arm_rotation_forward"
  );
  var arm_rotation_backward = document.getElementById(
    "left_arm_rotation_backward"
  );
  var arm_rotation_right = document.getElementById("left_arm_rotation_right");
  var arm_rotation_left = document.getElementById("left_arm_rotation_left");
  var arm_rotation_up = document.getElementById("left_arm_rotation_up");
  var arm_rotation_down = document.getElementById("left_arm_rotation_down");

   // Linear and angular movement
  var linear = { x: 0, y: 0, z: 0 };
  var angular = { x: 0, y: 0, z: 0, w: 1};

  // Get Speed slider
  var speed_multiplier = document.getElementById("robot_speed");

  // Interval control
  var move_interval;

  // Interval repeat frequence
  var interval_frequencey = 60;

  // Forward movement
  arm_forward.onmousedown = function() {
    move_interval = setInterval(function() {
      console.log("Forward");
      linear.x += arm_velocity;
      moveLeftArm(linear, angular);
    }, interval_frequencey);
  };

  arm_forward.onmouseup = function() {
    stop(move_interval);
  };
  arm_forward.onmouseleave = function() {
    stop(move_interval);
  };

  // Backward movement
  arm_backward.onmousedown = function() {
    move_interval = setInterval(function() {
      console.log("Backward");
      linear.x += -arm_velocity;
      moveLeftArm(linear, angular);
    }, interval_frequencey);
  };

  arm_backward.onmouseup = function() {
    stop(move_interval);
  };
  arm_backward.onmouseleave = function() {
    stop(move_interval);
  };

  // Left movement
  arm_left.onmousedown = function() {
    move_interval = setInterval(function() {
      console.log("Left");
      linear.y += arm_velocity;
      moveLeftArm(linear, angular);
    }, interval_frequencey);
  };

  arm_left.onmouseup = function() {
    stop(move_interval);
  };
  arm_left.onmouseleave = function() {
    stop(move_interval);
  };

  // Right movement
  arm_right.onmousedown = function() {
    move_interval = setInterval(function() {
      console.log("Right");
      linear.y += -arm_velocity;
      moveLeftArm(linear, angular);
    }, interval_frequencey);
  };

  arm_right.onmouseup = function() {
    stop(move_interval);
  };
  arm_right.onmouseleave = function() {
    stop(move_interval);
  };

  // Up movement
  arm_up.onmousedown = function() {
    move_interval = setInterval(function() {
      console.log("Up");
      linear.y += -arm_velocity;
      moveLeftArm(linear, angular);
    }, interval_frequencey);
  };

  arm_up.onmouseup = function() {
    stop(move_interval);
  };
  arm_up.onmouseleave = function() {
    stop(move_interval);
  };
  // Down movement
  arm_down.onmousedown = function() {
    move_interval = setInterval(function() {
      console.log("Down");
      linear.y += -arm_velocity;
      moveLeftArm(linear, angular);
    }, interval_frequencey);
  };

  arm_down.onmouseup = function() {
    stop(move_interval);
  };
  arm_down.onmouseleave = function() {
    stop(move_interval);
  };

  /*----------------------------------------------------------*/

  // Rotation Controls

  // Rotate Forward
  arm_rotation_forward.onmousedown = function() {
    move_interval = setInterval(function() {
      console.log("Rot_Forward");
      angular.z = arm_velocity;
      moveLeftArm(linear, angular);
    }, interval_frequencey);
  };

  arm_rotation_forward.onmouseup = function() {
    stop(move_interval);
  };
  arm_rotation_forward.onmouseleave = function() {
    stop(move_interval);
  };

  // Rotate Backward
  arm_rotation_backward.onmousedown = function() {
    move_interval = setInterval(function() {
      console.log("Rot_Backward");
      angular.z = -arm_velocity;
      moveLeftArm(linear, angular);
    }, interval_frequencey);
  };

  arm_rotation_backward.onmouseup = function() {
    stop(move_interval);
  };
  arm_rotation_backward.onmouseleave = function() {
    stop(move_interval);
  };

  // Rotate left
  arm_rotation_left.onmousedown = function() {
    move_interval = setInterval(function() {
      console.log("Rot_Left");
      angular.z = arm_velocity;
      moveLeftArm(linear, angular);
    }, interval_frequencey);
  };

  arm_rotation_left.onmouseup = function() {
    stop(move_interval);
  };
  arm_rotation_left.onmouseleave = function() {
    stop(move_interval);
  };

  // Rotate right
  arm_rotation_right.onmousedown = function() {
    move_interval = setInterval(function() {
      console.log("Rot_Left");
      angular.z = -arm_velocity;
      moveLeftArm(linear, angular);
    }, interval_frequencey);
  };

  arm_rotation_right.onmouseup = function() {
    stop(move_interval);
  };
  arm_rotation_right.onmouseleave = function() {
    stop(move_interval);
  };

  // Rotate Up
  arm_rotation_up.onmousedown = function() {
    move_interval = setInterval(function() {
      console.log("Rot_Up");
      angular.z = arm_velocity;
      moveLeftArm(linear, angular);
    }, interval_frequencey);
  };

  arm_rotation_up.onmouseup = function() {
    stop(move_interval);
  };
  arm_rotation_up.onmouseleave = function() {
    stop(move_interval);
  };

  // Rotate down
  arm_rotation_down.onmousedown = function() {
    move_interval = setInterval(function() {
      console.log("Rot_Down");
      angular.z = -arm_velocity;
      moveLeftArm(linear, angular);
    }, interval_frequencey);
  };

  arm_rotation_down.onmouseup = function() {
    stop(move_interval);
  };
  arm_rotation_down.onmouseleave = function() {
    stop(move_interval);
  };

  // Update Speed
  speed_multiplier.onchange = function() {
    Arm_velocity = 0.05 * speed_multiplier.value;
  };
};

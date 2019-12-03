/**
 * Define message types (Publishers and subscribers)
 */
moveArm = function(linear, angular) {
  /**
   * 1. Get current joint information
   * 2. Send the joint inforamtion +- the change to relaxed_ik
   * 3. Get the joint angle solutions from relaxed_ik
   * 4. Send these to the cartesian_vel_cmd
   */
  /*
      subscriber.subscribe(function(msg){
          required data = msg.data;
      });
      */
  //console.log("Moving Function");
  var ee_pose_goals_message = new ROSLIB.Message({
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
  movo_left_arm_publisher.publish(twist);
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

  // Get Speed slider
  var speed_multiplier = document.getElementById("robot_speed");

  // Interval control
  var move_interval;

  // Interval repeat frequence
  var interval_frequencey = 60;

  // Linear and angular movement
  var linear = { x: 0, y: 0, z: 0 };
  var angular = { x: 0, y: 0, z: 0 };

  // Forward movement
  arm_forward.onmousedown = function() {
    move_interval = setInterval(function() {
      console.log("Forward");
      clearValues(linear, angular);
      linear.x = arm_velocity;
      moveArm(linear, angular);
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
      clearValues(linear, angular);
      linear.x = -arm_velocity;
      moveArm(linear, angular);
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
      clearValues(linear, angular);
      linear.y = arm_velocity;
      moveArm(linear, angular);
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
      clearValues(linear, angular);
      linear.y = -arm_velocity;
      moveArm(linear, angular);
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
      clearValues(linear, angular);
      linear.y = -arm_velocity;
      moveArm(linear, angular);
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
      clearValues(linear, angular);
      linear.y = -arm_velocity;
      moveArm(linear, angular);
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
      clearValues(linear, angular);
      angular.z = arm_velocity;
      moveArm(linear, angular);
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
      clearValues(linear, angular);
      angular.z = -arm_velocity;
      moveArm(linear, angular);
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
      clearValues(linear, angular);
      angular.z = arm_velocity;
      moveArm(linear, angular);
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
      clearValues(linear, angular);
      angular.z = -arm_velocity;
      moveArm(linear, angular);
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
      clearValues(linear, angular);
      angular.z = arm_velocity;
      moveArm(linear, angular);
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
      clearValues(linear, angular);
      angular.z = -arm_velocity;
      moveArm(linear, angular);
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

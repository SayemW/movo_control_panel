// Base Control Message
movo_teleop_cmd_vel_publisher = new ROSLIB.Topic({
    ros: ros,
    name: "movo/teleop/cmd_vel",
    messageType: "geometry_msgs/Twist"
  });
  
  moveBase = function (linear, angular) {
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
    movo_teleop_cmd_vel_publisher.publish(twist);
  };
  

/**
 * Controls the base of the movo
 */
createBaseButtons = function () {
    // Base velocity
    var base_velocity = 0.05;

    // Get buttons
    var base_forward = document.getElementById("base_forward");
    var base_backward = document.getElementById("base_backward");
    var base_right = document.getElementById("base_right");
    var base_left = document.getElementById("base_left");
    var base_rot_left = document.getElementById("base_rot_left");
    var base_rot_right = document.getElementById("base_rot_right");


    // Get Speed slider
    var speed_multiplier = document.getElementById("robot_speed");

    // Interval control
    var move_interval;

    // Interval repeat frequence
    var interval_frequencey = 1;

    // Linear and angular movement
    var linear = { x: 0, y: 0, z: 0 };
    var angular = { x: 0, y: 0, z: 0 };

    // Forward movement
    base_forward.onmousedown = function () {
        move_interval = setInterval(function () {
            console.log("Forward");
            clearValues(linear, angular);
            linear.x = base_velocity;
            moveBase(linear, angular);
        }, interval_frequencey);
    }

    base_forward.onmouseup = function () {
        stop(move_interval);
    }
    base_forward.onmouseleave = function () {
        stop(move_interval);
    }

    // Backward movement
    base_backward.onmousedown = function () {
        move_interval = setInterval(function () {
            console.log("Backward");
            clearValues(linear, angular);
            linear.x = -base_velocity;
            moveBase(linear, angular);
        }, interval_frequencey);
    }

    base_backward.onmouseup = function () {
        stop(move_interval);
    }
    base_backward.onmouseleave = function () {
        stop(move_interval);
    }

    // Left movement
    base_left.onmousedown = function () {
        move_interval = setInterval(function () {
            console.log("Left");
            clearValues(linear, angular);
            linear.y = base_velocity;
            moveBase(linear, angular);
        }, interval_frequencey);
    }

    base_left.onmouseup = function () {
        stop(move_interval);
    }
    base_left.onmouseleave = function () {
        stop(move_interval);
    }

    // Right movement
    base_right.onmousedown = function () {
        move_interval = setInterval(function () {
            console.log("Right");
            clearValues(linear, angular);
            linear.y = -base_velocity;
            moveBase(linear, angular);
        }, interval_frequencey);
    }

    base_right.onmouseup = function () {
        stop(move_interval);
    }
    base_right.onmouseleave = function () {
        stop(move_interval);
    }

    // Rotate left
    base_rot_left.onmousedown = function () {
        move_interval = setInterval(function () {
            console.log("Rot_Left");
            clearValues(linear, angular);
            angular.z = base_velocity;
            moveBase(linear, angular);
        }, interval_frequencey);
    }

    base_rot_left.onmouseup = function () {
        stop(move_interval);
    }
    base_rot_left.onmouseleave = function () {
        stop(move_interval);
    }

    // Rotate right
    base_rot_right.onmousedown = function () {
        move_interval = setInterval(function () {
            console.log("Rot_Left");
            clearValues(linear, angular);
            angular.z = -base_velocity;
            moveBase(linear, angular);
        }, interval_frequencey);
    }

    base_rot_right.onmouseup = function () {
        stop(move_interval);
    }
    base_rot_right.onmouseleave = function () {
        stop(move_interval);
    }

    // Update Speed
    speed_multiplier.onclick = function () {
        base_velocity = 0.05 * speed_multiplier.value;
        console.log(base_velocity);
    }
}


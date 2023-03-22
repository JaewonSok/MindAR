console.log("function.js loaded");


AFRAME.registerComponent('skeleton-click', {
    init: function () {
        const aSkeleton = document.querySelector('#skeleton');
        aSkeleton.addEventListener('click', function (ev, target) {
            console.log("Skeleton clicked");

            // aSkeleton.setAttribute('custom-physics', '{}');
            console.log(aSkeleton);
            // aSkeleton.setAttribute('velocity', { x: 0, y: -1, z: 0 });
            // aSkeleton.setAttribute('acceleration', { x: 0, y: 0, z: 0 });
        });
    }
});

AFRAME.registerComponent('custom-physics', {
    dependencies: ['position', 'rotation', 'velocity', 'acceleration'],

    init: function () {

        // Set the initial velocity
        this.el.setAttribute('velocity', { x: 0, y: 0, z: 0 });
        this.el.setAttribute('acceleration', { x: 0, y: 0, z: 0 });
    },

    tick: function (time, timeDelta) {
        // Get the current position, velocity, and acceleration
        var position = this.el.getAttribute('position');
        var velocity = this.el.getAttribute('velocity');
        var acceleration = this.el.getAttribute('acceleration');

        // Update the velocity based on the current acceleration
        velocity.x += acceleration.x * timeDelta / 1000;
        velocity.y += acceleration.y * timeDelta / 1000;
        velocity.z += acceleration.z * timeDelta / 1000;

        // Update the position based on the current velocity
        position.x += velocity.x * timeDelta / 1000;
        position.y += velocity.y * timeDelta / 1000;
        position.z += velocity.z * timeDelta / 1000;

        // Check for collisions with other elements
        // ...

        // Set the updated position and velocity
        this.el.setAttribute('position', position);
        this.el.setAttribute('velocity', velocity);
    },
});

AFRAME.registerComponent('jump', {
    init: function () {
        const speed = 6;

        const direction = new THREE.Vector3(0, 1, 0);
        const sprite = document.querySelector("#skeleton");
        sprite.velocity = new THREE.Vector3();
        this.el.addEventListener('click', () => {
            sprite.velocity.addScaledVector(direction, speed);
        });
    },
    tick: function (time, delta) {
        const sprite = document.querySelector("#skeleton");
        const gravity = 9.8;
        const position = sprite.object3D.position.clone();
        const dt = delta / 1000;
        sprite.velocity.y -= gravity * dt;
        position.addScaledVector(sprite.velocity, dt);
        if (position.y < 0) {
            position.y = 0;
            sprite.velocity.set(0, 0, 0);
        }
        sprite.object3D.position.copy(position);

    }
});
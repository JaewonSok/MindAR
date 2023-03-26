AFRAME.registerComponent('flower-click', {
    init: function () {
        const target = document.querySelector('#flower-button');
        const model = document.querySelector('#flowerModel');
        target.addEventListener('click', function (ev, target) {
            console.log("flower button clicked");
            if (!model.object3D.visible) {
                model.setAttribute('visible', 'true');
            }
            else {
                model.setAttribute('visible', 'false');
            }
        });
    }
});

AFRAME.registerComponent('bunny-click', {
    init: function () {
        const target = document.querySelector('#bunny-button');
        const model = document.querySelector('#bunnyModel');

        target.addEventListener('click', function (ev, target) {
            console.log("bunny button clicked");
            if (!model.object3D.visible) {
                model.setAttribute('visible', 'true');
            }
            else {
                model.setAttribute('visible', 'false');
            }
        });
    }
});

AFRAME.registerComponent('balloon-click', {
    init: function () {
        const target = document.querySelector('#balloon-button');
        const model = document.querySelector('#balloonModel');

        target.addEventListener('click', function (ev, target) {
            console.log("balloon button clicked");
            if (!model.object3D.visible) {
                model.setAttribute('visible', 'true');
            }
            else {
                model.setAttribute('visible', 'false');
            }
        });
    }
});

AFRAME.registerComponent('egg-click', {
    init: function () {
        const target = document.querySelector('#egg-button');
        const model = document.querySelector('#eggModel');

        target.addEventListener('click', function (ev, target) {
            console.log("egg button clicked");
            if (!model.object3D.visible) {
                model.setAttribute('visible', 'true');
            }
            else {
                model.setAttribute('visible', 'false');
            }
        });
    }
});

AFRAME.registerComponent('photo-click', {
    init: function () {
        const target = document.querySelector('#photo-button');
        const canvas = document.createElement('canvas');

        target.addEventListener('click', function (ev, target) {
            document.querySelector('#scene').components.screenshot.capture('perspective');

        });
    }
})
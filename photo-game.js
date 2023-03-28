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
        const sceneEl = document.querySelector('a-scene');
        const video = document.querySelector("#video");
        sceneEl.addEventListener("arReady", async (event) => {
            console.log("MindAR is ready")
            let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
            video.srcObject = stream;
            //const canvas = document.querySelector('#canvas');
            target.addEventListener('click', async function (ev, target) {
                // document.querySelector('#scene').components.screenshot.capture('perspective');

                // const canvas = document.createElement("canvas");
                const canvas = document.querySelector('#canvas');

                var window_width = $(window).outerWidth();
                var window_height = $(window).outerHeight();
                var v_width = $(video).outerWidth();
                var v_height = $(video).outerHeight();

                var a_width = document.querySelector('a-scene').components.screenshot.data.width * 0.5;
                var a_height = document.querySelector('a-scene').components.screenshot.data.height * 0.5;
                canvas.width = $(window).outerWidth();
                canvas.height = $(window).outerHeight();

                canvas.getContext('2d').drawImage(video, 0, parseFloat($("video").css("top")), v_width, v_height);

                // var imgData = document.querySelector('a-scene').components.screenshot.getCanvas('perspective');
                // canvas.getContext('2d')
                //     .drawImage(imgData, 0, 0, window_width, window_height);

                if (window.navigator.msSaveOrOpenBlob) {
                    var blobObject = canvas.msToBlob();
                    window.navigator.msSaveOrOpenBlob(blobObject, 'download.png');
                } else {
                    var a = document.createElement('a');
                    a.href = canvas.toDataURL("image/png");
                    a.download = 'download.png';
                    a.click();
                }
                document.querySelector("video").play();
            });
        });


    }
});
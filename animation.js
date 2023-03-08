$ = (queryString) => document.querySelector(queryString);

    const shiftHue = (hue) => (hue + 1) %360; 
    
    let hue = 0;
    const animate = () => {
    hue = shiftHue(hue);
    const color = `hsl(${hue}, 100%, 50%)`;
    $('a-sphere').setAttribute('color',color);

    const variation =  Math.sin(Date.now()/1000);
    const position = `0 ${1.5 + variation} -2`;
    const rotation = `0 ${variation * 360} 0`;
    $('a-sphere').setAttribute('position',position);
    $('a-sphere').setAttribute('rotation',rotation);

    $('a-plane').setAttribute('rotation', `-90 0 0`);
    $('a-plane').setAttribute('color', color);
    requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
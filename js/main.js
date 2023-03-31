(() => {
  let yOffset = 0;
  let prevScrollHeight = 0;
  let currentScene = 0;

  const sceneInfo = [
    {
      // 0
      type: 'sticky',
      heightNum: 5, 
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-0')
      }       
    },
    {
      // 1
      type: 'normal',
      heightNum: 5, 
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-1')
      }        
    },
    {
      // 2
      type: 'sticky',
      heightNum: 5, 
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-2')
      }     
    },
    {
      // 3
      type: 'sticky',
      heightNum: 5, 
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-3')
      }     
    }
  ];

  function setLayout(){
    for (let i = 0; i < sceneInfo.length; i += 1) {
      sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
      sceneInfo[i].objs.container.style.height = sceneInfo[i].scrollHeight + 'px';
    }
  }


  function scrollLoop(){
    prevScrollHeight = 0;
    for (let i = 0; i < currentScene; i += 1) {
      prevScrollHeight += sceneInfo[i].scrollHeight; 
    }

    if(yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
      currentScene += 1;
    }
    if(yOffset < prevScrollHeight){
      if(currentScene === 0) return;
      currentScene -= 1 ;
    }

    document.body.setAttribute('id', `show-scene-${currentScene}`);
  }

  window.addEventListener('scroll', () => {
    yOffset = window.pageYOffset; 
    scrollLoop();
  });
  window.addEventListener('load', setLayout)
  window.addEventListener('resize', setLayout);

  
})();
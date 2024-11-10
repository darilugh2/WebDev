import React from 'react' //op

const IntroSection = () => {

    const name = String("Yinlin"); // constant declaration (explicit String)
    let age = Number(12.2); // variable declaration (expllicit Number)

    return  (
    <div className="h-[100vh] flex justify-center items-center">
        <div className="w-full h-full px-24 flex flex-col items-center justify-center">
        <p className="text-center text-2xl">Hello, my name is {name}.</p>
        <br />
        <p className="text-center text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          aspernatur, cumque labore nemo quos voluptates. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quibusdam aspernatur, cumque labore
          nemo quos voluptates. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quibusdam aspernatur, cumque labore nemo quos
          voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quibusdam aspernatur, cumque labore nemo quos voluptates.
        </p>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <img src="yinlin.jpg" className="w-[600px] h-[600px]"/>
        <p>
          Hello My name is {name} and I am {age} years old.
        </p>
      </div>
    </div>   
    ) 
    
}

export default IntroSection;
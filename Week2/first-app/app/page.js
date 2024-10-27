export default function Home() {
  const name = String("John Doe"); // constant declaration (explicit String)
  let age = Number(12.2); // variable declaration (expllicit Number)

  return (
    <div className="h-[100vh] w-screen flex justify-center items-center">
      <div className="w-full bg-red-500 h-ful px-24 flex flex-col items-center justify-center">
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
      <div className="w-full h-full">
        <p>
          Hello My name is {name} and I am {age} years old.
        </p>
      </div>
    </div>
  );
}








import Image from "next/image";

export default function Home() {
  return (
    <main className="px-20 py-10 bg-indigo-200">
      {/* Header */}
      <header className="flex justify-between items-center">
        <div className="flex max-w-lg bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          <span className="font-bold text-4xl leading-[3rem] font-serif">
            Ola
          </span>
          <span className="font-bold text-4xl capitalize font-serif leading-[3rem]">
            Calc
          </span>
        </div>
        <div>Hambuger</div>
      </header>
      {/* convertion for pixel to rem */}
      <section className="mt-5">
        <div className="justify-center text-center">
          <h1 className="capitalize font-serif font-bold text-3xl leading-10 tracking-wide">
            unit converter
          </h1>
        </div>
        {/* Converstion header */}
        <h1 className="mb-[1rem] capitalize leading-3 font-mono text-lg font-semibold">
          pixel to rem
        </h1>
        {/* convertion form  */}
        <div className="">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <label for="fname">Pixels</label>
              <input
                type="number"
                id="pixelInput"
                name="fname"
                placeholder="Type pixel value"
                min={0}
                className="outline-none px-3 py-3 border-2 border-solid border-blue-300 bg-inherit rounded-lg"
              ></input>
            </div>
            <div>
              <button
                type="submit"
                onClick={""}
                className="text-xl inline-block text-center text-white py-2 px-2 cursor-pointer rounded-lg text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
              >
                Convert
              </button>
            </div>
            <div className="flex flex-col">
              <label for="rem">Rems</label>
              <input
                type="number"
                id="lname"
                placeholder="Rem Value"
                className="outline-none px-3 py-3 border-2 border-solid border-blue-300 rounded-lg bg-inherit"
              ></input>
            </div>
          </div>
        </div>
      </section>

      {/* convertion for pixel to Em */}
      <section className="mt-5">
        {/* Converstion header */}
        <h1 className="mb-[1rem] capitalize leading-3 font-mono text-lg font-semibold">
          pixel to em
        </h1>
        {/* convertion form  */}
        <div className="">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <label for="fname">Pixels</label>
              <input
                type="number"
                id="pixelInput"
                name="fname"
                placeholder="Type pixel value"
                min={0}
                className="outline-none px-3 py-3 border-2 border-solid border-blue-300 bg-inherit rounded-lg"
              ></input>
            </div>
            <div>
              <button
                type="submit"
                onClick={""}
                className="text-xl inline-block text-center text-white py-2 px-2 cursor-pointer rounded-lg text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
              >
                Convert
              </button>
            </div>
            <div className="flex flex-col">
              <label for="rem">Em</label>
              <input
                type="number"
                id="lname"
                placeholder="Em Value"
                className="outline-none px-3 py-3 border-2 border-solid border-blue-300 rounded-lg bg-inherit"
              ></input>
            </div>
          </div>
        </div>
      </section>

      {/* convertion for pixel to Percentage */}
      <section className="mt-5">
        {/* Converstion header */}
        <h1 className="mb-[1rem] capitalize leading-3 font-mono text-lg font-semibold">
          pixel to Percentage %
        </h1>
        {/* convertion form  */}
        <div className="">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <label for="fname">Pixels</label>
              <input
                type="number"
                id="pixelInput"
                name="fname"
                placeholder="Type pixel value"
                min={0}
                className="outline-none px-3 py-3 border-2 border-solid border-blue-300 bg-inherit rounded-lg"
              ></input>
            </div>
            <div>
              <button
                type="submit"
                onClick={""}
                className="text-xl inline-block text-center text-white py-2 px-2 cursor-pointer rounded-lg text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
              >
                Convert
              </button>
            </div>
            <div className="flex flex-col">
              <label for="rem">Percentage</label>
              <input
                type="number"
                id="lname"
                placeholder="Percentage Value"
                className="outline-none px-3 py-3 border-2 border-solid border-blue-300 rounded-lg bg-inherit"
              ></input>
            </div>
          </div>
        </div>
      </section>

      {/* convertion for Base to pixel */}
      <section className="mt-5">
        {/* Converstion header */}
        <h1 className="mb-[1rem] capitalize leading-3 font-mono text-lg font-semibold">
          Base to Pixel
        </h1>
        {/* convertion form  */}
        <div className="">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <label for="fname">Base</label>
              <input
                type="number"
                id="pixelInput"
                name="fname"
                placeholder="Type Base value"
                min={0}
                className="outline-none px-3 py-3 border-2 border-solid border-blue-300 bg-inherit rounded-lg"
              ></input>
            </div>
            <div>
              <button
                type="submit"
                onClick={""}
                className="text-xl inline-block text-center text-white py-2 px-2 cursor-pointer rounded-lg text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
              >
                Convert
              </button>
            </div>
            <div className="flex flex-col">
              <label for="rem">Pixel</label>
              <input
                type="number"
                id="lname"
                placeholder="Percentage Value"
                className="outline-none px-3 py-3 border-2 border-solid border-blue-300 rounded-lg bg-inherit"
              ></input>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

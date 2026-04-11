function WeatherHightlights () {
    return(
        <section className="px-5 flex flex-col gap-10 text-textlight dark:text-texttdark w-full mb-20 xl:mb-0">
            <p className="text-xl font-bold">Today's Hightlights</p>
            <article className=" flex-col gap-5 grid grid-cols-1 sm:grid-cols-2  2xl:grid-cols-4">
                <div className="bg-bglight dark:bg-secdark flex flex-col items-center justify-center gap-5 py-5">
                    <p className="font-bold">Wind status</p>
                    <p className=" text-4xl"><span className="text-6xl font-bold">0.97</span>ms</p>
                    <div className="flex justify-center items-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-9 bg-textlight rounded-full fill-seclight p-2"><path d="m190-120-30-30 320-730 320 730-30 30-290-132-290 132Z"/></svg>
                        <p >NNE</p>
                    </div>
                </div>
                <div className="bg-bglight dark:bg-secdark flex flex-col items-center justify-center gap-5 py-5">
                    <p className="font-bold">Humidity</p>
                    <p className=" text-4xl"><span className="text-6xl font-bold">62</span>%</p>
                    <div className="flex flex-col items-center justify-center w-[80%]">
                        <div className="flex justify-between w-full">
                            <p>0</p>
                            <p>50</p>
                            <p>100</p>
                        </div>
                        <div className="bg-texttdark/60  w-full p-1 rounded-2xl relative overflow-hidden">
                            <div className="bg-amber-300 w-[62%] h-full py-1.5 px-2 absolute -top-px -left-px"></div>
                        </div>
                        <p className="text-end w-full">%</p>
                    </div>
                </div>
                <div className="bg-bglight dark:bg-secdark flex flex-col items-center justify-center gap-5 py-8">
                    <p className="font-bold">Visibility</p>
                    <p className=" text-4xl"><span className="text-5xl font-bold">10.00</span>km</p>
                </div>
                <div className="bg-bglight dark:bg-secdark flex flex-col items-center justify-center gap-5 py-8">
                    <p className="font-bold">Air Pressure</p>
                    <p className=" text-4xl"><span className="text-5xl font-bold">1011</span>mb</p>
                </div>
            </article>
        </section>
    )
}

export default WeatherHightlights
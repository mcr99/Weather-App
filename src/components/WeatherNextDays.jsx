function WeatherNextDays () {
    return(
        <section className=" py-10 px-5 w-full">
            <div className="flex justify-end items-center gap-5">
                <button className="bg-textlight/80 dark:bg-texttdark dark:text-secdark text-seclight px-3.5 py-2.5 rounded-full font-bold ">°C</button>
                <button className="bg-textlight/40 dark:bg-texttdark/30 dark:text-texttdark px-4 py-2.5 rounded-full font-bold">°F</button>
            </div>
            <article className=" my-10 gap-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 text-textlight items-center justify-center">
                <div className="bg-bglight  dark:bg-secdark flex flex-col items-center justify-center p-5 gap-2">
                    <p className="font-bold dark:text-texttdark">Tomorrow</p>
                    <img src="/images/weather/11d.png" alt="weather" className="w-20"/>
                    <div className="flex gap-3">
                        <p className="font-bold dark:text-texttdark"><span>25</span>°C</p>
                        <p className="font-bold dark:text-texttdark/70"><span>25</span>°C</p>
                    </div>
                </div>
                <div className="bg-bglight dark:bg-secdark flex flex-col items-center justify-center p-5 gap-2">
                    <p className="font-bold dark:text-texttdark">Tomorrow</p>
                    <img src="/images/weather/11d.png" alt="weather" className="w-20"/>
                    <div className="flex gap-3">
                        <p className="font-bold dark:text-texttdark"><span>25</span>°C</p>
                        <p className="font-bold dark:text-texttdark/70"><span>25</span>°C</p>
                    </div>
                </div>
                <div className="bg-bglight dark:bg-secdark flex flex-col items-center justify-center p-5 gap-2">
                    <p className="font-bold dark:text-texttdark">Tomorrow</p>
                    <img src="/images/weather/11d.png" alt="weather" className="w-20"/>
                    <div className="flex gap-3">
                        <p className="font-bold dark:text-texttdark"><span>25</span>°C</p>
                        <p className="font-bold dark:text-texttdark/70"><span>25</span>°C</p>
                    </div>
                </div>
                <div className="bg-bglight dark:bg-secdark flex flex-col items-center justify-center p-5 gap-2">
                    <p className="font-bold dark:text-texttdark">Tomorrow</p>
                    <img src="/images/weather/11d.png" alt="weather" className="w-20"/>
                    <div className="flex gap-3">
                        <p className="font-bold dark:text-texttdark"><span>25</span>°C</p>
                        <p className="font-bold dark:text-texttdark/70"><span>25</span>°C</p>
                    </div>
                </div>
                <div className="bg-bglight dark:bg-secdark flex flex-col items-center justify-center p-5 gap-2">
                    <p className="font-bold dark:text-texttdark">Tomorrow</p>
                    <img src="/images/weather/11d.png" alt="weather" className="w-20"/>
                    <div className="flex gap-3">
                        <p className="font-bold dark:text-texttdark"><span>25</span>°C</p>
                        <p className="font-bold dark:text-texttdark/70"><span>25</span>°C</p>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default WeatherNextDays
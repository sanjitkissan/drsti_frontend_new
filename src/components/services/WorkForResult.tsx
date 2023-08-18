import { WorkImg1, WorkImg2, WorkImg3 } from "@/src/assets/services";


export default function WorkForResult(){
    return(
        <section className="w-full main-container flex flex-col lg:flex-row items-center justify-center lg:my-24 my-12 gap-6 ">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:h-[60vh] h-auto overflow-hidden gap-2">
                <div className="center">
                <img src={WorkImg1.src} alt="" className=" w-72 h-72" />
                </div>
                <div className="center">
                <img src={WorkImg2.src} alt=""  className="  z-30 w-72 h-72"/>
                </div>
                <div className='lg:col-span-2 center lg:-ml-10 lg:-mt-8'>
                <img src={WorkImg3.src} alt="" className=" z-50 w-72 h-72"/>
                </div>
            </div>
            <div className="w-full flex flex-col items-start p-4 justify-center gap-4">
                {/* <p className="lg:text-xl tracking-wider  text-red-600">Peer-to-Peer Interactions</p> */}
                <h1 className="text-2xl lg:text-4xl font-bold tracking-wider uppercase">Connect Your Brand with<br/><span className=" text-red-600"> High-Value Decision Makers</span></h1>
                <p className="lg:text-lg  text-black">Reach out and actively engage with working corporate professionals across 8 metro cities, working in 500+ MNCs with over 1500+ engagement touchpoints across the country. Benefit from -
</p>
                <span className="w-full flex items-center justify-start gap-8">
                    <span className="p-4 rounded-full border-4 border-red-600">
                        <h1 className="text-2xl font-bold">3.5days</h1>
                    </span>
                    <span>
                        <h1 className="lg:text-2xl text-red-600 ">Working Professionals</h1>
                        <p className=" text-black lg:text-lg">is the average number of days corporates work from the office each week.</p>
                    </span>
                </span>
                <span className="w-full flex items-center justify-start gap-8">
                    <span className="p-4 rounded-full border-4 border-red-600">
                        <h1 className="text-2xl font-bold">2. 8 hours </h1>
                    </span>
                    <span>
                        <h1 className="lg:text-2xl  text-red-600">High Dwell Time</h1>
                        <p className=" text-black lg:text-lg">Captive audiences who are actively seeking newer engagements.</p>
                    </span>
                </span>
                <span className="w-full flex items-center justify-start gap-8">
                    <span className="p-4 rounded-full border-4 border-red-600">
                        <h1 className="text-2xl font-bold">39y</h1>
                    </span>
                    <span>
                        <h1 className="lg:text-2xl  text-red-600">Highly networked and Influential </h1>
                        <p className=" text-black lg:text-lg">Peer-to-peer interactions and strong community within offices.</p>
                    </span>
                </span>
            </div>
        </section>
    )
}
import Image from "next/image"

const Schedule = () =>{
    return (
<div className="w-full bg-black flex items-center justify-center">
        <div>
            <div><h3 className="md:text-6xl text-2xl ppFormula-font mb-20 text-white italic text-center">SCHEDULE</h3></div>
            <Image src="/schedule-img-3.png" className="xl:block hidden"  width={870} height={2003} alt="" />
            <Image src="/schedule-img-mob-2.png" className="xl:hidden block" width={312} height={4998} alt="" />
        </div>
        </div>
    )


}

export default Schedule
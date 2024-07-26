import Image from "next/image"

const Galleryhub = () =>{

    return(

        <div className="w-full flex flex-col place-items-center justify-center bg-black">
        <div className="max-w-[1440px] w-full h-full flex flex-col justify-center place-items-center xl:p-24 p-16 ">

            <h2 className="md:text-7xl text-2xl md:mb-11 mb-5 text-[#DBFD67] font-extrabold"><em>GALLERY</em></h2>

            <div className="grid md:grid-cols-3 grid-cols-2 md:gap-7 gap-2.5">
                <div className="relative group">
                    <Image src="/Press1.webp" alt="" width={400} height={263} className="rounded-xl h-64 w-full object-cover"/>
                    <button className="absolute md:bottom-6 bottom-3 md:right-6 right-3"><a href="/PressOrg1.JPG" download><Image
                                src="./assets/download-icon.svg" alt="" width={31} height={31}
                                className="xl:w-auto md:w-6 w-4 md:hidden md:group-hover:block block"/></a></button>
                </div>
                <div className="relative group">
                    <Image src="/Press2.webp" alt="" width={400} height={263} className="rounded-xl h-64 w-full object-cover"/>
                    <button className="absolute md:bottom-6 bottom-3 md:right-6 right-3"><a href="/PressOrg2.png" download><Image
                                src="./assets/download-icon.svg" alt="" width={31} height={31}
                                className="xl:w-auto md:w-6 w-4 md:hidden md:group-hover:block block"/></a></button>
                </div>
                <div className="relative group">
                    <Image src="/Press3.webp" alt="" width={400} height={263} className="rounded-xl h-64 w-full object-cover"/>
                    <button className="absolute md:bottom-6 bottom-3 md:right-6 right-3"><a href="/PressOrg3.JPG" download><Image
                                src="./assets/download-icon.svg" alt="" width={31} height={31}
                                className="xl:w-auto md:w-6 w-4 md:hidden md:group-hover:block block"/></a></button>
                </div>
                <div className="relative group">
                    <Image src="/Press4.webp" alt="" width={400} height={263} className="rounded-xl h-64 w-full object-cover"/>
                    <button className="absolute md:bottom-6 bottom-3 md:right-6 right-3"><a href="/PressOrg4.JPG" download><Image
                                src="./assets/download-icon.svg" alt="" width={31} height={31}
                                className="xl:w-auto md:w-6 w-4 md:hidden md:group-hover:block block"/></a></button>
                </div>
                <div className="relative group">
                    <Image src="/Press5.webp" alt="" width={400} height={263} className="rounded-xl h-64 w-full object-cover"/>
                    <button className="absolute md:bottom-6 bottom-3 md:right-6 right-3"><a href="/PressOrg5.JPG" download><Image
                                src="./assets/download-icon.svg" alt="" width={31} height={31}
                                className="xl:w-auto md:w-6 w-4 md:hidden md:group-hover:block block"/></a></button>
                </div>
                <div className="relative group">
                    <Image src="/Press6.webp" alt="" width={400} height={263} className="rounded-xl h-64 w-full object-cover"/>
                    <button className="absolute md:bottom-6 bottom-3 md:right-6 right-3"><a href="/PressOrg6.png" download><Image
                                src="./assets/download-icon.svg" alt="" width={31} height={31}
                                className="xl:w-auto md:w-6 w-4 md:hidden md:group-hover:block block"/></a></button>
                </div>
                <div className="relative group">
                    <Image src="/Press7.webp" alt="" width={400} height={263} className="rounded-xl h-64 w-full object-cover"/>
                    <button className="absolute md:bottom-6 bottom-3 md:right-6 right-3"><a href="/PressOrg7.png" download><Image
                                src="./assets/download-icon.svg" alt="" width={31} height={31}
                                className="xl:w-auto md:w-6 w-4 md:hidden md:group-hover:block block"/></a></button>
                </div>
                <div className="relative group">
                    <Image src="/Press8.webp" alt="" width={400} height={263} className="rounded-xl h-64 w-full object-cover"/>
                    <button className="absolute md:bottom-6 bottom-3 md:right-6 right-3"><a href="/PressOrg8.png" download><Image
                                src="./assets/download-icon.svg" alt="" width={31} height={31}
                                className="xl:w-auto md:w-6 w-4 md:hidden md:group-hover:block block"/></a></button>
                </div>
                <div className="relative group">
                    <Image src="/Press9.webp" alt="" width={400} height={263} className="rounded-xl h-64 w-full object-cover"/>
                    <button className="absolute md:bottom-6 bottom-3 md:right-6 right-3"><a href="/PressOrg9.JPG" download><Image
                                src="./assets/download-icon.svg" alt="" width={31} height={31}
                                className="xl:w-auto md:w-6 w-4 md:hidden md:group-hover:block block"/></a></button>
                </div>
                <div className="relative group">
                    <Image src="/Press10.webp" alt="" width={400} height={263} className="rounded-xl h-64 w-full object-cover"/>
                    <button className="absolute md:bottom-6 bottom-3 md:right-6 right-3"><a href="/PressOrg10.JPG" download><Image
                                src="./assets/download-icon.svg" alt="" width={31} height={31}
                                className="xl:w-auto md:w-6 w-4 md:hidden md:group-hover:block block"/></a></button>
                </div>
                <div className="relative group">
                    <Image src="/Press11.webp" alt="" width={400} height={263} className="rounded-xl h-64 w-full object-cover"/>
                    <button className="absolute md:bottom-6 bottom-3 md:right-6 right-3"><a href="/PressOrg11.JPG" download><Image
                                src="./assets/download-icon.svg" alt="" width={31} height={31}
                                className="xl:w-auto md:w-6 w-4 md:hidden md:group-hover:block block"/></a></button>
                </div>
                <div className="relative group">
                    <Image src="/Press12.webp" alt="" width={400} height={263} className="rounded-xl h-64 w-full object-cover"/>
                    <button className="absolute md:bottom-6 bottom-3 md:right-6 right-3"><a href="/PressOrg12.JPG" download><Image
                                src="./assets/download-icon.svg" alt="" width={31} height={31}
                                className="xl:w-auto md:w-6 w-4 md:hidden md:group-hover:block block"/></a></button>
                </div>
                <div className="relative group">
                    <Image src="/Press13.webp" alt="" width={400} height={263} className="rounded-xl h-64 w-full object-cover"/>
                    <button className="absolute md:bottom-6 bottom-3 md:right-6 right-3"><a href="/PressOrg13.JPG" download><Image
                                src="./assets/download-icon.svg" alt="" width={31} height={31}
                                className="xl:w-auto md:w-6 w-4 md:hidden md:group-hover:block block"/></a></button>
                </div>
                <div className="relative group">
                    <Image src="/Press14.webp" alt="" width={400} height={263} className="rounded-xl h-64 w-full object-cover"/>
                    <button className="absolute md:bottom-6 bottom-3 md:right-6 right-3"><a href="/PressOrg14.JPG" download><Image
                                src="./assets/download-icon.svg" alt="" width={31} height={31}
                                className="xl:w-auto md:w-6 w-4 md:hidden md:group-hover:block block"/></a></button>
                </div>
            </div>

        </div>

    </div>

    )
}

export default Galleryhub
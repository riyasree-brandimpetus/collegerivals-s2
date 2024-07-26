const Galleryhub = () =>{

    return(

        <div className="w-full flex flex-col place-items-center justify-center bg-black">
        <div className="max-w-[1440px] w-full h-full flex flex-col justify-center place-items-center xl:p-24 p-16 ">

            <h2 className="md:text-7xl text-2xl md:mb-11 mb-5 text-[#DBFD67] font-extrabold"><em>GALLERY</em></h2>

            <div className="grid md:grid-cols-3 grid-cols-2 md:gap-7 gap-2.5">
                <div className="relative group">
                    <img src="./assets/gallery1.png" alt="" className="rounded-xl"/>
                    <button className="absolute md:bottom-6 bottom-3 md:right-6 right-3"><a href="#" download><img
                                src="./assets/download-icon.svg" alt=""
                                className="xl:w-auto md:w-6 w-4 md:hidden md:group-hover:block block"/></a></button>
                </div>
                <div className="relative group">
                    <img src="./assets/gallery2.png" alt="" className="rounded-xl"/>
                    <button className="absolute md:bottom-6 bottom-3 md:right-6 right-3"><a href="#" download><img
                                src="./assets/download-icon.svg" alt=""
                                className="xl:w-auto md:w-6 w-4 md:hidden md:group-hover:block block"/></a></button>
                </div>
                <div className="relative group">
                    <img src="./assets/gallery3.png" alt="" className="rounded-xl"/>
                    <button className="absolute md:bottom-6 bottom-3 md:right-6 right-3"><a href="#" download><img
                                src="./assets/download-icon.svg" alt=""
                                className="xl:w-auto md:w-6 w-4 md:hidden md:group-hover:block block"/></a></button>
                </div>
                <div className="relative group">
                    <img src="./assets/gallery4.png" alt="" className="rounded-xl"/>
                    <button className="absolute md:bottom-6 bottom-3 md:right-6 right-3"><a href="#" download><img
                                src="./assets/download-icon.svg" alt=""
                                className="xl:w-auto md:w-6 w-4 md:hidden md:group-hover:block block"/></a></button>
                </div>
                <div className="relative group">
                    <img src="./assets/gallery1.png" alt="" className="rounded-xl"/>
                    <button className="absolute md:bottom-6 bottom-3 md:right-6 right-3"><a href="#" download><img
                                src="./assets/download-icon.svg" alt=""
                                className="xl:w-auto md:w-6 w-4 md:hidden md:group-hover:block block"/></a></button>
                </div>
                <div className="relative group">
                    <img src="./assets/gallery2.png" alt="" className="rounded-xl"/>
                    <button className="absolute md:bottom-6 bottom-3 md:right-6 right-3"><a href="#" download><img
                                src="./assets/download-icon.svg" alt=""
                                className="xl:w-auto md:w-6 w-4 md:hidden md:group-hover:block block"/></a></button>
                </div>
            </div>

        </div>

    </div>

    )
}

export default Galleryhub
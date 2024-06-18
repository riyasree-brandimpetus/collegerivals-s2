import Link from "next/link"

const EsportsNavbar = () =>{

    return(
        <div className="w-full">
  <div className="bg-[#131313] max-xl:hidden fixed -left-40 top-[46%] flex gap-16 px-7 py-5  rounded-lg z-50 rotate-90">
    <Link className="text-white uppercase text-sm " href="/" >Format</Link>
    <Link className="text-white uppercase text-sm " href="/" >Schedule</Link>
    <Link className="text-white uppercase text-sm " href="/" >Rules & FAQs</Link>
  </div>
  </div>
    )
}

export default EsportsNavbar;
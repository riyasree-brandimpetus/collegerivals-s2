import Image from "next/image";

const Schedule = () => {
  return (
    <div className="w-full bg-black flex items-center justify-center">
      <div>
        <div>
          <h3 className="md:text-6xl text-2xl ppFormula-font mb-8 md:mb-20 text-white italic text-center">
            SCHEDULE
          </h3>
        </div>
        <Image
          src="/schedule-desk.png"
          className="w-full xl:block hidden"
          width={904}
          height={444}
          alt="schedule-desk.png"
        />
        <Image
          src="/schedule-mb.png"
          className="w-full xl:hidden block"
          width={295}
          height={1152}
          alt="schedule-mb.png"
        />
      </div>
    </div>
  );
};

export default Schedule;

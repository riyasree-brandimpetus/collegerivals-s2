import Image from "next/image";
import event from "./schedule-date.json";

const eventData: any = event.events; // Access the events array
const Schedule = () => {
  return (
    <div className="w-full bg-black flex items-center justify-center">
      <div className="max-w-[1440px] md:w-[85%] lg:w-[70%] xl:w-[60%]">
        <div>
          <h3 className="md:text-6xl text-2xl ppFormula-font mb-8 md:mb-20 text-white italic text-center">
            SCHEDULE
          </h3>
        </div>

        {eventData.map((event: any, index: any) => (
          <div
            key={index}
            className="flex w-full items-center justify-between mb-4"
          >
            <div className="flex w-[25%] flex-col">
              <div className="flex gap-3 items-center">
                <div className="flex flex-col justify-center items-center">
                  <Image width="60" height="60" alt="img" src={event.image} />
                </div>
                <p className="text-white">{event.city}</p>
              </div>
            </div>

            <div className="flex gap-4 w-[75%]">
              {/* Registration Box */}
              <div className="py-2 pl-5 pr-2 w-full border border-#E7327C text-white rounded-md">
                <div className="w-full flex justify-between uppercase">
                  <p>registration</p>
                  {event.dates.registration.show_dot && (
                    <div className="w-4 h-4 rounded-full bg-#E7327C"></div>
                  )}
                </div>
                <p className="uppercase text-#DBFD67">
                  {event.dates.registration.date}
                </p>
              </div>

              {/* Online Qualifiers Box */}
              <div className="py-2 pl-3 w-full bg-[#3B3B3B] text-white rounded-md uppercase">
                <p>online</p>
                <p className="text-#DBFD67">{event.dates.online_qualifiers}</p>
              </div>

              {/* Offline Qualifiers Box */}
              <div className="py-2 pl-4 w-full bg-#DBFD67 text-black rounded-md uppercase">
                <p>offline</p>
                <p>{event.dates.offline_qualifiers}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;

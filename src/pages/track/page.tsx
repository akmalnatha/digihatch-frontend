import "../style.css";
import Maps from "../../components/Maps";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa";
import { BsThermometerHalf } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { useRef, useEffect, useState } from "react";
import Dropdown from "../../components/Dropdown";

export default function Track() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [containerHeight, setContainerHeight] = useState<number>(0);

  useEffect(() => {
    const updateContainerSize = () => {
      if (mapContainerRef.current) {
        setContainerWidth(mapContainerRef.current.offsetWidth);
        setContainerHeight(mapContainerRef.current.offsetHeight);
      }
    };

    // Initial setup
    updateContainerSize();

    // Event listener for window resize
    window.addEventListener("resize", updateContainerSize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateContainerSize);
    };
  }, []);

  const options = [
    { value: "26230000009", label: "26230000009" },
    { value: "26230000010", label: "26230000010" },
    { value: "26230000011", label: "26230000011" },
  ];
  return (
    <div className="w-full h-full">
      <div className="pt-[60px] px-[32px] pb-[32px] w-full h-full flex flex-col gap-5">
        <div className="text-[24px] w-fit text-purple-secondary flex items-center gap-3 font-bold">
          <LiaShippingFastSolid />
          <p className="text-[20px]">Track Order</p>
        </div>
        <div className="flex w-full gap-1">
          <div className="px-[24px] py-[12px] box-shadow rounded-[10px] flex gap-2 items-center border-2 border-purple-ternary bg-[#F6F3FD] relative w-[40%]">
            <img
              src="/assets/logo_medicargo.svg"
              alt=""
              className="w-36 object-contain absolute -top-3 bg-gradient-to-b from-white from-45% to-[#F6F3FD] to-50% px-1"
            />
            <div className="w-full text-blue-dark">
              <div className="flex gap-2 text-[24px] font-semibold ">
                <h1 className="text-[28px] font-normal w-fit">Delivery ID:</h1>
                <Dropdown
                  height={32}
                  placeholder="Search orders!"
                  value={options[0]}
                  options={options}
                />
              </div>
              <h2 className="text-[20px]">Delivery Status: ONGOING</h2>
            </div>
            <div className="text-[40px] text-green-dark">
              <FaWhatsapp />
            </div>
          </div>
          <div className="flex grow gap-1 text-blue-dark">
            <div className="px-[24px] py-[12px] box-shadow rounded-[10px] flex justify-between items-center border-2 border-purple-ternary bg-[#F6F3FD] relative w-1/2">
              <div className="flex items-center gap-1 pr-1 absolute -top-3 bg-gradient-to-b from-white from-45% to-[#F6F3FD] to-50% text-purple-primary font-semibold italic text-[20px]">
                <WiHumidity />
                <p className="text-[16px]">Humidity (%)</p>
              </div>
              <p className="text-center">
                Current <br />{" "}
                <span className="text-[28px] font-semibold">50</span>
              </p>
              <p className="text-center">
                Lowest <br />{" "}
                <span className="text-[28px] font-semibold">50</span>
              </p>
              <p className="text-center">
                Highest <br />{" "}
                <span className="text-[28px] font-semibold">50</span>
              </p>
            </div>
            <div className="px-[24px] py-[12px] box-shadow rounded-[10px] flex justify-between items-center border-2 border-purple-ternary bg-[#F6F3FD] relative w-1/2">
              <div className="flex items-center gap-1 pr-1 absolute -top-3 bg-gradient-to-b from-white from-45% to-[#F6F3FD] to-50% text-purple-primary font-semibold italic">
                <BsThermometerHalf />
                <p>Temperature (C)</p>
              </div>
              <p className="text-center">
                Current <br />{" "}
                <span className="text-[28px] font-semibold">20</span>
              </p>
              <p className="text-center">
                Lowest <br />{" "}
                <span className="text-[28px] font-semibold">20</span>
              </p>
              <p className="text-center">
                Highest <br />{" "}
                <span className="text-[28px] font-semibold">20</span>
              </p>
            </div>
          </div>
        </div>
        <div
          id="mapContainer"
          className="rounded-[10px] grow box-shadow overflow-hidden"
          ref={mapContainerRef}
        >
          <Maps aspectHeight={containerHeight} aspectWidth={containerWidth} />
        </div>
      </div>
    </div>
  );
}

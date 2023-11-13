import "../style.css";
import Maps from "../../components/Maps";
import { LiaShippingFastSolid } from "react-icons/lia";
import { useRef, useEffect, useState } from "react";

export default function Track() {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState<number>(0)
    const [containerHeight, setContainerHeight] = useState<number>(0)

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
    return(
        <div className="w-full h-full">
            <div className="pt-[60px] px-[32px] pb-[32px] w-full h-full flex flex-col gap-5">
                <div className="text-[24px] w-fit text-purple-secondary flex items-center gap-3 font-bold">
                    <LiaShippingFastSolid />
                    <p className="text-[20px]">Dashboard</p>
                </div>
                <div className="px-[24px] py-[12px] box-shadow rounded-[10px] flex gap-2 items-center border-2 border-purple-primary bg-purple-light">
                    {/* <img src="/assets/icon_medicargo.svg" alt="" className="h-full object-cover w-44"/> */}
                    <div>
                        <h2 className="text-[32px]">
                            kontol
                        </h2>
                        <h2 className="text-[16px]">
                            kontol
                        </h2>
                    </div>
                </div>
                <div id="mapContainer" className="rounded-[10px] grow box-shadow overflow-hidden" ref={mapContainerRef}>
                    <Maps aspectHeight={containerHeight} aspectWidth={containerWidth}/>
                    {/* aspect-[12/4] */}
                </div>
            </div>
        </div>
    )
}
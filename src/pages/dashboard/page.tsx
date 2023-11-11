import Navbar from "../../components/Navbar"
import "./style.css"
import { LuLayoutDashboard } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import StackedbarChart from "../../components/StackedBarChart";

function Dashboard() {
    const dataDriver = [
        {
            name: "Assigned",            
            data: [10],
            color: "#23AEB1"
        },
        {
            name: "Unnasigned",            
            data: [12],
            color: "#777879"
        }
    ]
    const dataOrder = [
        {
            name: "Ongoing",            
            data: [10],
            color: "#F3BC00"
        },
        {
            name: "Waiting",            
            data: [10],
            color: "#FFCE26"
        },
        {
            name: "Unnasigned",            
            data: [12],
            color: "#777879"
        }
    ]
    const dataCondition = [
        {
            name: "Safe",            
            data: [10],
            color: "#41FF5F"
        },
        {
            name: "Warning",            
            data: [12],
            color: "#FF575F"
        }
    ]
    return(
        <Navbar active={0}>
            <div className="pt-[60px] px-[32px] flex gap-[20px] w-full h-full overflow-auto">
                <div className="flex flex-col gap-[20px]">
                    <div className={`text-[24px] text-purple-secondary flex items-center gap-3 font-bold`}>
                        <LuLayoutDashboard />
                        <p className="text-[20px]">Dashboard</p>
                    </div>
                    <div className="rounded-[10px] pt-8 px-8 box-shadow">
                        <h1 className="text-blue-dark font-semibold text-[36px]">Dexa Medica Tangerang</h1>
                        <div className="mt-[22px] flex gap-3 text-[24px] text-error items-center">
                            <FaLocationDot/>
                            <h2 className="text-blue-dark text-[24px] font-semibold">
                                Jl. Pinang Kunciran no. 31, Kel Pinang, Tangerang
                            </h2>
                        </div>
                        <div className="flex justify-between">
                            <h2 className="text-blue-dark text-[24px] font-semibold">Internal Delivery</h2>
                            <div className="flex gap-[20px] items-center">
                                <div className="flex items-center gap-[10px]">
                                    <div className="bg-blue-secondary rounded-full w-[20px] h-[20px]"></div>
                                    <span className="text-[16px] font-semibold text-blue-dark">Assigned</span>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="bg-mono-600 rounded-full w-[20px] h-[20px]"></div>
                                    <span className="text-[16px] font-semibold text-blue-dark">Unassigned</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative bottom-5 right-6">
                            <StackedbarChart data={dataDriver}/>
                        </div>
                        <div className="flex justify-between">
                            <h2 className="text-blue-dark text-[24px] font-semibold">Internal Delivery</h2>
                            <div className="flex gap-[20px] items-center">
                                <div className="flex items-center gap-[10px]">
                                    <div className="bg-yellow-secondary rounded-full w-[20px] h-[20px]"></div>
                                    <span className="text-[16px] font-semibold text-blue-dark">Ongoing</span>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="bg-yellow-ternary rounded-full w-[20px] h-[20px]"></div>
                                    <span className="text-[16px] font-semibold text-blue-dark">Ongoing</span>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="bg-mono-600 rounded-full w-[20px] h-[20px]"></div>
                                    <span className="text-[16px] font-semibold text-blue-dark">Unassigned</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative bottom-5 right-6">
                            <StackedbarChart data={dataOrder}/>
                        </div>
                        <div className="flex justify-between">
                            <h2 className="text-blue-dark text-[24px] font-semibold">Internal Delivery</h2>
                            <div className="flex gap-[20px] items-center">
                                <div className="flex items-center gap-[10px]">
                                    <div className="bg-good rounded-full w-[20px] h-[20px]"></div>
                                    <span className="text-[16px] font-semibold text-blue-dark">Assigned</span>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="bg-error rounded-full w-[20px] h-[20px]"></div>
                                    <span className="text-[16px] font-semibold text-blue-dark">Unassigned</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative bottom-5 right-6">
                            <StackedbarChart data={dataCondition}/>
                        </div>
                    </div>
                    <div className="rounded-[10px] pt-8 px-8 box-shadow">
                        <h1 className="text-blue-dark font-semibold text-[36px]">Dexa Medica Tangerang</h1>
                        <div className="mt-[22px] flex gap-3 text-[24px] text-error items-center">
                            <FaLocationDot/>
                            <h2 className="text-blue-dark text-[24px] font-semibold">
                                Jl. Pinang Kunciran no. 31, Kel Pinang, Tangerang
                            </h2>
                        </div>
                        <div className="flex justify-between">
                            <h2 className="text-blue-dark text-[24px] font-semibold">Internal Delivery</h2>
                            <div className="flex gap-[20px] items-center">
                                <div className="flex items-center gap-[10px]">
                                    <div className="bg-blue-secondary rounded-full w-[20px] h-[20px]"></div>
                                    <span className="text-[16px] font-semibold text-blue-dark">Assigned</span>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="bg-mono-600 rounded-full w-[20px] h-[20px]"></div>
                                    <span className="text-[16px] font-semibold text-blue-dark">Unassigned</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative bottom-5 right-6">
                            <StackedbarChart data={dataDriver}/>
                        </div>
                        <div className="flex justify-between">
                            <h2 className="text-blue-dark text-[24px] font-semibold">Internal Delivery</h2>
                            <div className="flex gap-[20px] items-center">
                                <div className="flex items-center gap-[10px]">
                                    <div className="bg-yellow-secondary rounded-full w-[20px] h-[20px]"></div>
                                    <span className="text-[16px] font-semibold text-blue-dark">Ongoing</span>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="bg-yellow-ternary rounded-full w-[20px] h-[20px]"></div>
                                    <span className="text-[16px] font-semibold text-blue-dark">Ongoing</span>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="bg-mono-600 rounded-full w-[20px] h-[20px]"></div>
                                    <span className="text-[16px] font-semibold text-blue-dark">Unassigned</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative bottom-5 right-6">
                            <StackedbarChart data={dataOrder}/>
                        </div>
                        <div className="flex justify-between">
                            <h2 className="text-blue-dark text-[24px] font-semibold">Internal Delivery</h2>
                            <div className="flex gap-[20px] items-center">
                                <div className="flex items-center gap-[10px]">
                                    <div className="bg-good rounded-full w-[20px] h-[20px]"></div>
                                    <span className="text-[16px] font-semibold text-blue-dark">Assigned</span>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="bg-error rounded-full w-[20px] h-[20px]"></div>
                                    <span className="text-[16px] font-semibold text-blue-dark">Unassigned</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative bottom-5 right-6">
                            <StackedbarChart data={dataCondition}/>
                        </div>
                    </div>
                </div>
            </div>
        </Navbar>
    )
}

export default Dashboard
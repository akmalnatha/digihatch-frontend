import "./style.css";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import StackedbarChart from "../../components/StackedBarChart";
import Table from "../../components/Table";
import { LinearGaugeChart } from "../../components/LinearGaugeChart";

function Dashboard() {
  const DATA_DRIVER = [
    {
      name: "Assigned",
      data: [10],
      color: "#23AEB1",
    },
    {
      name: "Unnasigned",
      data: [12],
      color: "#777879",
    },
  ];
  const DATA_ORDER = [
    {
      name: "Ongoing",
      data: [10],
      color: "#F3BC00",
    },
    {
      name: "Waiting",
      data: [10],
      color: "#FFCE26",
    },
    {
      name: "Unnasigned",
      data: [12],
      color: "#777879",
    },
  ];
  const DATA_CONDITION = [
    {
      name: "Safe",
      data: [10],
      color: "#41FF5F",
    },
    {
      name: "Warning",
      data: [12],
      color: "#FF575F",
    },
  ];

  const DATA_TABLE = [
    {
      orderNo: 26230000009,
      deliveryNo: 26230000048,
      cabang: "JK2",
      customerNo: 108443,
      deliveryStatus: "ONGOING",
      conditionStatus: "SAFE",
    },
    {
      orderNo: 26230000009,
      deliveryNo: 26230000048,
      cabang: "JK2",
      customerNo: 108443,
      deliveryStatus: "WAITING",
      conditionStatus: "WARNING",
    },
    {
      orderNo: 26230000009,
      deliveryNo: 26230000048,
      cabang: "JK2",
      customerNo: 108443,
      deliveryStatus: "UNASSIGNED",
      conditionStatus: "",
    },
  ];

  const DATA_HEADER = [
    "Order No",
    "Delivery No",
    "Kode Cabang",
    "Customer No",
    "Delivery Status",
    "Condition Status",
  ];
  return (
      <div className="pt-[60px] w-full h-fit">
        <div
          className={`text-[24px] w-fit text-purple-secondary flex items-center gap-3 font-bold px-[32px]`}
        >
          <LuLayoutDashboard />
          <p className="text-[20px]">Dashboard</p>
        </div>
        <div className="mt-[20px] px-[32px] pb-[32px] flex gap-[20px]">
          <div className="flex flex-col gap-[20px]">
            <div className="rounded-[10px] pt-8 px-8 box-shadow">
              <h1 className="text-blue-dark font-semibold text-[36px]">
                Dexa Medica Tangerang
              </h1>
              <div className="mt-[22px] flex gap-3 text-[24px] text-error items-center">
                <FaLocationDot />
                <h2 className="text-blue-dark text-[24px] font-semibold">
                  Jl. Pinang Kunciran no. 31, Kel Pinang, Tangerang
                </h2>
              </div>
              <div className="flex justify-between mt-5">
                <h2 className="text-blue-dark text-[24px] font-semibold">
                  Internal Delivery
                </h2>
                <div className="flex gap-[20px] items-center">
                  <div className="flex items-center gap-[10px]">
                    <div className="bg-blue-secondary rounded-full w-[20px] h-[20px]"></div>
                    <span className="text-[16px] font-semibold text-blue-dark">
                      Assigned
                    </span>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <div className="bg-mono-600 rounded-full w-[20px] h-[20px]"></div>
                    <span className="text-[16px] font-semibold text-blue-dark">
                      Unassigned
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative bottom-5 right-6">
                <StackedbarChart
                  data={DATA_DRIVER}
                  category={["Internal Driver"]}
                />
              </div>
              <div className="flex justify-between">
                <h2 className="text-blue-dark text-[24px] font-semibold">
                  Internal Delivery
                </h2>
                <div className="flex gap-[20px] items-center">
                  <div className="flex items-center gap-[10px]">
                    <div className="bg-yellow-secondary rounded-full w-[20px] h-[20px]"></div>
                    <span className="text-[16px] font-semibold text-blue-dark">
                      Ongoing
                    </span>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <div className="bg-yellow-ternary rounded-full w-[20px] h-[20px]"></div>
                    <span className="text-[16px] font-semibold text-blue-dark">
                      Ongoing
                    </span>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <div className="bg-mono-600 rounded-full w-[20px] h-[20px]"></div>
                    <span className="text-[16px] font-semibold text-blue-dark">
                      Unassigned
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative bottom-5 right-6">
                <StackedbarChart data={DATA_ORDER} category={["Orders"]} />
              </div>
              <div className="flex justify-between">
                <h2 className="text-blue-dark text-[24px] font-semibold">
                  Internal Delivery
                </h2>
                <div className="flex gap-[20px] items-center">
                  <div className="flex items-center gap-[10px]">
                    <div className="bg-good rounded-full w-[20px] h-[20px]"></div>
                    <span className="text-[16px] font-semibold text-blue-dark">
                      SAFE
                    </span>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <div className="bg-error rounded-full w-[20px] h-[20px]"></div>
                    <span className="text-[16px] font-semibold text-blue-dark">
                      WARNING
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative bottom-5 right-6">
                <StackedbarChart
                  data={DATA_CONDITION}
                  category={["Condition"]}
                />
              </div>
            </div>
            <div className="rounded-[10px] box-shadow">
              <Table data={DATA_TABLE} header={DATA_HEADER} />
            </div>
          </div>
          <div className="rounded-[10px] p-8 box-shadow w-full">
            <div className="flex justify-between h-1/2">
                <LinearGaugeChart format="{value}°C" chartType="Thermometer" pointerType="Bar" containerWidth={25} containerHeight={325}/>
                <LinearGaugeChart format="{value}%" chartType="Normal" pointerType="Marker" containerWidth={0} containerHeight={320}/>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Dashboard;

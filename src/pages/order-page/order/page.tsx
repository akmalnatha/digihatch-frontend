import "../../style.css";
import { BsBoxSeam } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import StackedbarChart from "../../../components/StackedBarChart";
import Table from "../../../components/Table";
import { LinearGaugeChart } from "../../../components/LinearGaugeChart";
import Tab from "../../../components/Tab";

function Order() {
  //   const DATA_DRIVER = [
  //     {
  //       name: "Assigned",
  //       data: [10],
  //       color: "#23AEB1",
  //     },
  //     {
  //       name: "Unnasigned",
  //       data: [12],
  //       color: "#777879",
  //     },
  //   ];
  //   const DATA_ORDER = [
  //     {
  //       name: "Ongoing",
  //       data: [10],
  //       color: "#F3BC00",
  //     },
  //     {
  //       name: "Waiting",
  //       data: [10],
  //       color: "#FFCE26",
  //     },
  //     {
  //       name: "Unnasigned",
  //       data: [12],
  //       color: "#777879",
  //     },
  //   ];
  //   const DATA_CONDITION = [
  //     {
  //       name: "Safe",
  //       data: [10],
  //       color: "#41FF5F",
  //     },
  //     {
  //       name: "Warning",
  //       data: [12],
  //       color: "#FF575F",
  //     },
  //   ];

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
    "Actions"
  ];
  return (
    <div className="rounded-[10px] box-shadow">
      <Table data={DATA_TABLE} header={DATA_HEADER} tipe="order"/>
    </div>
  );
}

export default Order;

import { BiSolidPencil } from "react-icons/bi";
import { BsBarChartFill, BsTrashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";

function Table({
  data,
  header,
  tipe,
  page,
  isLoading,
}: {
  data: any[];
  header: any[];
  tipe?: string;
  page?: string;
  isLoading?: boolean;
}) {
  const [showAssignModal, setShowAssignModal] = useState(false);

  //   const [showPopUpDelete, setShowPopUpDelete] = useState(false);
  //   const [idDelete, setIdDelete] = useState(0);

  //   const navigate = useNavigate();

  //DETAIL PM
  //   const [detailIdPm, setDetailIdPm] = useState("")
  //   const [detailStatus, setDetailStatus] = useState<ReactNode>()
  //   const [detailPlan, setDetailPlan] = useState("")
  //   const [detailWilayah, setDetailWilayah] = useState("")
  //   const [detailArea, setDetailArea] = useState("")
  //   const [detailJenis, setDetailJenis] = useState("")
  //   const [detailKategori, setDetailKategori] = useState("")
  //   const [detailPengerjaan, setDetailPengerjaan] = useState("")
  //   const [detailNamaPop, setDetailNamaPop] = useState("")

  let assigned = true;

  const Load = () => {
    const dummy = [1, 2, 3, 4, 5];
    return dummy.map((idx: number) => (
      <tr key={idx}>
        {header.map((idx: number) => {
          return (
            <td
              key={idx}
              className="h-auto w-auto border-collapse border-b-2 border-mono-300 px-4 py-1 text-center"
            >
              <div className="h-4 w-full animate-pulse bg-mono-600"></div>
            </td>
          );
        })}
      </tr>
    ));
  };

  return (
    <>
      <Modal
        visible={showAssignModal}
        onClose={() => setShowAssignModal(false)}
      >
        <h1 className="p-2 px-3 text-purple-primary text-[28px] font-bold">Assign Order</h1>
        <div className="w-full p-5"></div>
      </Modal>
      {/* <Modal visible={showPopUpDelete} onClose={() => setShowPopUpDelete(false)}>
        <div className="flex items-center justify-center text-[40px] mx-auto w-20 h-20 rounded-full text-red-primary border-2 border-red-primary">
          <BsTrashFill />
        </div>
        <h3 className="header3 text-center text-red-primary mt-5">Are you sure?</h3>
        <p className="text-center text-text-dark mt-3">Do you really want to delete this item? <br /> This action cannot be undone</p>
        <div className="flex gap-5 mt-5">
          <Button type={undefined} className="h-[40px] w-full text-[20px] font-semibold text-text-dark hover:text-text-light bg-white rounded-[10px] hover:bg-red-hover active:bg-red-click border-[1px] border-red-primary" text="YES"/>
          <Button type={undefined} className="h-[40px] w-full text-[20px] font-semibold text-text-dark hover:text-text-light bg-white rounded-[10px] hover:bg-blue-hover active:bg-blue-click border-[1px] border-blue-primary" text="NO" onClick={() => setShowPopUpDelete(false)}/>
        </div>
      </Modal> */}

      <div className="flex overflow-hidden rounded-[8px] w-full">
        <table className="w-full overflow-visible">
          <thead>
            <tr>
              {header.map((item: any, idx: number) => {
                return (
                  <th
                    key={idx}
                    className="h-auto w-auto border-collapse text-white bg-purple-secondary p-[8px] text-center truncate"
                  >
                    {item}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="overflow-visible">
            {
              // isLoading ? (
              //   <Load />) :
              data.length > 0 ? (
                Object.values(data).map((obj: any, idx: number) => {
                  let isUnassigned = Object.values(obj).some(
                    (item) => item === "UNASSIGNED"
                  );
                  // Check if "UNASSIGNED" is found in any property of the current object
                  if (isUnassigned) {
                    assigned = false;
                  }

                  return (
                    <tr key={idx} className="overflow-visible">
                      {/* <td className="h-auto w-auto overflow-visible border-collapse border-b-2 border-mono-300 py-3 text-center px-4">
                    </td> */}
                      {Object.values(obj).map((item: any, idx: number) => {
                        return (
                          <td
                            key={idx}
                            className="h-auto w-auto border-collapse border-b-2 border-mono-300 p-[8px] text-center min-w-max"
                          >
                            {item === "SAFE" || item === "ONGOING" ? (
                              <p className="text-green-light">{item}</p>
                            ) : item === "WAITING" ? (
                              <p className="text-orange-secondary">{item}</p>
                            ) : item === "WARNING" ? (
                              <p className="text-error">{item}</p>
                            ) : item === "UNASSIGNED" ? (
                              <p className="text-mono-600">{item}</p>
                            ) : (
                              item
                            )}
                          </td>
                        );
                      })}
                      {tipe === "order" && (
                        <td className="h-auto w-auto border-collapse border-b-2 border-mono-300 p-1 text-center min-w-max">
                          {!assigned ? (
                            <button
                              className="px-4 py-2 bg-purple-ternary hover:bg-purple-secondary active:bg-purple-primary rounded-[10px] mx-auto text-white font-medium"
                              onClick={() => setShowAssignModal(true)}
                            >
                              Assign
                            </button>
                          ) : (
                            <button className="px-4 py-2 bg-blue-ternary hover:bg-blue-secondary active:bg-blue-primary rounded-[10px] mx-auto text-white font-medium">
                              Details
                            </button>
                          )}
                        </td>
                      )}
                    </tr>
                  );
                })
              ) : (
                <td colSpan={header.length}>
                  <p className="text-center text-[20px] py-5">
                    Data tidak ditemukan
                  </p>
                </td>
              )
            }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;

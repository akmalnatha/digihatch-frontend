import { BiSolidPencil } from "react-icons/bi";
import { BsBarChartFill, BsTrashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Table({
  data,
  header,
  tipe,
  isLoading,
}: {
  data: any[];
  header: any[];
  tipe?: string;
  isLoading?: boolean;
}) {
//   const [showDetailPM, setShowDetailPM] = useState(false);

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
      {/* <Modal
        visible={showDetailPM}
        onClose={() => setShowDetailPM(false)}>
        <h1 className="bg-blue-alternative header1 p-2 px-3 text-text-light rounded-t-lg">
            Detail PM
          </h1>
        <div className="w-full p-5">
          <div className="grid grid-cols-3 gap-y-10">
            <div className="text-[20px]">
              <span className="font-semibold">ID : </span>
              <span>{detailIdPm}</span>
            </div>
            <div className="text-[20px]">
              <span className="font-semibold">Plan : </span>
              <span>{detailPlan}</span>
            </div>
            <div className="text-[20px]">
              <span className="font-semibold">Realisasi : </span>
              <span>-</span>
            </div>
            <div className="text-[20px]">
              <span className="font-semibold">Status : </span>
              <span>{detailStatus}</span>
            </div>
            <div className="text-[20px]">
              <span className="font-semibold">Wilayah : </span>
              <span>{detailWilayah}</span>
            </div>
            <div className="text-[20px]">
              <span className="font-semibold">Area : </span>
              <span>{detailArea}</span>
            </div>
            <div className="text-[20px]">
              <span className="font-semibold">Jenis PM : </span>
              <span>{detailJenis}</span>
            </div>
            <div className="text-[20px]">
              <span className="font-semibold">Kategori PM : </span>
              <span>{detailKategori}</span>
            </div>
            <div className="text-[20px]">
              <span className="font-semibold">Detail PM : </span>
              <span>{detailPengerjaan}</span>
            </div>
            <div className="text-[20px]">
              <span className="font-semibold">Hostname : </span>
              <span>-</span>
            </div>
            <div className="text-[20px]">
              <span className="font-semibold">FAT ID : </span>
              <span>-</span>
            </div>
            <div className="text-[20px]">
              <span className="font-semibold">Nama POP : </span>
              <span>{detailNamaPop}</span>
            </div>
            <div className="text-[20px] col-span-3">
              <span className="font-semibold">Temuan : </span>
              <span>-</span>
            </div>
            <div className="text-[20px] col-span-3">
              <span className="font-semibold">Link Laporan OSP : </span>
              <span>
                -
              </span>
            </div>
          </div>
        </div>
      </Modal>
      <Modal visible={showPopUpDelete} onClose={() => setShowPopUpDelete(false)}>
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
                          {item}
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            ) : (
              <td colSpan={header.length}>
                <p className="text-center text-[20px] py-5">
                  Data tidak ditemukan
                </p>
              </td>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;

import { NavLink, useLocation } from "react-router-dom";

function Tab() {
  const pathname = useLocation().pathname;

  return (
    <>
      <div className="w-fit">
        <ul className="w-full flex cursor-pointer gap-4">
          <div className="text-center text-purple-ternary">
            <NavLink to="/order">
              <li className="w-full h-full flex flex-col justify-center items-center">
                <p className={`${pathname == "/order" ?  "" : "text-mono-600"} font-semibold hover:text-purple-secondary active:text-purple-primary`}>
                  LIST ORDER
                </p>
              </li>
            </NavLink>
            <div
              className={`${
                pathname == "/order"
                  ? "scale-x-100"
                  : "scale-x-0"
                  } z-10 ease-in-out duration-300 w-full h-1 bg-purple-ternary moving`}
            ></div>
          </div>
          <div className="text-center text-purple-ternary">
            <NavLink to="/order/history">
              <li className="w-full h-full flex flex-col justify-center items-center">
                <p className={`${pathname == "/order/history" ? "" : "text-mono-600"} font-semibold hover:text-purple-secondary active:text-purple-primary`}>
                  HISTORY
                </p>
              </li>
            </NavLink>
            <div
              className={`${
                pathname == "/order/history"
                  ? "scale-x-100"
                  : "scale-x-0"
                  } z-10 ease-in-out duration-300 w-full h-1 bg-purple-ternary moving`}
            ></div>
          </div>
          {/* <div className="w-[16.6667%] bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-alternative relative">
            <Link to="/dashboard-pop/kwh">
              <li className="w-full h-full flex flex-col justify-center items-center">
                <p className="text-blue-alternative font-bold">KWH</p>
              </li>
            </Link>
          </div> */}
        </ul>
      </div>
    </>
  );
}

export default Tab;

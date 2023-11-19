import { ReactNode } from "react"
import { BsBoxSeam } from "react-icons/bs"
import Tab from "../../components/Tab"
import Table from "../../components/Table"

function Header ({children}:{children: ReactNode}) {
    return (
        <div className="w-full h-fit">
      <div className="pt-[60px] px-[32px] pb-[32px] w-full h-full flex flex-col gap-5">
        <div
          className={`text-[24px] w-fit text-purple-secondary flex items-center gap-3 font-bold`}
        >
          <BsBoxSeam />
          <p className="text-[20px]">List Orders</p>
        </div>
        <Tab />
        {children}
      </div>
    </div>
    )
}

export default Header
import { FaCoins, FaExchangeAlt } from "react-icons/fa";
import { FaWallet } from "react-icons/fa6";
import pic from "../../assets/react.svg";

import {
	MdDashboard,
	MdTransferWithinAStation,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import { MdSettings } from "react-icons/md";

import { MdReport } from "react-icons/md";

const Sider = () => {
	return (
		<div className="overflow-y-auto min-h-[100vh] w-full border-r bg-[#161326] text-white flex flex-col ">
			<div className="w-full flex px-2 mt-6 ">
				<div className=" w-16 h-16 object-cover flex border rounded-full items-center justify-center ">
					<img
						className="w-full h-full object-cover rounded-full border"
						src={pic}
					/>
				</div>
				<div className="ml-2">
					{/* TODO: Add tooltip */}
					<div className="break-words font-bold"></div>
					<p className="break-words font-medium text-slate-400 text-[14px] mt-2"></p>
					<p className="break-words font-medium text-slate-400  text-[14px] -mt-1"></p>
				</div>
			</div>

			{/* top box */}

			{/* top box */}
			{/* <div className="mt-16 px-2 text-center flex flex-col border mx-2 rounded-md py-4 ">
				<div className="mb-4 text-[13px] font-medium ">
					Encourage Parents to Purchase Learning Materials for thier
					child by having more items in your Library Store{" "}
				</div>
				{/* <div className="flex w-full justify-center">
					{/* <NavLink to="upgrade"> */}

			{/* <Button
              name="Add to Store"
              className="bg-black text-white border-none font-medium py-4 px-9 leading-tight"
              onClick={() => {
                handleDisplayStaff();
              }}
            /> */}

			{/* </NavLink> */}
			{/* </div> */}
			{/* </div> */}

			{/* Nav Links */}

			{/* Settings */}
			<div className="mt-10 px-2 flex flex-col h-[90%]">
				<NavLink
					to="/dashboard"
					className={({ isActive }) =>
						isActive
							? "duration-500 transition-all p-2 rounded-sm bg-blue-200 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
							: "duration-500 transition-all p-2 rounded-sm hover:bg-blue-200 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
					}
				>
					Dashboard
					{/* <MdQueryStats /> */}
					<MdDashboard />
				</NavLink>
				<NavLink
					to="/wallet"
					className={({ isActive }) =>
						isActive
							? "duration-500 transition-all p-2 rounded-sm bg-blue-200 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
							: "duration-500 transition-all p-2 rounded-sm hover:bg-blue-200  hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between mt-2"
					}
				>
					My Wallet
					<FaWallet />
				</NavLink>
				<NavLink
					to="/transaction"
					className={({ isActive }) =>
						isActive
							? "duration-500 transition-all p-2 rounded-sm bg-blue-200  text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
							: "duration-500 transition-all p-2 rounded-sm hover:bg-blue-200  hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between mt-2"
					}
				>
					Transaction
					<MdTransferWithinAStation />
				</NavLink>
				<NavLink
					to="/crypto"
					className={({ isActive }) =>
						isActive
							? "duration-500 transition-all p-2 rounded-sm bg-blue-200 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
							: "duration-500 transition-all p-2 rounded-sm hover:bg-blue-200  hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between mt-2"
					}
				>
					Crypto
					<FaCoins />
				</NavLink>

				<NavLink
					to="/exchange"
					className={({ isActive }) =>
						isActive
							? "duration-500 transition-all p-2 rounded-sm bg-blue-200 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
							: "duration-500 transition-all p-2 rounded-sm hover:bg-blue-200  hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between mt-2"
					}
				>
					Exchange
					<FaExchangeAlt />
				</NavLink>
				<NavLink
					to="/complains"
					className={({ isActive }) =>
						isActive
							? "duration-500 transition-all p-2 rounded-sm bg-blue-200 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
							: "duration-500 transition-all p-2 rounded-sm hover:bg-blue-200  hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between mt-2"
					}
				>
					Complains
					<MdReport />
				</NavLink>

				<div className="flex-1" />

				<NavLink
					to="/settings"
					className={({ isActive }) =>
						isActive
							? "duration-500 transition-all p-2 rounded-sm bg-blue-200 text-black cursor-pointer font-medium my-[4px] flex items-center justify-between "
							: "duration-500 transition-all p-2 rounded-sm  flex items-center justify-between hover:bg-blue-200 hover:text-black cursor-pointer font-medium my-[4px]"
					}
				>
					Settings
					<MdSettings />
				</NavLink>
			</div>
		</div>
	);
};

export default Sider;

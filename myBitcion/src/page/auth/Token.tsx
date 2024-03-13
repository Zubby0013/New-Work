import { Link } from "react-router-dom";
import Input from "../../components/MainReUse/Input";
import logo from "../../assets/digbitLogo.png";
import Button from "../../components/MainReUse/Button";
import { useState } from "react";

const Token = () => {
	const [token, setToken] = useState<string>("");

	return (
		<div className="w-full h-[91vh] flex flex-col justify-center items-center">
			<div className="mb-10 text-center flex items-center w-full flex-col">
				<Link to="/">
					<img
						className="mb-5 w-56 h-28 object-contain"
						src={logo}
					/>{" "}
				</Link>
				<div className="text-[26px] font-bold mb-3">
					Verify Your Account
				</div>
				<div className="text-[14px] -mt-4"></div>
			</div>
			<form className="rounded-md bg-white min-h-[200px] w-[80%] md:w-[500px] border p-4">
				<Input
					placeholder="Token"
					className="w-[97%]"
					type="token"
					value={token}
					onChange={(e: any) => {
						setToken(e.target.value);
					}}
				/>

				{/* <div>
					<Input
						placeholder="Password"
						className="w-[97%]"
						type="password"
					/>
				</div> */}
				<div className="mt-10 mb-0 ml-2 text-[13px] font-medium ">
					Verify Account
				</div>
				<div className="flex flex-col">
					<Button
						name="Verify Account"
						className="w-[97%] bg-blue-900 text-white h-14 hover:bg-blue-800 transition-all duration-300 font-semibold"
						type="submit"
						// icon={
						// 	loading && (
						// 		<ClipLoader
						// 			color="white"
						// 			size={18}
						// 		/>
						// 	)
						// }
						// onClick={handleSubmit}
					/>
				</div>
			</form>
			<div className="mt-5 text-[13px]">
				Didn't see the token?{" "}
				<span className="font-bold text-blue-900">
					<Link to="/auth">Resend token</Link>
				</span>
			</div>
		</div>
	);
};

export default Token;
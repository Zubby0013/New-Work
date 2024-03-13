import { Link } from "react-router-dom";
import Input from "../../components/MainReUse/Input";
import Button from "../../components/MainReUse/Button";
import logo from "../../assets/logo.png";
import { useState } from "react";

const SignIn = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setpassword] = useState<string>("");
	return (
		<div className="w-full h-[91vh] flex flex-col justify-center items-center">
			<div className="mb-10 text-center flex items-center w-full flex-col">
				<Link to="/">
					<img
						className="mb-5 w-56 h-28 object-contain"
						src={logo}
					/>{" "}
				</Link>
				<div className="text-[26px] font-bold mb-3">Welcome Back</div>
				<div className="text-[14px] -mt-4">
					Sign in now to continue your Experience.
				</div>
			</div>
			<form className="rounded-md bg-white min-h-[300px] w-[80%] md:w-[500px] border p-4">
				<Input
					placeholder="Email"
					className="w-[97%]"
					type="email"
					value={email}
					onChange={(e: any) => {
						setEmail(e.target.value);
					}}
				/>

				<div>
					<Input
						placeholder="Password"
						className="w-[97%]"
						type="password"
						value={password}
						onChange={(e: any) => {
							setpassword(e.target.value);
						}}
					/>
				</div>
				<div className="mt-10 mb-0 ml-2 text-[13px] font-medium ">
					LOGIN
				</div>
				<div className="flex flex-col">
					<Button
						name="Login"
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
				Don’t have an account yet?{" "}
				<span className="font-bold text-blue-900">
					<Link to="/auth">Register here</Link>
				</span>
			</div>
		</div>
	);
};

export default SignIn;

import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { regex } from "../constants/movie";

type Inputs = {
	email: string;
	password: string;
};

//Styles
const loginStyle = `relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent`;
const formStyle = `relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14`;
const inputLabel = `inline-block w-full`;
const errorMessage = `p-1 text-[15px] font-light text-orange-500`;

const login = () => {
	const [login, setLogin] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	//destructure custome hook
	const { signIn, signUp } = useAuth();

	//Handle submit
	const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
		if (login) {
			await signIn(email, password);
		} else {
			await signUp(email, password);
		}
	};

	return (
		<div className={loginStyle}>
			<Head>
				<title>Ethio-Cinema - Login</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Image
				src="https://rb.gy/p2hphi"
				layout="fill"
				className="-z-10 !hidden opacity-60 sm:!inline"
				objectFit="cover"
			/>
			<div className="object-fit absolute left-4 top-4">
				<Image src="https://rb.gy/ulxxee" width={100} height={40} />
			</div>

			<form onSubmit={handleSubmit(onSubmit)} className={formStyle}>
				<h1 className="text-4xl font-semibold">Sign In</h1>
				<div className="space-y-4">
					<label className={inputLabel}>
						<input
							type="email"
							{...register("email", {
								required: { value: true, message: "Email field is required." },
								pattern: {
									value: regex,
									message: "Invalid email address",
								},
							})}
							placeholder="Email"
							className="input"
							autoComplete="off"
						/>
						<p className={errorMessage}>{errors.email?.message}</p>
					</label>
					<label className={inputLabel}>
						<input
							type="password"
							{...register("password", {
								required: { value: true, message: "Password is required" },
							})}
							placeholder="Password"
							className="input"
						/>
						<p className={errorMessage}>{errors.password?.message}</p>
					</label>
				</div>
				<button
					className="w-full rounded bg-[#0cf427] py-3 font-semibold"
					type="submit"
					onClick={() => setLogin(true)}
				>
					Sign In
				</button>
				<div className="text-[gray]">
					New to Ethio-Cinema?{" "}
					<button
						className="text-[white] hover:underline"
						onClick={() => setLogin(false)}
					>
						Sign up{" "}
					</button>
				</div>
			</form>
		</div>
	);
};

export default login;

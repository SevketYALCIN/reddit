import { RouteComponentProps } from "@reach/router";
import React, { useContext } from "react";
import { signInWithGoogle } from "../../firebase";

const SignIn = (props: RouteComponentProps) => {

	return (
		<div>
			<h1>Sign In</h1>
			<button onClick={signInWithGoogle}>
				Sign in with Google
        </button>
		</div>
	);
};
export default SignIn;
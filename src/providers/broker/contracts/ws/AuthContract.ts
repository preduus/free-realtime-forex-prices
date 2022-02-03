import { getCookie } from "../../../../utils/cookies";
import { IContracts } from "./IContracts";

const AuthenticateWSContract = (requestId: string = ""): IContracts => {
	return {
		"name": "authenticate",
		"request_id": requestId,
		"msg": {
			"ssid": getCookie("ssid"),
			"protocol": 3,
			"session_id": "",
			"client_session_id": ""
		}
	}
}

export default AuthenticateWSContract;
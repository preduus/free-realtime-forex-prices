import axios from 'axios';
import { IBroker, IBrokerAuthenticateDTO, IBrokerCredentials } from '../IBrokers';

interface IAuthenticateBrokerResponse {
    code: string;
    ssid?: string;
    message?: string;
}

class IqoptionProvider implements IBroker {

    async authenticate(credentials: IBrokerCredentials): Promise<IBrokerAuthenticateDTO> {
        const { identifier, password } = credentials;

        return new Promise(resolve => {
            axios.post("/api/v2/login", { identifier, password }).then(response => {
                const data: IAuthenticateBrokerResponse = response.data;

                if (data.code !== "success") {
                    resolve(data);
                } else {
                    resolve({
                        code: data.code,
                        token: data.ssid
                    });
                }
            }).catch(err => {
                resolve({
                    code: "error",
                    message: err
                })
            });
        });
    }

}

export default IqoptionProvider;
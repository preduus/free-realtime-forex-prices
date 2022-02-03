import { IBroker, IBrokerAuthenticateDTO, IBrokerCredentials, IBrokerProfileDTO } from '../IBrokers';

import api from '../../api';

interface IAuthenticateBrokerResponse {
    code: string;
    ssid?: string;
    message?: string;
}

class IqoptionProvider implements IBroker {

    async authenticate(credentials: IBrokerCredentials): Promise<IBrokerAuthenticateDTO> {
        const { identifier, password } = credentials;

        return new Promise(resolve => {
            api.post("get-user-auth", { identifier, password }).then(response => {
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

    async getProfile(): Promise<IBrokerProfileDTO> {
        return new Promise(resolve => {
            api.get("broker-api/getprofile").then(response => resolve(response.data))
        })
    }

}

export default IqoptionProvider;
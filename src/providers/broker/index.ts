import { IBrokerCredentials } from "./IBrokers";
import IqoptionProvider from "./implementations/IqoptionProvider";


class BrokerProvider {

    constructor(private broker: IqoptionProvider)
    {}

    async getToken(credentails: IBrokerCredentials) {
        return await this.broker.authenticate(credentails);
    }

    getProfile() {
        return this.broker.getProfile();
    }

}

export default new BrokerProvider(new IqoptionProvider());
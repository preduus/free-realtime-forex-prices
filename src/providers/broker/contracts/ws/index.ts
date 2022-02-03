import AuthContract from './AuthContract';
import SubscribeActiveContract from './SubscribeActiveContract';

const requestId = () => {
    return `${new Date().getTime()}`
}

class WebSocketContracts {

    AuthContract() {
        return AuthContract(`${requestId()}_${requestId()}`)
    }

    subscribeActive(activeId: number, size = 900) {
        return SubscribeActiveContract(activeId, size, requestId())
    }

}

export default new WebSocketContracts();
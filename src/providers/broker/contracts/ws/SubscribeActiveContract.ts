import { IContracts } from "./IContracts";

const SubscribeActiveContract = (activeId: number, size: number, requestId: any = ""): IContracts => {
    return {
        "name": "subscribeMessage",
        "request_id": `s_${requestId}`,
        "msg": {
            "name": "candle-generated",
            "params": {
                "routingFilters": {
                    "active_id": activeId,
                    "size": size
                }
            }
        }
    }
}

export default SubscribeActiveContract;
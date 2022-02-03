import { IContracts } from './IContracts';

const HeartbeatContract = (beat: number): IContracts => {
    return {
        "name": "heartbeat",
        "request_id": `${Math.floor(Math.random()*(999-100+1)+100)}`,
        "local_time": new Date().getMilliseconds(),
        "msg": {
            "userTime": new Date().getTime(),
            "heartbeatTime": beat
        }
    }
}

export default HeartbeatContract;
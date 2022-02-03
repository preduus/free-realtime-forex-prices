import React, { useState, useEffect, useContext } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

import WSContracts from '../contracts/ws';

import Preloader from "../../../components/Preloader";
import HeartbeatContract from "../contracts/ws/HeartbeatContract";
import { MarketContext } from "../../../contexts/market";


const WebsocketProvider: React.FC = () => {

    const { actives, handleMarketPrices } = useContext(MarketContext);
    const [received, setReceived] = useState(0);

    const { lastMessage, sendMessage, readyState } = useWebSocket(`ws://${window.location.host}/realtime`);

    useEffect(() => {
        if (!lastMessage) return;

        const message = JSON.parse(lastMessage.data);
        
        setReceived(received+1);

        if (!["heartbeat"].includes(message.name)) {
            if (message.name === "authenticated" && message.msg) {
                for (let active of actives) {
                    sendMessage(JSON.stringify(WSContracts.subscribeActive(active.id)));
                }
            }

            if (message.name === "candle-generated") {
                handleMarketPrices(actives.map((active) => {
                    if (active.id === message.msg.active_id) {
                        Object.assign(active, {current: message.msg})
                    }
                    return active;
                  }))
            }

        } else {
            sendMessage(JSON.stringify(HeartbeatContract(message.msg)));
        }

        if (received === 1) {
            sendMessage(JSON.stringify(WSContracts.AuthContract()))
        }

    }, [lastMessage]);

    if (readyState !== ReadyState.OPEN && readyState !== ReadyState.CLOSED) {
        return <Preloader />
    }

    return <></>
};

export default WebsocketProvider;

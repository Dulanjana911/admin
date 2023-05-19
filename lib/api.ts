import { Log } from "@/types/core";

export const getAllLogs = async () => {
    const res = await fetch('https://smart-car-park-production.up.railway.app/log');
    const logs:Log[] = (await res.json()).data;
    console.log(logs);
    return logs;
};

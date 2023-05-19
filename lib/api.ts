import { Log } from "@/types/core";
import dayjs from "dayjs";

export const getAllLogs = async () => {
  const res = await fetch(
    "https://smart-car-park-production.up.railway.app/log"
  );
  const rawLogs = (await res.json()).data;
  const logs: Log[] = rawLogs.map((rawLog: any) => {
    const log = {
      pid: rawLog.pid,
      rfid: rawLog.rfid,
      uname: rawLog.user.uname,
      time:dayjs(rawLog.time).format("DD/MM/YY HH:mm:ss"),
      vmodel: rawLog.user.vmodel,
      action: rawLog.action,
    };
    return log;
  });
  return logs;
};

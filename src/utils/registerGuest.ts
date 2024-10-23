import md5 from "md5";
export const getDeviceId = () => {
  return new Date().getTime() + generateId(7);
};

const generateId = (length: number) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export enum OSTypeEnum {
  Android = 1,
  iOS,
  Web,
}

export const getRegisterGuestModel = () => {
  const deviceId = getDeviceId();
  const osType = OSTypeEnum.Web;
  const key = md5(
    `cdq\`gORT\`hv1g45'78sGGweqeU7641Bell||{asd}}}a((d)a*&^a%$a#@!5!T2QWacc1HeySenyorita${deviceId}Web`
  );

  window.localStorage.setItem("deviceId", deviceId);

  return {
    deviceId,
    osType,
    key,
  };
};

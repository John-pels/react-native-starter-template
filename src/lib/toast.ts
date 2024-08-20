import Toast from "react-native-root-toast";

export const RNToast = {
  success: (msg: string) => {
    return Toast.show(msg, {
      duration: Toast.durations.LONG,
      shadow: true,
      animation: true,
      position: Toast.positions.TOP,
      backgroundColor: "#056221",
    });
  },
  error: (msg: string) => {
    return Toast.show(msg, {
      duration: Toast.durations.LONG,
      shadow: true,
      animation: true,
      position: Toast.positions.TOP,
      backgroundColor: "#ff0000",
    });
  },
  warning: (msg: string) => {
    return Toast.show(msg, {
      duration: Toast.durations.LONG,
      shadow: true,
      animation: true,
      position: Toast.positions.TOP,
      backgroundColor: "#FFAB3A",
    });
  },
};

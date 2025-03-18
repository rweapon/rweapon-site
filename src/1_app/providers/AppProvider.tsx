import { Provider } from "react-redux";
import { store } from "../appStore";

type AppProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export default function AppProvider({ children }: AppProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}

import { Provider } from "react-redux";
import {store} from './index'
export default function ProviderWrapper({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
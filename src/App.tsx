import { Provider } from "@/components/ui/provider";
import Header from "./components/Header";
import DashboardArea from "./components/Dashboard";

export default function App() {
  return (
    <Provider>
      <Header />
      <DashboardArea />
    </Provider>
  );
}

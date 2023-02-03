import "./styles/global.css";
// import { Habit } from "./components/Habit"
import { Header } from "./components/header";
import { SummaryTable } from "./components/SummaryTable";

// obs: tailwind every number.4 E.g.: 6.4 = 24'
export function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex-col gap-16">
        <Header />
        <SummaryTable />
      </div>
    </div>
  );
}

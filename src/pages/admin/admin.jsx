import SummaryCard from "../../components/AdminPanel/SummaryCard";
import HistoryTable from "../../components/AdminPanel/HistoryTable";
import MemberTable from "../../components/AdminPanel/MemberTable";
// import BarChart from "../../components/AdminPanel/BarChart";
// import CardExample from "../../components/Card/CardExample";

export default function admin() {
  return (
    <div className="flex flex-col w-full px-[30px] gap-[50px]">
      {/* <CardExample/> */}
      <div className="flex flex-col lg:flex-row items-center gap-[30px]">
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
      </div>
      {/* <BarChart /> */}
      <HistoryTable />
      <MemberTable />
    </div>
  );
}

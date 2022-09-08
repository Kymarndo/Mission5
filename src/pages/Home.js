import RegoSearch from "../components/home/rego-search/RegoSearch";
import Table from "../components/home/table/Table";
import OptionalInsurance from "../components/home/optional-insurance/OptionalInsurance";



export default function Home() {
  return (
    <div>
       <RegoSearch />
      <Table />
      <OptionalInsurance/> 
    </div>
  );
}

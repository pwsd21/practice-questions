import { useEffect, useState } from "react";
import "./App.css";
// import ClientPagination from "./components/ClientPagination";
// import CheckoutStepper from "./components/CheckoutStepper";
import InfiniteScrollList from "./components/InfiniteScroll";
// import EventDelegation from "./components/EventDelegation";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/users");
      const jsonData = await res.json();
      setData(jsonData?.users);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      {/* <EventDelegation /> */}
      {/* <ClientPagination data={data} itemsPerPage={5} /> */}
      {/* <CheckoutStepper /> */}
      <InfiniteScrollList />
    </div>
  );
}

export default App;

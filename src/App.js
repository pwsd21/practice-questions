// import { useEffect, useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion";
// import InfiniteScroll from "./components/InfiniteScroll";
// import ClientPagination from "./components/ClientPagination";
// import CheckoutStepper from "./components/CheckoutStepper";
// import InfiniteScrollList from "./components/InfiniteScroll";
// import LoginForm from "./components/useRefForm";
// import LoginFormYup from "./components/YupForm";
// import MultiSelect from "./components/MultiSelect";
// import InfiniteScrollClient from "./components/ApiInfiniteScroll";
// import EventDelegation from "./components/EventDelegation";

function App() {
  // const [data, setData] = useState([]);

  // const fetchData = async () => {
  //   try {
  //     const res = await fetch("https://dummyjson.com/users");
  //     const jsonData = await res.json();
  //     setData(jsonData?.users);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <div className="App">
      {/* <EventDelegation /> */}
      {/* <ClientPagination data={data} itemsPerPage={5} /> */}
      {/* <CheckoutStepper /> */}
      {/* <LoginForm /> */}
      {/* <LoginFormYup /> */}
      {/* <InfiniteScrollList /> */}
      {/* <InfiniteScrollClient /> */}
      {/* <MultiSelect /> */}
      {/* <InfiniteScroll /> */}
      <Accordion />

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/team" element={<Team />}></Route>
          </Route>
          <Route path="/about" element={<About lang={lang} />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/accordion" element={<Accordion />}></Route>
          <Route path="/comments" element={<Comments />}></Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;

import React, { Suspense } from "react";
import Navbar from "./Navbar";

//const LazyComponent = React.lazy(()=> import('./Contact'))

function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <h2 style={{
          fontSize:"18px",
          color: "blue",
          height: "auto",
          width: "auto",
          marginLeft: "500px",
          marginTop: "20px",
          alignContent: "center",
          alignItems: "center",
        }}>Home Component</h2>
      </div>
      {/* <Suspense fallback={<div>Loading.....</div>}>
<LazyComponent/>
</Suspense> */}
    </div>
  );
}

export default Home;

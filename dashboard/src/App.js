import "./App.css";

import React from "react";
import AppHeader from "./Component/AppHeader";
import SideMenu from "./Component/SideMenu";
import PageContent from "./Component/PageContent";
import AppFooter from "./Component/AppFooter";

function App() {
  return (
    <div className="App">
      <AppHeader />

      <SideMenu></SideMenu>
      <PageContent> </PageContent>

      <AppFooter />
    </div>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./css/index.css";

// Import components
import { AppHeader } from "./components/AppHeader";
import { AppFooter } from "./components/AppFooter";
import { AppPostList } from "./components/AppPostList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="WebPage">
        <AppHeader />
        <main className="vh100-header-footer flex items-center justify-center ">
          <AppPostList></AppPostList>
        </main>
        <AppFooter />
      </div>
    </>
  );
}

export default App;

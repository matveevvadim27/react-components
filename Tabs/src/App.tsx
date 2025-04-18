import { useState } from "react";
import "./App.css";

const tabsData = [
  { tab: "Description", content: "Description Content" },
  { tab: "Reviews", content: "Reviews Content" },
  { tab: "Characteristics", content: "Characteristics Content" },
];

function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs">
      <div className="tabs__btns">
        {tabsData.map((item, index) => (
          <button
            key={index}
            className={"tabs__btn"}
            onClick={() => setActiveTab(index)}
          >
            {item.tab}
          </button>
        ))}
      </div>
      <div className="tabs__content">{tabsData[activeTab].content}</div>
    </div>
  );
}

export default App;

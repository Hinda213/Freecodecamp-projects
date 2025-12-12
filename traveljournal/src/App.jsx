import Header from "./components/Header";
import "./App.css";
import Entry from "./components/Entry";
import data from "./data.js";

function App() {
  const EntryEelement = data.map((entry) => {
    return (
      <Entry
        key={entry.id}
        title={entry.title}
        location={entry.location}
        googleMapsUrl={entry.googleMapsUrl}
        startDate={entry.startDate}
        endDate={entry.endDate}
        description={entry.description}
       imageUrl={entry.imageUrl}
        marker={entry.marker}
      />
    );
  });
  return (
    <>
      <Header />
      {EntryEelement}
    </>
  );
}

export default App;

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SectionHome from "./components/SectionHome";
import SectionPoster from "./components/SectionPoster";
import SectionPost from "./components/SectionPost";
import SectionMap from "./components/SectionMap";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <div className="container">
        <SectionHome />
        <SectionPoster />
        <SectionPost />
        <SectionMap />
      </div>
    </>
  );
}

export default App;

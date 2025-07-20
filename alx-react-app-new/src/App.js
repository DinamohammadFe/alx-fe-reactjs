import Header from "./components/Header";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile
        name="John Doe"
        age={30}
        bio="Loves traveling and exploring new cultures."
      />
      <Footer />
    </div>
  );
}

export default App;

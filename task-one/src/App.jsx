import Header from "./components/Header";
import VenueCard from "./components/VenueCard";
import EventPresentation from "./components/EventPresentation";
import AdditionalDetails from "./components/AdditionalDetails";
import Reviews from "./components/Reviews";
import VenueCarousel from "./components/VenueCarousel";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-hidden " >
      <Header />
      <div className="px-4 py-8 mx-40">
        <VenueCard />
        <EventPresentation />
        <AdditionalDetails />
        <Reviews />
        <VenueCarousel />
        <FAQs />
      </div>
      <Footer />
    </div>
  );
}

export default App;

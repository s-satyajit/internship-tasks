import Header from "./components/Header";
import VenueCard from "./components/VenueCard";
// import EventAreasList from "./components/EventAreasList";
// import YouMayAlsoLike from "./components/YouMayAlsoLike";
// import ServicesOffered from "./components/ServicesOffered";
// import Album from "./components/Album";
import EventPresentation from "./components/EventPresentation";
import AdditionalDetails from "./components/AdditionalDetails";
import Reviews from "./components/Reviews";
import VenueCarousel from "./components/VenueCarousel";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";

function App() {
  return (
    <div >
      <Header />
      <VenueCard />
      {/* <EventAreasList />
      <YouMayAlsoLike />
      <ServicesOffered />
      <Album /> */}
      <EventPresentation />
      <AdditionalDetails />
      <Reviews />
      <VenueCarousel />
      <FAQs />
      <Footer />
    </div>
  );
}

export default App;

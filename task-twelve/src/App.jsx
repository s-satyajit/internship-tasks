import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import PrivacyPolicy from "./components/PrivacyPolicy"
import TermsAndConditions from "./components/TermsAndConditions"
import Home from "./Pages/Home"

function App() {

  return (
    (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/tnc" element={<TermsAndConditions />}/>
        </Routes>
      </Router>
    )
  )
}

export default App

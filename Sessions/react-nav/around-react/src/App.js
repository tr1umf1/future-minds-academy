import "./css/fma-general.css" 
import "./css/fma-responsive.css"
import "./css/homeStyle.css"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Stats from "./components/Stats"
import Services from "./components/Servises"
import Industries from "./components/Industries"
import Clients from "./components/Clients"
import Leader from "./components/Leader"
import Testimonials from "./components/Testimonials"
import Studies from "./components/Studies"
import Bussines from "./components/Bussines"
import Footer from "./components/Footer"
function App() {
  return (
    <div className="App">
      <Nav
      active = "active"
      />
      <Hero
      title="The effective solutions for your business"
      subtitle="We are a team who creates marketing strategies for B2B and B2C companies"
      />
      <Stats
      happy="540"
      completed="1240"
      ftspecial="30+"
      awardsWon="15"
      />
      <Services
      advertising="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia
      consequat duis enim velit mollit."
      marketing="Find aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
      nulla pariatur neque congue."
      web="Hac erat leo proin odio est sed sit felis facilisi integer sed congue neque turpis
      dictumst sit sed volutpat aliquet tortor non."
      email="Adipiscing posuere dui, amet, augue nisl dictum justo, enim. Sed neque congue non quam
      ultrices interdum vitae vestibulum."
      working="Molestie enim tempus egestas a at enim. Velit hendrerit nibh eget porta pretium. Ipsum
      orci habitasse eget malesuada platea."
      bussines="Massa donec quam orci feugiat. Quis iaculis facilisi ornare aenean lorem enim purus in
      lacus in ullamcorper diam consequat."
      />
      <Industries
      services="Services"
      retail="Retail"
      tech="Technology"
      />
      <Clients
      subtitle="More than 2,000 clients using Around to analyze data"
      />
      <Leader
      name="Nicolas Black"
      problem="Formulation of the problem"
      state="Assessment of the current state"
      bussines="Business plan creation"
      strategy="Strategy implementation"
      />
      <Testimonials
      assistant="Jane Cooper"
      president="Wade Warren"
      ceo="Esther Howard"
      coordinator="Cameron Williamson"
      ceoo="Leslie Alexander"
      designer="Brooklyn Simmons"
      />
      <Studies
      study="Recent Case Studies"
      robotic="Robotics & artificial intelligence"
      toothbrush="Toothbrush from natural eco materials"
      />
      <Bussines
      desc="Massa velitienes semper faucibus tristique id nibh elementum, id eu
      aliquamd diam mi
      tempus at
      laciniarty scelerisques augue at morbi. Arcu sit orcirs, risus mattissit laoreet"
      />
      <Footer
      services="services"
      industries="industries"
      reviews="reviews"
      studies="studies"
      policy="Privacy policy"
      center="Help Center"
      insta="Instagram"
      fb="Facebook"
      linkedin="linkedin"
      />
    </div>
  );
}

export default App;

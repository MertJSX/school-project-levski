import "./home.scss";
import "./homeMobile.scss"
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <div>
      <div className="homePage">
        <div className="bg-img"></div>
        <Navbar />
        <div className="flex">
          <div>
            <h1>Васил Левски</h1>
            <h2>Научете повече за този голям герой на България!</h2>
          </div>

          <img
            src="/images/vasil4.png"
            alt="vasillevski"
            className="home-img"
          />
        </div>
      </div>
      <div className="homePage-m">
        <div className="bg-img"></div>
        <Navbar />
        <div className="flex">
          <div>
            <h1>Васил Левски</h1>
            <h2>Научете повече за този голям герой на България!</h2>
          </div>

          <img
            src="/images/vasil4.png"
            alt="vasillevski"
            className="home-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

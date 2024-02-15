import "./dev.scss";
import Navbar from "../../components/navbar/Navbar";

const Dev = () => {
  return (
    <div className="devPage">
      <div className="bg-img"></div>
      <Navbar />
      <div className="content">
        <h1>За сайта</h1>
        <h2>
          Сайтът е направен от Мерт Сами. Използваните технологии са HTML, CSS,
          JavaScript, NodeJS, ReactJS, ReactRouterDOM и Sass. Използван е
          изкуствен интелект за подновяването на някои снимки.{" "}
        </h2>
      </div>
    </div>
  );
};

export default Dev;

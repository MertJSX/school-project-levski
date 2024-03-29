import "./about.scss";
import "./aboutMobile.scss";
import Navbar from "../../components/navbar/Navbar";

const About = () => {
  return (
    <div>
      <div className="aboutPage">
        <div className="bg-img"></div>
        <Navbar />
        <img src="/images/vasil3.png" alt="" className="about-img" />
        <div className="content">
          <h1>Кой е Левски?</h1>
          <h2>
            Васил Иванов Кунчев, известен като Васил Левски, е български
            национален герой. Той е идеолог и организатор на българската
            национална революция, основател на Вътрешната революционна
            организация (ВРО). Известен е и като Апостола на свободата, заради
            организирането и разработването на революционна мрежа за
            освобождаване на България от османско владичество. Пътува по
            страната и създава частни революционни комитети, които да подготвят
            обща революция. Неговата мечта е чиста и свята република, в която
            всички да имат равни права, независимо от своята народност и
            вероизповедание.
          </h2>
        </div>
      </div>
      <div className="aboutPage-m">
        <div className="bg-img"></div>
        <Navbar />
        <img src="/images/vasil3.png" alt="" className="about-img" />
        <div className="content">
          <h1>Кой е Левски?</h1>
          <h2>
            Васил Иванов Кунчев, известен като Васил Левски, е български
            национален герой. Той е идеолог и организатор на българската
            национална революция, основател на Вътрешната революционна
            организация (ВРО). Известен е и като Апостола на свободата, заради
            организирането и разработването на революционна мрежа за
            освобождаване на България от османско владичество. Пътува по
            страната и създава частни революционни комитети, които да подготвят
            обща революция. Неговата мечта е чиста и свята република, в която
            всички да имат равни права, независимо от своята народност и
            вероизповедание.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;

import Header from "../../components/Header";
import { Button } from "react-bootstrap";
import "../Home/Home.css";
import Img from '../../assets/images/1.png'
import Footer from "../../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <div className="cf d-flex align-items-center justify-content-center">
        <div className="justify-content-center align-items-center d-flex flex-column ">
          <h3 className="text-center fw-light">
            A Web3 Social and Storage Network for Wine<br></br>
            and Spirit Enthusiast, Collections and<br></br>
            Investors
          </h3>
          <br></br>
          <Button className="btn btn-dark text-uppercase">Founders Club</Button>
          <br></br>
          <p>
            Why should all wine and spirits come with an NFT, you ask?
            <a href="/" className="primary">
              Learn Here.
            </a>
          </p>
        </div>
      </div>

      <div className="container-fluid cf-1">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-4 my-5">
            <h1 className="d-flex justify-content-center align-items-center">
              Bottleheads<br></br>
              Loop
            </h1>
          </div>
          <div className="col-lg-8 my-5">
            <h4 className="d-flex justify-content-center align-items-center">
              A community that celebrates and invests in emerging<br></br>
              winemakers & distillers.<br></br>
              <br></br>
              We connect, collaborate and collect asset-backed<br></br>
              NFTs at the intersection of rare wine and crypto.<br></br>
              <br></br>
              And hell yes....we drink their juice together
            </h4>
          </div>
        </div>
      </div>
      <div className="container-fluid cf-2 d-flex align-items-center justify-content-center">
        <div className="justify-content-center align-items-center d-flex flex-column ">
          <h1 className="text-center">
          How it Works
          </h1><br></br>
          <img src={Img} alt=""/>
        </div>
      </div>

      <div className="cf-3 d-flex align-items-center justify-content-center">
        <div className="justify-content-center align-items-center d-flex flex-column ">
          <h1>
          Our Founding Artisians<br></br><br></br>
          Edit of Don<br></br>
          Video
          </h1><br></br><br></br><br></br><br></br>
          <h4>
            Introducing Founders Club
          </h4><br></br><br></br>
          <h3>
            Short Paragraph Description
          </h3><br></br><br></br><br></br><br></br><br></br>
          <Button className="btn btn-dark">
            Founders Club Invite
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;

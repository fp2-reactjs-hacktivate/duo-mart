import Header from "../../components/Header";
import SectionHeader from "../../components/SectionHeader";
import "./styles.css";

const About = () => {
  return (
    <>
      <Header />
      <div className="container">
        <SectionHeader title="About" />
        <h3>Duo Mart</h3>
        <ul>
          <li>
            Duo Mart is an e-commerce platform that offers a wide range of
            high-quality products to meet everyday consumer needs. Committed to
            providing a satisfying online shopping experience, Duo Mart presents
            various product categories including clothing, electronics,
            household appliances, and beauty essentials.
          </li>
          <li>
            The main strength of Duo Mart lies in the carefully curated
            selection of products. Our curation team works diligently to ensure
            that every item available on this platform meets high-quality
            standards. Customers can confidently choose from a variety of
            leading brands or discover unique products from locally sourced
            manufacturers that have been carefully selected.
          </li>
          <li>
            Moreover, Duo Mart provides an easy and convenient shopping
            experience. The user-friendly interface allows customers to quickly
            browse product categories, search for desired items, and complete
            purchases with just a few clicks. Additionally, the secure and
            efficient payment system ensures smooth transactions without any
            concerns about the safety of personal information.
          </li>
          <li>
            Duo Mart also pays special attention to customer service. Our
            customer support team is ready to assist with any questions or
            issues that may arise during the shopping process. We believe that
            customer satisfaction is the key to our success, and we are
            committed to providing the best service at all times.
          </li>
          <li>
            With a vision to become a trusted online shopping destination, Duo
            Mart continues to innovate and expand its reach to meet the needs of
            modern consumers. We invite you to join in the satisfying shopping
            experience at Duo Mart, where quality, convenience, and top-notch
            service are our top priorities.
          </li>
        </ul>
      </div>
      <div className="col-8 mx-auto">
        <h3>Our Team</h3>
        <div className="position-relative" style={{ marginTop: "100px" }}>
          <img src="/images/Bima.jpg" className="home-photo" alt="photo" />
          <div className="home-photo__line"></div>
        </div>
      </div>
      <div className="col-8 mx-auto" style={{ marginTop: "50px" }}>
        <h1
          style={{
            color: "#0f172a",
            fontSize: "38px",
            marginBottom: "18px",
          }}
        >
          Halo saya Arya Bhima Andika dari Universitas Mulawarman
        </h1>
        <a
          href="https://github.com/bimajr"
          target="_blank"
          rel="noreferrer"
          className="icon-social-media"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-github"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
      </div>
      <div className="col-8 mx-auto">
        <div className="position-relative" style={{ marginTop: "100px" }}>
          <img src="/images/Rafly.jpeg" className="home-photo" alt="photo" />
          <div className="home-photo__line"></div>
        </div>
      </div>
      <div className="col-8 mx-auto" style={{ marginTop: "50px" }}>
        <h1
          style={{
            color: "#0f172a",
            fontSize: "38px",
            marginBottom: "18px",
          }}
        >
          Halo saya Muhammad Rafly Chairullah dari Universitas Diponegoro
        </h1>
        <a
          href="https://github.com/raflymuhammad092"
          target="_blank"
          rel="noreferrer"
          className="icon-social-media"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-github"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
      </div>
      <div className="col-8 mx-auto">
        <div className="position-relative" style={{ marginTop: "100px" }}>
          <img src="/images/Ulul.jpg" className="home-photo" alt="photo" />
          <div className="home-photo__line"></div>
        </div>
      </div>
      <div className="col-8 mx-auto" style={{ marginTop: "50px" }}>
        <h1
          style={{
            color: "#0f172a",
            fontSize: "38px",
            marginBottom: "18px",
          }}
        >
          Halo saya Muhammad Ulul Albab dari Universitas Muria Kudus
        </h1>
        <a
          href="https://github.com/Tigerveer32"
          target="_blank"
          rel="noreferrer"
          className="icon-social-media"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-github"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
      </div>
    </>
  );
};

export default About;

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
    </>
  );
};

export default About;

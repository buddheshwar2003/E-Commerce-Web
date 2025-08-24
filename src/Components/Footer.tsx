import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="flex justify-center items-center">
      <section className="flex justify-between items-start py-16 max-container w-full">
        <Link to={'/'}>
          <h2 className="text-4xl font-bold tracking-wide">
            ALLx<span className="text-blue-500">MART</span>
          </h2>
          <p className="text-xs font-semibold text-gray-500 tracking-widest">
            AAPKA APNA MART
          </p>
        </Link>
        <div>
          <h2 className="text-blue-500 font-semibold text-lg mb-4">Sale</h2>
          <ul className="space-y-3">
            <li>
              <a href="#">Discounts</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Register Discounts</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-blue-500 font-semibold text-lg mb-4">About Us</h2>
          <ul className="space-y-3">
            <li>
              <a href="#">About ALLxMART</a>
            </li>
            <li>
              <a href="#">Work With Us</a>
            </li>
            <li>
              <a href="#">Company Profile</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-blue-500 font-semibold text-lg mb-4">Buying</h2>
          <ul className="space-y-3">
            <li>
              <a href="#">ALLxMART Loyality Card</a>
            </li>
            <li>
              <a href="#">Term and Use</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Complaints</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-blue-500 font-semibold text-lg mb-4">Support</h2>
          <ul className="space-y-3">
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">How to Buy at ALLxMART</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Footer;

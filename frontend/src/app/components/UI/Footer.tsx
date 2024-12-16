import { FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-4">
        {/* Footer content */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
          {/* Useful Links */}
          <div className="mb-8 lg:mb-0">
            <h3 className="font-semibold mb-4">Useful links</h3>
            <ul>
              <li><a href="#" className="hover:underline">Payment methods</a></li>
              <li><a href="#" className="hover:underline">Privacy policy</a></li>
              <li><a href="#" className="hover:underline">Return policy</a></li>
              <li><a href="#" className="hover:underline">Gift cards</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="mb-8 lg:mb-0">
            <h3 className="font-semibold mb-4">Contact</h3>
            <p>Email: <a href="mailto:contact@gorbachev.shop" className="hover:underline">contact@gorbachev.shop</a></p>
            <p>Phone: <a href="tel:+421950433493" className="hover:underline">+421950433493</a></p>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold mb-4">Follow us</h3>
            <div className="flex space-x-4 text-xl">
              <a href="#">
                <FaYoutube />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Disclaimer */}
        <div className="mt-8 mb-16 text-center text-xs">
          <p>
            gorbachev.shop | Chief Galactic Officer Gorbachev. Company UNP: 123456789, 
            registered on the moon. Date of registration certificate issuance: 01.01.2020 
            by the Lunar Executive Committee. Registered in the Interstellar Trade Register under number: 
            987654321 in New Moscow. Registration date: 12.12.2024. Online store operating hours: 24/7. 
            Support available daily from 00:00 to 24:00. Address: Milky Way Galaxy, Sector 7G, Luna Base, Astro Street, 42.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

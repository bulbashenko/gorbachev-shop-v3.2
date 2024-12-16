const Footer = () => {
    return (
      <footer className="py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Useful Links */}
          <div>
            <h3 className="font-semibold mb-4">Useful links</h3>
            <ul>
              <li><a href="#" className="hover:underline">Payment methods</a></li>
              <li><a href="#" className="hover:underline">Privacy policy</a></li>
              <li><a href="#" className="hover:underline">Return policy</a></li>
              <li><a href="#" className="hover:underline">Gift cards</a></li>
            </ul>
          </div>
  
          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p>Email: <a href="mailto:contact@gorbachev.shop" className="hover:underline">contact@gorbachev.shop</a></p>
            <p>Phone: <a href="tel:+421950433493" className="hover:underline">+421950433493</a></p>
          </div>
  
          {/* Follow Us */}
          <div>
            <h3 className="font-semibold mb-4">Follow us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:underline">YouTube</a>
              <a href="#" className="hover:underline">Instagram</a>
              <a href="#" className="hover:underline">TikTok</a>
            </div>
          </div>
        </div>
  
        <div className="container mx-auto px-4">
        <div className="text-xs mt-8">
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
  
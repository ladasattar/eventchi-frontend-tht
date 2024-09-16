const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-8">
      <div className="container mx-auto flex flex-col sm:flex-row gap-10 sm:gap-0 justify-between items-center">
        <div className="flex items-center">
          <p>
            UI Design from{" "}
            <a
              href="https://dribbble.com/shots/7943978-Event-Landing-Page"
              target="_blank"
              rel="noreferrer"
              className="text-primary font-semibold"
            >
              Dribbble
            </a>
          </p>
        </div>
        <div className="flex items-center">
          <div className="flex space-x-4 text-white text-opacity-70">
            <a href="#" className="text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-sm">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


export default function Footer() {
  return (
    <footer className="bg-green-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center font-bold">
          <div className="flex flex-wrap justify-center items-center space-x-4 md:space-x-8">
            <a
              href="#"
              className="text-white"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-white"
            >
              Menu
            </a>
            <a
              href="#"
              className="text-white"
            >
              Store Locator
            </a>
            <a
              href="#"
              className="text-white"
            >
              Careers
            </a>
            <a
              href="#"
              className="text-white"
            >
              Contact Us
            </a>
          </div>
          <div className="mt-4 md:mt-0">
            <a
              href="#"
              className="text-white"
            >
              Privacy Policy
            </a>
          </div>
        </div>
        <hr className="my-6 border-white" />
        <p className="text-center text-gray-300 text-sm">
          © {new Date().getFullYear()} Challenge 1 hase 3. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

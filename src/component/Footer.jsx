import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="bg-white m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-4">
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-gray-500 text-center">
            © {new Date().getFullYear()}{" "}
            <Link to="/">
              <span className="hover:underline">Parties</span>
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

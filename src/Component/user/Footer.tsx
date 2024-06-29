const Footer = () => {
  return (
    <div>
      {" "}
      <footer className=" text-black py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold">
              <a href="/">BrandLogo</a>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="/" className="hover:text-gray-400">
                Home
              </a>
              <a href="/about" className="hover:text-gray-400">
                About
              </a>
              <a href="/services" className="hover:text-gray-400">
                Services
              </a>
              <a href="/contact" className="hover:text-gray-400">
                Contact
              </a>
            </div>
          </div>
          <div className="flex justify-between items-center mt-6 border-t border-gray-700 pt-6">
            <p className="text-gray-400">
              &copy; 2024 BrandLogo. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 2.236c-.806.36-1.675.603-2.587.712a4.41 4.41 0 0 0 1.93-2.422 8.789 8.789 0 0 1-2.793 1.065 4.405 4.405 0 0 0-7.498 4.015c-3.67-.18-6.92-1.944-9.09-4.62a4.413 4.413 0 0 0-.598 2.215 4.405 4.405 0 0 0 1.957 3.666 4.372 4.372 0 0 1-1.996-.55v.056a4.404 4.404 0 0 0 3.536 4.314 4.404 4.404 0 0 1-1.991.075 4.405 4.405 0 0 0 4.111 3.06 8.84 8.84 0 0 1-5.465 1.884A8.824 8.824 0 0 1 2 19.751a12.47 12.47 0 0 0 6.748 1.977c8.097 0 12.532-6.707 12.532-12.529 0-.19-.005-.38-.014-.57a8.97 8.97 0 0 0 2.204-2.286l-.047-.02z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-gray-400">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.04c-5.49 0-9.96 4.47-9.96 9.96 0 5.49 4.47 9.96 9.96 9.96 5.49 0 9.96-4.47 9.96-9.96 0-5.49-4.47-9.96-9.96-9.96zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.95-13.05c-.34-.86-1.25-1.39-2.11-1.05-.87.34-1.39 1.25-1.05 2.11.34.86 1.25 1.39 2.11 1.05.86-.34 1.39-1.25 1.05-2.11zm-3.61 4.24c-2.21-.92-4.66-.92-6.87 0-.62.26-.89.97-.64 1.58.26.61.97.88 1.58.64 1.79-.75 3.77-.75 5.56 0 .62.26 1.32-.03 1.58-.64.25-.61-.02-1.32-.64-1.58zm.11-4.24c-.34-.86-1.25-1.39-2.11-1.05-.86.34-1.39 1.25-1.05 2.11.34.86 1.25 1.39 2.11 1.05.86-.34 1.39-1.25 1.05-2.11z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-gray-400">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.636 8.098h1.813v-2.755c-.312-.042-.952-.11-1.899-.11-1.876 0-3.163 1.142-3.163 3.243v1.799h-2.123v2.571h2.123v6.77h2.649v-6.77h2.016l.32-2.571h-2.336v-1.383c0-.743.198-1.247 1.234-1.247z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

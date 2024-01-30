function Footer() {
  const getCurrentYear = new Date().getFullYear();
  return (
    <footer className="bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {getCurrentYear} Himanshu Jain
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a
            href="https://linkedin.com/in/hjain64"
            className="hover:underline me-4 md:me-6"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/hjain64"
            className="hover:underline me-4 md:me-6"
          >
            Github
          </a>
        </li>
        <li>
          <a href="mailto:jainmanshu@gmail.com" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

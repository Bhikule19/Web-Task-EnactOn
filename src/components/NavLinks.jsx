const NavLinks = () => {
  return (
    <nav className="flex flex-col justify-center space-y-2">
      <a
        href="/#"
        className="py-2 text-white hover:text-accent active:text-accent uppercase text-xl"
      >
        Home
      </a>
      <a
        href="/#"
        className="py-2 text-white hover:text-accent active:text-accent uppercase text-xl"
      >
        Products
      </a>
      <a
        href="/#"
        className="py-2 text-white hover:text-accent active:text-accent uppercase text-xl"
      >
        Meet Chef Matt
      </a>
      <a
        href="/#"
        className="py-2 text-white hover:text-accent active:text-accent uppercase text-xl"
      >
        FAQ
      </a>
      <a
        href="/#"
        className="py-2 text-white hover:text-accent active:text-accent uppercase"
      >
        Connect with Us
      </a>
    </nav>
  );
};

export default NavLinks;

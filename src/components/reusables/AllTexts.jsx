 export const Text = ({ children, type, href, className }) => {
  switch (type) {
    case "h1":
      return <h1 className={`text-5xl xs:text-3xl text-t1 font-medium ${className}`}>{children}</h1>;
    case "h2":
      return <h2 className={`text-3xl xs:text-2xl text-t1 font-medium ${className}`}>{children}</h2>;
    case "h3":
      return <h3 className={`text-2xl xs:text-xl text-t1 font-medium ${className}`}>{children}</h3>;
    case "h4":
      return <h4>{children}</h4>;
    case "h5":
      return <h5>{children}</h5>;
    case "h6":
      return <h6>{children}</h6>;
    case "a":
      return <a href={href}>{children}</a>;
    case "sm":
      return <p className={`text-sm text-t1 ${className}`}>{children}</p>;
    case "xs":
      return <p className={`text-xs text-t1 ${className}`}>{children}</p>;

    default:
      return <p className={`text-t1 ${className}`}>{children}</p>;
  }

  
};




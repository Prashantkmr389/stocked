import { List } from "@phosphor-icons/react";

const Header = ({open, setOpen}) => {
    const handleClick = ()=>{
        setOpen(!open)
    }
  return (
    <header className="w-full bg-gray-800 p-4 flex items-center justify-between">
      {/* Menu Bar (Left Side) */}
      <List size = {32} className="cursor-pointer" onClick={handleClick} />
      

      {/* Profile Picture (Right Side) */}
      <div className="flex items-center">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;

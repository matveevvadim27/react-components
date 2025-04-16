import "./DropDown.css";
import { useState, useRef, useEffect } from "react";

export default function DropDown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="dropdown__btn" onClick={toggleDropdown}>
        Open a menu
      </button>
      {isOpen && (
        <div className="dropdown__menu">
          <a href="#" className="dropdown__link">
            First link
          </a>
          <a href="#" className="dropdown__link">
            Second link
          </a>
          <a href="#" className="dropdown__link">
            Third link
          </a>
          <a href="#" className="dropdown__link">
            Fourth link
          </a>
          <a href="#" className="dropdown__link">
            Fifth link
          </a>
        </div>
      )}
    </div>
  );
}

import {headerLogo} from "../assets/images/index.js";
import {hamburger} from "../assets/icons/index.js";
import {navLinks} from "../constants"; 


const Nav = () => {
  return (
    // Going to write this in header tag, because
    // it is more semantic
    <header className="padding-x py-8 absolute z-10 w-full">
      
      <nav className="flex justify-between max-container items-center">
        
        <a href = "/">
          <img 
          src = {headerLogo} 
          alt = "logo"
          width={130}
          height={29}
          /> 
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {/* immediately returning the arrow function, thats why we using parenthesis */}
          {navLinks.map((item) => (
            <li key={item.label}>
            <a
              className="font-montserrat leading-normal text-lg text-slate-gray"
              href={item.href}
            >
              {item.label}
            </a>
          </li>
          ))}
        </ul>
        
        <div className="hidden max-lg:block">
          <img 
            src = {hamburger}
            alt = "Line Menu"
            width = {25}
            height = {25}
          />
        </div>
      </nav>
    </header>
  )
}

export default Nav 
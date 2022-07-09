import { ReactNode } from 'react';

type link = ReactNode | string;

type props = {
  className?: string,
  links: link[],
  children?: ReactNode[] | ReactNode,
};

export default function Navbar({className = "navbar", links, children}: props) {
  return (
    <header className={`${className}`}>
      <nav>
        <ul className="nav-links">
          {links.map((link, index: number) => {
             return (
              <li key={index} className="nav-link fs-3">
                <a className="text-primary" href={link[1]}>{link[0]}</a>
              </li>
            )
          })}
        </ul>
      </nav>
      {children}
    </header>
  );
}





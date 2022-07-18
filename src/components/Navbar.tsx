import { ReactNode } from 'react';

type link = {comp: ReactNode, link: string};

type props = {
  className?: string,
  links: link[],
  children?: ReactNode[] | ReactNode,
  active?: string,
};

export default function Navbar({className = "navbar", active, links, children}: props) {
  return (
    <header className={`${className}`}>
      <nav>
        <ul className="nav-links">
          {links.map(({comp, link}: link, index: number) => {
             return (
              <li key={index} className="nav-link fs-3">
                <a className={`text-primary ${active === link ? 'active' : '' }`} href={'#' + link}>{comp}</a>
              </li>
            )
          })}
        </ul>
      </nav>
      {children}
    </header>
  );
}


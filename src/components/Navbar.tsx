import { ReactNode } from 'react';
import { Tooltip } from 'react-tooltip';

type link = { comp: ReactNode, link: string, name: string, tip: string, content: string };

type props = {
  className?: string,
  links: link[],
  children?: ReactNode[] | ReactNode,
  active?: string,
  place: string,
  blank?: boolean,
};

export default function Navbar({ className = "navbar", active, links, children, place, blank = false }: props) {
  return (
    <>
      <header className={`${className}`}>
        <nav>
          <ul className="nav-links">
            {links.map(({ comp, link, name, content }: link, index: number) => {
              return (
                <li key={index} className="nav-link fs-3">
                  <a id={name} className={`text-primary ${active === link ? 'active' : ''}`} href={link} target={blank ? '_blank' : ''} rel='noreferrer'>{comp} <span className='visually-hidden'>{content}</span></a>
                </li>
              )
            })}
          </ul>
        </nav>
        {children}
      </header>
      {links.map(({ name, tip }: link) => (
        <Tooltip
          anchorId={name}
          place={place === 'left' ? 'right' : 'left'}
          content={tip}
          className="z-9000"
          delayShow={500}
        />
      ))}
    </>
  );
}


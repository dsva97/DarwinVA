import { Link } from "../../../";

const LinkItem = ({ text, href, hash }) => {
  href = href || "/" + text.toLowerCase();
  hash = hash || "/#" + href.split("/")[1];
  return (
    <li>
      <Link href={href} data-hash={hash} data-href={href} class="blue">
        {text}
      </Link>
    </li>
  );
};

export const Menu = () => {
  return (
    <>
      <button id="btn-menu" className="blue" aria-label="Toogle Menu"></button>
      <nav id="nav-menu">
        <ul>
          <LinkItem text="Servicios" />
          <LinkItem text="Portafolio" />
          <LinkItem text="Contacto" />
        </ul>
      </nav>
    </>
  );
};

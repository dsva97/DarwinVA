import { Menu } from "./Menu";
import { Link } from '../../'

const Logo = () => 
<Link class="blue" href="/" data-hash="/#home" data-href="/">
    DarwinVA
</Link>

export const Header = () => (
    <header id="header" className="blue">
        <Logo />
        <Menu />
    </header>
);
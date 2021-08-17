import { Presentation } from './Presentation'
import { Services } from './Services'
import { Features } from './Features'
import { Portfolio } from './Portfolio'
import { Companies } from './Companies'
import { Contact } from './Contact'

import './script.js'
import './style.css'

export const IndexView = () => 
<div id="IndexView">
    <Presentation />
    <Services />
    <Features />
    <Portfolio />
    <Companies />
    <Contact />
</div>

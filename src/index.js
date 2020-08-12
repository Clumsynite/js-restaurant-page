import {Heading as title} from './heading.js'

import {tabs} from './tabs.js'

import {content_handler} from './tab-content.js'

title()
tabs()
content_handler()
document.querySelector('#home-tab').click();


import "./css/styles.css";

import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";

import "./js/components/components.js";
import "./js/components/app-bar.js";
import "./js/components/jumbotron.js";
import "./js/components/notes-collect.js";

import "./js/api-src/api.js";

gsap.registerPlugin(CSSPlugin);
import page from "../schemas/page";
import service from "../schemas/service";
import industry from "../schemas/industry";
import settings from "../schemas/settings";
import seo from "../schemas/seo";
import footer from "../schemas/footer";

import background from "../schemas/background";
import rowSection from "../schemas/sections/rowSection";
import heroSection from "../schemas/sections/heroSection";
import textSection from "../schemas/sections/textSection";
import imageSection from "../schemas/sections/imageSection";
import industriesSection from "../schemas/sections/industriesSection";
import servicesSection from "../schemas/sections/servicesSection";

import innerRow from "../schemas/sections/elements/innerRow";
import innerChildRow from "../schemas/sections/elements/innerChildRow";
import container from "../schemas/sections/elements/container";
import textElement from "../schemas/sections/elements/textElement";
import linkElement from "../schemas/sections/elements/linkElement";
import imageElement from "../schemas/sections/elements/imageElement";
import videoElement from "../schemas/sections/elements/videoElement";
import htmlElement from "../schemas/sections/elements/htmlElement";
import textWithImageElement from "../schemas/sections/elements/textWithImageElement";
import servicesElement from "../schemas/sections/elements/servicesElement";
import industriesElement from "../schemas/sections/elements/industriesElement";

export const schemaTypes = [page, service, industry, settings, seo, footer, heroSection, textSection, imageSection, servicesSection, industriesSection, background, rowSection, innerRow, innerChildRow, container, textElement, linkElement, imageElement, videoElement, htmlElement, textWithImageElement, servicesElement, industriesElement];
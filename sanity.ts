import { createClient, type ClientConfig } from '@sanity/client';
import 'dotenv/config';

const config: ClientConfig = {
  projectId: `zg5gx8g4`,
  dataset: `production`,
  useCdn: false,
  token: process.env.SANITY_TOKEN,
  apiVersion: `2024-01-29`,
};

const sanityClient = createClient(config);

const PARENT_DOMAIN = 'https://cartesi.io';

const queryInfobar = `
*[_type == "infobar"][0]{
  badge,
  name,
  url,
  enabled
}
`;

const queryNavigation = `
    *[_type == "headerNavigation"] {
      navLinks[]->{
        _id,
        label,
        link,
        isExternal,
        children[]->{
          _id,
          label,
          link,
          isExternal
        }
      },
      cta->{
        _id,
        label,
        link,
        isExternal
      }
    }
  `;

const queryFooter = `
    {
    "newsletter": *[_type == "newsletter"][0] {
      description,
      buttonLabel
    },
    "copyright": *[_type == "footer"][0].copyright,
    "navItems": *[_type == "footerNav"][0]{
      "navPanel1": navPanel1[]->{
        _id,
        isExternal,
        label,
        path,
        attachment,
        "attachmentUrl": attachment.asset->url,
      },
      "navPanel2": navPanel2[]->{
        _id,
        isExternal,
        label,
        path,
        attachment,
        "attachmentUrl": attachment.asset->url,
      },
      "navPanel3": navPanel3[]->{
        _id,
        isExternal,
        label,
        path,
        icon,
        "iconUrl": icon.asset->url,
      },
      "navPanel4": navPanel4[]->{
        _id,
        isExternal,
        label,
        path,
        icon,
        "iconUrl": icon.asset->url,
      }
    }
  }
  `;

const queryStartBuilding = `
  *[_type == "homePage"][0] {
    startBuilding->{
      badge,
      title,
      buildingSteps[]{
        title,
        content,
        number,
        "imageUrl": image.asset->url,
        cta->{
          label,
          link,
          isExternal
        }
      },
    }
  }
`;

const getInfobar = async () => {
  const infobarResponse = await sanityClient.fetch(queryInfobar);
  if (infobarResponse.url.startsWith('/')) {
    infobarResponse.url = `${PARENT_DOMAIN}${infobarResponse.url}`;
  }

  infobarResponse.text = infobarResponse.name;

  return infobarResponse;
};

const getNavigation = async () => {
  const navigationResponse = await sanityClient.fetch(queryNavigation);

  const navigationMap = navigationResponse[0].navLinks.map(navLink => {
    return {
      ...navLink,
      link: navLink.isExternal
        ? navLink.link
        : `${PARENT_DOMAIN}${navLink.link}`,
      children: navLink.children.map(child => {
        return {
          ...child,
          link: child.isExternal ? child.link : `${PARENT_DOMAIN}${child.link}`,
        };
      }),
    };
  });

  const cta = navigationResponse[0].cta
    ? navigationResponse[0].cta.map(item => {
        return {
          ...item,
          link: item.isExternal ? item.link : `${PARENT_DOMAIN}${item.link}`,
        };
      })
    : null;

  return {
    navLinks: navigationMap,
    cta,
  };
};

const getFooter = async () => {
  const footerResponse = await sanityClient.fetch(queryFooter);
  const footerNavItems = footerResponse.navItems;
  Object.keys(footerNavItems).forEach(key => {
    footerNavItems[key] = footerNavItems[key].map(item => {
      return {
        ...item,
        path: item.isExternal ? item.path : `${PARENT_DOMAIN}${item.path}`,
      };
    });
  });

  footerResponse.navItems = footerNavItems;

  return footerResponse;
};

const getStartBuilding = async () => {
  const startBuildingResponse = await sanityClient.fetch(queryStartBuilding);
  const startBuilding = startBuildingResponse.startBuilding;

  startBuilding.buildingSteps = startBuilding.buildingSteps.map(step => {
    return {
      ...step,
      cta: {
        ...step.cta,
        link: step.cta.isExternal
          ? step.cta.link
          : `${PARENT_DOMAIN}${step.cta.link}`,
      },
    };
  });

  return startBuilding;
};

export const fetchSanityContent = async () => {
  const infobar = await getInfobar();
  const navigation = await getNavigation();
  const footer = await getFooter();
  const startBuilding = await getStartBuilding();

  return {
    infobar,
    navigation,
    footer,
    startBuilding,
  };
};

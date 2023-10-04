export type CTA = {
  label: string;
  link: string;
  isExternal: boolean;
};
export type NavLink = {
  path: string;
  link: string;
  label: string;
  isExternal: boolean;
  isDesktop?: boolean;
  Children?: CTA[];
};

export type InfoBarType = {
  enabled: boolean;
  badge?: string;
  text: string;
  url?: string;
};

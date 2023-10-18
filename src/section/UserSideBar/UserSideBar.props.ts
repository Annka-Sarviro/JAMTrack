export type dataProps = {
  buttons: {
    logout: LogoutProps;
    menuToggle: menuToggleProps;
    settings: settingsProps[];
    nav: NavProps[];
  };
};

export type LogoutProps = {
  label: string;
  text: string;
  link: string;
};

export type menuToggleProps = {
  label: string;
};

export type settingsProps = {
  name: string;
  label: string;
  text: string;
  link: string;
};

export type NavProps = {
  name: string;
  label: string;
  text: string;
  link: string;
  svg: string;
};

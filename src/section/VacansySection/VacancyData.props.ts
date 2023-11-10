export type vacancyDataProps = {
  status: vacancyStatusProps;
  card: vacancyCardProps;
};

export type vacancyStatusProps = {
  all_status: { name: string; text: string }[];

  reject_status: { name: string; text: string }[];

  status_color: {
    [key: string]: string;
  };
};

export type vacancyCardProps = {
  company: { [key: string]: string };
  position: { [key: string]: string };
  link: { [key: string]: string };
  status: { [key: string]: string };
  comment: string;
  placeholder: { [key: string]: string };
  reason: { [key: string]: string };
  button: buttonProps;
};

export type buttonProps = {
  add: { [key: string]: string };
  edit: {
    [key: string]: string;
  };
  ok: {
    [key: string]: string;
  };
  cancel: {
    [key: string]: string;
  };
  close: { label: string };
  del: {
    [key: string]: string;
  };
  toArchive: {
    [key: string]: string;
  };
  toActive: {
    [key: string]: string;
  };
  readMore: {
    [key: string]: string;
  };
};

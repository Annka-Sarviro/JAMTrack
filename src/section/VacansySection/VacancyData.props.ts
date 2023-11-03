export type vacancyDataProps = {
  status: vacancyStatusProps;
  card: vacancyCardProps;
};

export type vacancyStatusProps = {
  new: string;
  hr: string;
  test: string;
  tech: string;
  reject: string;
  reject_status: {
    [key: string]: string;
  };
  status_color: {
    [key: string]: string;
  };
};

export type vacancyCardProps = {
  company_name: string;
  position: string;
  link: string;
  status: string;
  add: string;
  placeholder: string;
  reason: string;
  button: {
    ok: {
      text: string;
    };
    cancel: {
      text: string;
    };
    del: {
      text: string;
    };
    toArchive: {
      text: string;
    };
    toActive: {
      text: string;
    };
    readMore: {
      text: string;
    };
  };
};

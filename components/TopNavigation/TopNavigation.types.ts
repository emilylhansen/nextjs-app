export enum TopNavigationItemId {
  Overview = "overview",
  SendMoney = "send-money",
  RequestMoney = "request-money",
  Statements = "statements",
}

export type TopNavigationItem = {
  title: string;
  icon: React.JSX.Element;
  id: TopNavigationItemId;
};

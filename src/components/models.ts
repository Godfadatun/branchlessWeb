export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Carosel_model {
  title : string;
  sub_title ?: string;
  sub_title_2 ?: string;
  details : Array<string>;
  extra ?: string;
  img : string;
  android : boolean;
  ios : boolean;
  early ?: boolean;
  earlyLink ?: string;
}

export interface Price_model {
  title: string;
  price: string;
  duration: string;
  details: Array<string>;
}

export interface Faq {
  header: string;
  content?: string;
  contentA?: Array<string>;
}

export interface BuyLink {
  name: string;
  url: string;
}

export interface Book {
  title: string;
  book_image: string;
  rank: number;
  weeks_on_list: number;
  contributor: string;
  description: string;
  buy_links: BuyLink[];
}

export interface List {
  display_name: string;
  list_name_encoded: string;
  list_id: number;
  books: Book[];
}

export interface Data {
  bestsellers_date: string;
  lists: List[];
}
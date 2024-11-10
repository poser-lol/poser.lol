export interface Spot {
  id: string;
  name: string;
  summary: string;
}

export const spots: Spot[] = [
  {
    id: "cult",
    name: "컬트",
    summary: "This is the summary for Item 1",
  },
  {
    id: "ttukseom",
    name: "뚝섬",
    summary: "This is the summary for Item 2",
  },
];
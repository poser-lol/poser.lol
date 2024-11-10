export interface Spot {
  id: string;
  name: string;
  summary: string;
  latitude: number;
  longitude: number;
}

export const spots: Spot[] = [
  {
    id: "cult",
    name: "컬트",
    summary: "This is the summary for Item 1",
    latitude: 37.5665,
    longitude: 126.978,
  },
  {
    id: "ttukseom",
    name: "뚝섬",
    summary: "This is the summary for Item 2",
    latitude: 37.531,
    longitude: 127.066,
  },
  {
    id: "yeouido",
    name: "여의도",
    summary: "This is the summary for Item 3",
    latitude: 37.5215,
    longitude: 126.9248,
  },
  {
    id: "hongdae",
    name: "홍대",
    summary: "This is the summary for Item 4",
    latitude: 37.5563,
    longitude: 126.922,
  },
  {
    id: "gangnam",
    name: "강남",
    summary: "This is the summary for Item 5",
    latitude: 37.4979,
    longitude: 127.0276,
  },
];

export interface ComparisonPair {
  slug: string;
  casino1Slug: string;
  casino2Slug: string;
}

export const comparisons: ComparisonPair[] = [
  { slug: 'betsson-vs-1xbet-peru', casino1Slug: 'betsson-peru', casino2Slug: '1xbet-peru' },
  { slug: 'betsson-vs-codere-peru', casino1Slug: 'betsson-peru', casino2Slug: 'codere-peru' },
  { slug: 'bet365-vs-betsson-peru', casino1Slug: 'bet365-peru', casino2Slug: 'betsson-peru' },
  { slug: 'leovegas-vs-betsson-peru', casino1Slug: 'leovegas-peru', casino2Slug: 'betsson-peru' },
  { slug: 'codere-vs-bet365-peru', casino1Slug: 'codere-peru', casino2Slug: 'bet365-peru' },
  { slug: 'megapari-vs-1xbet-peru', casino1Slug: 'megapari-peru', casino2Slug: '1xbet-peru' },
];

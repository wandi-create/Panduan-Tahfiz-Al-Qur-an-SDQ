
import React from 'react';

export type ContentType = 'paragraph' | 'list' | 'table' | 'heading';

export interface ContentItem {
  type: ContentType;
}

export interface Heading extends ContentItem {
  type: 'heading';
  level: 2 | 3 | 4;
  text: string;
}

export interface Paragraph extends ContentItem {
  type: 'paragraph';
  text: string;
}

export interface List extends ContentItem {
  type: 'list';
  ordered: boolean;
  items: (string | List)[];
}

export interface Table extends ContentItem {
  type: 'table';
  headers: string[];
  rows: (string | number)[][];
  caption?: string;
  mergeRows?: boolean;
}

export interface SectionData {
  id: string;
  title: string;
  subtitle: string;
  icon: string; // Icon identifier
  content: (Heading | Paragraph | List | Table)[];
}

export interface SectionGroup {
  title: string;
  sections: SectionData[];
}
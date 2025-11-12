import React from 'react';
import type { SectionGroup, ContentItem, Heading, Paragraph, List, Table } from '../types';
import { iconMap } from './Sidebar';

interface ContentDisplayProps {
  sectionGroups: SectionGroup[];
  registerRef: (id: string, el: HTMLElement | null) => void;
}

const renderContentItem = (item: ContentItem, index: number): React.ReactNode => {
  switch (item.type) {
    case 'heading':
      const heading = item as Heading;
      if (heading.level === 2) return (
        <div key={index} className="flex items-center mt-8 mb-4">
          <span className="h-1 w-6 bg-[#E6B34A] rounded-full mr-3"></span>
          <h2 className="text-2xl font-bold text-[#2A5B4D]">{heading.text}</h2>
        </div>
      );
      if (heading.level === 3) return <h3 key={index} className="text-xl font-semibold text-gray-700 mt-6 mb-3">{heading.text}</h3>;
      return <h4 key={index} className="text-lg font-semibold text-gray-700 mt-4 mb-2">{heading.text}</h4>;
    
    case 'paragraph':
      const paragraph = item as Paragraph;
      return <p key={index} className="mb-4 leading-relaxed text-gray-600">{paragraph.text}</p>;

    case 'list': {
      const list = item as List;
      const ListTag = list.ordered ? 'ol' : 'ul';
      const listStyle = list.ordered ? 'custom-ol' : 'list-disc pl-6 space-y-2';
      
      const renderedItems: React.ReactNode[] = [];
      for (let i = 0; i < list.items.length; i++) {
        const currentItem = list.items[i];
        const nextItem = i + 1 < list.items.length ? list.items[i + 1] : null;

        if (typeof currentItem === 'string' && nextItem && typeof nextItem !== 'string') {
          // A string followed by a sub-list. Group them in one <li>, with a div wrapper for layout.
          renderedItems.push(
            <li key={i}>
              <div>
                {currentItem}
                {renderContentItem(nextItem as ContentItem, i + 1)}
              </div>
            </li>
          );
          i++; // Increment i to skip the next item, as it's already been rendered.
        } else if (typeof currentItem === 'string') {
          // A standalone string item. Wrap in div for consistent styling.
          renderedItems.push(<li key={i}><div>{currentItem}</div></li>);
        } else {
          // A standalone sub-list. Wrap in div for consistent styling.
          renderedItems.push(
            <li key={i}><div>{renderContentItem(currentItem as ContentItem, i)}</div></li>
          );
        }
      }

      return (
        <ListTag key={index} className={`${listStyle} mb-4 text-gray-600`}>
          {renderedItems}
        </ListTag>
      );
    }

    case 'table': {
        const table = item as Table;

        if (table.mergeRows) {
            const rowSpans: (number | null)[] = [];
            for (let i = 0; i < table.rows.length; i++) {
                if (i > 0 && table.rows[i][0] === table.rows[i - 1][0]) {
                    rowSpans.push(null); // This cell will be skipped
                } else {
                    let span = 1;
                    let j = i + 1;
                    while (j < table.rows.length && table.rows[j][0] === table.rows[i][0]) {
                        span++;
                        j++;
                    }
                    rowSpans.push(span);
                }
            }
            return (
                <div key={index} className="overflow-x-auto my-6 border border-gray-200 rounded-lg">
                    <table className="min-w-full bg-white">
                        {table.caption && <caption className="p-3 text-sm text-gray-500 text-left font-semibold bg-gray-50 rounded-t-lg">{table.caption}</caption>}
                        <thead className="bg-gray-50">
                            <tr>
                                {table.headers.map((header, i) => (
                                    <th key={i} className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border-b">{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {table.rows.map((row, i) => (
                                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                    {row.map((cell, j) => {
                                        if (j === 0) { // First column
                                            if (rowSpans[i] !== null) {
                                                return (
                                                    <td key={j} rowSpan={rowSpans[i] || 1} className="px-4 py-3 text-sm text-gray-700 font-medium align-top border-r">
                                                        {cell}
                                                    </td>
                                                );
                                            }
                                            return null; // Don't render this cell
                                        } else { // Other columns
                                            return (
                                                <td key={j} className="px-4 py-3 text-sm text-gray-700">{cell}</td>
                                            );
                                        }
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        }
        
        // Fallback for tables without mergeRows
        return (
            <div key={index} className="overflow-x-auto my-6 border border-gray-200 rounded-lg">
                <table className="min-w-full bg-white">
                    {table.caption && <caption className="p-3 text-sm text-gray-500 text-left font-semibold bg-gray-50 rounded-t-lg">{table.caption}</caption>}
                    <thead className="bg-gray-50">
                        <tr>
                            {table.headers.map((header, i) => (
                                <th key={i} className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border-b">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {table.rows.map((row, i) => (
                            <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                {row.map((cell, j) => (
                                    <td key={j} className="px-4 py-3 text-sm text-gray-700">{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
    default:
      return null;
  }
};

export const ContentDisplay: React.FC<ContentDisplayProps> = ({ sectionGroups, registerRef }) => {
  const allSections = sectionGroups.flatMap(group => group.sections);
  
  return (
    <div className="space-y-8">
      {allSections.map((section) => {
        const IconComponent = iconMap[section.icon];
        return (
          <section
            key={section.id}
            id={section.id}
            ref={(el) => registerRef(section.id, el)}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm scroll-mt-20 border border-slate-200"
          >
            <header className="flex items-start mb-6">
              {IconComponent && (
                <div className="bg-emerald-50 text-emerald-700 p-3 rounded-xl mr-4">
                  <IconComponent className="h-7 w-7" />
                </div>
              )}
              <div>
                <h1 className="text-3xl font-extrabold text-gray-800">
                  {section.title}
                </h1>
                <p className="text-gray-500 mt-1">{section.subtitle}</p>
              </div>
            </header>
            <div className="border-t border-gray-200 pt-6">
              {section.content.map(renderContentItem)}
            </div>
          </section>
        );
      })}
    </div>
  );
};
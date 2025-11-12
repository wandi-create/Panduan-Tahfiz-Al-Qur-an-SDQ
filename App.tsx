
import React, { useState, useEffect, useRef } from 'react';
import { Sidebar } from './components/Sidebar';
import { ContentDisplay } from './components/ContentDisplay';
import { contentData } from './content';

const App: React.FC = () => {
  const allSections = contentData.flatMap(group => group.sections);
  const [activeSection, setActiveSection] = useState<string>(allSections[0]?.id || '');
  const mainContentRef = useRef<HTMLElement>(null);
  const sectionRefs = useRef<Record<string, HTMLElement>>({});
  const isClickScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrollingRef.current) {
          return;
        }
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: mainContentRef.current, rootMargin: '0px 0px -75% 0px', threshold: 0.1 }
    );

    const elementsToObserve = Object.keys(sectionRefs.current).map(key => sectionRefs.current[key]);
    
    elementsToObserve.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      elementsToObserve.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);
  
  const handleSectionClick = (sectionId: string) => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    isClickScrollingRef.current = true;
    setActiveSection(sectionId);
    
    const sectionElement = sectionRefs.current[sectionId];
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    scrollTimeoutRef.current = window.setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 1000); // Ignore observer for 1s to allow scroll to finish
  };

  const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"></path>
    </svg>
  );

  return (
    <div className="flex min-h-screen font-sans text-gray-800 bg-slate-50">
      <Sidebar 
        sectionGroups={contentData} 
        activeSection={activeSection} 
        onSectionClick={handleSectionClick} 
      />
      
      <div className="flex-1 flex flex-col h-screen">
        <header className="bg-slate-50/80 backdrop-blur-sm border-b border-slate-200 px-8 py-4 flex justify-between items-center z-10">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="search"
              placeholder="Cari topik, istilah, atau konten..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
            />
          </div>
          <div className="text-right text-sm text-gray-500 hidden md:block">
            <p className="font-medium text-gray-700">Kurikulum Pembelajaran Al-Qur'an</p>
          </div>
        </header>

        <main ref={mainContentRef} className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
          <ContentDisplay 
            sectionGroups={contentData} 
            registerRef={(id, el) => {
              if (el) sectionRefs.current[id] = el;
            }}
          />
        </main>
      </div>
    </div>
  );
};

export default App;

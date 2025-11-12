
import React from 'react';
import type { SectionGroup } from '../types';

interface SidebarProps {
  sectionGroups: SectionGroup[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const KurikulumIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M21 18V6c0-1.1-.9-2-2-2h-7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2M3 6v12c0 1.1.9 2 2 2h3V4H5c-1.1 0-2 .9-2 2"></path></svg>
);
const VisiIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm2 16H8v-2h8zm0-4H8v-2h8zm-3-5V3.5L18.5 9z"></path></svg>
);
const TujuanIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m-5-8c0-1.66 1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3m5.3 0c0 .72-.58 1.3-1.3 1.3s-1.3-.58-1.3-1.3c0-.72.58-1.3 1.3-1.3s1.3.58 1.3 1.3"></path></svg>
);
const KegiatanIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V8h14zM7 10h5v5H7z"></path></svg>
);
const WaktuIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m4.5 14H11v-6h1.5v4.5H16.5z"></path></svg>
);
const MetodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M9 4h2v5l-1-1l-1 1zm9 16H6V4h1v9l3-3l3 3V4h2z"></path></svg>
);
const GuruIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3s1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5S5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05c1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5"></path></svg>
);
const HalaqahIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm2 14H8v-2h8zm0-4H8v-2h8z"></path></svg>
);
const TargetIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94c.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2m-7 6c-1.66 0-3-1.34-3-3V5h6v3c0 1.66-1.34 3-3 3"></path></svg>
);
const EvaluasiIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-4.03 13.47l-1.41-1.41L12 16.62l-1.56-1.56l-1.41 1.41L12 19.44zM12 14c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3m-4.24-5.56l1.41-1.41L10.73 8.6l1.27-1.27l1.41 1.41L12 10.18z"></path></svg>
);

export const iconMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  visi: VisiIcon,
  tujuan: TujuanIcon,
  kegiatan: KegiatanIcon,
  waktu: WaktuIcon,
  metode: MetodeIcon,
  guru: GuruIcon,
  halaqah: HalaqahIcon,
  target: TargetIcon,
  evaluasi: EvaluasiIcon,
};


export const Sidebar: React.FC<SidebarProps> = ({ sectionGroups, activeSection, onSectionClick }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    onSectionClick(sectionId);
  };

  return (
    <aside className="w-64 bg-[#2A5B4D] text-white flex-shrink-0 flex flex-col h-screen sticky top-0">
      <div className="h-20 flex items-center px-6 border-b border-white/10">
        <div className="bg-[#E6B34A] p-2 rounded-lg mr-3">
          <KurikulumIcon className="h-6 w-6 text-[#2A5B4D]" />
        </div>
        <div>
          <h2 className="font-bold text-base leading-tight">Kurikulum</h2>
          <p className="text-sm text-yellow-100/70 leading-tight">Al-Qur'an</p>
        </div>
      </div>
      
      <nav className="flex-1 overflow-y-auto custom-scrollbar p-4">
        <ul className="space-y-4">
          {sectionGroups.map((group) => (
            <li key={group.title}>
              <h3 className="px-2 py-1 text-xs font-bold uppercase text-[#E6B34A] tracking-wider mb-2">
                {group.title}
              </h3>
              <ul className="space-y-1">
                {group.sections.map((section) => {
                  const IconComponent = iconMap[section.icon];
                  return (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        onClick={(e) => handleLinkClick(e, section.id)}
                        className={`flex items-center px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200 group ${
                          activeSection === section.id
                            ? 'bg-[#E6B34A] text-[#2A5B4D] shadow-inner'
                            : 'text-yellow-100/80 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        {IconComponent && <IconComponent className="h-5 w-5 mr-3 flex-shrink-0" />}
                        <span>{section.title}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

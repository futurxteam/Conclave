import { motion } from 'motion/react';
import { FaFilePdf } from 'react-icons/fa6';
import { IoDownloadOutline, IoOpenOutline } from 'react-icons/io5';
import { HiDocumentText } from 'react-icons/hi2';

interface Document {
  id: string;
  label: string;
  filename: string;
  type: 'PDF' | 'DOCX';
  color: string;
}

const DOCUMENTS: Document[] = [
  {
    id: 'miqdad-sulaiman',
    label: 'Miqdad Sulaiman',
    filename: 'Miqdad_Sulaiman.pdf',
    type: 'PDF',
    color: '#2451A6',
  },
  {
    id: 'm-saifuneesa',
    label: 'M Saifuneesa',
    filename: 'M_Saifuneesa.pdf',
    type: 'PDF',
    color: '#169857',
  },
  {
    id: 'dr-mohammed-sadik',
    label: 'Dr Mohammed Sadik',
    filename: 'Dr_Mohammed_Sadik.pdf',
    type: 'PDF',
    color: '#F74A1D',
  },
  {
    id: 'psychotherapy-panel',
    label: 'How Psychotherapy Is Evolving — Panel',
    filename: 'How Psychotherapy Is Evolving - Panel Discussion.pdf',
    type: 'PDF',
    color: '#7c3aed',
  },
  {
    id: 'panel-business-psychology',
    label: 'Panel Report: Business Psychology',
    filename: 'Panel_Report_Business_Psychology.pdf',
    type: 'PDF',
    color: '#b45309',
  },
  {
    id: 'mental-healthcare-kerala',
    label: 'Mental Healthcare: Kerala Model Summary',
    filename: 'Mental_Healthcare_Kerala_Model_Summary.pdf',
    type: 'PDF',
    color: '#2451A6',
  },
  {
    id: 'research-psychology-lecture',
    label: 'Research in Psychology: Lecture Summary',
    filename: 'Research_in_Psychology_Lecture_Summary.pdf',
    type: 'PDF',
    color: '#169857',
  },
  {
    id: 'dr-benzir-hussain-pdf',
    label: 'Dr Benzir Hussain',
    filename: 'Dr_Benzir_Hussain.pdf',
    type: 'PDF',
    color: '#F74A1D',
  },
  {
    id: 'workshop-report-sld-pdf',
    label: 'Workshop Report SLD',
    filename: 'Workshop_Report_SLD.pdf',
    type: 'PDF',
    color: '#7c3aed',
  },
  {
    id: 'dr-benzir-hussain',
    label: 'Dr Benzir Hussain',
    filename: 'Dr_Benzir_Hussain.docx',
    type: 'DOCX',
    color: '#F74A1D',
  },
  {
    id: 'workshop-report-sld',
    label: 'Workshop Report: SLD',
    filename: 'Workshop_Report_SLD.docx',
    type: 'DOCX',
    color: '#7c3aed',
  },
];

function DocumentCard({ doc, index }: { doc: Document; index: number }) {
  const isPdf = doc.type === 'PDF';
  const fileUrl = `/${doc.filename}`;

  const handleView = () => {
    window.open(fileUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = doc.filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
      className="group relative bg-white/70 backdrop-blur-xl border border-slate-200/60 rounded-2xl p-5 sm:p-6 flex flex-col gap-4 shadow-[0_4px_20px_rgba(36,81,166,0.06)] hover:shadow-[0_12px_36px_rgba(36,81,166,0.14)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      {/* Top accent stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl transition-opacity duration-300 opacity-70 group-hover:opacity-100"
        style={{ background: `linear-gradient(90deg, ${doc.color}, ${doc.color}88)` }}
      />

      {/* Icon + badge row */}
      <div className="flex items-start justify-between gap-3">
        <div
          className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center shadow-sm"
          style={{ background: `${doc.color}18`, border: `1px solid ${doc.color}30` }}
        >
          {isPdf ? (
            <FaFilePdf size={20} style={{ color: doc.color }} />
          ) : (
            <FaFileWord size={20} style={{ color: doc.color }} />
          )}
        </div>

        <span
          className="mt-0.5 inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest border"
          style={{
            color: doc.color,
            borderColor: `${doc.color}40`,
            background: `${doc.color}10`,
          }}
        >
          {doc.type}
        </span>
      </div>

      {/* Document name */}
      <div className="flex-1 min-w-0">
        <p className="font-display font-bold text-slate-800 text-[15px] sm:text-base leading-snug break-words">
          {doc.label}
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-2 pt-1">
        <button
          id={`view-${doc.id}`}
          onClick={handleView}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-sans font-bold text-xs text-white transition-all duration-200 active:scale-95 shadow-sm hover:shadow-md cursor-pointer"
          style={{ background: `linear-gradient(135deg, ${doc.color}, ${doc.color}cc)` }}
        >
          <IoOpenOutline size={14} />
          View Document
        </button>

        <button
          id={`download-${doc.id}`}
          onClick={handleDownload}
          title="Download"
          className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200 bg-white/80 text-slate-500 hover:text-slate-800 hover:border-slate-300 hover:bg-white transition-all duration-200 active:scale-95 cursor-pointer"
        >
          <IoDownloadOutline size={16} />
        </button>
      </div>
    </motion.div>
  );
}

export function SessionsSummary() {
  const pdfDocs = DOCUMENTS.filter((d) => d.type === 'PDF');

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50/50">
      {/* Background gradients matching site style */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2451A6]/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#E0B6CF]/10 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/4" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-[#F4D313]/4 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* ── HERO HEADER ── */}
        <div className="text-center mb-16 pt-8 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-slate-200/60 text-[#2451A6] font-sans font-bold text-xs mb-6 shadow-sm uppercase tracking-widest"
          >
            <HiDocumentText size={14} />
            MANO 2026 · Conclave Documents
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight mb-4"
          >
            Sessions Summary
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-slate-500 text-base sm:text-lg font-medium"
          >
            Session reports, summaries and related documents from the Conclave
          </motion.p>

          {/* Decorative gradient accent line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-[#2451A6] via-[#E0B6CF] to-[#F4D313]"
          />
        </div>

        {/* ── DOCUMENTS GRID ── */}
        <section id="session-pdfs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pdfDocs.map((doc, i) => (
              <DocumentCard key={doc.id} doc={doc} index={i} />
            ))}
          </div>
        </section>

        {/* ── FOOTER NOTE ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center text-slate-400 text-xs font-medium mt-14"
        >
          All documents are from MANO: Kerala Psychology Conclave 2026 · Organized by Sereniche Academy
        </motion.p>
      </div>
    </div>
  );
}

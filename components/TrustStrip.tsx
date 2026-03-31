interface TrustStripProps {
  t: any;
}

export default function TrustStrip({ t }: TrustStripProps) {
  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-10 py-10 px-6 section-divider">
      {t.trust.items.map((item: string, i: number) => (
        <span key={i} className="font-sans text-[0.68rem] text-stone-700 tracking-[0.15em] uppercase font-light">
          {item}
        </span>
      ))}
    </div>
  );
}

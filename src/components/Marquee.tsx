const items = [
  "Faster Response",
  "More Leads Captured",
  "Fewer Missed Calls",
  "Automatic Follow-Up",
  "Easier Bookings",
  "Better Reviews",
  "Less Admin",
  "More Sales",
  "Happier Customers",
  "More Time Back",
];

const Track = () => (
  <div className="flex gap-12 pr-12 font-mono text-xs font-medium tracking-[0.18em] uppercase text-white/55 whitespace-nowrap">
    {items.map((item, i) => (
      <span key={i} className="flex items-center gap-12">
        {item}
        <span className="text-signal">·</span>
      </span>
    ))}
  </div>
);

const Marquee = () => (
  <div className="bg-ink overflow-hidden py-[18px] border-t border-white/[0.08]">
    <div className="flex w-max animate-[marquee_36s_linear_infinite]">
      <Track />
      <Track />
    </div>
  </div>
);

export default Marquee;

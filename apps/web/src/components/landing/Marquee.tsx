import MarqueeItem from "./MarqueeItem";

const RUNES =
  "ᛖᛊᛋᛟᛗᛊᛋᛏᚱᛊᛖᛊᛋᛟᛗᛊᛋᛏᚱᛊᛖᛊᛋᛟᛗᛊᛋᛏᚱᛊᛖᛊᛋᛟᛗᛊᛋᛏᚱᛊ";

export default function Marquee() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none text-foreground/5">
      <div className="absolute top-0 w-full text-[5rem] md:text-[8rem]">
        <MarqueeItem text={RUNES} from={0} to="-100%" />
        <MarqueeItem text={RUNES} from="-100%" to={0} />
      </div>

      <div className="absolute bottom-0 w-full text-[5rem] md:text-[8rem]">
        <MarqueeItem text={RUNES} from="-100%" to={0} />
        <MarqueeItem text={RUNES} from={0} to="-100%" />
      </div>
    </div>
  );
}
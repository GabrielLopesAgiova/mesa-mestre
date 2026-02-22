import MarqueeItem from "./MarqueeItem";

export default function Marquee() {
    return (
        <div className="absolute inset-0 overflow-hidden text-[clamp(6rem,8vw,12rem)]  text-foreground/5 select-none pointer-events-none">
            <MarqueeItem text="ᛖᛊᛋᛟᛗᛊᛋᛏᚱᛊᛖᛊᛋᛟᛗᛊᛋᛏᚱᛊᛖᛊᛋᛟᛗᛊᛋᛏᚱᛊᛖᛊᛋᛟᛗᛊᛋᛏᚱᛊ" from={0} to={"-100%"} />
            <MarqueeItem text="ᛖᛊᛋᛟᛗᛊᛋᛏᚱᛊᛖᛊᛋᛟᛗᛊᛋᛏᚱᛊᛖᛊᛋᛟᛗᛊᛋᛏᚱᛊᛖᛊᛋᛟᛗᛊᛋᛏᚱᛊ" from={"-100%"} to={0} />
        </div>
    );
}
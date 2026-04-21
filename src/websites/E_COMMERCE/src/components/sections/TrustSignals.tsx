import { Truck, ShieldCheck, RefreshCw, Headphones } from "lucide-react";

export function TrustSignals() {
  const signals = [
    {
      icon: <Truck className="h-5 w-5" />,
      title: "Free Shipping",
},
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Secure Payment",
},
    {
      icon: <RefreshCw className="h-5 w-5" />,
      title: "Easy Returns",
},
    {
      icon: <Headphones className="h-5 w-5" />,
      title: "24/7 Support",
}
  ];

  return (
    <section className="w-full p-4">
      <div className="grid grid-cols-2 gap-4">
        {signals.map((signal, index) => (
          <div key={index} className="flex items-center gap-3 p-3 border border-black/5 rounded-xl bg-white/40 backdrop-blur-sm">
            <div className="text-primary/60">
              {signal.icon}
            </div>
            <h3 className="font-display font-bold text-[10px] uppercase tracking-wider">
              {signal.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

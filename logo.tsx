import Image from 'next/image';

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="rounded-full p-1 bg-white border-2 border-primary/20">
      <Image
        src="https://res.cloudinary.com/dy73hzkpm/image/upload/v1762438803/Capture_d_e%CC%81cran_2025-11-06_a%CC%80_15.19.36_v33tk5.png"
        alt="Euroforma RDC Logo"
        width={32}
        height={32}
        className="object-contain"
      />
    </div>
    <span className="font-bold text-xl">
        <span className="text-foreground">Euroforma</span><span className="text-primary">RDC</span>
    </span>
  </div>
);

export default Logo;

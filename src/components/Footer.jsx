import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#f8c210] text-[#0a0a0c] pt-8 pb-4 px-6 md:px-10 lg:px-16 flex flex-col relative font-sans overflow-hidden">
      {/* Top Border */}
      <div className="w-full h-[1px] bg-[#0a0a0c]/20 mb-6"></div>

      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-col">
          <p className="text-[10px] md:text-xs tracking-wide mb-1 opacity-80 font-semibold uppercase">READY TO WORK ON YOUR NEXT LOOK</p>
          <a href="mailto:jangidanshi5@gmail.com" className="text-xl md:text-2xl font-black tracking-tighter hover:opacity-70 transition-opacity uppercase">
            JANGIDANSHI5@GMAIL.COM
          </a>
        </div>
        <div className="text-[10px] md:text-xs tracking-wide opacity-80 uppercase text-left md:text-right font-semibold">
          FREELANCE GRAPHIC DESIGNER & PHOTOGRAPHER
        </div>
      </div>

      {/* Middle Links & Giant Text Section Wrapper (Compact) */}
      <div className="flex flex-col w-full mt-12 md:mt-16">

        {/* Social Links */}
        <div className="flex justify-between items-end w-full mb-6 z-10">
          <div className="flex flex-col gap-1">
            <h4 className="text-[9px] md:text-[10px] opacity-60 mb-1 font-bold">SOCIAL</h4>
            <div className="flex gap-4 md:gap-6">
              <a href="https://www.instagram.com/_anshijangid_/" target="_blank" rel="noreferrer" className="text-xs md:text-sm font-bold hover:opacity-60 transition-opacity uppercase">INSTAGRAM</a>
              <a href="https://www.behance.net/anshijangid?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnR8i-ptMbkNpfHQhgT41kldWGw8iTA054WxhF-hNbjTUlOZD2_-801wVsSHo_aem_o2zTp1GhRl6QdB_Mh-gLUQ" target="_blank" rel="noreferrer" className="text-xs md:text-sm font-bold hover:opacity-60 transition-opacity uppercase">BEHANCE</a>
              <a href="mailto:jangidanshi5@gmail.com" className="text-xs md:text-sm font-bold hover:opacity-60 transition-opacity uppercase">EMAIL</a>
            </div>
          </div>
        </div>

        {/* Giant Text - Single Line for compactness */}
        <div className="w-full flex items-center justify-between relative -mx-1">
          <h1 className="text-[14vw] md:text-[13vw] leading-[0.8] font-black tracking-tighter m-0 p-0 flex flex-nowrap items-center w-full justify-between whitespace-nowrap font-display text-[#0a0a0c]">
            <span>A</span>
            <span>N</span>
            <span>S</span>
            <span>H</span>
            <span>I</span>
            <span className="w-[4vw]"></span>
            <span>J</span>
            <span>A</span>
            <span>N</span>
            <span>G</span>
            <span>I</span>
            <span>D</span>
          </h1>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 mt-4 pt-4 border-t border-[#0a0a0c]/10 text-[9px] md:text-[10px] tracking-widest font-semibold opacity-80 uppercase">
        <div>COPYRIGHT &copy; {new Date().getFullYear()} ANSHI JANGID</div>
        <div>DESIGN&DEV @rohitdeka</div>
      </div>
    </footer>
  );
};

export default Footer;

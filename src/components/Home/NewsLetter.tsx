export default function NewsLetter() {
  return (
    <div>
      <div className="relative h-[500px] bg-[url('/images/homepage/newsletter/news_bg.png')] bg-cover bg-center">
        <div className="absolute inset-x-0 h-full bg-[linear-gradient(180deg,rgba(115,115,115,0.28)_0%,#000000_100%)]" />
        <div className="absolute flex h-full w-full flex-col items-center justify-center gap-4 text-center">
          <div className="flex gap-2 text-header text-white">
            <h3 className="italic">Stay Updated </h3>
            <h1>with PICO!</h1>
          </div>
          <h3 className="max-w-md text-xl italic text-white">
            Subscribe to our newsletter to get the latest updates on our brand,
            products, and services.
          </h3>
          <button className="rounded-full border-2 border-[#FFC986] p-3 text-xl text-[#E0B354]">
            <h3 className="italic"> Get the News Letter</h3>
          </button>
        </div>
      </div>
    </div>
  );
}

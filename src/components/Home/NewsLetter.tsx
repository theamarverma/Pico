import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function NewsLetter() {
  return (
    <div>
      <div className="relative h-[500px] bg-[url('/images/homepage/newsletter/news_bg.png')] bg-cover bg-center">
        <div className="absolute inset-x-0 h-full bg-[linear-gradient(180deg,rgba(115,115,115,0.28)_0%,#000000_100%)]" />
        <div className="absolute flex h-full w-full flex-col items-center justify-center gap-4 text-center">
          <div className="flex flex-col gap-2 text-4xl text-white md:flex-row md:text-header">
            <h3 className="italic">Stay Updated </h3>
            <h1>with PICO!</h1>
          </div>
          <h3 className="max-w-md text-xl italic text-white">
            Subscribe to our newsletter to get the latest updates on our brand,
            products, and services.
          </h3>
          <Tabs className="" defaultValue="2024">
            <TabsList className="flex gap-2 border border-orange-400 bg-transparent text-xl">
              <TabsTrigger value="2024">Old Newsletter</TabsTrigger>
              <TabsTrigger value="2025">New Newsletter</TabsTrigger>
            </TabsList>
            <TabsContent value="2024">
              <button className="rounded-full border-2 border-[#FFC986] p-3 text-xl text-[#E0B354]">
                <Link href="/Newsletter_PICO.pdf" target="_blank">
                  <h3 className="italic"> Get the News Letter</h3>
                </Link>
              </button>
            </TabsContent>
            <TabsContent value="2025">
              <button className="rounded-full border-2 border-[#FFC986] p-3 text-xl text-[#E0B354]">
                <Link href="/Newsletter_PICO_2025.pdf" target="_blank">
                  <h3 className="italic"> Get the News Letter</h3>
                </Link>
              </button>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

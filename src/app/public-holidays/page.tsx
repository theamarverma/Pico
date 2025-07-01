import { HolidaysTable } from "@/components/publicHolidays/HolidaysTable";

export default function PublicHolidaysPage() {
  return (
    <div className="mt-12 bg-bgCreamDark px-6 py-14 md:mt-24 md:px-20 md:py-24">
      <div className="text-center">
        <h3 className="text-4xl italic text-picoTeal underline">
          West Bengal Public Holidays 2025
        </h3>
      </div>
      <HolidaysTable />
    </div>
  );
}

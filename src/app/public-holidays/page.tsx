import { HolidaysTable } from "@/components/publicHolidays/HolidaysTable";

export default function PublicHolidaysPage() {
  return (
    <div className="mt-24 bg-bgCreamDark px-20 py-24">
      <div className="text-center">
        <h3 className="text-4xl italic text-picoTeal underline">
          West Bengal Public Holidays 2025
        </h3>
      </div>
      <HolidaysTable />
    </div>
  );
}

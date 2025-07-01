import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const holidays = [
  { date: "12 Jan", day: "Sun", holiday: "Swami Vivekananda Jayanti" },
  { date: "23 Jan", day: "Thu", holiday: "Netaji Subhas Chandra Bose Jayanti" },
  { date: "26 Jan", day: "Sun", holiday: "Republic Day" },
  { date: "03 Feb", day: "Mon", holiday: "Vasant Panchami" },
  { date: "14 Mar", day: "Fri", holiday: "Doljatra" },
  { date: "31 Mar", day: "Mon", holiday: "Id-ul-Fitr (Ramzan Eid)" },
  {
    date: "14 Apr",
    day: "Mon",
    holiday: "Bengali New Year / Dr Ambedkar Jayanti",
  },
  { date: "18 Apr", day: "Fri", holiday: "Good Friday" },
  { date: "01 May", day: "Thu", holiday: "May Day (Labour Day)" },
  { date: "08 May", day: "Thu", holiday: "Rabindra Jayanti" },
  { date: "12 May", day: "Mon", holiday: "Buddha Purnima" },
  { date: "07 June", day: "Sat", holiday: "Eid al-Adha (Bakrid) (Tentative)" },
  { date: "06 July", day: "Sun", holiday: "Muharram (Tentative)" },
  { date: "15 Aug", day: "Fri", holiday: "Independence Day" },
  { date: "21 Sep", day: "Sun", holiday: "Mahalaya" },
  { date: "29 Sep", day: "Mon", holiday: "Maha Saptami" },
  { date: "30 Sep", day: "Tue", holiday: "Maha Ashtami" },
  { date: "01 Oct", day: "Wed", holiday: "Maha Navami" },
  { date: "02 Oct", day: "Thu", holiday: "Vijaya Dashami / Gandhi Jayanti" },
  { date: "06 Oct", day: "Mon", holiday: "Lakshmi Puja" },
  { date: "21 Oct", day: "Tue", holiday: "Diwali (Deepavali) (Tentative)" },
  { date: "05 Nov", day: "Wed", holiday: "Guru Nanak Jayanti" },
  { date: "25 Dec", day: "Thu", holiday: "Christmas Day" },
];

export function HolidaysTable() {
  return (
    <Table className="border-picoGray mx-auto my-8 max-w-xl border-4 bg-bgCream">
      <TableCaption className="text-picoJuteBrown">
        A list of observed public holidays.
      </TableCaption>
      <TableHeader className="bg-gray-100 dark:bg-gray-800">
        <TableRow>
          <TableHead className="font-semibold text-picoTeal">Date</TableHead>
          <TableHead className="font-semibold text-picoTeal">Day</TableHead>
          <TableHead className="font-semibold text-picoTeal">Holiday</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="">
        {holidays.map((holiday, index) => (
          <TableRow key={index}>
            <TableCell className="w-1/4 md:w-1/5 md:font-medium">
              {holiday.date}
            </TableCell>
            <TableCell>{holiday.day}</TableCell>
            <TableCell className="font-medium text-picoJuteBrown">
              {holiday.holiday}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

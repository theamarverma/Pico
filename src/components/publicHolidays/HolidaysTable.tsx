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
  { date: "2 Feb", day: "Sun", holiday: "Vasant Panchami" },
  { date: "14 Mar", day: "Fri", holiday: "Doljatra" },
  { date: "31 Mar", day: "Mon", holiday: "Idul Fitr" },
  { date: "6 Apr", day: "Sun", holiday: "Ram Navami" },
  { date: "10 Apr", day: "Thu", holiday: "Mahavir Jayanti" },
  { date: "14 Apr", day: "Mon", holiday: "Dr Ambedkar Jayanti" },
  { date: "15 Apr", day: "Tue", holiday: "Bengali New Year" },
  { date: "18 Apr", day: "Fri", holiday: "Good Friday" },
  { date: "1 May", day: "Thu", holiday: "May Day" },
  { date: "9 May", day: "Fri", holiday: "Guru Rabindranath Jayanti" },
  { date: "12 May", day: "Mon", holiday: "Buddha Purnima" },
  { date: "7 Jun", day: "Sat", holiday: "Bakrid / Eid al Adha" },
  { date: "6 Jul", day: "Sun", holiday: "Muharram" },
  { date: "15 Aug", day: "Fri", holiday: "Independence Day" },
  { date: "21 Sep", day: "Sun", holiday: "Mahalaya Amavasye" },
  { date: "29 Sep", day: "Mon", holiday: "Maha Saptami" },
  { date: "30 Sep", day: "Tue", holiday: "Maha Ashtami" },
  { date: "1 Oct", day: "Wed", holiday: "Maha Navami" },
  { date: "2 Oct", day: "Thu", holiday: "Vijaya Dashami" },
  { date: "2 Oct", day: "Thu", holiday: "Gandhi Jayanti" },
  { date: "6 Oct", day: "Mon", holiday: "Lakshmi Puja" },
  { date: "20 Oct", day: "Mon", holiday: "Diwali" },
  { date: "27 Oct", day: "Mon", holiday: "Chhath Puja" },
  { date: "5 Nov", day: "Wed", holiday: "Guru Nanak Jayanti" },
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
            <TableCell className="font-medium">{holiday.date}</TableCell>
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

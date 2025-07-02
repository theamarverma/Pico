import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format, addDays, isWeekend, isSameDay } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

type DateTimePickerProps = {
  value?: Date;
  onChange?: (date: Date) => void;
};

export function DateTimePicker({ value, onChange }: DateTimePickerProps) {
  const [internalDate, setInternalDate] = React.useState<Date | undefined>(
    value,
  );
  const date = value ?? internalDate;
  const [isOpen, setIsOpen] = React.useState(false);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const maxDate = addDays(new Date(), 7);
  maxDate.setHours(23, 59, 59, 999);

  const hours = Array.from({ length: 13 }, (_, i) => 11 + i);

  const updateDate = (newDate: Date) => {
    if (onChange) {
      onChange(newDate);
    } else {
      setInternalDate(newDate);
    }
  };

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      if (
        isWeekend(selectedDate) ||
        selectedDate < today ||
        selectedDate > maxDate ||
        nationalHolidays.some((holiday) => isSameDay(selectedDate, holiday))
      ) {
        console.warn(
          "Attempted to select an invalid date (past, weekend, or too far in future). Ignoring.",
        );
        return;
      }

      if (date) {
        const newDate = new Date(selectedDate);
        newDate.setHours(date.getHours(), date.getMinutes());

        const now = new Date();
        const elevenAMToday = new Date(selectedDate);
        elevenAMToday.setHours(11, 0, 0, 0);

        if (newDate.toDateString() === now.toDateString() && newDate < now) {
          const earliestValidTime = Math.max(
            now.getTime(),
            elevenAMToday.getTime(),
          );
          newDate.setTime(earliestValidTime);
        }

        updateDate(newDate);
      } else {
        const now = new Date();
        const initialDate = new Date(selectedDate);
        const elevenAMSelectedDay = new Date(selectedDate);
        elevenAMSelectedDay.setHours(11, 0, 0, 0);

        if (
          initialDate.toDateString() === now.toDateString() &&
          initialDate < now
        ) {
          const earliestValidTime = Math.max(
            now.getTime(),
            elevenAMSelectedDay.getTime(),
          );
          initialDate.setTime(earliestValidTime);
        } else if (
          initialDate.toDateString() !== now.toDateString() &&
          initialDate < elevenAMSelectedDay
        ) {
          initialDate.setHours(11, 0, 0, 0);
        }

        updateDate(initialDate);
      }
    }
  };

  const handleTimeChange = (
    type: "hour" | "minute" | "ampm",
    value: string,
  ) => {
    if (date) {
      const newDate = new Date(date);

      if (type === "hour") {
        const selectedHour = parseInt(value);
        let newHour = selectedHour;
        const currentAMPM = newDate.getHours() >= 12 ? "PM" : "AM";

        if (currentAMPM === "PM" && selectedHour < 12) {
          newHour = selectedHour + 12;
        } else if (currentAMPM === "AM" && selectedHour === 12) {
          newHour = 0;
        } else if (selectedHour === 12 && currentAMPM === "PM") {
          newHour = 12;
        } else {
          newHour = selectedHour;
        }
        newDate.setHours(newHour);
      } else if (type === "minute") {
        newDate.setMinutes(parseInt(value));
      } else if (type === "ampm") {
        const currentHour = newDate.getHours();
        if (value === "PM" && currentHour < 12) {
          newDate.setHours(currentHour + 12);
        } else if (value === "AM" && currentHour >= 12) {
          newDate.setHours(currentHour - 12);
        }
      }

      // Always allow AM/PM changes, then validate the final time
      const now = new Date();
      const isToday = newDate.toDateString() === now.toDateString();

      // Check if time is within allowed business hours
      const newHour = newDate.getHours();
      const newMinute = newDate.getMinutes();

      // Valid times: 11:00 AM, 11:30 AM, and 12:00 PM - 10:30 PM
      const isValidTime =
        (newHour === 11 && (newMinute === 0 || newMinute === 30)) || // 11:00 AM or 11:30 AM
        (newHour >= 12 && newHour <= 22); // 12:00 PM - 10:59 PM

      // Additional check for 10 PM - only allow up to 10:30 PM
      if (newHour === 22 && newMinute > 30) {
        console.warn("Time after 10:30 PM is not allowed. Ignoring.");
        return;
      }

      // Only validate business hours for hour and minute changes, not AM/PM changes
      if (type !== "ampm" && !isValidTime) {
        console.warn(
          "Attempted to select time outside business hours (11:00 AM, 11:30 AM, or 12:00 PM - 10:30 PM). Ignoring.",
        );
        return;
      }

      if (isToday && newDate < now) {
        console.warn("Attempted to select a past time for today. Ignoring.");
        return;
      }

      updateDate(newDate);
    }
  };
  const nationalHolidays: Date[] = [
    new Date(2025, 0, 1),
    new Date(2025, 0, 26),
    new Date(2025, 1, 26),
    new Date(2025, 2, 14),
    new Date(2025, 2, 31),
    new Date(2025, 3, 10),
    new Date(2025, 3, 18),
    new Date(2025, 4, 1),
    new Date(2025, 4, 12),
    new Date(2025, 5, 7),
    new Date(2025, 6, 6),
    new Date(2025, 7, 15),
    new Date(2025, 7, 16),
    new Date(2025, 8, 5),
    new Date(2025, 9, 2),
    new Date(2025, 9, 3),
    new Date(2025, 9, 20),
    new Date(2025, 10, 5),
    new Date(2025, 11, 25),
  ];

  const filterDays = (day: Date) => {
    if (isWeekend(day)) {
      return true;
    }
    if (day < today) {
      return false;
    }
    if (day > maxDate) {
      return true;
    }
    if (nationalHolidays.some((holiday) => isSameDay(day, holiday))) {
      return true;
    }

    return false;
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground",
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            format(date, "MM/dd/yyyy hh:mm aa")
          ) : (
            <span>MM/DD/YYYY hh:mm aa</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <div className="sm:flex">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateSelect}
            initialFocus
            fromDate={today}
            toDate={maxDate}
            disabled={filterDays}
          />
          <div className="flex flex-col divide-y sm:h-[300px] sm:flex-row sm:divide-x sm:divide-y-0">
            <ScrollArea className="w-64 sm:w-auto">
              <div className="flex p-2 sm:flex-col">
                {hours
                  .slice()
                  .reverse()
                  .filter((hour) => hour !== 23)
                  .map((hour) => {
                    const displayHour =
                      hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
                    const isCurrentHour = date && date.getHours() === hour;

                    const now = new Date();
                    const isSelectedDateToday =
                      date && date.toDateString() === now.toDateString();

                    const isDisabled =
                      isSelectedDateToday &&
                      (hour < now.getHours() || hour < 11 || hour > 22);
                    if (
                      isSelectedDateToday &&
                      hour === now.getHours() &&
                      now.getMinutes() > 30
                    ) {
                    }

                    return (
                      <Button
                        key={hour}
                        size="icon"
                        variant={isCurrentHour ? "default" : "ghost"}
                        className="aspect-square shrink-0 sm:w-full"
                        onClick={() =>
                          handleTimeChange("hour", hour.toString())
                        }
                        disabled={isDisabled}
                      >
                        {displayHour}
                      </Button>
                    );
                  })}
              </div>
              <ScrollBar orientation="horizontal" className="sm:hidden" />
            </ScrollArea>
            <ScrollArea className="w-64 sm:w-auto">
              <div className="flex p-2 sm:flex-col">
                {[0, 30].map((minute) => {
                  const isCurrentMinute = date && date.getMinutes() === minute;
                  const now = new Date();
                  const isSelectedDateToday =
                    date && date.toDateString() === now.toDateString();
                  const isCurrentHour =
                    date && date.getHours() === now.getHours();

                  const isDisabled =
                    isSelectedDateToday &&
                    isCurrentHour &&
                    minute < now.getMinutes();

                  return (
                    <Button
                      key={minute}
                      size="icon"
                      variant={isCurrentMinute ? "default" : "ghost"}
                      className="aspect-square shrink-0 sm:w-full"
                      onClick={() =>
                        handleTimeChange("minute", minute.toString())
                      }
                      disabled={isDisabled}
                    >
                      {minute < 10 ? `0${minute}` : minute}{" "}
                    </Button>
                  );
                })}
              </div>
              <ScrollBar orientation="horizontal" className="sm:hidden" />
            </ScrollArea>
            <ScrollArea>
              <div className="flex p-2 sm:flex-col">
                {["AM", "PM"].map((ampm) => {
                  const isCurrentAmPm =
                    date &&
                    ((ampm === "AM" && date.getHours() < 12) ||
                      (ampm === "PM" && date.getHours() >= 12));

                  const now = new Date();
                  const isSelectedDateToday =
                    date && date.toDateString() === now.toDateString();

                  const isDisabled =
                    isSelectedDateToday &&
                    ((ampm === "AM" && now.getHours() >= 12) ||
                      (ampm === "PM" &&
                        now.getHours() < 12 &&
                        date &&
                        date.getHours() < 11));

                  return (
                    <Button
                      key={ampm}
                      size="icon"
                      variant={isCurrentAmPm ? "default" : "ghost"}
                      className="aspect-square shrink-0 sm:w-full"
                      onClick={() => handleTimeChange("ampm", ampm)}
                      disabled={isDisabled}
                    >
                      {ampm}
                    </Button>
                  );
                })}
              </div>
            </ScrollArea>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format, addDays, isWeekend } from "date-fns"; // Import addDays and isWeekend

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

  // Define the minimum selectable date as today (start of day)
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Define the maximum selectable date (today + 7 days, end of day)
  const maxDate = addDays(new Date(), 7); // Use date-fns addDays
  maxDate.setHours(23, 59, 59, 999); // Set to end of the 7th day

  // Define business hours (11 AM to 11 PM)
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
      // Apply the same filtering logic to ensure selected date is valid
      if (
        isWeekend(selectedDate) ||
        selectedDate < today ||
        selectedDate > maxDate
      ) {
        console.warn(
          "Attempted to select an invalid date (past, weekend, or too far in future). Ignoring.",
        );
        return; // Do not update if the date is invalid
      }

      if (date) {
        const newDate = new Date(selectedDate);
        newDate.setHours(date.getHours(), date.getMinutes());

        // If the selected date is today, and the current time of day for newDate is in the past,
        // adjust to the earliest selectable time (11 AM for the current day).
        const now = new Date();
        const elevenAMToday = new Date(selectedDate);
        elevenAMToday.setHours(11, 0, 0, 0);

        if (newDate.toDateString() === now.toDateString() && newDate < now) {
          // If the selected date is today, and the time set is already in the past,
          // set it to the current time, or the earliest available time (e.g., 11 AM if earlier than 11 AM).
          const earliestValidTime = Math.max(
            now.getTime(),
            elevenAMToday.getTime(),
          );
          newDate.setTime(earliestValidTime);
        }

        updateDate(newDate);
      } else {
        // If no date is currently selected, set it to the selectedDate
        // Ensure initial selection respects time constraints for today
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
          // For future days, default to 11 AM if no time is explicitly set
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

        // Adjust for AM/PM logic based on current state to maintain integrity
        // Simplified AM/PM handling for 12-hour display conversion
        if (currentAMPM === "PM" && selectedHour < 12 && selectedHour !== 0) {
          // If PM and selected is 1-11, add 12
          newHour = selectedHour + 12;
        } else if (currentAMPM === "AM" && selectedHour === 12) {
          // If AM and selected is 12, make it 12 AM (0 hour)
          newHour = 0;
        } else if (selectedHour === 12 && currentAMPM === "PM") {
          // If selected 12 PM, keep 12
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

      // Check if the new combined date and time is in the past OR outside business hours (11 AM to 11 PM)
      const now = new Date();
      const isToday = newDate.toDateString() === now.toDateString();

      // Ensure time is within 11 AM - 11 PM range
      const newHour = newDate.getHours();
      if (newHour < 11 || newHour > 23) {
        // 11 AM (11) to 11 PM (23)
        console.warn(
          "Attempted to select time outside business hours (11 AM - 11 PM). Ignoring.",
        );
        return;
      }

      if (isToday && newDate < now) {
        console.warn("Attempted to select a past time for today. Ignoring.");
        // Optionally, reset to current time or disallow update
        return;
      }
      updateDate(newDate);
    }
  };

  // Filter function for the Calendar
  const filterDays = (day: Date) => {
    // Disable Saturdays and Sundays
    if (isWeekend(day)) {
      return true;
    }
    // Disable dates before today (already handled by fromDate, but good for explicit filter)
    if (day < today) {
      return false;
    }
    // Disable dates more than 7 days from today
    if (day > maxDate) {
      return true;
    }
    return false; // Enable all other days
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
            fromDate={today} // Restrict past dates
            toDate={maxDate} // Restrict dates beyond 7 days (optional, filter will also handle)
            disabled={filterDays} // Apply the custom filter function
          />
          <div className="flex flex-col divide-y sm:h-[300px] sm:flex-row sm:divide-x sm:divide-y-0">
            {/* Hour Selector */}
            <ScrollArea className="w-64 sm:w-auto">
              <div className="flex p-2 sm:flex-col">
                {hours
                  .slice()
                  .reverse() // Display in descending order for better scroll experience
                  .map((hour) => {
                    const displayHour =
                      hour > 12 ? hour - 12 : hour === 0 ? 12 : hour; // Convert 24-hour to 12-hour format, 0 to 12 AM
                    const isCurrentHour = date && date.getHours() === hour;

                    // Disable hours if they are in the past for the selected day AND it's today
                    const now = new Date();
                    const isSelectedDateToday =
                      date && date.toDateString() === now.toDateString();
                    const isDisabled =
                      isSelectedDateToday &&
                      (hour < now.getHours() || hour < 11 || hour > 23); // Also disable if outside business hours
                    if (
                      isSelectedDateToday &&
                      hour === now.getHours() &&
                      now.getMinutes() > 30
                    ) {
                      // If current minute is past 30, and we only allow 00 or 30, then this hour is effectively passed for new bookings
                      // Or, more simply, disable if the current time is past the target hour
                      // This specific logic depends on how granular you want the "past time" check to be.
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
            {/* Minute Selector */}
            <ScrollArea className="w-64 sm:w-auto">
              <div className="flex p-2 sm:flex-col">
                {[0, 30].map((minute) => {
                  const isCurrentMinute = date && date.getMinutes() === minute;
                  const now = new Date();
                  const isSelectedDateToday =
                    date && date.toDateString() === now.toDateString();
                  const isCurrentHour =
                    date && date.getHours() === now.getHours();

                  // Disable minutes if:
                  // 1. It's today AND
                  // 2. It's the current hour AND
                  // 3. The minute is less than the current minute
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
            {/* AM/PM Selector */}
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

                  // Disable AM/PM if it makes the time go into the past for today
                  const isDisabled =
                    isSelectedDateToday &&
                    ((ampm === "AM" && now.getHours() >= 12) || // Cannot select AM if it's already PM
                      (ampm === "PM" &&
                        now.getHours() < 12 &&
                        date &&
                        date.getHours() < 11)); // Cannot select PM if it's currently AM and selected hour is before business hours (11 AM)

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

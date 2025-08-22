import { useState } from "react";
import { DatePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import moment from "moment";
const DatePickerWithDiablelessCurrentDate = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  console.log(selectedDate, "selectedDate");

  const predefinedBottomRanges = [
    {
      label: (
        <div
          className="border px-2.5 py-1 rounded-lg -mt-1 bg-[#2589F5] text-white font-medium cursor-pointer hover:bg-blue-500 transition-colors"
          onClick={() => {
            setSelectedDate(null);
          }}
        >
          CLEAR
        </div>
      ),
      closeOverlay: false,
      value: () => null,
    },
  ];

  const disabledDate = (current) => {
    const today = moment().startOf("day");
    return moment(current).isBefore(today);
  };
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <div>
        <DatePicker
          format="dd/MM/yyyy hh:mm aa"
          showMeridiem
          ranges={predefinedBottomRanges}
          cleanable={false}
          style={{ width: 265 }}
          value={selectedDate}
          onChange={setSelectedDate}
          shouldDisableDate={disabledDate}
          onShortcutClick={(shortcut) => {
            console.log(shortcut, "Shortcut clicked");
          }}
        />
      </div>
    </div>
  );
};

export default DatePickerWithDiablelessCurrentDate;

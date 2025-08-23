import { useState } from "react";
import { DatePicker } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";

const NormalDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const predefinedBottomRanges = [
    {
      label: (
        <div className="border px-2.5 py-1 rounded-lg -mt-1 bg-[#2589F5] text-white font-medium cursor-pointer hover:bg-blue-500 transition-colors">
          CLEAR
        </div>
      ),
      closeOverlay: false,
      value: () => null,
    },
  ];
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
          onShortcutClick={(shortcut) => {
            console.log(shortcut, "Shortcut clicked");
          }}
        />
      </div>
    </div>
  );
};

export default NormalDatePicker;

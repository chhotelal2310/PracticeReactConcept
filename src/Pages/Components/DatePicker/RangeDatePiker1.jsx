import { DateRangePicker } from "rsuite";
import { FaRegCalendarAlt } from "react-icons/fa";
import "rsuite/dist/rsuite-no-reset.min.css";

import { startOfDay, endOfDay, addDays, subDays } from "date-fns";

const myRanges = [
  {
    label: "today",
    value: [startOfDay(new Date()), endOfDay(new Date())],
  },
  {
    label: "yesterday",
    value: [
      startOfDay(addDays(new Date(), -1)),
      endOfDay(addDays(new Date(), -1)),
    ],
  },
];

const RangeDatePiker1 = () => (
  <div className=" flex justify-center items-center w-full h-screen">
    <div>
      <DateRangePicker
        format="dd/MM/yyyy hh:mm aa"
        // ranges={[]}
        ranges={myRanges}
        // placeholder="select from and to date"
        showOneCalendar
        showMeridiem
        showHeader={true}
        block={false}
        caretAs={FaRegCalendarAlt}
        // cleanable={false}
        // calendarSnapping={false}
        character={"  ⇄  "}
        // disabled={true}
        // loading={false}
        // editable={false}
        // onChange={(date) => {
        //   console.log(date, "date>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        // }}
        // oneTap={false}
        // limitEndYear={600}
        // limitStartYear={100}
        // defaultOpen={true}
        // placement="autoVerticalStart"
        // showWeekNumbers={true}
        // size="md"
      />
    </div>
  </div>
);

export default RangeDatePiker1;

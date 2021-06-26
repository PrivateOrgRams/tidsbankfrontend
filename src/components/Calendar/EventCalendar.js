import React from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useState ,useEffect} from "react";
import { useDispatch, useSelector} from "react-redux";
import {addRequest} from "../../modules/requests"
import { format } from 'date-fns'

const EventCalendar =()=> {
  const dispatch = useDispatch();
  const [disableDateRange, setDisableDateRange] = useState([]);
  const { requests } = useSelector((state) => state);

  useEffect(() => {
    dispatch(addRequest());
    fetchDates();
  }, []);

  const fetchDates = async () => {
    const dates = await requests;
    const disabledDates = dates.map((date) => {
      const start = date.periodStart;
      const end  = date.periodEnd;
      const title  = date.title;
      const ColorCode = 'rgb(' + (Math.floor(Math.random() * 100)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
      return {
        start: start, // start
        end: end, // end
        title  : title,
        backgroundColor: ColorCode
      };
    });
    setDisableDateRange(disabledDates);
  };
 console.log(disableDateRange)
  useEffect(() => {
    setTimeout(() => {
      fetchDates();
    }, 100);
  }, []);
    return (

      <div>
        <FullCalendar
        defaultView = "daygridMonth" plugins={[dayGridPlugin]}
        events={disableDateRange}/>

      </div>


     );

}

export default EventCalendar;









// import React from "react";
// import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'

// const EventCalendar =()=> {


//     return (

//       <div>
//         <FullCalendar
//         defaultView = "daygridMonth" plugins={[dayGridPlugin]}
//         events={ [
//         {
//           title  : 'event2',
//           start  : '2021-06-06',
//           end    : '2021-07-07',
//           textColor: 'yellow'
//         }
//       ]}/>

//       </div>


//      );

// }

// export default EventCalendar;





// import React,{Component} from "react";
// import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'

// class EventCalendar extends Component {
//   state = {  }
//   render() {
//     return (
//       <FullCalendar
//         defaultView = "daygridMonth" plugins={[dayGridPlugin]}
//         events={ [

//         {
//           title  : 'event2',
//           start  : '2021-06-06',
//           end    : '2021-07-07',
//           textColor: 'yellow'
//         }
//       ]

//     }

//     // any other event sources...


//       />

//      );
//   }
// }

// export default EventCalendar;

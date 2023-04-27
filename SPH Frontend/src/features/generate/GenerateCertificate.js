import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import CertiGen from '../outreach/CertiGen';
import { useGetUsersQuery } from '../users/usersApiSlice'
import { useParams } from 'react-router-dom'
import PulseLoader from 'react-spinners/PulseLoader'
import { useGetAnexCQuery } from '../outreach/anexC_ApiSlice'

const App = () => {

  const { id } = useParams()

  const { user } = useGetUsersQuery("usersList", {
    selectFromResult: ({ data }) => ({
        user: data?.entities[id]
      }),
  })

  const { allReports } = useGetAnexCQuery("reportsList", {
    selectFromResult: ({ data }) => ({
        allReports: data?.ids.map((id) => data?.entities[id])
      })
  })
  
  
  if (!user || allReports.length == 0) return <PulseLoader color={"#FFF"} />
  const fullname = (user.lastname + ", " + user.firstname)
  const role = user.roles[0]
  const department = user.department[0]
  const targetReport = allReports && allReports.length > 0 && allReports.filter(obj => Object.values(obj).includes(fullname));
  const points = [];
  const date = [];
  const titles = [];
  const natInv = [];
  targetReport.map((report) => {
    if (report.prep_per1 === fullname) {
      natInv.push(report.prep_type1);
      titles.push(report.project_title)
      const unformattedDate = new Date(report.date_implement);
      const formattedDate = unformattedDate.toLocaleString("en-US", { day: "numeric", month: "long", year: "numeric" });
      console.log(formattedDate);
      date.push(formattedDate)
      if (report.prep_type1 === "Participant" || report.prep_type1 === "Donor") {
        points.push(2);
      } else if (report.prep_type1 === "Game Facilitator") {
        points.push(4);
      } else if (report.prep_type1 === "Facilitator") {
        points.push(6);
      } else if (report.prep_type1 === "Resource Speaker") {
        points.push(8);
      }
    }
    if (report.prep_per2 === fullname) {
      natInv.push(report.prep_type2);
      titles.push(report.project_title)
      const unformattedDate = new Date(report.date_implement);
      const formattedDate = unformattedDate.toLocaleString("en-US", { day: "numeric", month: "long", year: "numeric" });
      console.log(formattedDate);
      date.push(formattedDate)
      if (report.prep_type2 === "Participant" || report.prep_type2 === "Donor") {
        points.push(2);
      } else if (report.prep_type2 === "Game Facilitator") {
        points.push(4);
      } else if (report.prep_type2 === "Facilitator") {
        points.push(6);
      } else if (report.prep_type2 === "Resource Speaker") {
        points.push(8);
      }
    }
    if (report.prep_per3 === fullname) {
      natInv.push(report.prep_type3);
      titles.push(report.project_title)
      const unformattedDate = new Date(report.date_implement);
      const formattedDate = unformattedDate.toLocaleString("en-US", { day: "numeric", month: "long", year: "numeric" });
      console.log(formattedDate);
      date.push(formattedDate)
      if (report.prep_type3 === "Participant" || report.prep_type3 === "Donor") {
        points.push(2);
      } else if (report.prep_type3 === "Game Facilitator") {
        points.push(4);
      } else if (report.prep_type3 === "Facilitator") {
        points.push(6);
      } else if (report.prep_type3 === "Resource Speaker") {
        points.push(8);
      }
    }
    if (report.prep_per4 === fullname) {
      natInv.push(report.prep_type4);
      titles.push(report.project_title)
      const unformattedDate = new Date(report.date_implement);
      const formattedDate = unformattedDate.toLocaleString("en-US", { day: "numeric", month: "long", year: "numeric" });
      console.log(formattedDate);
      date.push(formattedDate)
      if (report.prep_type4 === "Participant" || report.prep_type4 === "Donor") {
        points.push(2);
      } else if (report.prep_type4 === "Game Facilitator") {
        points.push(4);
      } else if (report.prep_type4 === "Facilitator") {
        points.push(6);
      } else if (report.prep_type4 === "Resource Speaker") {
        points.push(8);
      }
    }
    if (report.implement_per1 === fullname) {
      natInv.push(report.implement_type1);
      titles.push(report.project_title)
      const unformattedDate = new Date(report.date_implement);
      const formattedDate = unformattedDate.toLocaleString("en-US", { day: "numeric", month: "long", year: "numeric" });
      console.log(formattedDate);
      date.push(formattedDate)
      if (report.implement_type1 === "Participant" || report.implement_type1 === "Donor") {
        points.push(2);
      } else if (report.implement_type1 === "Game Facilitator") {
        points.push(4);
      } else if (report.implement_type1 === "Facilitator") {
        points.push(6);
      } else if (report.implement_type1 === "Resource Speaker") {
        points.push(8);
      }
    }
    if (report.implement_per2 === fullname) {
      natInv.push(report.implement_type2);
      titles.push(report.project_title)
      const unformattedDate = new Date(report.date_implement);
      const formattedDate = unformattedDate.toLocaleString("en-US", { day: "numeric", month: "long", year: "numeric" });
      console.log(formattedDate);
      date.push(formattedDate)
      if (report.implement_type2 === "Participant" || report.implement_type2 === "Donor") {
        points.push(2);
      } else if (report.implement_type2 === "Game Facilitator") {
        points.push(4);
      } else if (report.implement_type2 === "Facilitator") {
        points.push(6);
      } else if (report.implement_type2 === "Resource Speaker") {
        points.push(8);
      }
    }
    if (report.implement_per3 === fullname) {
      natInv.push(report.implement_type3);
      titles.push(report.project_title)
      const unformattedDate = new Date(report.date_implement);
      const formattedDate = unformattedDate.toLocaleString("en-US", { day: "numeric", month: "long", year: "numeric" });
      console.log(formattedDate);
      date.push(formattedDate)
      if (report.implement_type3 === "Participant" || report.implement_type3 === "Donor") {
        points.push(2);
      } else if (report.implement_type3 === "Game Facilitator") {
        points.push(4);
      } else if (report.implement_type3 === "Facilitator") {
        points.push(6);
      } else if (report.implement_type3 === "Resource Speaker") {
        points.push(8);
      }
    }
    if (report.implement_per4 === fullname) {
      natInv.push(report.implement_type4);
      titles.push(report.project_title)
      const unformattedDate = new Date(report.date_implement);
      const formattedDate = unformattedDate.toLocaleString("en-US", { day: "numeric", month: "long", year: "numeric" });
      console.log(formattedDate);
      date.push(formattedDate)
      if (report.implement_type4 === "Participant" || report.implement_type4 === "Donor") {
        points.push(2);
      } else if (report.implement_type4 === "Game Facilitator") {
        points.push(4);
      } else if (report.implement_type4 === "Facilitator") {
        points.push(6);
      } else if (report.implement_type4 === "Resource Speaker") {
        points.push(8);
      }
    }
    if (report.post_per1 === fullname) {
      natInv.push(report.post_type1);
      titles.push(report.project_title)
      const unformattedDate = new Date(report.date_implement);
      const formattedDate = unformattedDate.toLocaleString("en-US", { day: "numeric", month: "long", year: "numeric" });
      console.log(formattedDate);
      date.push(formattedDate)
      if (report.post_type1 === "Participant" || report.post_type1 === "Donor") {
        points.push(2);
      } else if (report.post_type1 === "Game Facilitator") {
        points.push(4);
      } else if (report.post_type1 === "Facilitator") {
        points.push(6);
      } else if (report.post_type1 === "Resource Speaker") {
        points.push(8);
      }
    }
    if (report.post_per2 === fullname) {
      natInv.push(report.post_type2);
      titles.push(report.project_title)
      const unformattedDate = new Date(report.date_implement);
      const formattedDate = unformattedDate.toLocaleString("en-US", { day: "numeric", month: "long", year: "numeric" });
      console.log(formattedDate);
      date.push(formattedDate)
      if (report.post_type2 === "Participant" || report.post_type2 === "Donor") {
        points.push(2);
      } else if (report.post_type2 === "Game Facilitator") {
        points.push(4);
      } else if (report.post_type2 === "Facilitator") {
        points.push(6);
      } else if (report.post_type2 === "Resource Speaker") {
        points.push(8);
      }
    }
    if (report.post_per3 === fullname) {
      natInv.push(report.post_type3);
      titles.push(report.project_title)
      const unformattedDate = new Date(report.date_implement);
      const formattedDate = unformattedDate.toLocaleString("en-US", { day: "numeric", month: "long", year: "numeric" });
      console.log(formattedDate);
      date.push(formattedDate)
      if (report.post_type3 === "Participant" || report.post_type3 === "Donor") {
        points.push(2);
      } else if (report.post_type3 === "Game Facilitator") {
        points.push(4);
      } else if (report.post_type3 === "Facilitator") {
        points.push(6);
      } else if (report.post_type3 === "Resource Speaker") {
        points.push(8);
      }
    }
    if (report.post_per4 === fullname) {
      natInv.push(report.post_type4);
      titles.push(report.project_title)
      const unformattedDate = new Date(report.date_implement);
      const formattedDate = unformattedDate.toLocaleString("en-US", { day: "numeric", month: "long", year: "numeric" });
      console.log(formattedDate);
      date.push(formattedDate)
      if (report.post_type4 === "Participant" || report.post_type4 === "Donor") {
        points.push(2);
      } else if (report.post_type4 === "Game Facilitator") {
        points.push(4);
      } else if (report.post_type4 === "Facilitator") {
        points.push(6);
      } else if (report.post_type4 === "Resource Speaker") {
        points.push(8);
      }
    }
  });
  function getSum() {
    let array = 0;
    for (let i = 0; i < points.length; i++) {
      array += points[i];
      if (array >= 10) {
        return 10;
      }
    }
    return array;
  }
  const total = getSum()
  return (
  <PDFViewer className='w-screen h-screen'>
    <CertiGen fullname={fullname} role={role} department={department} titles={titles} natInv={natInv} points={points} date={date} total={total}/>
  </PDFViewer>
  );
};

export default App;
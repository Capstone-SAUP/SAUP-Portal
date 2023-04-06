import { useState, useEffect } from "react";
import { useAddNewAnexCMutation } from "./anexC_ApiSlice";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { STATUS } from "../../config/status";
import { useGetUsersQuery } from "../users/usersApiSlice";
import { current } from "@reduxjs/toolkit";
import DatePicker from "react-datepicker";

const OutreachReportForm = ({ filteredOutreach, users }) => {
  // window.addEventListener("beforeunload", function (event) {
  //   event.returnValue = "The information in the document will reset.";
  // });

  const navigate = useNavigate();
  const { user_id } = useAuth();
  const { id } = useParams();

  const { object_id, user_ids, department, lastname } = useGetUsersQuery(
    "usersList",
    {
      selectFromResult: ({ data }) => ({
        object_id: data?.ids.map(
          (id) => data?.entities[id].id
        ),
        user_ids: data?.ids.map(
          (id) => data?.entities[id].user_id
        ),
        lastname: data?.ids.map(
          (id) => data?.entities[id].lastname
        ),
        department: data?.ids.map(
          (id) => data?.entities[id].department
        ),
      }),
    }
  );

  const getCurrentUser = () => {
    try {
      const currentUser = user_ids.indexOf(user_id);
      const currentUserObjectId = object_id[currentUser];
      return currentUserObjectId;
    } catch (error) { }
  };
  // console.log(getCurrentUser());

  const current_user = getCurrentUser();
  const [createReport, { isSuccess, isError, error }] =
    useAddNewAnexCMutation();

  // const currentUserObjectId = object_id[currentUser];
  //     const [prepPhase, setInputFields] = useState([{
  //         fullName:'',
  //         emailAddress:'',
  //         salary:''  
  //     } ]);
  //     const addInputField = ()=>{
  //         setInputFields([...prepPhase, {
  //             fullName:'',
  //             emailAddress:'',
  //             salary:''  
  //         } ])

  //     }
  //     const removeInputFields = (index)=>{
  //         const rows = [...prepPhase];
  //         rows.splice(index, 1);
  //         setInputFields(rows);
  //     }
  //     const handleChange = (index, evnt)=>{

  //     const { name, value } = evnt.target;
  //     const list = [...prepPhase];
  //     list[index][name] = value;
  //     setInputFields(list);
  // }

  // const [title, setTitle] = useState(outreach.title);

  const [user] = useState(current_user);
  const [fullname] = useState(filteredOutreach.fullname);
  const [sponsor_dept, setSponsor_Dept] = useState(filteredOutreach.sponsor_dept);
  const [project_title, setProject_Title] = useState(filteredOutreach.project_title);
  const [target_beneficiary, setBeneficiaries] = useState(filteredOutreach.target_beneficiary);
  const [accomp_obj, setAccomp_Obj] = useState(filteredOutreach.accomp_obj);
  const [venue, setVenue] = useState(filteredOutreach.venue);
  const [date_implement, setDate_Implement] = useState(new Date());
  const [brief_narrative, setBrief_Narrative] = useState(filteredOutreach.brief_narrative);
  const [topics, setTopics] = useState(filteredOutreach.topics);
  const [speakers, setSpeakers] = useState(filteredOutreach.speakers);
  // const [prep_person, setPrep_Person] = useState([]);
  // const [prep_pos, setPrep_Position] = useState([]);
  // const [prep_type, setPrep_Type] = useState([]);
  // const [prep_start, setPrep_Start] = useState([]);
  // const [prep_end, setPrep_End] = useState([]);
  const [prep_per1, setPrep_Per1] = useState(filteredOutreach.prep_per1);
  const [prep_per2, setPrep_Per2] = useState(filteredOutreach.prep_per2);
  const [prep_per3, setPrep_Per3] = useState(filteredOutreach.prep_per3);
  const [prep_per4, setPrep_Per4] = useState(filteredOutreach.prep_per4);
  const [prep_pos1, setPrep_Pos1] = useState(filteredOutreach.prep_pos1);
  const [prep_pos2, setPrep_Pos2] = useState(filteredOutreach.prep_pos2);
  const [prep_pos3, setPrep_Pos3] = useState(filteredOutreach.prep_pos3);
  const [prep_pos4, setPrep_Pos4] = useState(filteredOutreach.prep_pos4);
  const [prep_type1, setPrep_Type1] = useState(filteredOutreach.prep_type1);
  const [prep_type2, setPrep_Type2] = useState(filteredOutreach.prep_type2);
  const [prep_type3, setPrep_Type3] = useState(filteredOutreach.prep_type3);
  const [prep_type4, setPrep_Type4] = useState(filteredOutreach.prep_type4);
  const [prep_start1, setPrep_Start1] = useState(filteredOutreach.prep_start1);
  const [prep_start2, setPrep_Start2] = useState(filteredOutreach.prep_start2);
  const [prep_star3, setPrep_Star3] = useState(filteredOutreach.prep_star3);
  const [prep_star4, setPrep_Star4] = useState(filteredOutreach.prep_star4);
  const [prep_end1, setPrep_End1] = useState(filteredOutreach.prep_end1);
  const [prep_end2, setPrep_End2] = useState(filteredOutreach.prep_end2);
  const [prep_end3, setPrep_End3] = useState(filteredOutreach.prep_end3);
  const [prep_end4, setPrep_End4] = useState(filteredOutreach.prep_end4);
  const [implement_per1, setImplement_Per1] = useState(filteredOutreach.implement_per1);
  const [implement_per2, setImplement_Per2] = useState(filteredOutreach.implement_per2);
  const [implement_per3, setImplement_Per3] = useState(filteredOutreach.implement_per3);
  const [implement_per4, setImplement_Per4] = useState(filteredOutreach.implement_per4);
  const [implement_pos1, setImplement_Pos1] = useState(filteredOutreach.implement_pos1);
  const [implement_pos2, setImplement_Pos2] = useState(filteredOutreach.implement_pos2);
  const [implement_pos3, setImplement_Pos3] = useState(filteredOutreach.implement_pos3);
  const [implement_type1, setImplement_Type1] = useState(filteredOutreach.implement_type1);
  const [implement_type2, setImplement_Type2] = useState(filteredOutreach.implement_type2);
  const [implement_pos4, setImplement_Pos4] = useState(filteredOutreach.implement_pos4);
  const [implement_type3, setImplement_Type3] = useState(filteredOutreach.implement_type3);
  const [implement_type4, setImplement_Type4] = useState(filteredOutreach.implement_type4);
  const [implement_start1, setImplement_Start1] = useState(filteredOutreach.implement_start1);
  const [implement_start2, setImplement_Start2] = useState(filteredOutreach.implement_start2);
  const [implement_star3, setImplement_Star3] = useState(filteredOutreach.implement_star3);
  const [implement_star4, setImplement_Star4] = useState(filteredOutreach.implement_star4);
  const [implement_end1, setImplement_End1] = useState(filteredOutreach.implement_end1);
  const [implement_end2, setImplement_End2] = useState(filteredOutreach.implement_end2);
  const [implement_end3, setImplement_End3] = useState(filteredOutreach.implement_end3);
  const [implement_end4, setImplement_End4] = useState(filteredOutreach.implement_end4);
  const [post_per1, setPost_Per1] = useState(filteredOutreach.post_per1);
  const [post_per2, setPost_Per2] = useState(filteredOutreach.post_per2);
  const [post_per3, setPost_Per3] = useState(filteredOutreach.post_per3);
  const [post_per4, setPost_Per4] = useState(filteredOutreach.post_per4);
  const [post_pos1, setPost_Pos1] = useState(filteredOutreach.post_pos1);
  const [post_pos2, setPost_Pos2] = useState(filteredOutreach.post_pos2);
  const [post_pos3, setPost_Pos3] = useState(filteredOutreach.post_pos3);
  const [post_type1, setPost_Type1] = useState(filteredOutreach.post_type1);
  const [post_type2, setPost_Type2] = useState(filteredOutreach.post_type2);
  const [post_pos4, setPost_Pos4] = useState(filteredOutreach.post_pos4);
  const [post_type3, setPost_Type3] = useState(filteredOutreach.post_type3);
  const [post_type4, setPost_Type4] = useState(filteredOutreach.post_type4);
  const [post_start1, setPost_Start1] = useState(filteredOutreach.post_start1);
  const [post_start2, setPost_Start2] = useState(filteredOutreach.post_start2);
  const [post_star3, setPost_Star3] = useState(filteredOutreach.post_star3);
  const [post_star4, setPost_Star4] = useState(filteredOutreach.post_star4);
  const [post_end1, setPost_End1] = useState(filteredOutreach.post_end1);
  const [post_end2, setPost_End2] = useState(filteredOutreach.post_end2);
  const [post_end3, setPost_End3] = useState(filteredOutreach.post_end3);
  const [post_end4, setPost_End4] = useState(filteredOutreach.post_end4);
  const [learnings1, setLearnings1] = useState(filteredOutreach.learnings1);
  const [learnings2, setLearnings2] = useState(filteredOutreach.learnings2);
  const [learnings3, setLearnings3] = useState(filteredOutreach.learnings3);
  const [learnings4, setLearnings4] = useState(filteredOutreach.learnings4);
  const [learnings5, setLearnings5] = useState(filteredOutreach.learnings5);
  const [strengths1, setStrengths1] = useState(filteredOutreach.strengths1);
  const [strengths2, setStrengths2] = useState(filteredOutreach.strengths2);
  const [strengths3, setStrengths3] = useState(filteredOutreach.strengths3);
  const [strengths4, setStrengths4] = useState(filteredOutreach.strengths4);
  const [strengths5, setStrengths5] = useState(filteredOutreach.strengths5);
  const [weakness1, setWeakness1] = useState(filteredOutreach.weakness1);
  const [weakness2, setWeakness2] = useState(filteredOutreach.weakness2);
  const [weakness3, setWeakness3] = useState(filteredOutreach.weakness3);
  const [weakness4, setWeakness4] = useState(filteredOutreach.weakness4);
  const [weakness5, setWeakness5] = useState(filteredOutreach.weakness5);
  const [improvement1, setImprovement1] = useState(filteredOutreach.improvement1);
  const [improvement2, setImprovement2] = useState(filteredOutreach.improvement2);
  const [improvement3, setImprovement3] = useState(filteredOutreach.improvement3);
  const [improvement4, setImprovement4] = useState(filteredOutreach.improvement4);
  const [improvement5, setImprovement5] = useState(filteredOutreach.improvement5);
  const [act_partici1, setAct_Partici1] = useState(filteredOutreach.act_partici1);
  const [act_partici2, setAct_Partici2] = useState(filteredOutreach.act_partici2);
  const [act_partici3, setAct_Partici3] = useState(filteredOutreach.act_partici3);
  const [particulars1, setParticulars1] = useState(filteredOutreach.particulars1);
  const [particulars2, setParticulars2] = useState(filteredOutreach.particulars2);
  const [particulars3, setParticulars3] = useState(filteredOutreach.particulars3);
  const [amount1, setAmount1] = useState(filteredOutreach.amount1);
  const [amount2, setAmount2] = useState(filteredOutreach.amount2);
  const [amount3, setAmount3] = useState(filteredOutreach.amount3);
  const [amount_total, setAmount_Total] = useState(filteredOutreach.amount_total);
  const [proj_rep, setProj_rep] = useState(filteredOutreach.proj_rep);
  const [designation1, setDesignation1] = useState(filteredOutreach.designation1);
  const [adviser_name, setAdviser_name] = useState(filteredOutreach.adviser_name);
  const [stud_org, setStud_org] = useState(filteredOutreach.stud_org);
  const [cscb_rep, setCscb_rep] = useState(filteredOutreach.cscb_rep);
  const [dept_rep, setDept_rep] = useState(filteredOutreach.dept_rep);
  const [dean, setDean] = useState(filteredOutreach.dean);
  const [designation2, setDesignation2] = useState(filteredOutreach.designation2);
  const [image1, setImage1] = useState(filteredOutreach.image1);
  const [caption1, setCaption1] = useState(filteredOutreach.caption1);
  const [caption2, setCaption2] = useState(filteredOutreach.caption2);
  const [image2, setImage2] = useState(filteredOutreach.image2);

  useEffect(() => {
    if (isSuccess) {
      setSponsor_Dept("")
      setProject_Title("")
      setBeneficiaries("")
      setAccomp_Obj("")
      setVenue("")
      setDate_Implement("")
      setBrief_Narrative("")
      setTopics("")
      setSpeakers("")
      // setPrep_Person([])
      // setPrep_Position([])
      // setPrep_Type([])
      // setPrep_Start([])
      // setPrep_End([])
      setPrep_Per1("")
      setPrep_Per2("")
      setPrep_Per3("")
      setPrep_Per4("")
      setPrep_Pos1("")
      setPrep_Pos2("")
      setPrep_Pos3("")
      setPrep_Type1("")
      setPrep_Type2("")
      setPrep_Pos4("")
      setPrep_Type3("")
      setPrep_Type4("")
      setPrep_Start1("")
      setPrep_Start2("")
      setPrep_Star3("")
      setPrep_Star4("")
      setPrep_End1("")
      setPrep_End2("")
      setPrep_End3("")
      setPrep_End4("")
      setImplement_Per1("")
      setImplement_Per2("")
      setImplement_Per3("")
      setImplement_Per4("")
      setImplement_Pos1("")
      setImplement_Pos2("")
      setImplement_Pos3("")
      setImplement_Type1("")
      setImplement_Type2("")
      setImplement_Pos4("")
      setImplement_Type3("")
      setImplement_Type4("")
      setImplement_Start1("")
      setImplement_Start2("")
      setImplement_Star3("")
      setImplement_Star4("")
      setImplement_End1("")
      setImplement_End2("")
      setImplement_End3("")
      setImplement_End4("")
      setPost_Per1("")
      setPost_Per2("")
      setPost_Per3("")
      setPost_Per4("")
      setPost_Pos1("")
      setPost_Pos2("")
      setPost_Pos3("")
      setPost_Type1("")
      setPost_Type2("")
      setPost_Pos4("")
      setPost_Type3("")
      setPost_Type4("")
      setPost_Start1("")
      setPost_Start2("")
      setPost_Star3("")
      setPost_Star4("")
      setPost_End1("")
      setPost_End2("")
      setPost_End3("")
      setPost_End4("")
      setLearnings1("")
      setLearnings2("")
      setLearnings3("")
      setLearnings4("")
      setLearnings5("")
      setStrengths1("")
      setStrengths2("")
      setStrengths3("")
      setStrengths4("")
      setStrengths5("")
      setWeakness1("")
      setWeakness2("")
      setWeakness3("")
      setWeakness4("")
      setWeakness5("")
      setImprovement1("")
      setImprovement2("")
      setImprovement3("")
      setImprovement4("")
      setImprovement5("")
      setAct_Partici1("")
      setAct_Partici2("")
      setAct_Partici3("")
      setParticulars1("")
      setParticulars2("")
      setParticulars3("")
      setAmount1("")
      setAmount2("")
      setAmount3("")
      setAmount_Total("")
      setProj_rep("")
      setDesignation1("")
      setAdviser_name("")
      setStud_org("")
      setCscb_rep("")
      setDept_rep("")
      setDean("")
      setDesignation2("")
      setImage1("")
      setCaption1("")
      setCaption2("")
      setImage2("")
    }
  }, [isSuccess]);

  // const onTitleChanged = (e) => setTitle(e.target.value)a;

  // const [title, setTitle
  const onSponsor_DeptChanged = (e) => setSponsor_Dept(e.target.value);
  const onProject_TitleChanged = (e) => setProject_Title(e.target.value);
  const onBeneficiariesChanged = (e) => setBeneficiaries(e.target.value);
  const onAccomp_ObjChanged = (e) => setAccomp_Obj(e.target.value);
  const onVenueChanged = (e) => setVenue(e.target.value);
  const onDate_ImplementChanged = (e) => setDate_Implement(e.target.value);
  const onBrief_NarrativeChanged = (e) => setBrief_Narrative(e.target.value);
  const onTopicsChanged = (e) => setTopics(e.target.value);
  const onSpeakersChanged = (e) => setSpeakers(e.target.value);
  const onPrep_Per1Changed = (e) => setPrep_Per1(e.target.value);
  const onPrep_Per2Changed = (e) => setPrep_Per2(e.target.value);
  const onPrep_Per3Changed = (e) => setPrep_Per3(e.target.value);
  const onPrep_Per4Changed = (e) => setPrep_Per4(e.target.value);
  const onPrep_Pos1Changed = (e) => setPrep_Pos1(e.target.value);
  const onPrep_Pos2Changed = (e) => setPrep_Pos2(e.target.value);
  const onPrep_Pos3Changed = (e) => setPrep_Pos3(e.target.value);
  const onPrep_Type1Changed = (e) => setPrep_Type1(e.target.value);
  const onPrep_Type2Changed = (e) => setPrep_Type2(e.target.value);
  const onPrep_Pos4Changed = (e) => setPrep_Pos4(e.target.value);
  const onPrep_Type3Changed = (e) => setPrep_Type3(e.target.value);
  const onPrep_Type4Changed = (e) => setPrep_Type4(e.target.value);
  const onPrep_Start1Changed = (e) => setPrep_Start1(e.target.value);
  const onPrep_Start2Changed = (e) => setPrep_Start2(e.target.value);
  const onPrep_Star3Changed = (e) => setPrep_Star3(e.target.value);
  const onPrep_Star4Changed = (e) => setPrep_Star4(e.target.value);
  const onPrep_End1Changed = (e) => setPrep_End1(e.target.value);
  const onPrep_End2Changed = (e) => setPrep_End2(e.target.value);
  const onPrep_End3Changed = (e) => setPrep_End3(e.target.value);
  const onPrep_End4Changed = (e) => setPrep_End4(e.target.value);
  const onImplement_Per1Changed = (e) => setImplement_Per1(e.target.value);
  const onImplement_Per2Changed = (e) => setImplement_Per2(e.target.value);
  const onImplement_Per3Changed = (e) => setImplement_Per3(e.target.value);
  const onImplement_Per4Changed = (e) => setImplement_Per4(e.target.value);
  const onImplement_Pos1Changed = (e) => setImplement_Pos1(e.target.value);
  const onImplement_Pos2Changed = (e) => setImplement_Pos2(e.target.value);
  const onImplement_Pos3Changed = (e) => setImplement_Pos3(e.target.value);
  const onImplement_Type1Changed = (e) => setImplement_Type1(e.target.value);
  const onImplement_Type2Changed = (e) => setImplement_Type2(e.target.value);
  const onImplement_Pos4Changed = (e) => setImplement_Pos4(e.target.value);
  const onImplement_Type3Changed = (e) => setImplement_Type3(e.target.value);
  const onImplement_Type4Changed = (e) => setImplement_Type4(e.target.value);
  const onImplement_Start1Changed = (e) => setImplement_Start1(e.target.value);
  const onImplement_Start2Changed = (e) => setImplement_Start2(e.target.value);
  const onImplement_Star3Changed = (e) => setImplement_Star3(e.target.value);
  const onImplement_Star4Changed = (e) => setImplement_Star4(e.target.value);
  const onImplement_End1Changed = (e) => setImplement_End1(e.target.value);
  const onImplement_End2Changed = (e) => setImplement_End2(e.target.value);
  const onImplement_End3Changed = (e) => setImplement_End3(e.target.value);
  const onImplement_End4Changed = (e) => setImplement_End4(e.target.value);
  const onPost_Per1Changed = (e) => setPost_Per1(e.target.value);
  const onPost_Per2Changed = (e) => setPost_Per2(e.target.value);
  const onPost_Per3Changed = (e) => setPost_Per3(e.target.value);
  const onPost_Per4Changed = (e) => setPost_Per4(e.target.value);
  const onPost_Pos1Changed = (e) => setPost_Pos1(e.target.value);
  const onPost_Pos2Changed = (e) => setPost_Pos2(e.target.value);
  const onPost_Pos3Changed = (e) => setPost_Pos3(e.target.value);
  const onPost_Type1Changed = (e) => setPost_Type1(e.target.value);
  const onPost_Type2Changed = (e) => setPost_Type2(e.target.value);
  const onPost_Pos4Changed = (e) => setPost_Pos4(e.target.value);
  const onPost_Type3Changed = (e) => setPost_Type3(e.target.value);
  const onPost_Type4Changed = (e) => setPost_Type4(e.target.value);
  const onPost_Start1Changed = (e) => setPost_Start1(e.target.value);
  const onPost_Start2Changed = (e) => setPost_Start2(e.target.value);
  const onPost_Star3Changed = (e) => setPost_Star3(e.target.value);
  const onPost_Star4Changed = (e) => setPost_Star4(e.target.value);
  const onPost_End1Changed = (e) => setPost_End1(e.target.value);
  const onPost_End2Changed = (e) => setPost_End2(e.target.value);
  const onPost_End3Changed = (e) => setPost_End3(e.target.value);
  const onPost_End4Changed = (e) => setPost_End4(e.target.value);
  const onLearnings1Changed = (e) => setLearnings1(e.target.value);
  const onLearnings2Changed = (e) => setLearnings2(e.target.value);
  const onLearnings3Changed = (e) => setLearnings3(e.target.value);
  const onLearnings4Changed = (e) => setLearnings4(e.target.value);
  const onLearnings5Changed = (e) => setLearnings5(e.target.value);
  const onStrengths1Changed = (e) => setStrengths1(e.target.value);
  const onStrengths2Changed = (e) => setStrengths2(e.target.value);
  const onStrengths3Changed = (e) => setStrengths3(e.target.value);
  const onStrengths4Changed = (e) => setStrengths4(e.target.value);
  const onStrengths5Changed = (e) => setStrengths5(e.target.value);
  const onWeakness1Changed = (e) => setWeakness1(e.target.value);
  const onWeakness2Changed = (e) => setWeakness2(e.target.value);
  const onWeakness3Changed = (e) => setWeakness3(e.target.value);
  const onWeakness4Changed = (e) => setWeakness4(e.target.value);
  const onWeakness5Changed = (e) => setWeakness5(e.target.value);
  const onImprovement1Changed = (e) => setImprovement1(e.target.value);
  const onImprovement2Changed = (e) => setImprovement2(e.target.value);
  const onImprovement3Changed = (e) => setImprovement3(e.target.value);
  const onImprovement4Changed = (e) => setImprovement4(e.target.value);
  const onImprovement5Changed = (e) => setImprovement5(e.target.value);
  const onAct_Partici1Changed = (e) => setAct_Partici1(e.target.value);
  const onAct_Partici2Changed = (e) => setAct_Partici2(e.target.value);
  const onAct_Partici3Changed = (e) => setAct_Partici3(e.target.value);
  const onParticulars1Changed = (e) => setParticulars1(e.target.value);
  const onParticulars2Changed = (e) => setParticulars2(e.target.value);
  const onParticulars3Changed = (e) => setParticulars3(e.target.value);
  const onAmount1Changed = (e) => setAmount1(e.target.value);
  const onAmount2Changed = (e) => setAmount2(e.target.value);
  const onAmount3Changed = (e) => setAmount3(e.target.value);
  const onAmount_TotalChanged = (e) => setAmount_Total(e.target.value);
  const OnProj_repChanged = (e) => setProj_rep(e.target.value);
  const OnDesignation1Changed = (e) => setDesignation1(e.target.value);
  const OnAdviser_nameChanged = (e) => setAdviser_name(e.target.value);
  const OnStud_orgChanged = (e) => setStud_org(e.target.value);
  const OnCscb_repChanged = (e) => setCscb_rep(e.target.value);
  const OnDept_repChanged = (e) => setDept_rep(e.target.value);
  const OnDeanChanged = (e) => setDean(e.target.value);
  const OnDesignation2Changed = (e) => setDesignation2(e.target.value);
  const onImage1Changed = (e) => setImage1(e.target.value);
  const onCaption1Changed = (e) => setCaption1(e.target.value);
  const onCaption2Changed = (e) => setCaption2(e.target.value);
  const onImage2Changed = (e) => setImage2(e.target.value);

  // const canSave =
  //   [
  //     user,
  //     sponsor_dept,
  //     project_title,
  //     target_beneficiary,
  //     accomp_obj,
  //     venue,
  //     date_implement,
  //     brief_narrative,
  //     topics,
  //     speakers,
  //     prep_per1,
  //     prep_per2,
  //     prep_per3,
  //     prep_per4,
  //     prep_pos1,
  //     prep_pos2,
  //     prep_pos3,
  //     prep_type1,
  //     prep_type2,
  //     prep_pos4,
  //     prep_type3,
  //     prep_type4,
  //     prep_start1,
  //     prep_start2,
  //     prep_star3,
  //     prep_star4,
  //     prep_end1,
  //     prep_end2,
  //     prep_end3,
  //     prep_end4,
  //     implement_per1,
  //     implement_per2,
  //     implement_per3,
  //     implement_per4,
  //     implement_pos1,
  //     implement_pos2,
  //     implement_pos3,
  //     implement_type1,
  //     implement_type2,
  //     implement_pos4,
  //     implement_type3,
  //     implement_type4,
  //     implement_start1,
  //     implement_start2,
  //     implement_star3,
  //     implement_star4,
  //     implement_end1,
  //     implement_end2,
  //     implement_end3,
  //     implement_end4,
  //     post_per1,
  //     post_per2,
  //     post_per3,
  //     post_per4,
  //     post_pos1,
  //     post_pos2,
  //     post_pos3,
  //     post_type1,
  //     post_type2,
  //     post_pos4,
  //     post_type3,
  //     post_type4,
  //     post_start1,
  //     post_start2,
  //     post_star3,
  //     post_star4,
  //     post_end1,
  //     post_end2,
  //     post_end3,
  //     post_end4,
  //     learnings1,
  //     learnings2,
  //     learnings3,
  //     learnings4,
  //     learnings5,
  //     strengths1,
  //     strengths2,
  //     strengths3,
  //     strengths4,
  //     strengths5,
  //     weakness1,
  //     weakness2,
  //     weakness3,
  //     weakness4,
  //     weakness5,
  //     improvement1,
  //     improvement2,
  //     improvement3,
  //     improvement4,
  //     improvement5,
  //     act_partici1,
  //     act_partici2,
  //     act_partici3,
  //     particulars1,
  //     particulars2,
  //     particulars3,
  //     amount1,
  //     amount2,
  //     amount3,
  //     amount_total,
  //     image1,
  //     caption1,
  //     caption2,
  //     image2,
  //   ].every(Boolean) && !isLoading;

  const onSaveReportClicked = async (e) => {
    e.preventDefault();
    await createReport({
      user,
      fullname,
      sponsor_dept,
      project_title,
      target_beneficiary,
      accomp_obj,
      venue,
      date_implement,
      brief_narrative,
      topics,
      speakers,
      prep_per1,
      prep_per2,
      prep_per3,
      prep_per4,
      prep_pos1,
      prep_pos2,
      prep_pos3,
      prep_type1,
      prep_type2,
      prep_pos4,
      prep_type3,
      prep_type4,
      prep_start1,
      prep_start2,
      prep_star3,
      prep_star4,
      prep_end1,
      prep_end2,
      prep_end3,
      prep_end4,
      implement_per1,
      implement_per2,
      implement_per3,
      implement_per4,
      implement_pos1,
      implement_pos2,
      implement_pos3,
      implement_type1,
      implement_type2,
      implement_pos4,
      implement_type3,
      implement_type4,
      implement_start1,
      implement_start2,
      implement_star3,
      implement_star4,
      implement_end1,
      implement_end2,
      implement_end3,
      implement_end4,
      post_per1,
      post_per2,
      post_per3,
      post_per4,
      post_pos1,
      post_pos2,
      post_pos3,
      post_type1,
      post_type2,
      post_pos4,
      post_type3,
      post_type4,
      post_start1,
      post_start2,
      post_star3,
      post_star4,
      post_end1,
      post_end2,
      post_end3,
      post_end4,
      learnings1,
      learnings2,
      learnings3,
      learnings4,
      learnings5,
      strengths1,
      strengths2,
      strengths3,
      strengths4,
      strengths5,
      weakness1,
      weakness2,
      weakness3,
      weakness4,
      weakness5,
      improvement1,
      improvement2,
      improvement3,
      improvement4,
      improvement5,
      act_partici1,
      act_partici2,
      act_partici3,
      particulars1,
      particulars2,
      particulars3,
      amount1,
      amount2,
      amount3,
      amount_total,
      proj_rep,
      designation1,
      adviser_name,
      stud_org,
      cscb_rep,
      dept_rep,
      dean,
      designation2,
      image1,
      caption1,
      caption2,
      image2,
    });
    alert("Saved!");
    navigate("/dash/employee");
  };

  const list = Object.values(STATUS).map((status) => {
    return (
      <option key={status} value={status}>
        {" "}
        {status}
      </option>
    );
  });

  const created = new Date(filteredOutreach.createdAt).toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  const updated = new Date(filteredOutreach.updatedAt).toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  const options = users.map((user) => {
    return (
      <option className="" key={user.lastname + ", " + user.firstname} value={user.lastname + ", " + user.firstname}>
        {user.user_id + " | " + user.lastname + ", " + user.firstname}
      </option>
    );
  });

  // const addInput = () => {
  //   setPrep_Person([...prep_person, '']); // add a new input with an empty string value
  // };

  // const addPosition = () => {
  //   setPrep_Position([...prep_pos, '']); // add a new input with an empty string value
  // };

  // const addType = () => {
  //   setPrep_Type([...prep_type, '']); // add a new input with an empty string value
  // };

  // const addStart = () => {
  //   setPrep_Start([...prep_start, '']); // add a new input with an empty string value
  // };

  // const addEnd = () => {
  //   setPrep_End([...prep_end, '']); // add a new input with an empty string value
  // };


  const errClass = isError ? "errmsg" : "offscreen";

  const errContent = error?.data?.message ?? "";

  // let deleteButton = null;
  // if (isAdmin) {
  //   deleteButton = (
  //     <button
  //       className="icon-button-black"
  //       title="Delete"
  //       onClick={onDeleteOutreachClicked}
  //     >
  //       <FontAwesomeIcon icon={faTrashCan} />
  //     </button>
  //   );
  // }

  const content = (
    <>
      {/* <img
        className=" w-1/2 h-screen float-right mix-blend-multiply object-cover "
        src={require("../../img/background.jpg")}
        alt="background"
      ></img> */}
      <p className={errClass}>{errContent}</p>
      <form className="h-full full grid gap-3 px-20 text-black">
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
          <div className="container max-w-screen-lg mx-auto">
            <div>
              <h2 className="font-semibold text-xl">
                Implementation Report Form
              </h2>
              <p className="mb-6 text-base">
                The form is both for student and employee initiated activities
                and should be submitted within one (1) month after the activity.
              </p>

              <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  {/* <div className="text-gray-600">
                    <div className="mb-[756px]">
                      <p className="font-medium text-lg">Outreach Details</p>
                      <p>Please fill out all the blank fields.</p>
                    </div>
                    <div>
                      <p className="font-medium text-lg">
                        List of Actual Volunteers and Type of Participation :
                      </p>
                      <p>Please fill out all the blank fields.</p>
                    </div>

                  </div> */}

                  <div className="lg:col-span-3">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-9">
                      <div className="md:col-span-2 md:row-span-6 text-gray-600">
                        <div className="">
                          <p className="font-medium text-lg">
                            Outreach Details
                          </p>
                          <p>Please fill out all the blank fields.</p>
                        </div>
                      </div>
                      <div className="md:col-span-7">
                        <label htmlFor="sponsor_dept">
                          Sponsoring Department(s)/ Proponent(s) :
                        </label>
                        <input
                          type="text"
                          name="sponsor_dept"
                          id="sponsor_dept"
                          className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                          value={sponsor_dept}
                          onChange={onSponsor_DeptChanged}
                        />
                      </div>
                      <div className="md:col-span-7">
                        <label htmlFor="project_title">Project Title :</label>
                        <input
                          type="text"
                          name="project_title"
                          id="project_title"
                          className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                          value={project_title}
                          onChange={onProject_TitleChanged}
                        />
                      </div>
                      <div className="md:col-span-7">
                        <label htmlFor="target_beneficiary">
                          Beneficiaries :
                        </label>
                        <input
                          type="text"
                          name="target_beneficiary"
                          id="target_beneficiary"
                          className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                          value={target_beneficiary}
                          onChange={onBeneficiariesChanged}
                        />
                      </div>
                      <div className="md:col-span-7">
                        <label htmlFor="accomp_obj">
                          Accomplished Objectives :
                        </label>
                        <input
                          type="text"
                          name="accomp_obj"
                          id="accomp_obj"
                          className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                          value={accomp_obj}
                          onChange={onAccomp_ObjChanged}
                        />
                      </div>
                      <div className="md:col-span-7">
                        <label htmlFor="venue">Venue of CES Activity :</label>
                        <input
                          type="text"
                          name="venue"
                          id="venue"
                          className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                          value={venue}
                          onChange={onVenueChanged}
                        />
                      </div>
                      <div className="md:col-span-7">
                        <label htmlFor="date_implement">
                          Date/Time Implemented :
                        </label>
                        <DatePicker type="text"
                          name="date_implement"
                          id="date_implement" className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50" selected={date_implement} onChange={(date) => setDate_Implement(date)} dateFormat="MMMM d, yyyy"/>
                      </div>
                      <div className="md:col-span-2"></div>
                      <div className="md:col-span-7">
                        <label htmlFor="brief_narrative">
                          Brief Narrative :
                        </label>
                        <textarea
                          type="text"
                          name="brief_narrative"
                          id="brief_narrative"
                          className="h-44 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={brief_narrative}
                          onChange={onBrief_NarrativeChanged}
                        />
                      </div>
                      <div className="md:col-span-2 text-gray-600">
                        <p className="font-medium text-lg">
                          Topic(s) Discussed and Resource
                          Speaker(s)/Facilitator(s),
                        </p>
                        <p>(if applicable)</p>
                      </div>
                      <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1 md:grid-cols-2">
                        <div className="">
                          <label htmlFor="topics">Topics</label>
                          <textarea
                            type="textarea"
                            name="topics"
                            id="topics"
                            className="h-44 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={topics}
                            onChange={onTopicsChanged}
                            placeholder=""
                          />
                        </div>
                        <div className="">
                          <label htmlFor="speakers">Speakers</label>
                          <textarea
                            type="textarea"
                            name="speakers"
                            id="speakers"
                            className="h-44 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={speakers}
                            onChange={onSpeakersChanged}
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="md:col-span-2 md:row-span-6 text-gray-600">
                        <p className="font-medium text-lg">
                          List of Actual Volunteers and Type of Participation:
                        </p>
                      </div>
                      <div className="md:col-span-2 text-base font-semibold text-gray-600">
                        {" "}
                        Preparatory Phase
                      </div>
                      <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1 md:grid-cols-4">
                        <div className="md:col-span-1">
                          <label htmlFor="country">Name of Volunteer</label>
                          <select
                            id="prep_per2"
                            name="prep_per2"
                            className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            required
                            value={prep_per1}
                            onChange={onPrep_Per1Changed}
                          >
                            {options}
                          </select>
                          <select
                            id="prep_per2"
                            name="prep_per2"
                            className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            required
                            value={prep_per2}
                            onChange={onPrep_Per2Changed}
                          >
                            {options}
                          </select>
                          <select
                            id="prep_per3"
                            name="prep_per3"
                            className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            required
                            value={prep_per3}
                            onChange={onPrep_Per3Changed}
                          >
                            {options}
                          </select>
                          <select
                            id="prep_per4"
                            name="prep_per4"
                            className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            required
                            value={prep_per4}
                            onChange={onPrep_Per4Changed}
                          >
                            {options}
                          </select>
                        </div>
                        <div className="md:col-span-1">
                          <label htmlFor="country">Position/Designation</label>
                          <select
                            id="user2"
                            name="user2"
                            className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={prep_pos1}
                            onChange={onPrep_Pos1Changed}
                          >
                            <option value="Facilitator">Facilitator</option>
                            <option value="Participant">Participant</option>
                            <option value="Student">Student</option>
                            <option value="Employee">Employee</option>
                          </select>
                          <select
                            id="user2"
                            name="user2"
                            className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={prep_pos2}
                            onChange={onPrep_Pos2Changed}
                          >
                            <option value="Facilitator">Facilitator</option>
                            <option value="Participant">Participant</option>
                            <option value="Student">Student</option>
                            <option value="Employee">Employee</option>
                          </select>
                          <select
                            id="user3"
                            name="user3"
                            className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={prep_pos3}
                            onChange={onPrep_Pos3Changed}
                          >
                            <option value="Facilitator">Facilitator</option>
                            <option value="Participant">Participant</option>
                            <option value="Student">Student</option>
                            <option value="Employee">Employee</option>
                          </select>
                          <select
                            id="user4"
                            name="user4"
                            className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={prep_pos4}
                            onChange={onPrep_Pos4Changed}
                          >
                            <option value="Facilitator">Facilitator</option>
                            <option value="Participant">Participant</option>
                            <option value="Student">Student</option>
                            <option value="Employee">Employee</option>
                          </select>
                        </div>

                        <div className="md:col-span-1 md:text-">
                          <label htmlFor="country">Type of Participation</label>
                          <select
                            id="user2"
                            name="user2"
                            className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={prep_type1}
                            onChange={onPrep_Type1Changed}
                          >
                            <option value="Facilitator">Facilitator</option>
                            <option value="Participant">Participant</option>
                            <option value="Game Facilitator">
                              Game Facilitator
                            </option>
                            <option value="Donor">Donor</option>
                            <option value="Resource Speaker">
                              Resource Speaker
                            </option>
                          </select>
                          <select
                            id="user2"
                            name="user2"
                            className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={prep_type2}
                            onChange={onPrep_Type2Changed}
                          >
                            <option value="Facilitator">Facilitator</option>
                            <option value="Participant">Participant</option>
                            <option value="Game Facilitator">
                              Game Facilitator
                            </option>
                            <option value="Donor">Donor</option>
                            <option value="Resource Speaker">
                              Resource Speaker
                            </option>
                          </select>
                          <select
                            id="user3"
                            name="user3"
                            className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={prep_type3}
                            onChange={onPrep_Type3Changed}
                          >
                            <option value="Facilitator">Facilitator</option>
                            <option value="Participant">Participant</option>
                            <option value="Game Facilitator">
                              Game Facilitator
                            </option>
                            <option value="Donor">Donor</option>
                            <option value="Resource Speaker">
                              Resource Speaker
                            </option>
                          </select>
                          <select
                            id="user4"
                            name="user4"
                            className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={prep_type4}
                            onChange={onPrep_Type4Changed}
                          >
                            <option value="Facilitator">Facilitator</option>
                            <option value="Participant">Participant</option>
                            <option value="Game Facilitator">
                              Game Facilitator
                            </option>
                            <option value="Donor">Donor</option>
                            <option value="Resource Speaker">
                              Resource Speaker
                            </option>
                          </select>
                        </div>

                        {/* <label htmlFor="country">Position/Designation</label>
                          {prep_pos.map((prep_pos, index) => (
                            <select
                            id="prep_pos"
                            name="prep_pos"
                            className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            required
                            value={prep_pos}
                            key={index}
                            onChange={(event) => onPrep_PositionChanged(event, index)}
                          >
                            <option value="Facilitator">Facilitator</option>
                            <option value="Participant">Participant</option>
                            <option value="Student">Student</option>
                            <option value="Employee">Employee</option>
                          </select>
                             ))}
                          <button type="button" onClick={addPosition}>Add Input</button>
                          </div> */}

                        <div className="grid md:col-span-1 grid-cols-1 md:grid-cols-2">
                          <div className="md:col-span-1">
                            <label htmlFor="country">Start Time</label>
                            <input
                              type="time"
                              id="prep_start1"
                              name="prep_start1"
                              value={prep_start1}
                              className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                              onChange={onPrep_Start1Changed}
                            ></input>
                            <input
                              type="time"
                              id="prep_start2"
                              name="prep_start2"
                              value={prep_start2}
                              className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                              onChange={onPrep_Start2Changed}
                            ></input>
                            <input
                              type="time"
                              id="prep_star3"
                              name="sprep_star3"
                              value={prep_star3}
                              className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                              onChange={onPrep_Star3Changed}
                            ></input>
                            <input
                              type="time"
                              id="prep_star4"
                              name="sprep_star4"
                              value={prep_star4}
                              className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                              onChange={onPrep_Star4Changed}
                            ></input>
                          </div>

                          <div className="md:col-span-1">
                            <label htmlFor="country">End Time</label>
                            <input
                              type="time"
                              id="prep_end2"
                              name="prep_end2"
                              value={prep_end1}
                              className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                              onChange={onPrep_End1Changed}
                            ></input>
                            <input
                              type="time"
                              id="prep_end2"
                              name="prep_end2"
                              value={prep_end2}
                              className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                              onChange={onPrep_End2Changed}
                            ></input>
                            <input
                              type="time"
                              id="prep_end3"
                              name="prep_end3"
                              value={prep_end3}
                              className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                              onChange={onPrep_End3Changed}
                            ></input>
                            <input
                              type="time"
                              id="prep_end4"
                              name="prep_end4"
                              value={prep_end4}
                              className={`bg-gray-50 mb-2 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                              onChange={onPrep_End4Changed}
                            ></input>
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-3 text-base font-semibold text-gray-600">
                        {" "}
                        Implementation Phase/Actual Conduct of CES
                      </div>
                      <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1 md:grid-cols-4">
                        <div className="md:col-span-1">
                          <label htmlFor="country">Name of Volunteer</label>
                          <select
                            id="user"
                            name="user"
                            className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={implement_per1}
                            onChange={onImplement_Per1Changed}
                          >
                            {options}
                          </select>
                          <select
                            id="user"
                            name="user"
                            className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={implement_per2}
                            onChange={onImplement_Per2Changed}
                          >
                            {options}
                          </select>
                          <select
                            id="user"
                            name="user"
                            className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={implement_per3}
                            onChange={onImplement_Per3Changed}
                          >
                            {options}
                          </select>
                          <select
                            id="user"
                            name="user"
                            className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={implement_per4}
                            onChange={onImplement_Per4Changed}
                          >
                            {options}
                          </select>
                        </div>
                        <div className="md:col-span-1">
                          <label htmlFor="country">Position/Designation</label>
                          <select
                            id="user"
                            name="user"
                            className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={implement_pos1}
                            onChange={onImplement_Pos1Changed}
                          >
                            <option value="Facilitator">Facilitator</option>
                            <option value="Participant">Participant</option>
                            <option value="Student">Student</option>
                            <option value="Employee">Employee</option>
                          </select>
                          <select
                            id="user"
                            name="user"
                            className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={implement_pos2}
                            onChange={onImplement_Pos2Changed}
                          >
                            <option value="Facilitator">Facilitator</option>
                            <option value="Participant">Participant</option>
                            <option value="Student">Student</option>
                            <option value="Employee">Employee</option>
                          </select>
                          <select
                            id="user"
                            name="user"
                            className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={implement_pos3}
                            onChange={onImplement_Pos3Changed}
                          >
                            <option value="Facilitator">Facilitator</option>
                            <option value="Participant">Participant</option>
                            <option value="Student">Student</option>
                            <option value="Employee">Employee</option>
                          </select>
                          <select
                            id="user"
                            name="user"
                            className={`bg-gray-50 mb-2 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={implement_pos4}
                            onChange={onImplement_Pos4Changed}
                          >
                            <option value="Facilitator">Facilitator</option>
                            <option value="Participant">Participant</option>
                            <option value="Student">Student</option>
                            <option value="Employee">Employee</option>
                          </select>
                        </div>
                        <div className="md:col-span-1">
                          <label htmlFor="country">Type of Participation</label>
                          <select
                            id="user"
                            name="user"
                            className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={implement_type1}
                            onChange={onImplement_Type1Changed}
                          >
                            <option value="Facilitator">Facilitator</option>
                            <option value="Participant">Participant</option>
                            <option value="Game Facilitator">
                              Game Facilitator
                            </option>
                            <option value="Donor">Donor</option>
                            <option value="Resource Speaker">
                              Resource Speaker
                            </option>
                          </select>
                          <select
                            id="user"
                            name="user"
                            className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={implement_type2}
                            onChange={onImplement_Type2Changed}
                          >
                            <option value="Facilitator">Facilitator</option>
                            <option value="Participant">Participant</option>
                            <option value="Game Facilitator">
                              Game Facilitator
                            </option>
                            <option value="Donor">Donor</option>
                            <option value="Resource Speaker">
                              Resource Speaker
                            </option>
                          </select>
                          <select
                            id="user"
                            name="user"
                            className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={implement_type3}
                            onChange={onImplement_Type3Changed}
                          >
                            <option value="Facilitator">Facilitator</option>
                            <option value="Participant">Participant</option>
                            <option value="Game Facilitator">
                              Game Facilitator
                            </option>
                            <option value="Donor">Donor</option>
                            <option value="Resource Speaker">
                              Resource Speaker
                            </option>
                          </select>
                          <select
                            id="user"
                            name="user"
                            className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={implement_type4}
                            onChange={onImplement_Type4Changed}
                          >
                            <option value="Facilitator">Facilitator</option>
                            <option value="Participant">Participant</option>
                            <option value="Game Facilitator">
                              Game Facilitator
                            </option>
                            <option value="Donor">Donor</option>
                            <option value="Resource Speaker">
                              Resource Speaker
                            </option>
                          </select>
                        </div>
                        <div className="grid md:col-span-1 grid-cols-1 md:grid-cols-2">
                          <div className="md:col-span-1">
                            <label htmlFor="country">Start Time</label>
                            <input
                              type="time"
                              id="start-time"
                              name="start-time"
                              value={implement_start1}
                              className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                              onChange={onImplement_Start1Changed}
                            ></input>
                            <input
                              type="time"
                              id="start-time"
                              name="start-time"
                              value={implement_start2}
                              className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                              onChange={onImplement_Start2Changed}
                            ></input>
                            <input
                              type="time"
                              id="start-time"
                              name="start-time"
                              value={implement_star3}
                              className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                              onChange={onImplement_Star3Changed}
                            ></input>
                            <input
                              type="time"
                              id="start-time"
                              name="start-time"
                              value={implement_star4}
                              className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                              onChange={onImplement_Star4Changed}
                            ></input>
                          </div>
                          <div className="md:col-span-1">
                            <label htmlFor="country">End Time</label>
                            <input
                              type="time"
                              id="start-time"
                              name="start-time"
                              value={implement_end1}
                              className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                              onChange={onImplement_End1Changed}
                            ></input>
                            <input
                              type="time"
                              id="start-time"
                              name="start-time"
                              value={implement_end2}
                              className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                              onChange={onImplement_End2Changed}
                            ></input>
                            <input
                              type="time"
                              id="start-time"
                              name="start-time"
                              value={implement_end3}
                              className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                              onChange={onImplement_End3Changed}
                            ></input>
                            <input
                              type="time"
                              id="start-time"
                              name="start-time"
                              value={implement_end4}
                              className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                              onChange={onImplement_End4Changed}
                            ></input>
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-3 text-base font-semibold text-gray-600">
                        {" "}
                        Post Implementation (Includes Report Writing and
                        Evaluation)
                      </div>
                      <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1 md:grid-cols-4">
                        <div className="md:col-span-1">
                          <label htmlFor="country">Name of Volunteer</label>
                          <select
                            id="user"
                            name="user"
                            className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={post_per1}
                            onChange={onPost_Per1Changed}
                          >
                            {options}
                          </select>
                          <select
                            id="user"
                            name="user"
                            className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={post_per2}
                            onChange={onPost_Per2Changed}
                          >
                            {options}
                          </select>
                          <select
                            id="user"
                            name="user"
                            className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={post_per3}
                            onChange={onPost_Per3Changed}
                          >
                            {options}
                          </select>
                          <select
                            id="user"
                            name="user"
                            className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={post_per4}
                            onChange={onPost_Per4Changed}
                          >
                            {options}
                          </select>
                        </div>
                        <div className="md:col-span-1">
                          <label htmlFor="country">Position/Designation</label>
                          <select
                            id="user"
                            name="user"
                            className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={post_pos1}
                            onChange={onPost_Pos1Changed}
                          >
                            <option value="Facilitator">Facilitator</option>
                            <option value="Participant">Participant</option>
                            <option value="Student">Student</option>
                            <option value="Employee">Employee</option>
                          </select>
                          <select
                            id="user"
                            name="user"
                            className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={post_pos2}
                            onChange={onPost_Pos2Changed}
                          >
                            <option value="Facilitator">Facilitator</option>
                            <option value="Participant">Participant</option>
                            <option value="Student">Student</option>
                            <option value="Employee">Employee</option>
                          </select>
                          <select
                            id="user"
                            name="user"
                            className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={post_pos3}
                            onChange={onPost_Pos3Changed}
                          >
                            <option value="Facilitator">Facilitator</option>
                            <option value="Participant">Participant</option>
                            <option value="Student">Student</option>
                            <option value="Employee">Employee</option>
                          </select>
                          <select
                            id="user"
                            name="user"
                            className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={post_pos4}
                            onChange={onPost_Pos4Changed}
                          >
                            <option value="Facilitator">Facilitator</option>
                            <option value="Participant">Participant</option>
                            <option value="Student">Student</option>
                            <option value="Employee">Employee</option>
                          </select>
                        </div>
                        <div className="md:col-span-1">
                          <label htmlFor="country">Type of Participation</label>
                          <select
                            id="user"
                            name="user"
                            className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={post_type1}
                            onChange={onPost_Type1Changed}
                          >
                            <option value="Facilitator">Facilitator</option>
                            <option value="Participant">Participant</option>
                            <option value="Game Facilitator">
                              Game Facilitator
                            </option>
                            <option value="Donor">Donor</option>
                            <option value="Resource Speaker">
                              Resource Speaker
                            </option>
                          </select>
                          <select
                            id="user"
                            name="user"
                            className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={post_type2}
                            onChange={onPost_Type2Changed}
                          >
                            <option value="Facilitator">Facilitator</option>
                            <option value="Participant">Participant</option>
                            <option value="Game Facilitator">
                              Game Facilitator
                            </option>
                            <option value="Donor">Donor</option>
                            <option value="Resource Speaker">
                              Resource Speaker
                            </option>
                          </select>
                          <select
                            id="user"
                            name="user"
                            className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={post_type3}
                            onChange={onPost_Type3Changed}
                          >
                            <option value="Facilitator">Facilitator</option>
                            <option value="Participant">Participant</option>
                            <option value="Game Facilitator">
                              Game Facilitator
                            </option>
                            <option value="Donor">Donor</option>
                            <option value="Resource Speaker">
                              Resource Speaker
                            </option>
                          </select>
                          <select
                            id="user"
                            name="user"
                            className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={post_type4}
                            onChange={onPost_Type4Changed}
                          >
                            <option value="Facilitator">Facilitator</option>
                            <option value="Participant">Participant</option>
                            <option value="Game Facilitator">
                              Game Facilitator
                            </option>
                            <option value="Donor">Donor</option>
                            <option value="Resource Speaker">
                              Resource Speaker
                            </option>
                          </select>
                        </div>
                        <div className="grid md:col-span-1 grid-cols-1 md:grid-cols-2">
                          <div className="md:col-span-1">
                            <label htmlFor="country">Start Time</label>
                            <input
                              type="time"
                              id="start-time"
                              name="start-time"
                              value={post_start1}
                              className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                              onChange={onPost_Start1Changed}
                            ></input>
                            <input
                              type="time"
                              id="start-time"
                              name="start-time"
                              value={post_start2}
                              className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                              onChange={onPost_Start2Changed}
                            ></input>
                            <input
                              type="time"
                              id="start-time"
                              name="start-time"
                              value={post_star3}
                              className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                              onChange={onPost_Star3Changed}
                            ></input>
                            <input
                              type="time"
                              id="start-time"
                              name="start-time"
                              value={post_star4}
                              className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                              onChange={onPost_Star4Changed}
                            ></input>
                          </div>
                          <div className="md:col-span-1">
                            <label htmlFor="country">End Time</label>
                            <input
                              type="time"
                              id="start-time"
                              name="start-time"
                              value={post_end1}
                              className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                              onChange={onPost_End1Changed}
                            ></input>
                            <input
                              type="time"
                              id="start-time"
                              name="start-time"
                              value={post_end2}
                              className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                              onChange={onPost_End2Changed}
                            ></input>
                            <input
                              type="time"
                              id="start-time"
                              name="start-time"
                              value={post_end3}
                              className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                              onChange={onPost_End3Changed}
                            ></input>
                            <input
                              type="time"
                              id="start-time"
                              name="start-time"
                              value={post_end4}
                              className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                              onChange={onPost_End4Changed}
                            ></input>
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-2 md:row-span-1"></div>
                      <div className="md:col-span-7">
                        <label htmlFor="country">Learnings/Insights:</label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={learnings1}
                          onChange={onLearnings1Changed}
                        />
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={learnings2}
                          onChange={onLearnings2Changed}
                        />
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={learnings3}
                          onChange={onLearnings3Changed}
                        />
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={learnings4}
                          onChange={onLearnings4Changed}
                        />
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                          value={learnings5}
                          onChange={onLearnings5Changed}
                        />
                      </div>
                      <div className="md:col-span-2 text-gray-600">
                        <p className="font-medium text-lg">
                          Strengths, Weaknesses, Areas for Improvement:
                        </p>
                      </div>
                      <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1 md:grid-cols-3">
                        <div className="md:col-span-1">
                          <label htmlFor="country">Strengths</label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={strengths1}
                            onChange={onStrengths1Changed}
                          />
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={strengths2}
                            onChange={onStrengths2Changed}
                          />
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={strengths3}
                            onChange={onStrengths3Changed}
                          />
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={strengths4}
                            onChange={onStrengths4Changed}
                          />
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                            value={strengths5}
                            onChange={onStrengths5Changed}
                          />
                        </div>
                        <div className="md:col-span-1">
                          <label htmlFor="country">Weaknesses</label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={weakness1}
                            onChange={onWeakness1Changed}
                          />
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={weakness2}
                            onChange={onWeakness2Changed}
                          />
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={weakness3}
                            onChange={onWeakness3Changed}
                          />
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={weakness4}
                            onChange={onWeakness4Changed}
                          />
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                            value={weakness5}
                            onChange={onWeakness5Changed}
                          />
                        </div>
                        <div className="md:col-span-1">
                          <label htmlFor="country">Areas for Improvement</label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={improvement1}
                            onChange={onImprovement1Changed}
                          />
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={improvement2}
                            onChange={onImprovement2Changed}
                          />
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={improvement3}
                            onChange={onImprovement3Changed}
                          />
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={improvement4}
                            onChange={onImprovement4Changed}
                          />
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                            value={improvement5}
                            onChange={onImprovement5Changed}
                          />
                        </div>
                      </div>
                      <div className="md:col-span-2 md:row-span-1"></div>
                      <div className="md:col-span-7">
                        <label htmlFor="country">
                          Actual Participation/Counterpart of the Partner
                          Community Served:
                        </label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                          value={act_partici1}
                          onChange={onAct_Partici1Changed}
                        />
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                          value={act_partici2}
                          onChange={onAct_Partici2Changed}
                        />
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                          value={act_partici3}
                          onChange={onAct_Partici3Changed}
                        />
                      </div>

                      <div className="md:col-span-2 md:row-span-6 text-gray-600">
                        <p className="font-medium text-lg">Financial Report:</p>
                      </div>
                      <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1 md:grid-cols-3">
                        <div className="md:col-span-2">
                          <label htmlFor="country">Particulars</label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                            value={particulars1}
                            onChange={onParticulars1Changed}
                          />
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                            value={particulars2}
                            onChange={onParticulars2Changed}
                          />
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                            value={particulars3}
                            onChange={onParticulars3Changed}
                          />
                          <p className="text-right pt-3 text-base alig">
                            TOTAL:
                          </p>
                        </div>
                        <div className="md:col-span-1">
                          <label htmlFor="country">Amount</label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                            value={amount1}
                            placeholder="Php"
                            onChange={onAmount1Changed}
                          />
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                            value={amount2}
                            placeholder="Php"
                            onChange={onAmount2Changed}
                          />
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                            value={amount3}
                            placeholder="Php"
                            onChange={onAmount3Changed}
                          />
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                            value={amount_total}
                            placeholder="Php"
                            onChange={onAmount_TotalChanged}
                          />
                        </div>
                      </div>
                      <div className="md:col-span-3 text-base font-semibold text-gray-600">
                        Prepared by:
                      </div>
                      <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1 md:grid-cols-3">
                        <div className="md:col-span-2">
                          <label htmlFor="country">
                            Name of Project Organizer or CSCB Representative
                          </label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                            value={proj_rep}
                            onChange={OnProj_repChanged}
                          />
                        </div>
                        <div className="md:col-span-1">
                          <label htmlFor="country">Designation</label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                            value={designation1}
                            onChange={OnDesignation1Changed}
                          />
                        </div>
                      </div>
                      <div className="md:col-span-3 text-base font-semibold text-gray-600">
                        Noted by:
                      </div>
                      <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1 md:grid-cols-3">
                        <div className="md:col-span-2">
                          <label htmlFor="country">
                            Name of Adviser for Student Organizations
                          </label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                            value={adviser_name}
                            onChange={OnAdviser_nameChanged}
                          />
                        </div>
                        <div className="md:col-span-1">
                          <label htmlFor="country">
                            Name of Student Organization
                          </label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                            value={stud_org}
                            onChange={OnStud_orgChanged}
                          />
                        </div>
                      </div>
                      <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1 md:grid-cols-3">
                        <div className="md:col-span-2">
                          <label htmlFor="country">
                            Name of CSCB Representative for Departmental CES
                          </label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                            value={cscb_rep}
                            onChange={OnCscb_repChanged}
                          />
                        </div>
                        <div className="md:col-span-1">
                          <label htmlFor="country">
                            Department Represented
                          </label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                            value={dept_rep}
                            onChange={OnDept_repChanged}
                          />
                        </div>
                      </div>
                      <div className="md:col-span-2 md:row-span-1"></div>
                      <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1 md:grid-cols-3">
                        <div className="md:col-span-2">
                          <label htmlFor="country">
                            Name of Dean or Cluster Head
                          </label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                            value={dean}
                            onChange={OnDeanChanged}
                          />
                        </div>
                        <div className="md:col-span-1">
                          <label htmlFor="country">Designation</label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                            value={designation2}
                            onChange={OnDesignation2Changed}
                          />
                        </div>
                      </div>
                      <div className="md:col-span-2 text-gray-600">
                        <p className="font-medium text-lg">
                          Upload Documentation
                        </p>
                      </div>
                      <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1 md:grid-cols-2">
                        <div className="flex justify-center mt-8">
                          <div className="max-w-2xl rounded-lg shadow-xl border bg-gray-50">
                            <div className="m-4">
                              <label className="inline-block mb-2 text-gray-500">
                                File Upload
                              </label>
                              <div className="flex items-center justify-center w-full">
                                <label className="flex flex-col w-full h-32 border-4 border-red-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                  <div className="flex flex-col items-center justify-center pt-7">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                      />
                                    </svg>
                                    <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                      Photo Here
                                    </p>
                                  </div>
                                  <input
                                    type="file"
                                    className="opacity-0"
                                    value={image1}
                                    onChange={onImage1Changed}
                                  />
                                </label>
                              </div>
                            </div>
                            <div className="flex justify-center p-2">
                              <input
                                type="text"
                                name="email"
                                id="email"
                                className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                                value={caption1}
                                placeholder="Caption"
                                onChange={onCaption1Changed}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center mt-8">
                          <div className="max-w-2xl rounded-lg shadow-xl border bg-gray-50">
                            <div className="m-4">
                              <label className="inline-block mb-2 text-gray-500">
                                File Upload
                              </label>
                              <div className="flex items-center justify-center w-full">
                                <label className="flex flex-col w-full h-32 border-4 border-red-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                  <div className="flex flex-col items-center justify-center pt-7">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                      />
                                    </svg>
                                    <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                      Photo Here
                                    </p>
                                  </div>
                                  <input
                                    type="file"
                                    className="opacity-0"
                                    value={image1}
                                    onChange={onImage2Changed}
                                  />
                                </label>
                              </div>
                            </div>
                            <div className="flex justify-center p-2">
                              <input
                                type="text"
                                name="email"
                                id="email"
                                className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                                value={caption2}
                                placeholder="Caption"
                                onChange={onCaption2Changed}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-9 mt-5 text-right">
                        <div className="text-center">
                          <button
                            className="text-white inline-flex bg-red-900 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                            title="Save"
                            onClick={onSaveReportClicked}
                          >
                            Submit Report
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
  {
    /* <div>
  <div className="flex justify-between items-center">
          <h1 className="text-5xl  font-bold pb-2 text-black mb-4 font-sans">
            Edit <span className="text-rose-900">Outreach </span>
            <span className="text-3xl text-gray-600">#{filteredOutreach.ticket}</span>
          </h1>
        </div>
        <div className="">
          <label className="text-base align-middle" htmlFor="user_id">
            Title:
          </label>
          <input
            className={`bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg w-full `}
            id="title"
            name="title"
            type="text"
            autoComplete="off"
            value={project_title}
            onChange={onProject_TitleChanged}
          />
        </div>

        <div>
          <label className="text-base" htmlFor="text">
            Description:
          </label>
          <textarea
            className={`bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg w-full h-40 `}
            id="text"
            name="text"
            // value={text}
            // onChange={onTextChanged}
          />
        </div>
        <div className="">
          <p className="text-gray-500 text-sm">Created: {created}</p>
          <p className="text-gray-500 text-sm">Updated: {updated}</p>
        </div>
        <div className="w-full grid">
          <label className="text-base align-middle" htmlFor="user_id">
            Status:
          </label>
          <select
            id="status"
            name="status"
            className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg w-1/2"
            // value={status}
            // onChange={onCompletedChanged}
          >
            {list}
          </select>
        </div>

        <div className="w-full grid">
          <label className="text-base align-middle" htmlFor="user_id">
            Assign To:
          </label>
          <select
            id="user_id"
            name="user_id"
            className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg w-1/2"
            // value={user}
            // onChange={onUserIdChanged}
          >
            {options}
          </select>
        </div>
        <div className="grid-cols-2 flex justify-evenly">
          {/* <div className="text-center">
            <button
              className="text-white inline-flex bg-red-900 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
              title="Save"
              onClick={onDeleteOutreachClicked}
              disabled={!canSave}
            >
              Delete
            </button>
          </div> 
  </div>
</div> */
  }
  return content;
};

export default OutreachReportForm;

import { useState, useEffect } from "react";
import {
  useAddNewAnexCMutation
} from "./anexC_ApiSlice";
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { STATUS } from "../../config/status";

const OutreachReportForm = ({ filteredOutreach, users }) => {
  
  window.addEventListener("beforeunload", function(event) {
    event.returnValue = "The information in the document will reset.";
});

  const { isAdmin } = useAuth();

  const { id } = useParams()

  console.log(filteredOutreach);

  const [createReport, { isLoading, isSuccess, isError, error }] =
  useAddNewAnexCMutation();


  const navigate = useNavigate();

  // const [title, setTitle] = useState(outreach.title);

    const [user, setUser] = useState(filteredOutreach.user)
    const [sponsor_dept, setSponsor_Dept] = useState(filteredOutreach.sponsor_dept)
    const [project_title, setProject_Title] = useState(filteredOutreach.project_title)
    const [target_beneficiary, setBeneficiaries] = useState(filteredOutreach.target_beneficiary)
    const [accomp_obj, setAccomp_Obj] = useState(filteredOutreach.accomp_obj)
    const [venue, setVenue] = useState(filteredOutreach.venue)
    const [date_implement, setDate_Implement] = useState(filteredOutreach.date_implement)
    const [brief_narrative, setBrief_Narrative] = useState(filteredOutreach.brief_narrative)
    const [topics, setTopics] = useState(filteredOutreach.topics)
    const [speakers, setSpeakers] = useState(filteredOutreach.speakers)
    const [prep_per1, setPrep_Per1] = useState(filteredOutreach.prep_per1)
    const [prep_per2, setPrep_Per2] = useState(filteredOutreach.prep_per2)
    const [prep_per3, setPrep_Per3] = useState(filteredOutreach.prep_per3)
    const [prep_per4, setPrep_Per4] = useState(filteredOutreach.prep_per4)
    const [prep_pos1, setPrep_Pos1] = useState(filteredOutreach.prep_pos1)
    const [prep_pos2, setPrep_Pos2] = useState(filteredOutreach.prep_pos2)
    const [prep_pos3, setPrep_Pos3] = useState(filteredOutreach.prep_pos3)
    const [prep_type1, setPrep_Type1] = useState(filteredOutreach.prep_type1)
    const [prep_type2, setPrep_Type2] = useState(filteredOutreach.prep_type2)
    const [prep_pos4, setPrep_Pos4] = useState(filteredOutreach.prep_pos4)
    const [prep_type3, setPrep_Type3] = useState(filteredOutreach.prep_type3)
    const [prep_type4, setPrep_Type4] = useState(filteredOutreach.prep_type4)
    const [prep_start1, setPrep_Start1] = useState(filteredOutreach.prep_start1)
    const [prep_start2, setPrep_Start2] = useState(filteredOutreach.prep_start2)
    const [prep_star3, setPrep_Star3] = useState(filteredOutreach.prep_star3)
    const [prep_star4, setPrep_Star4] = useState(filteredOutreach.prep_star4)
    const [prep_end1, setPrep_End1] = useState(filteredOutreach.prep_end1)
    const [prep_end2, setPrep_End2] = useState(filteredOutreach.prep_end2)
    const [prep_end3, setPrep_End3] = useState(filteredOutreach.prep_end3)
    const [prep_end4, setPrep_End4] = useState(filteredOutreach.prep_end4)
    const [implement_per1, setImplement_Per1] = useState(filteredOutreach.implement_per1)
    const [implement_per2, setImplement_Per2] = useState(filteredOutreach.implement_per2)
    const [implement_per3, setImplement_Per3] = useState(filteredOutreach.implement_per3)
    const [implement_per4, setImplement_Per4] = useState(filteredOutreach.implement_per4)
    const [implement_pos1, setImplement_Pos1] = useState(filteredOutreach.implement_pos1)
    const [implement_pos2, setImplement_Pos2] = useState(filteredOutreach.implement_pos2)
    const [implement_pos3, setImplement_Pos3] = useState(filteredOutreach.implement_pos3)
    const [implement_type1, setImplement_Type1] = useState(filteredOutreach.implement_type1)
    const [implement_type2, setImplement_Type2] = useState(filteredOutreach.implement_type2)
    const [implement_pos4, setImplement_Pos4] = useState(filteredOutreach.implement_pos4)
    const [implement_type3, setImplement_Type3] = useState(filteredOutreach.implement_type3)
    const [implement_type4, setImplement_Type4] = useState(filteredOutreach.implement_type4)
    const [implement_start1, setImplement_Start1] = useState(filteredOutreach.implement_start1)
    const [implement_start2, setImplement_Start2] = useState(filteredOutreach.implement_start2)
    const [implement_star3, setImplement_Star3] = useState(filteredOutreach.implement_star3)
    const [implement_star4, setImplement_Star4] = useState(filteredOutreach.implement_star4)
    const [implement_end1, setImplement_End1] = useState(filteredOutreach.implement_end1)
    const [implement_end2, setImplement_End2] = useState(filteredOutreach.implement_end2)
    const [implement_end3, setImplement_End3] = useState(filteredOutreach.implement_end3)
    const [implement_end4, setImplement_End4] = useState(filteredOutreach.implement_end4)
    const [post_per1, setPost_Per1] = useState(filteredOutreach.post_per1)
    const [post_per2, setPost_Per2] = useState(filteredOutreach.post_per2)
    const [post_per3, setPost_Per3] = useState(filteredOutreach.post_per3)
    const [post_per4, setPost_Per4] = useState(filteredOutreach.post_per4)
    const [post_pos1, setPost_Pos1] = useState(filteredOutreach.post_pos1)
    const [post_pos2, setPost_Pos2] = useState(filteredOutreach.post_pos2)
    const [post_pos3, setPost_Pos3] = useState(filteredOutreach.post_pos3)
    const [post_type1, setPost_Type1] = useState(filteredOutreach.post_type1)
    const [post_type2, setPost_Type2] = useState(filteredOutreach.post_type2)
    const [post_pos4, setPost_Pos4] = useState(filteredOutreach.post_pos4)
    const [post_type3, setPost_Type3] = useState(filteredOutreach.post_type3)
    const [post_type4, setPost_Type4] = useState(filteredOutreach.post_type4)
    const [post_start1, setPost_Start1] = useState(filteredOutreach.post_start1)
    const [post_start2, setPost_Start2] = useState(filteredOutreach.post_start2)
    const [post_star3, setPost_Star3] = useState(filteredOutreach.post_star3)
    const [post_star4, setPost_Star4] = useState(filteredOutreach.post_star4)
    const [post_end1, setPost_End1] = useState(filteredOutreach.post_end1)
    const [post_end2, setPost_End2] = useState(filteredOutreach.post_end2)
    const [post_end3, setPost_End3] = useState(filteredOutreach.post_end3)
    const [post_end4, setPost_End4] = useState(filteredOutreach.post_end4)
    const [learnings1, setLearnings1] = useState(filteredOutreach.learnings1)
    const [learnings2, setLearnings2] = useState(filteredOutreach.learnings2)
    const [learnings3, setLearnings3] = useState(filteredOutreach.learnings3)
    const [learnings4, setLearnings4] = useState(filteredOutreach.learnings4)
    const [learnings5, setLearnings5] = useState(filteredOutreach.learnings5)
    const [strengths1, setStrengths1] = useState(filteredOutreach.strengths1)
    const [strengths2, setStrengths2] = useState(filteredOutreach.strengths2)
    const [strengths3, setStrengths3] = useState(filteredOutreach.strengths3)
    const [strengths4, setStrengths4] = useState(filteredOutreach.strengths4)
    const [strengths5, setStrengths5] = useState(filteredOutreach.strengths5)
    const [weakness1, setWeakness1] = useState(filteredOutreach.weakness1)
    const [weakness2, setWeakness2] = useState(filteredOutreach.weakness2)
    const [weakness3, setWeakness3] = useState(filteredOutreach.weakness3)
    const [weakness4, setWeakness4] = useState(filteredOutreach.weakness4)
    const [weakness5, setWeakness5] = useState(filteredOutreach.weakness5)
    const [improvement1, setImprovement1] = useState(filteredOutreach.improvement1)
    const [improvement2, setImprovement2] = useState(filteredOutreach.improvement2)
    const [improvement3, setImprovement3] = useState(filteredOutreach.improvement3)
    const [improvement4, setImprovement4] = useState(filteredOutreach.improvement4)
    const [improvement5, setImprovement5] = useState(filteredOutreach.improvement5)
    const [act_partici1, setAct_Partici1] = useState(filteredOutreach.act_partici1)
    const [act_partici2, setAct_Partici2] = useState(filteredOutreach.act_partici2)
    const [act_partici3, setAct_Partici3] = useState(filteredOutreach.act_partici3)
    const [particulars1, setParticulars1] = useState(filteredOutreach.particulars1)
    const [particulars2, setParticulars2] = useState(filteredOutreach.particulars2)
    const [particulars3, setParticulars3] = useState(filteredOutreach.particulars3)
    const [amount1, setAmount1] = useState(filteredOutreach.amount1)
    const [amount2, setAmount2] = useState(filteredOutreach.amount2)
    const [amount3, setAmount3] = useState(filteredOutreach.amount3)
    const [amount_total, setAmount_Total] = useState(filteredOutreach.amount_total)
    const [image1, setImage1] = useState(filteredOutreach.image1)
    const [caption1, setCaption1] = useState(filteredOutreach.caption1)
    const [caption2, setCaption2] = useState(filteredOutreach.caption2)
    const [image2, setImage2] = useState(filteredOutreach.image2)

  useEffect(() => {
          if (isSuccess) {
      setUser("")
      setSponsor_Dept("")
      setProject_Title("")
      setBeneficiaries("")
      setAccomp_Obj("")
      setVenue("")
      setDate_Implement("")
      setBrief_Narrative("")
      setTopics("")
      setSpeakers("")
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
      setImage1("")
      setCaption1("")
      setCaption2("")
      setImage2("")
      navigate("/dash/outreach");
    }
  }, [isSuccess, navigate]);

  // const onTitleChanged = (e) => setTitle(e.target.value)a;

  // const [title, setTitle
  const onUserChanged = (e) => setUser (e.target.value)
  const onSponsor_DeptChanged = (e) => setSponsor_Dept (e.target.value)
  const onProject_TitleChanged = (e) => setProject_Title (e.target.value)
  const onBeneficiariesChanged = (e) => setBeneficiaries (e.target.value)
  const onAccomp_ObjChanged = (e) => setAccomp_Obj (e.target.value)
  const onVenueChanged = (e) => setVenue (e.target.value)
  const onDate_ImplementChanged = (e) => setDate_Implement (e.target.value)
  const onBrief_NarrativeChanged = (e) => setBrief_Narrative (e.target.value)
  const onTopicsChanged = (e) => setTopics (e.target.value)
  const onSpeakersChanged = (e) => setSpeakers (e.target.value)
  const onPrep_Per1Changed = (e) => setPrep_Per1 (e.target.value)
  const onPrep_Per2Changed = (e) => setPrep_Per2 (e.target.value)
  const onPrep_Per3Changed = (e) => setPrep_Per3 (e.target.value)
  const onPrep_Per4Changed = (e) => setPrep_Per4 (e.target.value)
  const onPrep_Pos1Changed = (e) => setPrep_Pos1 (e.target.value)
  const onPrep_Pos2Changed = (e) => setPrep_Pos2 (e.target.value)
  const onPrep_Pos3Changed = (e) => setPrep_Pos3 (e.target.value)
  const onPrep_Type1Changed = (e) => setPrep_Type1 (e.target.value)
  const onPrep_Type2Changed = (e) => setPrep_Type2 (e.target.value)
  const onPrep_Pos4Changed = (e) => setPrep_Pos4 (e.target.value)
  const onPrep_Type3Changed = (e) => setPrep_Type3 (e.target.value)
  const onPrep_Type4Changed = (e) => setPrep_Type4 (e.target.value)
  const onPrep_Start1Changed = (e) => setPrep_Start1 (e.target.value)
  const onPrep_Start2Changed = (e) => setPrep_Start2 (e.target.value)
  const onPrep_Star3Changed = (e) => setPrep_Star3 (e.target.value)
  const onPrep_Star4Changed = (e) => setPrep_Star4 (e.target.value)
  const onPrep_End1Changed = (e) => setPrep_End1 (e.target.value)
  const onPrep_End2Changed = (e) => setPrep_End2 (e.target.value)
  const onPrep_End3Changed = (e) => setPrep_End3 (e.target.value)
  const onPrep_End4Changed = (e) => setPrep_End4 (e.target.value)
  const onImplement_Per1Changed = (e) => setImplement_Per1 (e.target.value)
  const onImplement_Per2Changed = (e) => setImplement_Per2 (e.target.value)
  const onImplement_Per3Changed = (e) => setImplement_Per3 (e.target.value)
  const onImplement_Per4Changed = (e) => setImplement_Per4 (e.target.value)
  const onImplement_Pos1Changed = (e) => setImplement_Pos1 (e.target.value)
  const onImplement_Pos2Changed = (e) => setImplement_Pos2 (e.target.value)
  const onImplement_Pos3Changed = (e) => setImplement_Pos3 (e.target.value)
  const onImplement_Type1Changed = (e) => setImplement_Type1 (e.target.value)
  const onImplement_Type2Changed = (e) => setImplement_Type2 (e.target.value)
  const onImplement_Pos4Changed = (e) => setImplement_Pos4 (e.target.value)
  const onImplement_Type3Changed = (e) => setImplement_Type3 (e.target.value)
  const onImplement_Type4Changed = (e) => setImplement_Type4 (e.target.value)
  const onImplement_Start1Changed = (e) => setImplement_Start1 (e.target.value)
  const onImplement_Start2Changed = (e) => setImplement_Start2 (e.target.value)
  const onImplement_Star3Changed = (e) => setImplement_Star3 (e.target.value)
  const onImplement_Star4Changed = (e) => setImplement_Star4 (e.target.value)
  const onImplement_End1Changed = (e) => setImplement_End1 (e.target.value)
  const onImplement_End2Changed = (e) => setImplement_End2 (e.target.value)
  const onImplement_End3Changed = (e) => setImplement_End3 (e.target.value)
  const onImplement_End4Changed = (e) => setImplement_End4 (e.target.value)
  const onPost_Per1Changed = (e) => setPost_Per1 (e.target.value)
  const onPost_Per2Changed = (e) => setPost_Per2 (e.target.value)
  const onPost_Per3Changed = (e) => setPost_Per3 (e.target.value)
  const onPost_Per4Changed = (e) => setPost_Per4 (e.target.value)
  const onPost_Pos1Changed = (e) => setPost_Pos1 (e.target.value)
  const onPost_Pos2Changed = (e) => setPost_Pos2 (e.target.value)
  const onPost_Pos3Changed = (e) => setPost_Pos3 (e.target.value)
  const onPost_Type1Changed = (e) => setPost_Type1 (e.target.value)
  const onPost_Type2Changed = (e) => setPost_Type2 (e.target.value)
  const onPost_Pos4Changed = (e) => setPost_Pos4 (e.target.value)
  const onPost_Type3Changed = (e) => setPost_Type3 (e.target.value)
  const onPost_Type4Changed = (e) => setPost_Type4 (e.target.value)
  const onPost_Start1Changed = (e) => setPost_Start1 (e.target.value)
  const onPost_Start2Changed = (e) => setPost_Start2 (e.target.value)
  const onPost_Star3Changed = (e) => setPost_Star3 (e.target.value)
  const onPost_Star4Changed = (e) => setPost_Star4 (e.target.value)
  const onPost_End1Changed = (e) => setPost_End1 (e.target.value)
  const onPost_End2Changed = (e) => setPost_End2 (e.target.value)
  const onPost_End3Changed = (e) => setPost_End3 (e.target.value)
  const onPost_End4Changed = (e) => setPost_End4 (e.target.value)
  const onLearnings1Changed = (e) => setLearnings1 (e.target.value)
  const onLearnings2Changed = (e) => setLearnings2 (e.target.value)
  const onLearnings3Changed = (e) => setLearnings3 (e.target.value)
  const onLearnings4Changed = (e) => setLearnings4 (e.target.value)
  const onLearnings5Changed = (e) => setLearnings5 (e.target.value)
  const onStrengths1Changed = (e) => setStrengths1 (e.target.value)
  const onStrengths2Changed = (e) => setStrengths2 (e.target.value)
  const onStrengths3Changed = (e) => setStrengths3 (e.target.value)
  const onStrengths4Changed = (e) => setStrengths4 (e.target.value)
  const onStrengths5Changed = (e) => setStrengths5 (e.target.value)
  const onWeakness1Changed = (e) => setWeakness1 (e.target.value)
  const onWeakness2Changed = (e) => setWeakness2 (e.target.value)
  const onWeakness3Changed = (e) => setWeakness3 (e.target.value)
  const onWeakness4Changed = (e) => setWeakness4 (e.target.value)
  const onWeakness5Changed = (e) => setWeakness5 (e.target.value)
  const onImprovement1Changed = (e) => setImprovement1 (e.target.value)
  const onImprovement2Changed = (e) => setImprovement2 (e.target.value)
  const onImprovement3Changed = (e) => setImprovement3 (e.target.value)
  const onImprovement4Changed = (e) => setImprovement4 (e.target.value)
  const onImprovement5Changed = (e) => setImprovement5 (e.target.value)
  const onAct_Partici1Changed = (e) => setAct_Partici1 (e.target.value)
  const onAct_Partici2Changed = (e) => setAct_Partici2 (e.target.value)
  const onAct_Partici3Changed = (e) => setAct_Partici3 (e.target.value)
  const onParticulars1Changed = (e) => setParticulars1 (e.target.value)
  const onParticulars2Changed = (e) => setParticulars2 (e.target.value)
  const onParticulars3Changed = (e) => setParticulars3 (e.target.value)
  const onAmount1Changed = (e) => setAmount1 (e.target.value)
  const onAmount2Changed = (e) => setAmount2 (e.target.value)
  const onAmount3Changed = (e) => setAmount3 (e.target.value)
  const onAmount_TotalChanged = (e) => setAmount_Total (e.target.value)
  const onImage1Changed = (e) => setImage1 (e.target.value)
  const onCaption1Changed = (e) => setCaption1 (e.target.value)
  const onCaption2Changed = (e) => setCaption2 (e.target.value)
  const onImage2Changed = (e) => setImage2 (e.target.value)

  const canSave = [
    user,
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
    image1,
    caption1,
    caption2,
    image2, ].every(Boolean) && !isLoading;

  const onSaveReportClicked = async (e) => {
    e.preventDefault();
    if (canSave) {
        await createReport({
          user,
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
          image1,
          caption1,
          caption2,
          image2,
        });
    }
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

  // const options = users.map((user) => {
  //   return (
  //     <option key={user.id} value={user.id}>
  //       {" "}
  //       {user.user_id}
  //     </option>
  //   );
  // });

  const errClass = isError ? "errmsg" : "offscreen";

  const errContent = (error?.data?.message) ?? "";

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
      <form
        className="h-full full grid gap-3 px-20 text-black"
        onSubmit={(e) => e.preventDefault()}
      >
<div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
  <div class="container max-w-screen-lg mx-auto">
    <div>
      <h2 class="font-semibold text-xl">Implementation Report Form</h2>
      <p class="mb-6 text-base">The form is both for student and employee initiated 
activities and should be submitted within one (1) month after the activity.
</p>

      <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div class="text-gray-600">
            <p class="font-medium text-lg">Outreach Details</p>
            <p>Please fill out all the blank fields.</p>
          </div>

          <div class="lg:col-span-2">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6">
              <div class="md:col-span-6">
                <label for="full_name">Sponsoring Department(s)/ Proponent(s)	:</label>
                <input type="text" name="full_name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={project_title}
                onChange={onProject_TitleChanged} />
              </div>

              <div class="md:col-span-6">
                <label for="email">Project Title :</label>
                <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={sponsor_dept}
                onChange={onSponsor_DeptChanged} />
              </div>

              <div class="md:col-span-6">
                <label for="email">Beneficiaries	:</label>
                <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={target_beneficiary}
                onChange={onProject_TitleChanged} />
              </div>

              <div class="md:col-span-6">
                <label for="email">Accomplished Objectives :</label>
                <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={accomp_obj}
                onChange={onProject_TitleChanged} />
              </div>

              <div class="md:col-span-6">
                <label for="email">Venue of CES Activity :</label>
                <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={venue}
                onChange={onProject_TitleChanged} />
              </div>

              <div class="md:col-span-6">
                <label for="email">Date/Time Implemented :</label>
                <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={date_implement}
                onChange={onProject_TitleChanged} />
              </div>

              <div class="md:col-span-6">
                <label for="email">Brief Narrative :</label>
                <textarea type="text" name="email" id="email" class="h-44 border mt-1 rounded px-4 w-full bg-gray-50" value={brief_narrative}
                onChange={onProject_TitleChanged} />
              </div>

              <div class="md:col-span-3">
                <label for="address">Topics</label>
                <textarea type="textarea" name="address" id="address" class="h-44 border mt-1 rounded px-4 w-full bg-gray-50" value={topics}
                onChange={onProject_TitleChanged} placeholder="" />
              </div>

              <div class="md:col-span-3">
                <label for="city">Speakers</label>
                <textarea type="textarea" name="city" id="city" class="h-44 border mt-1 rounded px-4 w-full bg-gray-50" value={speakers}
                onChange={onProject_TitleChanged} placeholder="" />
              </div>

              <div class="md:col-span-2">
                <label for="country">Country / region</label>
                <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input name="country" id="country" placeholder="Country" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value={project_title}
                onChange={onProject_TitleChanged} />
                  <button tabindex="-1" class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                    <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                    <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                  </button>
                </div>
              </div>

              <div class="md:col-span-2">
                <label for="state">State / province</label>
                <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input name="state" id="state" placeholder="State" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value={project_title}
                onChange={onProject_TitleChanged} />
                  <button tabindex="-1" class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                    <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                    <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                  </button>
                </div>
              </div>

              <div class="md:col-span-1">
                <label for="zipcode">Zipcode</label>
                <input type="text" name="zipcode" id="zipcode" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" value={project_title}
                onChange={onProject_TitleChanged} />
              </div>

              <div class="md:col-span-6">
                <div class="inline-flex items-center">
                  <input type="checkbox" name="billing_same" id="billing_same" class="form-checkbox" />
                  <label for="billing_same" class="ml-2">My billing address is different than above.</label>
                </div>
              </div>

              <div class="md:col-span-2">
                <label for="soda">How many soda pops?</label>
                <div class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </button>
                  <input name="soda" id="soda" placeholder="0" class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent" value="0" />
                  <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-2 fill-current" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
      
              <div class="md:col-span-6 text-right">
                <div class="inline-flex items-end">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
          <div className="text-center">
            <button
              className="text-white inline-flex bg-red-900 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
              title="Save"
              onClick={onSaveReportClicked}
              disabled={!canSave}
            >
              Save
            </button>
        </div>
      </form>
    </>
  );
{/* <div>
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
            // value={userId}
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
</div> */}
  return content;
};

export default OutreachReportForm;

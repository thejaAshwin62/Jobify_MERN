import { FormRow, FormRowSelect, SubmitBtn } from ".";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form, useSubmit, Link } from "react-router-dom";
import { JOB_TYPE, JOB_STATUS, JOB_SORT_BY } from "../../../utils/constants";
import { useAllJobsContext } from "../pages/AllJobs";

const SearchContainer = () => {
  const submit = useSubmit();
  const { searchValues } = useAllJobsContext(); 

  const deBounce =(onChange)=>{
    let timeout;
    return (e) =>{
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(()=>{
        onChange(form)
      },500)
    }
  }

  return (
    <Wrapper>
      <Form className="form">
        <h5 className="form-title">search form</h5>
        <div className="form-center">
         
          <FormRow
            type="search"
            name="search"
            defaultValue={searchValues?.search || ""}
            onChange={deBounce((form)=>{
              submit(form)
            })}
          />
          <FormRowSelect
            labelText="job status"
            name="jobStatus"
            list={["all", ...Object.values(JOB_STATUS)]}
            defaultValue={searchValues?.jobStatus || "all"}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormRowSelect
            labelText="job type"
            name="jobType"
            list={["all", ...Object.values(JOB_TYPE)]}
            defaultValue={searchValues?.jobType || "all"}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormRowSelect
            name="sort"
            defaultValue={searchValues?.sort || "newest"}
            list={[...Object.values(JOB_SORT_BY)]}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <Link to="/dashboard/all-jobs" className="btn form-btn delete-btn">
            Reset Search Values
          </Link>
      
        </div>
      </Form>
    </Wrapper>
  );
};

export default SearchContainer;

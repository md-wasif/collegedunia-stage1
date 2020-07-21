import React from 'react'
import CollegeDetail from './CollegeDetail';
import './CollegeList.css';

const CollegeList = (props) => {
        return (
            <div className="colleges">
            <p className="heading">
               <b>Colleges in North India</b>
            </p>   
            <div className="college__list">
            {props.CollegeList.map((college) => {
                 return <CollegeDetail key={CollegeDetail["college_name"]} college={college} />;
             })} 
            </div>
            </div>
        )
      }


export default CollegeList;
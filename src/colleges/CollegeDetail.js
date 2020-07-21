import React from 'react';
import './CollegeDetail.css';

const CollegeDetail = (props) => {
    return (
        <div className="container">
        <div className="Image">
          <img alt='img' src={`${process.env.PUBLIC_URL}/images/college_02.jpg`}/> 
              <div className="College-Name">{props.college["college_name"]}</div>
                 {props.college.promoted && <div className="Promoted">PROMOTED</div>}
                   <div className="Tags">
                     {props.college.tags.map((tag) => (
                      <span className="Tag" key={tag}>
                       {tag}
                   </span>
               ))}
               </div> 
                <div className="Ranking">#{props.college.ranking}</div>
                  <div className="Rating-Remarks">
                  <span className="Rating-Remarks-Rating">{props.college.rating}</span>
                          /5
                  <br/>
                   {props.college.rating_remarks}
                </div>

          {props.college.discount > 0 ? (
               <div>
               <div className="Original-Fees">
                <strike>
                  &#8377;{props.college.original_fees.toLocaleString()}
                </strike>
                </div>
               <div className="Discounted-Fees">
                 &#8377;
              {props.college.discounted_fees.toLocaleString(undefined)}
               </div>
            <div className="Discount">{props.college.discount}</div>
          </div>
        ) : (
          <div className="No-Discount">
            &#8377;{props.college.original_fees.toLocaleString()}
          </div>
        )}
          <div className="Fees-Cycle">{props.college.fees_cycle}</div>
          <div className="Nearest-Places">
            <span className="Nearest-Place-1">
             {props.college.nearest_place[0]}
            </span>{" "}
            <span className="Nearest-Place-2">
             | {props.college.nearest_place[1]}
            </span>
        </div>
        <div className="Famous-Nearest-Places">
          {props.college.famous_nearest_places}
        </div>
        <div className="Offertext">{props.college.offertext}</div>
        <div className="Amenties">{props.college.amenties.join(" • ")}</div>
         </div>
         </div>
    )
}

export default CollegeDetail;

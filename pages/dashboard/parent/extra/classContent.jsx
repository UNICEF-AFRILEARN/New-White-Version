import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { BiChevronDown } from 'react-icons/bi';
import styles from '../../../../styles/parentdashboard.module.css';
import Classcontentmain from './classcontentmain';

const ClassContent = ({courseContext, children}) => {

  const myChildren = children;
  const mappedCoursesCount = myChildren?.map((children) =>  
    children.enrolledCourses)
    const classList = mappedCoursesCount?.filter((filterClass) => filterClass.length > 0).map((mappinClass) => mappinClass[0].courseId.name)
    console.log("Children from course content =>>>>>", myChildren);



  return (
    <div className={styles.classcontentwrapper}>
        <div className={styles.contentheaderwrapper}>
          <h3>Class Contents</h3>
          <div className={styles.labelwrapper}>
            <ul>
              <li>Filter by class</li>
              <select
                        // className={`${styles.pushDown} form-control form-control-sm`}
                        // value={selectedCourse}
                        defaultValue={"default"}
                        // onChange={(e) => setCourseSelected(e.target.value)}
                        >
                          <option value={"default"}>
                              Select a class
                          </option>
            
                        {classList && classList.map((childClass) => 
                        <option 
                        placeholder='Select a Role'
                            >{childClass}
                        </option>
                        )}
                    </select>
              <li>Class note <BiChevronDown /> </li>
            </ul>
          </div>
        </div>
        <Classcontentmain  myChildren={myChildren}/>
    </div>
  )
}

export default ClassContent
import React from 'react';

import styles from '../../../../styles/teacher.module.css';
import Examsholder from '../extra/examsholder';
import Middletab from '../extra/middletab';
import Searchbar from '../extra/searchbar';
import Setupxamssidebar from '../extra/setupxamssidebar';

const Examinations = () => {
  return (
    <div className={styles.examinationwrapper}>
        <div className={styles.examsheaderwrapper}>

        </div>
        <Middletab />
        <Searchbar />
        <Examsholder />
        <Setupxamssidebar />
    </div>
  )
}

export default Examinations
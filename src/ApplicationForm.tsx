import React from 'react';
import styles from './ApplicationForm.module.css';

interface Props {}

export const ApplicationForm = (props: Props) => (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.return}>Back to all positions</div>
      </div>

      <div className={styles.application_form}>
        <div className={styles.info_area}>
          <div className={styles.title}>UI/UX Designer (m/f/d)</div>
          <div>Permanent employee, Full-time · Remote</div>
          
          <div className={styles.separator}></div>
    
          <div>Thank you for your interest in optilyz.</div>
          <br></br>
          <div>Please fill out the short form to the right. Should you have 
          difficulties with the upload of your data, please send an 
          email to <a href="mailto:recruiting@optilyz.com">recruiting@optilyz.com</a>.</div>
          <br></br>
          <div>We are looking forward to hearing from you!</div>
        </div>

        <div className={styles.info_area_separator}></div>

        <form>
          <div className={styles.row}>
            <div className={styles.row_block_two}>
              <label htmlFor="first_name">First name *</label>
              <input type="text" name="first_name" placeholder="Max" required/>
            </div>

            <div className={styles.row_block_two}>
              <label htmlFor="last_name">Last name *</label>
              <input type="text" name="last_name" placeholder="Mustermann" required/>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.row_block_one}>
              <label htmlFor="email">E-Mail *</label>
              <input type="text" name="email" placeholder="max.mustermann@example.com" required/>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.row_block_one}>
              <label htmlFor="phone">Phone number</label>
              <input type="text" name="phone" placeholder="+49 123 456 789"/>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.row_block_two}>
              <label htmlFor="entry_date">Available from</label>
              <input type="text" name="entry_date" placeholder="01.11.2021"/>
            </div>

            <div className={styles.row_block_two}>
              <label htmlFor="salary">Expected salary</label>
              <input type="text" name="salary" placeholder="3.000€"/>
            </div>
          </div>

          <div className={styles.separator}></div>

          <div className={styles.documents_title}>Documents *</div>
          <div className={styles.documents_hint}>Please upload your documents in the PDF file format (max. 20 MB in total).</div>
          <div>
            <input type="file" required/>
          </div>

          <div className={styles.separator}></div>

          <div className={styles.privacy_statement}>
            <input type="checkbox" name="privacy_statemenet" required/>
            <label htmlFor="privacy_statemenet">I hereby confirm that I have read and understood the <a href="/">Data privacy statement.*</a></label>
          </div>

          <input className={styles.form_submit} type="submit" value="Send Application" onClick={() => console.log("You clicked on the submit button!")}/>
        </form>
      </div>
    </div>
);

import React, { Component } from 'react';
import Tabs from "../Tabs.js";
import Title from "../title.js";
import ReactTable from "react-table";
import Par from "../paragraph.js";
import 'react-table/react-table.css';
import coursedata from "./coursedata.js";
import coursedata5 from "./coursedata5.js";
import coursedata2 from "./coursedata2.js";
import coursedata3 from "./coursedata3.js";
import coursedata4 from "./coursedata4.js";
import coursedata6 from "./coursedata6.js";
import coursecolumns from "./coursecolumn.js";
import coursecolumns2 from "./coursecolumn2.js";
import "../styles/table.css";


const content = {
  aTab: <div>
          <Title name = 'REQUIRED COURSES'>
          </Title>
          <Par
            content = 'You’re at Cal and you want to go to vet school,
            so what do you do?  You obviously have a university full
            of courses to help you on your journey, but which courses
            should you take and when should you take them?
            Regardless of your major (you can have literally any major,
            and still go to vet school) there are certain
            “prerequisite” courses that you need to complete upon
            getting accepted into a vet school. Each school has
            different prerequisite courses, and they can change from
            year to year, so you should always check with your specific
            school. Having said that, here are the courses:'>
            </Par>
            <Title name = 'THE BASICS'>
            </Title>
            <ReactTable
              data={coursedata}
              columns={coursecolumns}
              className="table"
              minRows={14}
            />
            <Title name = 'UPPER DIVISIONS'>
            </Title>
            <Par
              content = 'Biochemistry(you only need one)!'>
              </Par>
            <Par
              content = '** NOTE: CHEM 135 does not meet the
              Biochemistry requirement for UC Davis; thus,
              it is not included here **'>
              </Par>
            <ReactTable
              data={coursedata2}
              columns={coursecolumns2}
              className="table"
              minRows={2}
            />
            <Par
              content = 'Genetics (you only need one!)'>
              </Par>
            <Par
              content = '** NOTE: IB 141 does not meet the Genetics requirement for UC Davis; thus, it is not included here **'>
              </Par>
            <ReactTable
              data={coursedata3}
              columns={coursecolumns}
              className="table"
              minRows={2}
            />
            <Par
              content = 'Physiology (you only need one!)'>
              </Par>
            <Par
              content = '** NOTE: IB 132 does not meet the Physiology requirement for UC Davis; thus, it is not included here **'>
              </Par>
              <ReactTable
                data={coursedata4}
                columns={coursecolumns}
                className="table"
                minRows={2}
              />
            <Par
              content = 'Microbiology (you only need one lecture and laboratory combination!)'>
              </Par>
            <Par
              content = '** NOTE: not required for UC Davis **'>
              </Par>
              <ReactTable
                data={coursedata5}
                columns={coursecolumns}
                className="table"
                minRows={2}
              />
            <Title name = 'OTHER'>
            </Title>
            <Par
              content = 'Almost every vet school requires the above requirements along with some random assortment of "other" classes.'>
              </Par>
            <Par
              content = 'Most "other" classes include: STATISTICS (STATS2, STATS20, PUBLIC HEALTH 142A);
              ENGLISH (R1A and R1B courses, English, Rhetoric, and Literature courses should fulfill this);
              PUBLIC SPEAKING (College Writing Program 10A/B); HUMANITIES.'>
              </Par>
            <Title name = 'FUN CLASSES'>
            </Title>
            <Par
              content = 'So how about fun classes that are not prerequisites for vet school?'>
              </Par>
            <ReactTable
              data={coursedata6}
              columns={coursecolumns}
              className="table"
              minRows={2}
            />
            <Par
              content = 'However, take heed that prerequisites, requirements, classes, and offerings are continuously changing - never static. Some useful resources are:'>
              </Par>
            <Par
              content = 'And don’t be afraid to contact vet schools directly; they are very responsive to prospective applicants and encourage questions while steering you in the right direction.'>
              </Par>

          </div>,
  bTab:
          <Title name = 'PAID MEMBERS ONLY RESOURCES'>
          </Title>,

  cTab: <div>
          <Title name = 'TEST BANK'>
          </Title>
        </div>,
};

export default content;

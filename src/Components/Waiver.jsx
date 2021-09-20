import React, { Component, useRef } from 'react';
import ReactToPrint from 'react-to-print';

export class ComponentToPrint extends React.PureComponent {
  render() {
    return (
      <div className="pdfWrapper KGN3">
        <h2 className="KGN3">Release of liability waiver form for activities, classes, and other programs sponsored by planet play</h2>
        <ul>
            <li>
                <p><strong>PARTICIPATION:</strong>I understand that upon entering I am being permitted to utilize the facilities, services and programs of Planet Play, for any
                    purpose, including, but not limited to observation or use of facilities or equipment, or participation in any program. I hereby acknowledge,
                    agree and represent that I have inspected and carefully considered such premises and facilities safe and reasonably suited for myself and
                    my children to participate.. During time spent inside Planet Play, it is my primary responsibility to accompany my child and make sure they are
                    safe and acting in a way to keep other children, parents, and guardians safe. My child is in good health and able to participate safely</p>
            </li>
            <li>
                <p><strong>WAIVER AND RELEASE:</strong>: I hereby voluntarily, fully and forever waive, release and discharge Planet Play, its owners, officers, directors,
                    agents, employees, volunteers, and all other persons or entities acting in any capacity on its behalf (hereinafter referred to collectively as
                    “PP”) from any and all losses, liabilities, claims, expenses, demands, actions, damages, injuries, causes of action, and rights of action which are
                    related to, arise out of, or are in any way connected with my child’s participation in activities at, with, or sponsored or administered by PP.
                    The foregoing waiver of liability includes, without limitation, damages or injury resulting from the negligence of PP (whether such claims are
                    based upon breach of contract, breach of warranty, or any other legal theory) or from any other cause or causes. 
                </p>
            </li>
            <li>
                <p><strong>ASSUMPTION OF RISK:</strong>I understand that my child may suffer physical harm as a result of the acts or omissions of me, PP, or other
                    participants due to his or her participation in activities at, with, or sponsored or administered by PP. My child elects to participate in spite of
                    the risks.</p>
            </li>
            <li>
                <p><strong>COVENANT NOT TO SUE:</strong>: I agree not to institute any suit or action at law or otherwise against PP, or to initiate or assist in the prosecution
                    of any claim for damages or cause of action which my child or I may have by reason of injury to my child, myself, or property related to,
                    arising out of, or in any way connected with my child’s participation in activities at, with, or sponsored or administered by PP</p>
            </li>
            <li>
                <p><strong>INDEMNITY:</strong>: I agree to indemnify, defend, and hold harmless PP from any and all losses, liabilities, claims, expenses, actions or proceedings of
                    any kind which may be initiated by myself, including n behalf of my child, or any other person or entity related to, arising out of, or in any
                    way connected with my child’s participation in activities at, with, or sponsored or administered by PP. This includes reimbursement for all legal
                    costs and attorneys’ fees incurred by PP, myself, and other indemnified parties, or any of them, for the defense of any such actions. </p>
            </li>
            <li>
                <p><strong>MEDICAL EXPENSES:</strong>:I will pay for my child’s and my own emergency medical expenses and all subsequent medical expenses in the event of
                    any incident, accident, illness or incapacity, regardless of whether I have otherwise authorized such expenses. 
                </p>
            </li>
            <li>
                <p>By signing this Waiver, I make all of the preceding statements for and on behalf of myself, my spouse, my children, my parents, and any of
                    our or their heirs, assigns, personal representatives, and estates.</p>
            </li>
            <li>
                <p><strong>PHOTOGRAPHY RELEASE:</strong>: I give consent for myself or my child to be photographed, videotapes or filmed while participating in Planet Play’s
                    activities and for the resulting images to be used by Planet Play for promotional purposes</p>
            </li>
        </ul>
        <div className="pdfWrapper-form">
            <div className="pdfWrapper-filed">
              <p><span className="pdfWrapper-input">_______________________</span><span className="pdfWrapper-title">Date</span></p>
              <p><span className="pdfWrapper-input">_______________________</span><span className="pdfWrapper-title">Print Children’s Names</span></p>
              <p><span className="pdfWrapper-input">_______________________</span></p>
              <p><span className="pdfWrapper-input">_______________________</span></p>
            </div>
            <div className="pdfWrapper-filed">
              <p><span className="pdfWrapper-input">_____________________________________________________</span><span className="pdfWrapper-title">Parent/Guardians Email Address</span></p>
              <p><span className="pdfWrapper-input">_____________________________________________________</span><span className="pdfWrapper-title">Parent/Guardians Phone Number</span></p>
            </div>
            <div className="pdfWrapper-filed">
              <p><span className="pdfWrapper-input">_____________________________________________________</span><span className="pdfWrapper-title">Print Parent/Guardians Name</span></p>
              <p><span className="pdfWrapper-input">_____________________________________________________</span><span className="pdfWrapper-title">Parent/Guardians Signature</span></p>
            </div>
        </div>
      </div>
    );
  }
}

class Waiver extends Component {

  render() {
    return (
    <div className="container">
      <br></br>
      <div  id="wave"> <h1 className='KGN3'> Planet Play requires a signed waiver for all children entering our facility.
</h1></div>
      {/* <ReactToPrint content={() => this.componentRef}>
          <PrintContextConsumer>
            {({ handlePrint }) => (
              <button onClick={handlePrint}>Print this out!</button>
            )}
          </PrintContextConsumer>
        </ReactToPrint> */}
        <ComponentToPrint ref={el => (this.componentRef = el)} />
    </div>
    );
  }

}

const WaiverPDF = () => {
  const componentRef = useRef();

  return (
    <div className="container">
      <br></br>
      <div  id="wave"> <h1 className='KGN3'> Planet Play requires a signed waiver for all children entering our facility.
</h1></div>
      <ReactToPrint 
        trigger={() => <button className="pdfWrapper-Button">Print this out!</button>}
        content={() => componentRef.current}
      />
      <div className="pdfWrapper-view"><ComponentToPrint ref={componentRef} family="Fira Sans" /></div>
    </div>
  );
};

export default WaiverPDF;

import Wrapper from '../styles/styled/Voting.styled'

export default function Voting() {

  return (
    
    <>
    <Wrapper>
      <div className="container">
        <div className="box">
          <span></span>
          <div className="content">
            <h2>First Candidate</h2>
            <p>
              We Will Wrap You!
            </p>
          </div>
        </div>
        <div className="box">
          <span></span>
          <div className="content">
            <h2>Second Candidate</h2>
            <p>
                We Will Cut You!
            </p>
          </div>
        </div>
        <div className="box">
          <h2>Third Candidate</h2>
          <p>
            We Will Rock You!
          </p>
        </div>
      </div>
      </Wrapper>
    </>
  );
}

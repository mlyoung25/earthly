import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'


function ChallengeSection() {
  const [challenges, setChallenges] = useState([
    { name: 'Challenge 1', description: 'This is challenge 1', accepted: false, progress: 0 },
    { name: 'Challenge 2', description: 'This is challenge 2', accepted: false, progress: 0 },
    { name: 'Challenge 3', description: 'This is challenge 3', accepted: false, progress: 0 },
  ]);

  const acceptChallenge = (index) => {
    const newChallenges = [...challenges];
    newChallenges[index].accepted = true;
    setChallenges(newChallenges);
  }

  const updateProgress = (index, progress) => {
    if (progress >= 0 && progress <= 100) {
    const newChallenges = [...challenges];
    newChallenges[index].progress = progress;
    setChallenges(newChallenges);
    } else {
        alert("Please enter progress between 0-100")
    }
  }

  return (
    <div>
      <h1>Challenges</h1>
      {challenges.map((challenge, index) => (
        <div key={index}>
          <h2 className="ChallengeName">{challenge.name}</h2>
          <p className="ChallengeDesc">{challenge.description}</p>
          {!challenge.accepted && (
            <button onClick={() => acceptChallenge(index)} className = "acceptButton">Accept</button>
          )}
          {challenge.accepted && (
            <>
            <input type="number" onChange={(e) => updateProgress(index, e.target.value)} placeholder="Enter progress percentage"/>
            <ProgressBar animated variant="success" now={challenge.progress} label={`${challenge.progress}%`} max={100} style={{width:'80%',margin:'0 auto'}}/>
            <progress value={challenge.progress} max="100"></progress>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default ChallengeSection;

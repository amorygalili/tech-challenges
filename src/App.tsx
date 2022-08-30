import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const ChallengeIntro = lazy(() => import("./challenge-intro/ChallengeIntro"));
const ChallengeOne = lazy(
  () => import("./challenges/challenge-one/ChallengeOne")
);

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading the Challenges</div>}>
        <Routes>
          <Route path="/" element={<ChallengeIntro />} />
          <Route path="/1" element={<ChallengeOne />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

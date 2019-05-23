import React from "react"
import { Provider } from 'react-redux'
import renderer from "react-test-renderer"

import NameInput from "../src/components/graph/NameInput.js"
import LevelThermometer from "../src/components/graph/LevelThermometer.js"
import NightingaleChart from "../src/components/graph/NightingaleChart.js"
import PointSummaries from "../src/components/graph/PointSummaries.js"
import TitleSelector from "../src/components/graph/TitleSelector.js"
import Track from "../src/components/graph/Track.js"
import TrackSelector from "../src/components/graph/TrackSelector.js"

import configureStore from 'redux-mock-store'
import { mount, shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

const initialState = {
    graph: {
    graphQLRawData: null,
    name: 'John Cokos',
    title: 'JavaScript Instructor',
    milestoneByTrack: {
      // BUSINESS ACUMEN COMPETENCY --------------------
      MISSION_AND_VISION: 4,
      CUSTOMER_ORIENTATION: 2,
  
      // GROWTH MINDSET COMPETENCY --------------------
      ADAPTABILITY: 3,
      CURIOSITY: 4,
      CONSTANT_IMPROVEMENT: 2,
      HANDLING_AMBIGUITY: 3,
      INCLUSIVITY: 1,
      OPENNESS: 1,
      AMBITION_AND_INITIATIVE: 1,
  
      // LEADERSHIP COMPETENCY --------------------
      ACCOUNTABILITY: 1,
      INTEGRITY: 4,
      OWNERSHIP: 3,
      MENTORSHIP: 2,
      NETWORKING: 2,
      SUCCESSION: 2,
      HEALTH_AND_SAFETY: 0,
      CONFIDENCE: 4,
      CREDIBILITY: 3,
  
      // CRAFT COMPETENCY --------------------
      TECHNICAL: 4,
      PROCESS: 3,
      INNOVATION: 2,
      TOOL_PROFICIENCY: 4,
  
      // QUALITY COMPETENCY --------------------
      JUDGEMENT: 3,
      ROOT_CAUSE_RESOLUTION: 2,
  
      // COMMUNICATION COMPETENCY --------------------
      WRITING: 1,
      READING: 2,
      SPEAKING: 3,
      LISTENING: 3,
  
      // TEAMWORK COMPETENCY --------------------
      COLLABORATION: 2,
  
      // RESULTS COMPETENCY --------------------
      AGILE: 0,
      ORGANIZATIONAL: 2,
      CREATIVE: 3,
      PROJECT_EXECUTION: 1,
      ANALYTICAL_THINKING: 1,
      PRIORITIZATION: 1,
      PROBLEM_SOLVING: 1,
      INCREMENTAL_DELIVERY: 3,
      DECISION_MAKING: 4,
      APPROPRIATE_AUTONOMY: 4,
      PLANNING_AND_ESTIMATING: 2,
      DEPENDABILITY_AND_RELIABILITY: 3,
    },
    focusedTrackId: 'MISSION_AND_VISION',
    totalPoints: 96,
    categoryPoints: [
      { categoryId: 'A', points: 6 },
      { categoryId: 'B', points: 15 },
      { categoryId: 'C', points: 21 },
      { categoryId: 'D', points: 13 },
      { categoryId: 'E', points: 5 },
      { categoryId: 'F', points: 9 },
      { categoryId: 'G', points: 2 },
      { categoryId: 'H', points: 25 },
    ],
    eligibleTitles: [
      'JavaScript Instructor',
      'Bald Person',
      'Former CDK Employee',
    ],
    tracks: null,
    trackIds: null,
    }
  }; 

const mockStore = configureStore();
let wrapper;
let store;

configure({ adapter: new Adapter() });

describe("Graph component rendering", () => {
    beforeEach(() => {
        //creates the store with any initial state or middleware needed  
        store = mockStore(initialState)
        wrapper = mount(<Provider store={store}><NameInput /></Provider>)
    })

  it("NameInput renders correctly", () => {
    const tree = renderer
      .create(<NameInput store={store}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("LevelThermometer renders correctly", () => {
    const tree = renderer
      .create(<LevelThermometer store={store}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("NightingaleChart renders correctly", () => {
    const tree = renderer
      .create(<NightingaleChart store={store}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("PointSummaries renders correctly", () => {
    const tree = renderer
      .create(<PointSummaries store={store}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("TitleSelector renders correctly", () => {
    const tree = renderer
      .create(<TitleSelector store={store}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("Track renders correctly", () => {
    const tree = renderer
      .create(<Track store={store}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
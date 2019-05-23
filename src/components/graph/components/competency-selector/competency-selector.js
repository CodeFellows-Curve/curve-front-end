import React from 'react'
import styled from 'styled-components'
import CompetencyStyles from './competency-selector.module.css'

import { connect } from 'react-redux'
import * as actions from '../../../../actions/graph-actions.js'

class CompetencySelector extends React.Component {
  render() {
    const handleClick = (competencyId) => {
      console.log('I happened', competencyId.categoryName)
      

    }
    let competencyIds = this.props.graph.review[0].category
    return (
      <>
        <style jsx>{`
          .BusinessAcumen {
            border: 3px solid black;
            background: pink;
            padding: 5px;
          }
          .GrowthMindset {
            border: 3px solid black;
            background: red;
            padding: 5px;
          }
          .Leadership {
            border: 3px solid black;
            background: orange;
            padding: 5px;
          }
          .Craft {
            border: 3px solid black;
            background: yellow;
            padding: 5px;
          }
          .Quality {
            border: 3px solid black;
            background: green;
            padding: 5px;
          }
          .Communication {
            border: 3px solid black;
            background: blue;
            padding: 5px;
          }
          .Teamwork {
            border: 3px solid black;
            background: indigo;
            padding: 5px;
          }
          .Results {
            border: 3px solid black;
            background: violet;
            padding: 5px;
          }
          `}
      </style>
      <ul className = 'competency-holder'>
        {competencyIds.map(competencyId => (
          <>
          <li 
          className = {CompetencyStyles.competencyli}
          key={competencyId.categoryName}
          onClick={() => this.props.toggleHidden(true)}
          >
          <p>{competencyId.categoryName}</p>
          <span
            key={competencyId.categoryName.replace(/\s/g, '')}
            className={competencyId.categoryName.replace(/\s/g, '')}
          >
            {competencyId.overallScore}
          </span>
          </li>
          {competencyId.isHidden && competencyId.subcategory.map(proficiency => (
            <>
            <li 
            className={proficiency.subCategoryName}
            key={proficiency.subCategoryName}
            >
              {proficiency.subCategoryName}
            </li>
            </>
          ))}
          </>
        ))}
      </ul>
      </>
    )
  }
}

const mapStateToProps = state => ({
  graph: state.graph.user,
  focusedProficiencyId: state.graph.focusedProficiencyId,
  tracks: state.graph.tracks,
  trackIds: state.graph.trackIds,
})

const mapDispatchToProps = (dispatch, getState) => ({
  setFocused: payload => dispatch(actions.setFocusedTrackId(payload)),
  toggleHidden: (payload) => dispatch(actions.toggleHidden(payload))

})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompetencySelector)

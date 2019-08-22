import React from "react"
import { Timeline } from 'antd';
import Release from "./Release"
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import _ from "lodash"

import styled from 'styled-components';
import VisibilitySensor from "react-visibility-sensor";

function ReleaseTimeline(props) {

  const Visdiv = styled.div`
  width: 100%; 
  height: 1px; 
`

  const RELEASES_QUERY = gql`
  query Releases($first: Int, $after: String) {
    repository(owner: "cojonas",   name: "gsd-frontend-backend") {
      releases(first: $first , after: $after, orderBy: { field:CREATED_AT, direction:DESC}) {
        edges {
          node {
            id
            publishedAt
            tagName
            description
            releaseAssets(first: 1) {
              edges {
                node {
                  id
                  downloadUrl
                  name
                  size
                }
              }
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
        
      }
    }
  }
  
      `

    const {   data, loading, error, fetchMore } = useQuery(RELEASES_QUERY,
       {variables: { first: props.first}}); 
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :( {error.message}</p>;

      
      const items = data.repository.releases.edges;



      const hasNextPage = data.repository.releases.pageInfo.hasNextPage;
      const endCursor = data.repository.releases.pageInfo.endCursor;

    return <div style={{ width: "100%" }}>
      <Timeline>
        {items.map((item) => <Timeline.Item key={item.node.id}><Release data={item} /></Timeline.Item>)}
      </Timeline>


      <VisibilitySensor onChange={(isVisible ) => {
              if (isVisible && hasNextPage){
                fetchMore({
                  variables: {
                    first: props.first,
                    after: endCursor
                  }, 
                  updateQuery: (prev, { fetchMoreResult}) => {
                    
                    if (!fetchMoreResult) return prev;
            
                    var totalEdges = prev.repository.releases.edges.concat(fetchMoreResult.repository.releases.edges)
                    var newResult = _.cloneDeep(fetchMoreResult)
          
                    newResult.repository.releases.edges = totalEdges;
          
                    return newResult
                  }
                })
              }
      }}>
        <Visdiv />
      </VisibilitySensor>

    </div>
}
export default ReleaseTimeline
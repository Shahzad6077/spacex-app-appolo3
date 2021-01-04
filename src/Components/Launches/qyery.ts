import { gql } from "@apollo/client";

export const QUERY_LAUNCHES = gql`
  query launchesData {
    launches(order: "desc", sort: "launch_year", limit: 20) {
      id
      launch_year
      links {
        flickr_images
      }
      mission_name
    }
  }
`;

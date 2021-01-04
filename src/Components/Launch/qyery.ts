import { gql } from "@apollo/client";

export const QUERY_LAUNCH_DETAILS = gql`
  query launchDetails($id: ID!) {
    launch(id: $id) {
      details
      id
      mission_name
      launch_year
      launch_success
      rocket {
        rocket_name
        rocket_type
      }
      links {
        flickr_images
        mission_patch_small
        video_link
      }
      upcoming
    }
  }
`;

import ContentLoader from "react-content-loader"

export const Skeleton = (props) => (
  <ContentLoader 
    speed={4}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#ababab"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="426" rx="5" ry="5" width="97" height="28" /> 
    <rect x="11" y="271" rx="3" ry="3" width="257" height="27" /> 
    <rect x="0" y="316" rx="15" ry="15" width="280" height="86" /> 
    <circle cx="137" cy="128" r="129" /> 
    <rect x="122" y="416" rx="28" ry="28" width="156" height="46" />
  </ContentLoader>
)

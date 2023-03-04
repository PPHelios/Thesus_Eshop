Typography =
  "body1" |
  "body2" |
  "button" |
  "caption" |
  "h1" |
  "h2" |
  "h3" |
  "h4" |
  "h5" |
  "h6" |
  "inherit" |
  "overline" |
  "subtitle1" |
  "subtitle2" |
  <Typography variant="h1" component="h2"></Typography>;

  sizing:
  <Box sx={{ width: 1/4 }}> // Equivalent to width: '25%'
<Box sx={{ width: 300 }}> // Numbers are converted to pixel values.
<Box sx={{ width: '75%' }}> // String values are used as raw CSS.
        <Box sx={{ width: 1 }}> // 100%
          
        
  // opt out of RTL        
  const UnaffectedText = styled('div')`
  /* @noflip */
  text-align: left`

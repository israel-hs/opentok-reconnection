// Make a copy of this file and rename it as 'config.js'.
// Then replace the following values with your OpenTok API key
// as well as a test session ID and token.
//
// For the purposes of quickly demonstrating the automatic reconnection
// functionality through this sample code, we are utilizing the 'config.js'
// file to set an API key, session ID and token to use. However, when
// deploying your application to production, you should not hardcode the
// session ID and token as we do here. Instead, you shoud use one of the
// OpenTok Server SDKs to dynamically generate a session ID and token.
// See https://tokbox.com/developer/sdks/server/ on how to use and deploy
// an OpenTok Server SDK.

var apiKey = "45828062";
var sessionId =
  "2_MX40NTgyODA2Mn5-MTY4NDQwNTM5Mjc2MX5uSWNiTVNzb2dnQSt4U0Q0bmcrY2sxaWZ-UH5-";
var token =
  "T1==cGFydG5lcl9pZD00NTgyODA2MiZzaWc9Nzk0MGU4YzA1OTM1NzY5ZDlkYjMxOTA4MjM0OTE0MWI5OGMyOTI5YzpzZXNzaW9uX2lkPTJfTVg0ME5UZ3lPREEyTW41LU1UWTRORFF3TlRNNU1qYzJNWDV1U1dOaVRWTnpiMmRuUVN0NFUwUTBibWNyWTJzeGFXWi1VSDUtJmNyZWF0ZV90aW1lPTE2ODQ0MDY2NDcmbm9uY2U9MC4zNTM3Njg0MzY3MTkwNzcyJnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE2ODQ0OTMwNDc=";

// Set this to true and signals initiated while reconnecting to a session
// will be sent when reconnected:
var retrySignalOnReconnect = true;

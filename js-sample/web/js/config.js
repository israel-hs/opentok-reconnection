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
  "2_MX40NTgyODA2Mn5-MTY4MjQyOTM3NjI5MX5RVHZJeGNIU0VBSys2NVh6RWttUWdXYjR-UH5-";
var token =
  "T1==cGFydG5lcl9pZD00NTgyODA2MiZzaWc9Njg4NmM5ZGMyNTkzNGRmYmZlZDdkMzE0MDFhN2NkMGY4OTVmMjdkYzpzZXNzaW9uX2lkPTJfTVg0ME5UZ3lPREEyTW41LU1UWTRNalF5T1RNM05qSTVNWDVSVkhaSmVHTklVMFZCU3lzMk5WaDZSV3R0VVdkWFlqUi1VSDUtJmNyZWF0ZV90aW1lPTE2ODI0MzA5NDgmbm9uY2U9MC41NjAyMzk1Mzg3MjAzNjM0JnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE2ODI1MTczNDg=";

// Set this to true and signals initiated while reconnecting to a session
// will be sent when reconnected:
var retrySignalOnReconnect = false;

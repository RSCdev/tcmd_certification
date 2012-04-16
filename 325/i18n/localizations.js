/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_filetitle": "Orientation and Gestures",
		"%l_subtitle": "Advanced Titanium Mobile Development",
		"%l_lessontitle": "Orientation and Gestures",
		"%l_slidenote_titleslide": "<b>Module time: 60 mins</b>(30 mins teaching, 30 mins for lab)",

		"%l_agenda_title": "Agenda",
		"%l_agenda1": "Device orientation",
		"%l_agenda2": "Gestures",
		"%l_slidenote_agenda": "In this module, we�ll discuss how to deal with device orientation as well as how to integrate gestures other than taps into your app.",

		"%l_orientation": "Device orientation",
		"%l_orientation_image": "<img src='images/orientation.png' style='margin-top:5px;height:350px;float:right;'/>",
		"%l_slidenote_examples": "Many options for formatting tables (seven total shown)",
		"%l_lock_orientation": "Locking orientation",
		"%l_fix_orientation": "Fixing orientation per window",
		"%l_handle_orientation": "Handling orientation events",
		"%l_slidenote_orientation": "Three ways to deal with orientation:<br><ul><li>Lock the orientation for the entire app</li><li>Setting a fixed orientation for specific screens within your app (e.g. one screen in portrait and another in landscape, but those are locked)</li><li>Actively updating your app�s UI based on the current orientation by handling orientation events</li></ul><br>Per Apple�s HIG on iPhone, either:<ul><li>Lock orientation, or</li><li>Support portrait, landscape left & right, but not upside down (to prevent upside down phone during incoming call)</li></ul><br>On iPad, you should support all orientations",

		"%l_lock_orientation": "Locking Orientation - iOS",
		"%in_tiapp": "In tiapp.xml:",
		"%l_lock_orientation_image": "<img src='images/lock-orientation.png' style='margin-top:5px;height:350px;'/>",
		"%l_slidenote_lock_orientation": "For iOS, set supported orientations in tiapp.xml<br>To lock orientation, just remove the non-supported orientations",
		
		
		"%l_lock_orientation_android": "Locking Orientation - Android",
		"%l_option_1": "Option 1 - modify tiapp.xml:",
		"%l_copy_code": "Copy code from build/android/AndroidManifest.xml",
		"%l_add_nested": "Add nested < manifest > tags within < android >",
		"%l_remove": "remove '|orientation' from every node",
		"%l_lock_orientation_android_image": "<img src='images/lock-orientation-android.png' style='margin-top:5px;height:350px;float:right;'/>",
		"%l_slidenote_lock_orientation_android": "Three options for locking orientation on Android<br>Make sure to remove the bar and orientation from every node",
		
		"%l_option_2": "Option 2 - Custom Android manifest file",
		"%l_copy_build": "Copy build/android/AndroidManifest.xml to <b>platform/android/AndroidManifest.xml</b>",
		"%l_remove": "remove '|orientation' from every node",
		"%l_lock_orientation_android_image_2": "<img src='images/lock-orientation-android-2.png' style='margin-top:5px;height:350px;float:right;'/>"
		"%l_slidenote_lock_orientation_android_2": "Option 2 is to create a custom manifest file in the Platform/android folder<br>The Platform folder doesn�t exist by default<br>Clean the project before rebuilding to clear out old AndroidManifest.xml file",
		"%l_fixed_orientation": "Fixed Orientation per Window",
		"%l_window_modes": "Window Orientation Modes",
		"%l_supported_val": "Supported values include:",
		
		"%l_portrait": "PORTRAIT / UPSIDE_PORTRAIT",
		"%l_landscape": "LANDSCAPE_LEFT / LANDSCAPE_RIGHT",
		"%l_face": "FACE_UP / FACE_DOWN",
		"%l_fixed_orientation_image": "<img src='images/fixed-orientation.png' style='margin-top:5px;height:250px;'/>",
		
		
		"%l_slidenote_fixed_orientation": "You can set orientation on a per window basis within your app<br>The older Ti.UI.orientation property technique is deprecated and should not be used.",
		
		"%l_or_events": "Orientation Events",
		"%l_ti_gesture": "Ti.Gesture.orientationchange",
		"%l_event_props": "Event properties and methods",
		"%l_or_events_image": "<img src='images/or-events.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_or_events": "You can react to orientation change events<br>Use the Ti.Gesture event listener<br>Test on device to be sure you�re getting/using values you expect<br>They can differ between iOS and Android",
		
		"%l_handling_or": "Handling Orientation Changes",
		"%l_react_to": "React to orientation change via event listener",
		"%l_use_self": ">Use self-contained, self-updating UI components",
		"%l_move_rotate": "Move, rotate, and swap UI elements",
		"%l_take_adv": "Take advantage of the orientation",
		"%l_dont_forget": "Don't forget the soft keyboard",
		"%l_slidenote_handling_or": "Unless your UI dictates otherwise, best-practice is to actively react to orientation changes<br>Self-contained, self-updating is same as we use in TiBountyHunter with the tableview<br>Components listen for a global orientation event and update themselves<br>Take advantage � move components to logical location, change size & shape, show different content (as in the Jamie Oliver recipe application that shows longer how-to info in landscape and short text & ingredients in portrait)<br>Soft keyboard � might cover a lot more of your UI",
		"%l_gestures": "Gestures",
		"%l_slidenote_gestures": "",
		"%l_shake": "Shake",
		"%l_swipe": "Swipe",
		"%l_touch": "Touch start, end, move, and cancel",
		"%l_pinch": "Pinch (iOS)",
		"%l_long": "Long press",
		"%l_pitch": "Pitch, roll, and yaw",
		"%l_slidenote_gestures_detail": "Other than taps, you can react to �<br>(don�t go too deep here, there are upcoming slides for that)",
		
		"%l_shake_image": "<img src='images/shake.png' style='margin-top:5px;height:300px;float:right;'/>",
		"%l_ti_gesture": "Ti.Gesture.shake",
		"%l_ev_obj": "Event object properties",
		"%l_shake_code_image": "<img src='images/shake-code.png' style='margin-top:5px;height:200px;'/>",
		"%l_slidenote_shake": "timestamp is useful to track the time since last shake<br>Useful for not over reacting to shakes (delay before counting as a new shake event)",
		
		"%l_swipes": "Swipes",
		"%l_swipe_image": "<img src='images/swipe.png' style='margin-top:5px;height:300px;float:right;'/>",
		"%l_built_in": "Built-in event on most Ti.UI elements",
		"%l_direction": "direction",
		"%l_source": "source",
		"%l_xy": "x/y coords",
		"%l_slidenote_swipes": "Swipe supported on pretty much all Ti.UI components<br>Most likely to be used on views, windows, tableviews, imageviews, labels, web views<br>Key object properties are direction (left or right) and source",
		
		"%l_touches": "Touches",
		"%l_subtypes": "Subtypes: touchstart, touchmove, touchend, touchcancel",
		"%l_touchmove": "touchmove fires continuously during event",
		"%l_slidenote_touches": "touchcancel fired when your app is interrupted (phone call)<br>Use x/y coordinates to determine direction",
		
		"%l_pinch": "Pinch",
		"%l_pinch_image": "<img src='images/pinch.png' style='margin-top:5px;height:300px;float:right;'/>",
		"%l_ios_pinch": "iOS only (for now)",
		"%l_zoom": "Zoom only (no rotation)",
		"%l_pinch_code_image": "<img src='images/pinch-code.png' style='margin-top:5px;height:200px;'/>",
		"%l_slidenote_pinch": "Pinch support added in 1.8.0.1, Android support planned<br>Only zoom supported now, rotation might be added",
		
		
		"%l_long_press": "Long press",
		"%l_natively": "Natively supported in 1.8+",
		"%l_sim_by": "Simulate by tracking touchstart and touchend",
		"%l_fak_android": "<a href='https://gist.github.com/1019105'>https://gist.github.com/1019105</a>",
		"%l_fak_long_android": "Faking long press in Android",		
		"%l_fak_ios": "<a href='https://gist.github.com/1018107'>https://gist.github.com/1018107</a>",
		"%l_fak_long_delete": "Long press to delete table row",
		"%l_keep_mind": "Keep in mind native UI conventions for long presses",
		"%l_slidenote_long_press": "ative support for long press added in 1.8.0.1<br>Simulate in older SDKs by tracking touchstart and touchend<br>A couple of gists show how you could use this<br>Keep in mind native conventions: e.g. on iOS, magnifies view in some contexts<br>Long press will be natively supported soon, maybe 1.8",
	
		"%l_acc": "Accelerometer",
		"%l_ios_android": "iOS and Android natively support gyroscope",
		"%l_ti_apis": "Titanium APIs don't support it currently",
		"%l_not_all": "Not all devices include necessary gyro hardware",
		"%l_approx": "Approximation: Use the accelerometer to track pitch, roll, and yaw changes",
		"%l_ki_demo": "Kitchen Sink demo",
		"%l_slidenote_acc": "Android and iOS support gyroscope APIs to track rotational changes<br>But not currently supported in Titanium APIs<br>Use linear acceleration from accelerometer as workaround<br>Detect 3-axis change values and will probably need some good math to get accurate correspondence to pitch, roll, yaw<br><b>Demo must be run on a device</b><br>Phone tab > Accelerometer<br>Resources/examples/accelerometer.js",
		
		"%l_qa": "Q&amp;A",
		"%l_slidenote_qa": "",
		
		"%l_lab_goals": "Lab Goals",
		"%l_update_simple": "Update simple app to add orientation support",
		"%l_update_data": "Update data based on swipe and shake events",
		"%l_demoURL": "Demo and wiki URL",
		"%l_slidenote_lab_goals": "In this lab you will create modify a simple UI based on orientation changes and then alter than data based on swipe and shake gesture events. When the phone registers the shake event, it will choose a random photo to display as the album image. When you swipe over the copy, it will choose a random one for display as well. Rotation of device will reorient the content of the window to be more effectively located.",
		
		
		"%l_lab": "Lab",
		"%l_slidenote_lab": "Lab for TiBountyHunter we will redraw and create nice orientation specific layouts for our application windows. This happens here:<pre>Ti.Gesture.addEventListener('orientationchange', function(e) {container.width =Ti.Platform.displayCaps.platformWidth/2;}); </pre>basically, we listen for orientation change and update our UI to match.  You should add orientation change handlers for every component in your UI that needs to be updated based on orientation"
	}
});
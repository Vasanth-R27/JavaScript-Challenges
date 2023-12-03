// if-else

//  Notification from phone's battery percentage

const batteryPercent = "20%";

if (batteryPercent == "100%") {
  console.log("Your battery is fully charged");
} else if (batteryPercent == "20%") {
  console.log(
    "Less than 20% of battery remaining. Turn on battery saver to save power"
  );
} else if (batteryPercent == "10%") {
  console.log(
    "Less than 10% of battery remaining. Turn on battery saver to save power"
  );
}

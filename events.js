// Ontario Track Days+ — upcoming events data for the public page.
// Refreshed by the curation pass: future events only, one entry per event.
// Field set mirrors the listing template in the Starter Brief (v1.4, section 5).
// Example entry:
// {
//   title: "Open Car Lapping — Full Day",
//   date: "2027-05-08",            // ISO, used for month filter + sorting
//   dateLabel: "Sat, May 8, 2027", // display string
//   track: "Toronto Motorsports Park",
//   configuration: "",
//   category: "Lapping",           // HPDE / Lapping / School / Time Attack / Special Event — Lapping / Winter Lapping
//   host: "Toronto Motorsports Park",
//   times: "10:00 AM – 5:00 PM",
//   cost: "$220 (cash at gate)",
//   novice: true,                  // only true when the organizer says so — never inferred
//   notes: "",
//   register: "",
//   source: "",
//   lastVerified: "2027-01-15"
// }
window.OTD_EVENTS = [];

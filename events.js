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
window.OTD_EVENTS = [
  {
    title: "Open Car Lapping — Bonus Session",
    date: "2026-11-18",
    dateLabel: "Wed, Nov 18, 2026",
    track: "Toronto Motorsports Park",
    configuration: "",
    category: "Lapping",
    host: "Toronto Motorsports Park",
    times: "12:00 PM – 4:00 PM",
    cost: "$140 (at the track)",
    novice: false,
    notes: "Bonus session — the 2026 season has wrapped and TMP is running weather-dependent bonus lapping days, announced on its social media a few days ahead. Pay at the track.",
    register: "",
    source: "https://www.facebook.com/reel/1661747545497616/",
    lastVerified: "2026-11-17"
  }
];

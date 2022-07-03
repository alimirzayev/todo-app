// transform tags
// from "digital, umbrella, react"
// to ["digital", "umbrella", "react"]
export default function handleTags(tags) {
  return [
    ...new Set(
      tags
        .split(",")
        .filter((e) => e !== "")
        .map((e) => e.trim().toUpperCase())
    ),
  ];
}

import { useState } from "react";
import "./games.css";
import Game from "./sub/game";
import { gameList } from "../data.ts";

const superSearches = {
  "i was crazy once": (
    <>
      Oh you were crazy once too?!
      <br />
      {"Crazy? I was crazy once. they locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy! ".repeat(
        25,
      )}
    </>
  ),
  "crazy?": (
    <>
      {"Crazy? I was crazy once. they locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy! ".repeat(
        25,
      )}
    </>
  ),
  "never gonna give you up": (
    <><br />We're no strangers to love<br />You know the rules and so do I (do I)<br />A full commitment's what I'm thinking of<br />You wouldn't get this from any other guy<br /><br />I just wanna tell you how I'm feeling<br />Gotta make you understand<br /><br />Never gonna give you up<br />Never gonna let you down<br />Never gonna run around and desert you<br />Never gonna make you cry<br />Never gonna say goodbye<br />Never gonna tell a lie and hurt you<br /><br />We've known each other for so long<br />Your heart's been aching, but you're too shy to say it (say it)<br />Inside, we both know what's been going on (going on)<br />We know the game and we're gonna play it<br /><br />And if you ask me how I'm feeling<br />Don't tell me you're too blind to see<br /><br />Never gonna give you up<br />Never gonna let you down<br />Never gonna run around and desert you<br />Never gonna make you cry<br />Never gonna say goodbye<br />Never gonna tell a lie and hurt you<br /><br />Never gonna give you up<br />Never gonna let you down<br />Never gonna run around and desert you<br />Never gonna make you cry<br />Never gonna say goodbye<br />Never gonna tell a lie and hurt you<br /><br />(Ooh, give you up)<br />(Ooh, give you up)<br />(Ooh) Never gonna give, never gonna give (give you up)<br />(Ooh) Never gonna give, never gonna give (give you up)<br /><br />We've known each other for so long<br />Your heart's been aching, but you're too shy to say it (to say it)<br />Inside, we both know what's been going on (going on)<br />We know the game and we're gonna play it<br /><br />I just wanna tell you how I'm feeling<br />Gotta make you understand<br /><br />Never gonna give you up<br />Never gonna let you down<br />Never gonna run around and desert you<br />Never gonna make you cry<br />Never gonna say goodbye<br />Never gonna tell a lie and hurt you<br /><br />Never gonna give you up<br />Never gonna let you down<br />Never gonna run around and desert you<br />Never gonna make you cry<br />Never gonna say goodbye<br />Never gonna tell a lie and hurt you<br /><br />Never gonna give you up<br />Never gonna let you down<br />Never gonna run around and desert you<br />Never gonna make you cry<br />Never gonna say goodbye<br />Never gonna tell a lie and hurt you</>
  ),
  "chicken": (
    "Very spicy!"
  ),
};

export default function Games() {
  document.title = "Our Games - OpenVoxel Studios";
  const filters = ["Downloads", "No Downloads", "Recent", "Old", "ABC", "ZYX"] as const;

  const [filter, setFilter] = useState<typeof filters[number]>('Recent');
  const [search, setSearch] = useState("");

  return (
    <div className="games">
      <div className="subheader">
        <div className="notextselection search glass">
          <img className="notextselection icon" src="/icons/Search.svg" alt='Search' />
          <input
            className="yestextselection input"
            placeholder="Search a Map..."
            type="search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div
          className="notextselection coolclick sort glass notextselection"
          onClick={() =>
            setFilter(
              filters.indexOf(filter) + 1 > filters.length - 1
                ? filters[0]
                : filters[filters.indexOf(filter) + 1],
            )
          }
        >
          <img className="notextselection icon" src="/icons/Sort.svg" alt='Sort By' />
          <a className="yestextselection sortby">{filter}</a>
        </div>

        <div className="gamelist">
          <div className="notextselection sub">
            {
              gameList
                .filter((a) => search.length == 0 || a.downloads || a.date)
                .sort((a, b) => {
                  if (a.downloads === null || !a.date) return 1;
                  if (b.downloads === null || !b.date) return -1;

                  if (filter == "No Downloads") {
                    return (a.downloads as number) - (b.downloads as number);
                  } else if (filter == "Recent") {
                    return b.date.getTime() - a.date.getTime();
                  } else if (filter == "Old") {
                    return a.date.getTime() - b.date.getTime();
                  } else if (filter == "ABC") {
                    return a.name.localeCompare(b.name);
                  } else if (filter == "ZYX") {
                    return b.name.localeCompare(a.name);
                  }

                  return (b.downloads as number) - (a.downloads as number);
                })
                .filter(
                  (a) => a.name.toLowerCase().includes(search.toLowerCase()) ||
                    search
                      .split(" ")
                      .every((v) => a.tags.some((v2) => v2.includes(v)))
                )
                .map((v, index) => {
                  return (
                    <Game
                      date={v.date}
                      description={v.description}
                      downloads={v.downloads}
                      image={v.image}
                      name={v.name}
                      link={v.link}
                      key={index}
                    />
                  );
                })}

            {Object.keys(superSearches).includes(search.toLowerCase()) && (
              <p style={{ fontSize: "1.4vw" }}>
                {superSearches[search as keyof typeof superSearches]}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
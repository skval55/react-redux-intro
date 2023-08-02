import React from "react";
import { useSelector, useDispatch } from "react-redux";

const imgArr = [
  "https://i.kym-cdn.com/entries/icons/original/000/041/895/AALIYAH_WROTE_JAY_AN_APOLOGY_LETTER%F0%9F%93%83__MARK_WANT_DESIREE_AND_HANNAH!%F0%9F%98%B1_4-32_screenshot_(1).jpg",
  "https://www.thefarmersdog.com/digest/wp-content/uploads/2021/02/Butt-sniff-husky-1400x935.jpg",
  "https://wallpapers.com/images/hd/funny-cats-pictures-uu9qufqc5zq8l7el.jpg",
];

const topTextArr = ["When you fart ", "when you are running", "you sleeping"];
const bottomTextArr = [
  "then a baddie walks up",
  "then you feel the urge to splurge",
  "then something grabs your leg",
];

function MemeGenerator() {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const memeUrl = useSelector((store) => store.root.memeUrl);
  const topText = useSelector((store) => store.root.topText);
  const bottomText = useSelector((store) => store.root.bottomText);
  console.log(store);

  const newImg = () => dispatch({ type: "IMG_ONE" });
  const newTopText = () => dispatch({ type: "TOPTEXT_ONE" });
  const newBottomText = () => dispatch({ type: "BOTTOMTEXT_ONE" });

  return (
    <>
      <img src={imgArr[memeUrl]} alt="meme" />
      <p>topText:{topTextArr[topText]}</p>
      <p>bottomText:{bottomTextArr[bottomText]}</p>
      <button onClick={newImg}>New Image</button>
      <button onClick={newTopText}>New top text</button>
      <button onClick={newBottomText}>New bottom text</button>
    </>
  );
}
export default MemeGenerator;

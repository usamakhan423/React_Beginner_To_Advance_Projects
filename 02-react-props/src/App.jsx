import "./App.css";
import Card from "./components/Card";

const cardData = {
  title: "People who made it successful",
  para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis a vel error explicabo voluptatum nihil possimus veritatis eos culpa.",
  image: {
    image01:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=774&amp;q=80",
    image02:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=774&amp;q=80",
    image03:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=774&amp;q=80",
  },
  btnText: "Join Our Team",
};

function App() {
  return (
    <>
      <Card cardData={cardData} />
    </>
  );
}

export default App;

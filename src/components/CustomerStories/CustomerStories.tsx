import "./CustomerStories.scss";

const CustomerStories = () => {
  const customerStoriesList = [
    {
      id: 1,
      avatar: "/user1.png",
      name: "John D.",
      story:
        "LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLo remLoremLoremLoremLoremLoremLoremLoremLoremLoremLor emLoremLoremLoremLoremLoremLoremLorem",
    },
    {
      id: 2,
      avatar: "/user2.png",
      name: "Michael S.",
      story:
        "LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLo    remLoremLoremLoremLoremLoremLoremLoremLoremLoremLor emLoremLoremLoremLoremLoremLoremLorem",
    },
    // {
    //   id: 3,
    //   avatar: "/user3.png",
    //   name: "John D.",
    //   story:
    //     "This tool is a game-changer! It’s incredibly intuitive and the results are always impressive. I can't imagine working without it now.",
    // },
  ];

  return (
    <div className="customer-stories_wrapper">
      {customerStoriesList.map((story) => (
        <div className="customer-stories_card">
          <div className="card-header">
            <div className="card-image_wrapper">
              <img src={story.avatar} alt={story.name} />
            </div>
            <h5 className="card-title">{story.name}</h5>
          </div>
          <p className="card-text">{story.story}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerStories;
